import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import PageHeroSection from "@/components/PageHeroSection/PageHeroSection";

describe("PageHeroSection", () => {
  it("renders the title prop", () => {
    render(<PageHeroSection title="about" />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "about"
    );
  });

  it("renders different titles correctly", () => {
    const { rerender } = render(<PageHeroSection title="projects" />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "projects"
    );

    rerender(<PageHeroSection title="contact" />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "contact"
    );
  });
});
