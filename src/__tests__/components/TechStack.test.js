import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import TechStack from '../../components/About/TechStack.js'
import techStackData from '../../data/techStackData.js'

describe('TechStack Component', () => {
  test('renders the title', () => {
    render(<TechStack />)

    const titleElement = screen.getByTestId('techstack-title')
    expect(titleElement).toBeInTheDocument()
    expect(titleElement).toHaveTextContent('Professional Skillset')
  })

  test('renders all tech stack items', () => {
    render(<TechStack />)

    // Check all tech stack items are rendered
    techStackData.forEach((tech, index) => {
      const techItem = screen.getByTestId(`techstack-item-${index}`)
      expect(techItem).toBeInTheDocument()

      const techText = screen.getByTestId(`techstack-text-${index}`)
      expect(techText).toHaveTextContent(tech.text)
    })
  })

  test('techstack-text becomes visible on hover', async () => {
    render(<TechStack />)

    for (const [index, ] of techStackData.entries()) {
      // Simulate mouse over
      const techItem = screen.getByTestId(`techstack-item-${index}`)
      fireEvent.mouseOver(techItem)
      
      // Check techstack-text is visible
      await waitFor(() => {
        const techText = screen.getByTestId(`techstack-text-${index}`)
        expect(techText).toHaveStyle('display: block')
      })
    }
  })
})
