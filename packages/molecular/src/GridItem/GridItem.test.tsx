import { act, render, waitFor } from "@testing-library/react";

import React from "react";
import Grid from "../Grid";
import GridItem from "./GridItem";

describe("GridItem", () => {
  it("should throw error without Grid parent", () => {
    try {
      render(<GridItem></GridItem>);
    } catch (error: any) {
      expect(error.message).toBe("GridItem must be used within a Grid");
    }
  });

  it("should render regular grid item", () => {
    const result = render(
      <Grid>
        <GridItem></GridItem>
      </Grid>,
    );
    expect(result).toBeTruthy();
  });
});

describe("Irregular grid", () => {
  it("should render irregular grid", async () => {
    const result = render(
      <Grid irregular>
        <GridItem></GridItem>
      </Grid>,
    );
    expect(result).toBeTruthy();
  });
});

describe("Irregular grid with notGuaranteeOrder", () => {
  it("should render irregular grid with notGuaranteeOrder", async () => {
    const result = render(
      <Grid irregular notGuaranteeOrder>
        <GridItem></GridItem>
      </Grid>,
    );
    expect(result).toBeTruthy();
  });
});
