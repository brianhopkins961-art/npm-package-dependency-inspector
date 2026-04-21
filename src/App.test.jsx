import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import App from "./App";

describe("App", () => {

  it("renders input and button", () => {
    render(<App />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("updates input when user types", () => {
    render(<App />);

    const input = screen.getByRole("textbox");

    fireEvent.change(input, {
      target: { value: "react" }
    });

    expect(input.value).toBe("react");
  });

  it("calls fetch when button is clicked with input", () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({})
      })
    );

    render(<App />);

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "react" }
    });

    fireEvent.click(screen.getByRole("button"));

    expect(global.fetch).toHaveBeenCalled();
  });

  it("does not call fetch when input is empty", () => {
    global.fetch = vi.fn();

    render(<App />);

    fireEvent.click(screen.getByRole("button"));

    expect(global.fetch).not.toHaveBeenCalled();
  });

});