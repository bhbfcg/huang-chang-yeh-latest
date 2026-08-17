import { describe, expect, it } from "vitest";
import { detailData } from "./ProjectDetail";
import { portfolioProjects } from "./Works";

describe("teahouse editorial case study", () => {
  it("keeps the existing visual archive aligned with captions and categories", () => {
    const project = portfolioProjects.find((item) => item.slug === "teahouse-graduation-project");
    const detail = detailData["teahouse-graduation-project"];

    expect(project?.title).toBe("茶藝館");
    expect(project?.image).toBe("/assets/picture1-teahouse-01.webp");
    expect(detail.gallery).toHaveLength(13);
    expect(detail.captions).toHaveLength(14);
    expect(detail.categories).toHaveLength(14);
  });

  it("keeps the case-study navigation order connected to the works index", () => {
    const index = portfolioProjects.findIndex((item) => item.slug === "teahouse-graduation-project");
    const previous = portfolioProjects[(index - 1 + portfolioProjects.length) % portfolioProjects.length];
    const next = portfolioProjects[(index + 1) % portfolioProjects.length];

    expect(previous.slug).toBe("yushan-community-3d");
    expect(next.slug).toBe("qipao-retail-interior");
  });
});
