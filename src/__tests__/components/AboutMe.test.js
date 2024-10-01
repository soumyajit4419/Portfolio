import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import AboutMe from '../../components/About/AboutMe.js'
import sideActivities from '../../data/sideActivities.js'

describe('AboutMe Component', () => {
  test('renders the title and main description', () => {
    render(<AboutMe />)

    const titleElement = screen.getByTestId('about-title')
    expect(titleElement).toBeInTheDocument()

    const bodyElement = screen.getByTestId('about-body')
    expect(bodyElement).toBeInTheDocument()
  })

  test('renders the activities list with correct number of items', () => {
    render(<AboutMe />)

    // Check the activities list is rendered
    const activitiesList = screen.getByTestId('about-activities')
    expect(activitiesList).toBeInTheDocument()

    // Check that each activity is rendered
    sideActivities.forEach((activity, index) => {
      const activityItem = screen.getByTestId(`activity-${index}`)
      expect(activityItem).toHaveTextContent(activity)
    })
  })

  test('renders the motivational quote', () => {
    render(<AboutMe />)

    // Check the quote text exists
    const quoteElement = screen.getByTestId('about-quote')
    expect(quoteElement).toBeInTheDocument()
    expect(quoteElement).toHaveTextContent(
      'Strive to build things that make a difference!'
    )

    // Check the footer for the quote
    const footerElement = screen.getByTestId('about-footer')
    expect(footerElement).toHaveTextContent('Soumyajit')
  })

  test('renders the about me image', () => {
    render(<AboutMe />)

    const imageElement = screen.getByTestId('about-image')
    expect(imageElement).toBeInTheDocument()
    expect(imageElement).toHaveAttribute('src', 'about.png')
  })
})
