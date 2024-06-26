import React, { useEffect, useRef } from "react";
import classNames from "classnames";

export type ClickOutsideListenerProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  ClickOutsideListenerPropsType;

type ClickOutsideListenerPropsType = {
  onClickOutside: () => void;
  children: React.ReactNode;
};

export const ClickOutsideListener = ({
  onClickOutside,
  children,
  ...props
}: ClickOutsideListenerProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutsideElement = ref.current;

    if (!clickOutsideElement) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (!clickOutsideElement.contains(event.target as Node)) {
        onClickOutside();
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 300);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClickOutside]);

  return (
    <div
      {...props}
      className={classNames("YnI-ClickOutsideListener", props.className)}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default ClickOutsideListener;
