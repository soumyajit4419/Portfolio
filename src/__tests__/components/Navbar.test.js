import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Navbar from '../../components/Navbar.js'

/**
 * Renders the Navbar component
 *
 * @returns {RenderResult} The rendered Navbar component
 */
function renderNavbar() {
  return render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  )
}

describe('Navbar Component', () => {
  test('renders the NavBar with logo', () => {
    renderNavbar()

    const logoElement = screen.getByTestId('navbar-brand')
    expect(logoElement).toBeInTheDocument()
  })

  test('toggles the navbar when the toggle button is clicked', async () => {
    renderNavbar()

    const toggleButton = screen.getByTestId('navbar-toggle')
    const navbarCollapse = screen.getByTestId('navbar-collapse')

    // Initially, the navbar should be collapsed
    expect(navbarCollapse).toHaveClass('collapse')

    // Click the toggle button to expand the navbar
    fireEvent.click(toggleButton)

    // Wait for the collapse class to be removed and show class to be added
    await waitFor(() => expect(navbarCollapse).not.toHaveClass('collapse'))
    await waitFor(() => expect(navbarCollapse).toHaveClass('show'))

    // Click the toggle button again to collapse the navbar
    fireEvent.click(toggleButton)

    // Wait for the collapse class to be added again
    await waitFor(() => expect(navbarCollapse).toHaveClass('collapse'))
  })

  test('renders all navbar items', () => {
    renderNavbar()

    expect(screen.getByTestId('navbar-link-Home')).toBeInTheDocument()
    expect(screen.getByTestId('navbar-link-About')).toBeInTheDocument()
    expect(screen.getByTestId('navbar-link-Projects')).toBeInTheDocument()
    expect(screen.getByTestId('navbar-link-Resume')).toBeInTheDocument()
    expect(screen.getByTestId('navbar-link-Blogs')).toBeInTheDocument()
  })

  test('scrolling changes navbar color', () => {
    renderNavbar()

    // Simulate scrolling
    fireEvent.scroll(window, { target: { scrollY: 30 } })

    const navbar = screen.getByTestId('navbar')
    expect(navbar).toHaveClass('sticky')
  })

  test('fork button directs to correct GitHub URL', () => {
    renderNavbar()

    const forkLink = screen.getByTestId('fork-link')
    expect(forkLink).toHaveAttribute(
      'href',
      'https://saad-bhatti.github.io/soumyajit4419Portfolio/'
    )
  })
})
