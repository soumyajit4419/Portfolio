import '@testing-library/jest-dom/extend-expect'
import { act, render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import App from '../App.js'

/* Mocking BrowserRouter inside the App component */
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  BrowserRouter: ({ children }) => <>{children}</>
}))

/* Mocking other components */
jest.mock('../components/Preloader.js', () => ({ load }) => (
  <div data-testid="preloader">{load ? 'Loading...' : 'Loaded'}</div>
))
jest.mock('../components/Navbar.js', () => () => (
  <nav data-testid="navbar">Navbar</nav>
))
jest.mock('../components/Footer.js', () => () => (
  <footer data-testid="footer">Footer</footer>
))
jest.mock('../components/ScrollToTop.js', () => () => (
  <div data-testid="scrolltotop">ScrollToTop</div>
))
jest.mock('../pages/Home.js', () => () => <div data-testid="home">Home</div>)

/**
 * Renders the App component
 *
 * @param {string} route - The route to render
 * @returns {RenderResult} The rendered App component
 */
function renderApp(route = '/') {
  return render(
    <MemoryRouter initialEntries={[`/soumyajit4419Portfolio${route}`]}>
      <App />
    </MemoryRouter>
  )
}

/**
 * Renders the App component and fast-forwards until all timers have been executed
 *
 * @param {string} route - The route to render
 * @returns {void}
 */
function fastForwardRender(route = '/') {
  /* Render the App component */
  renderApp(route)

  /* Fast-forward until all timers have been executed */
  act(() => {
    jest.runAllTimers()
  })
}

describe('App Component', () => {
  beforeAll(() => {
    /* Suppress console.warn messages related to tsparticles */
    jest.spyOn(global.console, 'warn').mockImplementation((message) => {
      if (message.includes('An error occurred in tsParticles')) return
      console.warn(message)
    })
  })

  beforeEach(() => {
    /* Use fake timers to speed up the test */
    jest.useFakeTimers()
  })

  afterEach(() => {
    /* Restore real timers */
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  })

  test('displays the preloader initially and removes it after timeout', () => {
    renderApp()

    /* Preloader should be visible initially */
    const preloader = screen.getByTestId('preloader')
    expect(preloader).toBeInTheDocument()
    expect(preloader).toHaveTextContent('Loading...')

    /* Fast-forward until all timers have been executed */
    act(() => {
      jest.runAllTimers()
    })

    /* Preloader should have been removed after timeout */
    expect(screen.getByTestId('preloader')).toHaveTextContent('Loaded')
  })

  test('renders the Navbar, Footer, and other components after preloader disappears', () => {
    fastForwardRender()

    /* Assert that Navbar, Footer, and ScrollToTop are in the document */
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
    expect(screen.getByTestId('scrolltotop')).toBeInTheDocument()
  })

  test('renders the pages specified by their route', () => {
    fastForwardRender()

    /* Assert that the Home page is rendered */
    expect(screen.getByTestId('home')).toBeInTheDocument()
  })
})
