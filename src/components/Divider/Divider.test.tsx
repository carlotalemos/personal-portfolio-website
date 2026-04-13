import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Divider from "@/components/Divider/Divider";

describe("Divider", () => {
  it("renders without crashing", () => {
    const { container } = render(<Divider />);
    expect(container.firstChild).not.toBeNull();
  });

  it("renders the horizontal rule element", () => {
    const { container } = render(<Divider />);
    const line = container.querySelector(".bg-white\\/50");
    expect(line).toBeInTheDocument();
  });
});
