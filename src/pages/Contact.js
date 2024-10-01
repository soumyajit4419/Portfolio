import { Container } from 'react-bootstrap'
import AlternativeContact from '../components/Contact/AlternativeContact.js'
import ContactForm from '../components/Contact/ContactForm.js'
import Particle from '../components/Particle.js'
import '../styles/Contact.css'

function Contact() {
  return (
    <Container fluid className="contact-section" data-testid="contact-section">
      <Container>
        <ContactForm />
        <AlternativeContact />
      </Container>

      <Particle />
    </Container>
  )
}

export default Contact
