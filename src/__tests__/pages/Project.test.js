/* eslint-disable jest/no-conditional-expect */
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import projectData from '../../data/projectData.js'
import Projects from '../../pages/Projects.js'

/* Mock HTMLCanvasElement for Particle.js */
HTMLCanvasElement.prototype.getContext = () => {}

describe('Projects Page', () => {
  beforeAll(() => {
    // Suppress console.warn messages related to tsparticles
    jest.spyOn(global.console, 'warn').mockImplementation((message) => {
      if (message.includes('An error occurred in tsParticles')) return
      console.warn(message)
    })
  })

  test('renders the Projects page components', () => {
    render(<Projects />)

    // Check that the project section container is rendered
    const projectSection = screen.getByTestId('project-section')
    expect(projectSection).toBeInTheDocument()

    // Check that the heading and subtitle are rendered correctly
    const projectHeading = screen.getByTestId('project-heading')
    expect(projectHeading).toBeInTheDocument()

    const projectSubtitle = screen.getByTestId('project-subtitle')
    expect(projectSubtitle).toBeInTheDocument()
  })

  test('renders the correct number of project cards', () => {
    render(<Projects />)

    // Check that the correct number of project cards are rendered
    const projectCards = screen.getAllByTestId('project-card')
    expect(projectCards.length).toBe(projectData.length)
  })

  test('renders the content of each project card', () => {
    render(<Projects />)

    projectData.forEach((project, index) => {
      // Check project title
      const projectTitle = screen.getByTestId(`project-title-${index}`)
      expect(projectTitle).toBeInTheDocument()
      expect(projectTitle).toHaveTextContent(project.props.title)

      // Check project description
      const projectDescription = screen.getByTestId(
        `project-description-${index}`
      )
      expect(projectDescription).toBeInTheDocument()

      // Check GitHub link
      if (project.props.ghLink) {
        const githubLink = screen.getByTestId(`github-link-${index}`)
        expect(githubLink).toBeInTheDocument()
        expect(githubLink).toHaveAttribute('href', project.props.ghLink)
      }

      // Check Demo link
      if (project.props.demoLink) {
        const demoLink = screen.getByTestId(`demo-link-${index}`)
        expect(demoLink).toBeInTheDocument()
        expect(demoLink).toHaveAttribute('href', project.props.demoLink)
      }
    })
  })
})
