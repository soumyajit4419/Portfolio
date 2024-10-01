import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import AlternativeContact from '../../components/Contact/AlternativeContact.js'
import socialIcons from '../../data/socialIcons.js'

describe('AlternativeContact Component', () => {
  test('renders the heading and description', () => {
    render(<AlternativeContact />)

    const headingElement = screen.getByTestId('alternative-contact-heading')
    expect(headingElement).toHaveTextContent('OR')

    const descriptionElement = screen.getByTestId(
      'alternative-contact-description'
    )
    expect(descriptionElement).toHaveTextContent('connect with me via:')
  })

  test('renders the correct number of social icons', () => {
    render(<AlternativeContact />)

    const socialIconElements = screen.getAllByTestId(/^social-icon-/)
    expect(socialIconElements).toHaveLength(socialIcons.length)
  })

  test('renders social icons with correct links and attributes', () => {
    render(<AlternativeContact />)

    /* Check that each icon link has the correct href, target, and rel attributes */
    socialIcons.forEach((socialIcon, index) => {
      const iconLink = screen.getByTestId(`social-link-${index}`)
      expect(iconLink).toHaveAttribute('href', socialIcon.link)
      expect(iconLink).toHaveAttribute('target', '_blank')
      expect(iconLink).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })
})
