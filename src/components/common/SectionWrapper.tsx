import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { InfoPill } from "./atoms/InfoPill";
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
          <InfoPill variant="brandEgyptianBlue"> {heading}</InfoPill>
        </div>
        <div className="space-y-3 md:space-y-5">
          <Typography
            align="center"
            as="h1"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold"
          >
            {title}
          </Typography>
          <Typography
            align="center"
            className={cn(
              "font-normal text-[15px] md:text-2xl",
              subTitleClassName
            )}
          >
            {subTitle}
          </Typography>
        </div>
      </div>
      {children}
    </div>
  );
};
