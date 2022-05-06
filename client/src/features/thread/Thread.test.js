import { render, screen } from "../../test-utils";
import Thread from "./Thread";

test.only("Display thread by id", async () => {
  render(<Thread />, { route: "/thread/10" });

  expect(await screen.findByText(/Sample Title/i)).toBeInTheDocument();
});
