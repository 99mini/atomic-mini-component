import type { Meta } from "@storybook/react";

import React, { CSSProperties } from "react";

import Grid, { GridItem, GridProps } from "./Grid";
import styles from "./Grid.scss";
import classNames from "classnames";

export default {
  component: Grid,
  title: "molecular/Grid",
  tags: ["autodocs"],
} satisfies Meta<typeof Grid>;

const cx = classNames.bind(styles);

/**
 *
 * @description generate random width(range: 200px ~ 600px), height(range:300px ~ 500px)
 */
const Box = () => {
  const style: CSSProperties = {
    height: Math.floor(Math.random() * 200) + 300,
    backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,

    borderRadius: "10px",
    border: `1px solid #000000`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  };

  return (
    <div style={style}>
      {Object.entries(style).map(([key, value], i) => (
        <div key={i}>{`${key}: ${value}`}</div>
      ))}
    </div>
  );
};

const Template = (args: GridProps) => (
  <div>
    <h1>Mansory Grid</h1>
    <Grid {...args}>
      {Array.from({ length: 10 }, (_, i) => (
        <GridItem key={i}>
          <Box />
        </GridItem>
      ))}
    </Grid>
  </div>
);

/**
 * Grid component is a layout component that arranges child components in a grid layout.
 */
export const Default = Template.bind({});

Default.args = {
  regular: true,
};

/**
 * Grid component is a layout component that arranges child components in a grid layout.
 */
export const Regular = Template.bind({});

Regular.args = {
  regular: true,
};

/**
 * Grid component is a layout component that arranges child components in a irregular grid layout.
 */
export const Irregular = Template.bind({});

Irregular.args = {
  regular: false,
};
