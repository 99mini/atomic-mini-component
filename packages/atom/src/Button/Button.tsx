import React, { useRef } from "react";
import classNames from "classnames";
import "./Button.css";

import { Ripple } from "@99mini/core";

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > & {
    href?: string;
  };

export const Button = ({ href, ...props }: ButtonProps) => {
  if (href) {
    const anchoreRef = useRef<HTMLAnchorElement>(null);
    return (
      <a
        href={href}
        {...props}
        className={classNames("YnI-Button YnI-Button-anchor", props.className)}
        ref={anchoreRef}
      >
        <Ripple parentRef={anchoreRef} />
        <span>{props.children ?? "Anchor Button"}</span>
      </a>
    );
  }

  const buttonRef = useRef<HTMLButtonElement>(null);
  return (
    <button
      {...props}
      className={classNames("YnI-Button", props.className)}
      ref={buttonRef}
    >
      <Ripple parentRef={buttonRef} />
      <span>{props.children ?? "Button"}</span>
    </button>
  );
};

export default Button;
