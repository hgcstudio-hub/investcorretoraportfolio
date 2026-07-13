import { describe, expect, it } from "vitest";
import { additionalServices, primarySolutions, trustItems } from "./siteContent";

describe("site content", () => {
  it("keeps the four approved primary solutions unique and visual", () => {
    expect(primarySolutions).toHaveLength(4);
    expect(new Set(primarySolutions.map((solution) => solution.id)).size).toBe(4);
    expect(primarySolutions.every((solution) => solution.image.includes("/assets/solution-"))).toBe(true);
  });

  it("provides interactive coverage content for every primary solution", () => {
    expect(primarySolutions.every((solution) => solution.features.length >= 6)).toBe(true);

    for (const solution of primarySolutions) {
      expect(new Set(solution.features.map((feature) => feature.id)).size).toBe(solution.features.length);
      expect(solution.features.every((feature) => feature.title && feature.description && feature.icon)).toBe(true);
    }
  });

  it("preserves the compact secondary solutions and replaces synthetic metrics", () => {
    expect(additionalServices).toHaveLength(4);
    expect(trustItems).toHaveLength(4);
    expect(trustItems.map((item) => item.title)).not.toContain("1:1");
    expect(trustItems.map((item) => item.title)).not.toContain("PF + PJ");
    expect(trustItems.map((item) => item.title)).not.toContain("multi");
  });
});
