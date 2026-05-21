// RGB-split glitch headline. Wraps children in stacked layers.
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

export default function GlitchHeadline({
  children,
  className = "",
  as = "span"
}: Props) {
  const Tag = as as any;
  return (
    <Tag className={`glitch-headline ${className}`} data-text="">
      <span className="glitch-layer glitch-base">{children}</span>
      <span aria-hidden className="glitch-layer glitch-r">
        {children}
      </span>
      <span aria-hidden className="glitch-layer glitch-c">
        {children}
      </span>
    </Tag>
  );
}
