import '@testing-library/jest-dom/extend-expect'
import { act, render, screen } from '@testing-library/react'
import About from '../../pages/About.js'

/* Mock HTMLCanvasElement for Particle.js */
HTMLCanvasElement.prototype.getContext = () => {}

/* Mock fetch for GithubContributions */
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({})
  })
)

describe('About Page', () => {
  beforeAll(() => {
    // Suppress console.warn messages related to tsparticles
    jest.spyOn(global.console, 'warn').mockImplementation((message) => {
      if (message.includes('An error occurred in tsParticles')) return
      console.warn(message)
    })
  })

  test('render of the components within the About page', async () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      render(<About />)
    })

    const aboutSection = screen.getByTestId('about-section')
    expect(aboutSection).toBeInTheDocument()

    const aboutMe = screen.getByTestId('aboutme-component')
    expect(aboutMe).toBeInTheDocument()

    const techStack = screen.getByTestId('techstack-component')
    expect(techStack).toBeInTheDocument()

    const toolStack = screen.getByTestId('toolstack-component')
    expect(toolStack).toBeInTheDocument()

    const githubContributions = screen.getByTestId(
      'githubcontributions-component'
    )
    expect(githubContributions).toBeInTheDocument()
  })
})
