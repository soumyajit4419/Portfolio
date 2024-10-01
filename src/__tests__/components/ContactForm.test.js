import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import emailjs from 'emailjs-com'
import ContactForm from '../../components/Contact/ContactForm'

/* Mock the emailjs-com library */
jest.mock('emailjs-com', () => ({
  send: jest.fn()
}))

describe('ContactForm Component', () => {
  /* Reset modules between tests to reset mock values */
  afterEach(() => {
    jest.resetModules()
  })

  test('renders all form fields and the submit button', () => {
    render(<ContactForm />)

    // Check form title
    expect(screen.getByTestId('contact-form-heading')).toHaveTextContent(
      'Contact Form'
    )

    // Check for all form inputs
    expect(screen.getByTestId('form-name-input')).toBeInTheDocument()
    expect(screen.getByTestId('form-email-input')).toBeInTheDocument()
    expect(screen.getByTestId('form-subject-input')).toBeInTheDocument()
    expect(screen.getByTestId('form-message-input')).toBeInTheDocument()

    // Check for the submit button
    expect(screen.getByTestId('form-submit-button')).toBeInTheDocument()
  })

  test('updates form inputs on change', () => {
    render(<ContactForm />)

    // Simulate input change for name
    const nameInput = screen.getByTestId('form-name-input')
    fireEvent.change(nameInput, { target: { value: 'John Doe' } })
    expect(nameInput.value).toBe('John Doe')

    // Simulate input change for email
    const emailInput = screen.getByTestId('form-email-input')
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } })
    expect(emailInput.value).toBe('john@example.com')

    // Simulate input change for subject
    const subjectInput = screen.getByTestId('form-subject-input')
    fireEvent.change(subjectInput, { target: { value: 'Hello' } })
    expect(subjectInput.value).toBe('Hello')

    // Simulate input change for message
    const messageInput = screen.getByTestId('form-message-input')
    fireEvent.change(messageInput, {
      target: { value: 'This is a test message' }
    })
    expect(messageInput.value).toBe('This is a test message')
  })

  test('does not submit form if email service is not configured', async () => {
    // Part 1: Mocking
    jest.mock('../../data/emailJSData', () => ({
      serviceId: '',
      templateId: '',
      userId: ''
    }))

    // Part 2: Fill and submit the form
    render(<ContactForm />)
    fireEvent.change(screen.getByTestId('form-name-input'), {
      target: { value: 'John Doe' }
    })
    fireEvent.change(screen.getByTestId('form-email-input'), {
      target: { value: 'john@example.com' }
    })
    fireEvent.change(screen.getByTestId('form-subject-input'), {
      target: { value: 'Test' }
    })
    fireEvent.change(screen.getByTestId('form-message-input'), {
      target: { value: 'Hello!' }
    })
    fireEvent.click(screen.getByTestId('form-submit-button'))

    // Part 3: Check the toast message
    await waitFor(() =>
      expect(screen.getByTestId('toast-notification')).toBeVisible()
    )
    expect(screen.getByTestId('toast-message')).toHaveTextContent(
      'Failed to send message. Please configure the email service first.'
    )

    // Part 4: Ensure that emailjs.send is never called
    expect(emailjs.send).not.toHaveBeenCalled()
  })
})
