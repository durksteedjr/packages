import { Flex } from "@durksteedjr/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { Fragment } from "react";

import { BoxStyled } from "../components";

const meta: Meta<typeof Flex> = {
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  },
  component: Flex
};

export default meta;

type Story = StoryObj<typeof Flex>;

export const Default: Story = {
  args: {
    children: (
      <Fragment>
        <BoxStyled />
        <BoxStyled />
      </Fragment>
    )
  }
};

export const Styled: Story = {
  args: {
    children: (
      <Fragment>
        <BoxStyled />
        <BoxStyled />
      </Fragment>
    ),
    className: "space-x-4 md:space-x-6"
  }
};
