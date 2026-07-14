import { describe, expect, it } from "vitest";
import { contact } from "../config/contact";
import { additionalServices, healthOperators, primarySolutions, quickChoices, trustItems } from "./siteContent";

describe("site content", () => {
  it("puts health first and keeps the five primary solutions unique and visual", () => {
    expect(primarySolutions).toHaveLength(5);
    expect(primarySolutions[0].id).toBe("health");
    expect(new Set(primarySolutions.map((solution) => solution.id)).size).toBe(5);
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
    expect(additionalServices).toHaveLength(3);
    expect(trustItems).toHaveLength(4);
    expect(trustItems.map((item) => item.title)).not.toContain("1:1");
    expect(trustItems.map((item) => item.title)).not.toContain("PF + PJ");
    expect(trustItems.map((item) => item.title)).not.toContain("multi");
  });

  it("connects every hero choice to a primary solution and lists the supplied operators", () => {
    expect(new Set(quickChoices.map((choice) => choice.id))).toEqual(
      new Set(primarySolutions.map((solution) => solution.id)),
    );
    expect(healthOperators).toHaveLength(8);
    expect(new Set(healthOperators.map((operator) => operator.name)).size).toBe(8);
  });

  it("uses the WhatsApp number confirmed in the latest client material", () => {
    expect(contact.whatsapp.label).toBe("(98) 99100-7515");
    expect(contact.whatsapp.href).toContain("5598991007515");
  });
});
