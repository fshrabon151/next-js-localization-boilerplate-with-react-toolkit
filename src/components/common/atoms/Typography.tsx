import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const typographyVariants = cva(
  `transition-all duration-500 ease-in-out 
    opacity-90 md:opacity-100 
    scale-[0.98] md:scale-100`,
  {
    variants: {
      variant: {
        headingHero:
          "uppercase text-[38px] sm:text-[58px] md:text-[64px] xl:text-[82px] font-bold tracking-tight leading-[1.2]",
        paragraphHero:
          "text-[16px] sm:text-xl md:text-2xl lg:text-[28px] max-w-md",

        //
        h1: "text-4xl lg:text-5xl font-extrabold tracking-tight",
        h2: "text-3xl lg:text-4xl font-semibold tracking-tight",
        h3: "text-2xl lg:text-3xl font-semibold tracking-tight",
        h4: "text-xl font-semibold tracking-tight",
        h5: "text-lg font-semibold tracking-tight",
        h6: "text-base font-medium tracking-tight",
        subTitle: "text-base font-medium text-muted-foreground",
        subheading: "text-sm font-medium text-muted-foreground",
        paragraph: "text-base leading-relaxed",
        small: "text-sm text-muted-foreground",
        muted: "text-sm italic text-muted-foreground",
        overline: "text-xs uppercase tracking-widest text-muted-foreground",
      },
      as: {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        p: "p",
        span: "span",
        div: "div",
      },
      color: {
        primary: "text-primary",
        secondary: "text-secondary",
        muted: "text-muted-foreground",
        destructive: "text-destructive",
        accent: "text-accent-foreground",
        default: "text-brandRichBlack",
        white: "text-white",
        blueGrayLight: "text-[#BED3FF]",
        brandEgyptianBlue: "text-brandEgyptianBlue",
        brandRichBlack80: "text-brandRichBlack-80",
      },
      align: {
        left: "ltr:text-left rtl:text-right",
        center: "text-center",
        right: "ltr:text-right rtl:text-left",
        justify: "text-justify",
      },
    },
    defaultVariants: {
      variant: "paragraph",
      as: "p",
      color: "default",
      align: "left",
    },
  }
);

export interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "color">,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    { className, variant, as, color, align, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : as || "p";
    return (
      <Comp
        className={cn(
          typographyVariants({ variant, as, color, align }),
          className
        )}
        ref={ref as any}
        {...props}
      />
    );
  }
);

Typography.displayName = "Typography";

export { Typography, typographyVariants };
