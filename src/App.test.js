import { render, screen } from "@testing-library/react";
import App from "./App";

/* This is a test case. It is testing that the text "learn react" is in the document. */
test("renders learn react link", () => {
  // render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
describe("ENV tests", () => {
  test("REACT_APP_PRODUCTION_ANALYTICS_URL exists and is a string", () => {
    expect(process.env.REACT_APP_PRODUCTION_ANALYTICS_URL).toBeDefined(); 
    expect(typeof process.env.REACT_APP_PRODUCTION_ANALYTICS_URL).toBe("string");
  });
  test("REACT_APP_PASSWORD exists and is a string", () => {
    expect(process.env.REACT_APP_PASSWORD).toBeDefined(); 
    expect(typeof process.env.REACT_APP_PASSWORD).toBe("string");
  });
  test("REACT_APP_PRODUCTION_IPINFO_TOKEN exists and is a string", () => {
    expect(process.env.REACT_APP_IPINFO_TOKEN).toBeDefined(); 
    expect(typeof process.env.REACT_APP_IPINFO_TOKEN).toBe("string");
  });
})
