import { describe, it, afterEach } from "vitest"
import App from "./App"
import { render, screen, cleanup } from "@testing-library/react"


describe('Calculator', () => {
  afterEach(() => cleanup())
  it("Should render the button with initial state", () => {
    render(<App />)

    screen.getByText("count is 0")
  })
})