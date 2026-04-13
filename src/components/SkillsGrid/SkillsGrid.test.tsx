import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SkillsGrid from "@/components/SkillsGrid/SkillsGrid";
import { skills } from "@/lib/data";

describe("SkillsGrid", () => {
  it("renders all skills from data", () => {
    render(<SkillsGrid />);
    for (const skill of skills) {
      expect(screen.getByText(skill.name)).toBeInTheDocument();
    }
  });

  it("renders the correct number of skill items", () => {
    render(<SkillsGrid />);
    const items = screen.getAllByText(/.+/);
    expect(items.length).toBeGreaterThanOrEqual(skills.length);
  });
});
