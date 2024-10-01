import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Greeting from '../../components/Home/Greeting.js'

describe('Greeting Component', () => {
  test('renders the greeting text "Hi There!" with wave emoji', () => {
    render(<Greeting />)

    const greetingElement = screen.getByTestId('greeting-text')
    expect(greetingElement).toBeInTheDocument()
    expect(greetingElement).toHaveTextContent('Hi There!')

    const waveEmoji = screen.getByTestId('wave-emoji')
    expect(waveEmoji).toBeInTheDocument()
    expect(waveEmoji).toHaveTextContent('👋🏻')
  })

  test('renders the name "SOUMYAJIT BEHERA"', () => {
    render(<Greeting />)

    const nameElement = screen.getByTestId('greeting-name')
    expect(nameElement).toBeInTheDocument()
    expect(nameElement).toHaveTextContent('SOUMYAJIT BEHERA')
  })

  test('renders the typewriter effect', () => {
    render(<Greeting />)

    const typewriterWrapper = screen.getByTestId('typewriter-wrapper')
    expect(typewriterWrapper).toBeInTheDocument()
  })

  test('renders the home logo with correct attributes', () => {
    render(<Greeting />)

    const logoElement = screen.getByTestId('greeting-logo')
    expect(logoElement).toBeInTheDocument()
    expect(logoElement).toHaveAttribute(
      'src',
      expect.stringContaining('home-main.svg')
    )
    expect(logoElement).toHaveAttribute('alt', 'home pic')
    expect(logoElement).toHaveClass('img-fluid')
    expect(logoElement).toHaveStyle('max-height: 450px')
  })
})
