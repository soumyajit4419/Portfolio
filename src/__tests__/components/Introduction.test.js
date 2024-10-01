import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Introduction from '../../components/Home/Introduction.js'
import socialIcons from '../../data/socialIcons.js'

describe('Introduction Component', () => {
  test('renders the introduction text and title', () => {
    render(<Introduction />)

    const titleElement = screen.getByTestId('intro-title')
    expect(titleElement).toBeInTheDocument()

    const bodyElement = screen.getByTestId('intro-body')
    expect(bodyElement).toBeInTheDocument()
  })

  test('renders the avatar correctly', () => {
    render(<Introduction />)

    const avatarElement = screen.getByTestId('intro-avatar')
    expect(avatarElement).toBeInTheDocument()
    expect(avatarElement).toHaveAttribute('src', 'avatar.svg')
    expect(avatarElement).toHaveAttribute('alt', 'avatar')
  })

  test('renders the social links section with correct links', () => {
    render(<Introduction />)

    // Check for social links
    const socialLinksContainer = screen.getByTestId('social-links')
    expect(socialLinksContainer).toBeInTheDocument()

    // Ensure each social link has the correct href
    socialIcons.forEach((socialIcon, index) => {
      const socialLink = screen.getByTestId(`social-link-${index}`)
      expect(socialLink).toHaveAttribute('href', socialIcon.link)
      expect(socialLink).toHaveAttribute('target', '_blank')
      expect(socialLink).toHaveAttribute('rel', 'noreferrer')
    })
  })
})
