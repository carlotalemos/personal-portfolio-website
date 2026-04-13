import { describe, it, expect } from "vitest";
import {
  personalInfo,
  skills,
  languages,
  timeline,
  projects,
} from "@/lib/data";

describe("personalInfo", () => {
  it("has required fields", () => {
    expect(personalInfo.name).toBeTruthy();
    expect(personalInfo.title).toBeTruthy();
    expect(personalInfo.bio).toBeTruthy();
    expect(personalInfo.email).toBeTruthy();
  });

  it("email has valid format", () => {
    expect(personalInfo.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });

  it("linkedin url starts with https", () => {
    expect(personalInfo.linkedin).toMatch(/^https:\/\//);
  });

  it("github url starts with https", () => {
    expect(personalInfo.github).toMatch(/^https:\/\//);
  });
});

describe("skills", () => {
  it("is a non-empty array", () => {
    expect(skills.length).toBeGreaterThan(0);
  });

  it("each skill has name and category", () => {
    for (const skill of skills) {
      expect(skill.name).toBeTruthy();
      expect(["technical", "tools"]).toContain(skill.category);
    }
  });
});

describe("languages", () => {
  it("is a non-empty array", () => {
    expect(languages.length).toBeGreaterThan(0);
  });

  it("each language has name and level", () => {
    for (const lang of languages) {
      expect(lang.name).toBeTruthy();
      expect(lang.level).toBeTruthy();
    }
  });
});

describe("timeline", () => {
  it("is a non-empty array", () => {
    expect(timeline.length).toBeGreaterThan(0);
  });

  it("each item has required fields", () => {
    for (const item of timeline) {
      expect(item.title).toBeTruthy();
      expect(item.organization).toBeTruthy();
      expect(item.date).toBeTruthy();
      expect(item.description).toBeTruthy();
    }
  });
});

describe("projects", () => {
  it("is a non-empty array", () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it("each project has required fields", () => {
    for (const project of projects) {
      expect(project.slug).toBeTruthy();
      expect(project.title).toBeTruthy();
      expect(project.technology).toBeTruthy();
      expect(project.image).toBeTruthy();
    }
  });

  it("all slugs are unique", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("image paths start with /", () => {
    for (const project of projects) {
      expect(project.image).toMatch(/^\//);
    }
  });
});
