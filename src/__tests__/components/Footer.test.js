import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Footer from '../../components/Footer.js'
import socialIcons from '../../data/socialIcons.js'

describe('Footer Component', () => {
  test('renders footer content', () => {
    render(<Footer />)

    // Check for developer credit
    const creditElement = screen.getByTestId('footer-credit')
    expect(creditElement).toHaveTextContent(
      'Designed and Developed by Soumyajit Behera'
    )

    // Check for copyright with current year
    const currentYear = new Date().getFullYear()
    const copyrightElement = screen.getByTestId('footer-copyright')
    expect(copyrightElement).toHaveTextContent(`Copyright © ${currentYear} SB`)
  })

  test('renders the correct number of social icons', () => {
    render(<Footer />)

    const socialIconElements = screen.getAllByTestId(/^footer-social-icon-/)
    expect(socialIconElements).toHaveLength(socialIcons.length)
  })

  test('renders social icons with correct links', () => {
    render(<Footer />)

    const socialIconLinks = socialIcons.map((icon) => icon.link)
    socialIconLinks.forEach((link, index) => {
      const iconLink = screen.getByTestId(`footer-social-link-${index}`)
      expect(iconLink).toHaveAttribute('href', link)
      expect(iconLink).toHaveAttribute('target', '_blank')
      expect(iconLink).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })
})
