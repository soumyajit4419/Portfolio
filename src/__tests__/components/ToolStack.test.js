import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import ToolStack from '../../components/About/ToolStack.js'
import toolStackData from '../../data/toolStackData.js'

describe('ToolStack Component', () => {
  test('renders the title', () => {
    render(<ToolStack />)

    const titleElement = screen.getByTestId('toolstack-title')
    expect(titleElement).toBeInTheDocument()
    expect(titleElement).toHaveTextContent('Tools I use')
  })

  test('renders all tool stack items', () => {
    render(<ToolStack />)

    // Check all tool stack items are rendered
    toolStackData.forEach((tool, index) => {
      const toolItem = screen.getByTestId(`toolstack-item-${index}`)
      expect(toolItem).toBeInTheDocument()

      const toolText = screen.getByTestId(`toolstack-text-${index}`)
      expect(toolText).toHaveTextContent(tool.text)
    })
  })

  test('toolstack-text becomes visible on hover', async () => {
    render(<ToolStack />)

    for (const [index] of toolStackData.entries()) {
      // Simulate mouse over
      const toolItem = screen.getByTestId(`toolstack-item-${index}`)
      fireEvent.mouseOver(toolItem)

      // Check toolstack-text is visible
      await waitFor(() => {
        const toolText = screen.getByTestId(`toolstack-text-${index}`)
        expect(toolText).toHaveStyle('display: block')
      })
    }
  })
})
