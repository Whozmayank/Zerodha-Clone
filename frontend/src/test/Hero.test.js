import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom"; // <-- router context
import Hero from "../landing_page/home/Hero";

describe("Hero Component", () => {
  test("render hero image", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    // Example assertion: adjust to match your Hero UI
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
