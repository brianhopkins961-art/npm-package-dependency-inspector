import { render, screen} from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import App from "./App";

beforeEach(() => {
  vi.restoreAllMocks();
});

describe("App", () => {

  it("renders input and button", () => {
    render(<App />);

    expect(screen.getByRole("textbox")).toBeDefined();
    expect(screen.getByRole("button")).toBeDefined();
  });

  

});