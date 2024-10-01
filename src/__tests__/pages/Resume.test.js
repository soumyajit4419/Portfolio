import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import pdf from '../../assets/Resume.pdf';
import Resume from '../../pages/Resume.js';

/* Mock HTMLCanvasElement for Particle.js */
HTMLCanvasElement.prototype.getContext = () => {};

/* Mock the react-pdf library */
jest.mock('react-pdf', () => {
  const MockDocument = ({ children }) => (
    <div data-testid="pdf-document">{children}</div>
  );
  const MockPage = () => <div data-testid="pdf-page-1">Page 1</div>;
  return {
    Document: MockDocument,
    Page: MockPage,
    pdfjs: { GlobalWorkerOptions: {} },
  };
});

describe('Resume Page', () => {
  beforeAll(() => {
    // Suppress console.warn messages related to tsparticles
    jest.spyOn(global.console, 'warn').mockImplementation((message) => {
      if (message.includes('An error occurred in tsParticles')) return;
      console.warn(message);
    });
  });

  test('renders the Resume page buttons', () => {
    render(<Resume />);

    // Check that the download button is rendered
    const downloadButtons = screen.getAllByTestId('download-button');
    expect(downloadButtons.length).toBe(2);

    // Ensure the download button links to the correct PDF
    downloadButtons.forEach((button) => {
      expect(button).toHaveAttribute('href', pdf);
      expect(button).toHaveAttribute('target', '_blank');
    });
  });

  test('renders the PDF document on the page', async () => {
    render(<Resume />);

    // Use getAllByTestId since there are multiple elements with the same test ID
    const pdfDocuments = screen.getAllByTestId('pdf-document');
    expect(pdfDocuments.length).toBeGreaterThan(0);

    // Check if the first page of the PDF is rendered
    const pdfPage = screen.getByTestId('pdf-page-1');
    expect(pdfPage).toBeInTheDocument();
  });
});
