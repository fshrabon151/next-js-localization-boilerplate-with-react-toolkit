import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Typography } from "./atoms/Typography";

interface SectionWrapperProps {
  title: string;
  subtitle: string;
  heading: string;
  className?: string;
  children: ReactNode;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  title,
  subtitle,
  heading,
  className,
  children,
}) => {
  return (
    <div className="space-y-9">
      <div className={cn(`space-y-10 text-center mx-auto`, className)}>
        <div className="flex justify-center">
          <Button
            className="cursor-context-menu text-brandEgyptianBlue hover:text-brandEgyptianBlue border-brandEgyptianBlue"
            variant="solidOutline"
            size="sm"
          >
            {heading}
          </Button>
        </div>
        <div className="space-y-6">
          <Typography align="center" variant="h1">
            {title}
          </Typography>
          <Typography
            align="center"
            className="font-normal text-xl md:text-2xl"
          >
            {subtitle}
          </Typography>
        </div>
      </div>
      {children}
    </div>
  );
};
