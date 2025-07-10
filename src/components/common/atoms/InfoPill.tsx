// components/ui/pill.tsx
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const infoPillVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-transparent shadow-sm h-4 md:h-7 rounded-sm md:rounded-md px-1 md:px-2 text-[9px] md:text-[14px] cursor-context-menu",
  {
    variants: {
      variant: {
        brandBlue:
          "text-brandBlue border-brandBlue hover:text-brandBlue hover:bg-transparent",
        brandEgyptianBlue:
          "text-brandEgyptianBlue border-brandEgyptianBlue hover:text-brandEgyptianBlue hover:bg-transparent",
      },
      as: {
        span: "pointer-events-none", // disabled-like behavior
        div: "", // normal
      },
    },
    defaultVariants: {
      variant: "brandBlue",
      as: "div",
    },
  }
);

export interface PillProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof infoPillVariants> {
  as?: "div" | "span";
  children: React.ReactNode;
}

export function InfoPill({
  as: Comp = "div",
  className,
  variant,
  children,
  ...props
}: PillProps) {
  return (
    <Comp
      className={cn(infoPillVariants({ variant, as: Comp, className }))}
      aria-disabled="true"
      {...props}
    >
      {children}
    </Comp>
  );
}
