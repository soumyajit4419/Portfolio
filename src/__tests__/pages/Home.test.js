import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Home from '../../pages/Home.js'

/* Mock HTMLCanvasElement for Particle.js */
HTMLCanvasElement.prototype.getContext = () => {}

describe('Home Page', () => {
  beforeAll(() => {
    // Suppress console.warn messages related to tsparticles
    jest.spyOn(global.console, 'warn').mockImplementation((message) => {
      if (message.includes('An error occurred in tsParticles')) return
      console.warn(message)
    })
  })

  test('renders the Home page components', async () => {
    render(<Home />)

    const homeSection = screen.getByTestId('home-section')
    expect(homeSection).toBeInTheDocument()

    const greetingComponent = screen.getByTestId('greeting-component')
    expect(greetingComponent).toBeInTheDocument()

    const introductionComponent = screen.getByTestId('introduction-component')
    expect(introductionComponent).toBeInTheDocument()
  })
})
