import { render, screen } from "../test-utils";
import App from "./App";

test("renders title", async () => {
  render(<App />);
  const linkElement = screen.getAllByText(/掲示板/i);
  expect(linkElement[0]).toBeInTheDocument();
  expect(linkElement[1]).toBeInTheDocument();
  expect(await screen.findByText(/Sample thread1/i)).toBeInTheDocument();
});
