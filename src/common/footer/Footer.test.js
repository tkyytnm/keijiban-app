import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("Render Footer", () => {
  render(<Footer />);
  const footerElement = screen.getByText(/The 掲示板 App/i);
  expect(footerElement).toBeInTheDocument();
});
