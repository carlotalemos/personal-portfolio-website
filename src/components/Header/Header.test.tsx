import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "@/components/Header/Header";

describe("Header", () => {
  it("renders the ABOUT navigation link", () => {
    render(<Header />);
    expect(screen.getByText("ABOUT")).toBeInTheDocument();
  });

  it("renders the PROJECTS navigation link", () => {
    render(<Header />);
    expect(screen.getByText("PROJECTS")).toBeInTheDocument();
  });

  it("ABOUT link points to /about", () => {
    render(<Header />);
    const aboutLink = screen.getByText("ABOUT").closest("a");
    expect(aboutLink).toHaveAttribute("href", "/about");
  });

  it("PROJECTS link points to /projects", () => {
    render(<Header />);
    const projectsLink = screen.getByText("PROJECTS").closest("a");
    expect(projectsLink).toHaveAttribute("href", "/projects");
  });

  it("home logo link points to /", () => {
    render(<Header />);
    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toHaveAttribute("href", "/");
  });
});
