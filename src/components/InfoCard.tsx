import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";
import { Typography } from "./common/atoms/Typography";

export interface InfoCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  comingSoon?: boolean;
  minimal?: boolean;
}

const InfoCard: FC<InfoCardProps> = ({
  icon,
  title,
  description,
  comingSoon = false,
  minimal = false,
}) => {
  const isDynamic = !minimal;

  const cardClasses = cn(
    "border rounded-3xl flex flex-col gap-2",
    isDynamic &&
      (comingSoon
        ? "border-brandRichBlack-40 shadow-brandRichBlack-20"
        : "border-brandBlue-60 shadow-brandBlue-20"),
    isDynamic
      ? "pb-6 shadow-lg hover:shadow-lg"
      : "py-8 border-brandEgyptianBlue-20 border-2 min-h-[343px]"
  );

  const contentPadding = cn(isDynamic ? "space-y-2 px-7" : "space-y-6 px-8");

  const titleColor = isDynamic
    ? comingSoon
      ? "brandRichBlack80"
      : "brandEgyptianBlue"
    : "default";

  const descriptionColor = isDynamic ? "default" : "brandRichBlack80";

  return (
    <div className={cardClasses} role="region" aria-label={title}>
      {isDynamic &&
        (comingSoon ? (
          <div className="flex justify-end pt-4 px-4">
            <span
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-transparent border-brandBlue text-brandBlue shadow-sm hover:bg-transparent hover:text-brandBlue h-7 rounded-md px-2 text-xs cursor-context-menu"
              aria-disabled="true"
            >
              Coming Soon
            </span>
          </div>
        ) : (
          <div className="pt-[38px]" />
        ))}

      <div className={contentPadding}>
        {icon && <div className="h-[65px]">{icon}</div>}
        <div className="space-y-2">
          <Typography
            as="h4"
            color={titleColor}
            className="text-[22px] font-bold"
          >
            {title}
          </Typography>
          <Typography className="text-lg" color={descriptionColor}>
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
