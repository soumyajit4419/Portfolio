import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Contact from '../../pages/Contact.js'

/* Mock HTMLCanvasElement for Particle.js */
HTMLCanvasElement.prototype.getContext = () => {}

describe('Contact Page', () => {
  beforeAll(() => {
    // Suppress console.warn messages related to tsparticles
    jest.spyOn(global.console, 'warn').mockImplementation((message) => {
      if (message.includes('An error occurred in tsParticles')) return
      console.warn(message)
    })
  })

  test('renders the Contact page components', async () => {
    render(<Contact />)

    const contactSection = screen.getByTestId('contact-section')
    expect(contactSection).toBeInTheDocument()

    const contactForm = screen.getByTestId('contact-form-container')
    expect(contactForm).toBeInTheDocument()

    const alternativeContact = screen.getByTestId('alternative-contact')
    expect(alternativeContact).toBeInTheDocument()
  })
})
