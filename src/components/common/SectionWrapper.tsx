import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Typography } from "./atoms/Typography";

interface SectionWrapperProps {
  title: string;
  subTitle: string;
  heading: string;
  className?: string;
  children: ReactNode;
  subTitleClassName?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  title,
  subTitle,
  heading,
  className,
  children,
  subTitleClassName,
}) => {
  return (
    <div className="space-y-12">
      <div className={cn(`space-y-10 text-center mx-auto`, className)}>
        <div className="flex justify-center">
          <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-transparent shadow-sm hover:bg-transparent h-7 rounded-md px-2 text-xs cursor-context-menu text-brandEgyptianBlue hover:text-brandEgyptianBlue border-brandEgyptianBlue">
            {heading}
          </div>
        </div>
        <div className="space-y-5">
          <Typography
            align="center"
            as="h1"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold"
          >
            {title}
          </Typography>
          <Typography
            align="center"
            className={cn("font-normal text-xl md:text-2xl", subTitleClassName)}
          >
            {subTitle}
          </Typography>
        </div>
      </div>
      {children}
    </div>
  );
};
