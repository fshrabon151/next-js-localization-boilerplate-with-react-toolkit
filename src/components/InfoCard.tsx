import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC } from "react";
import { InfoPill } from "./common/atoms/InfoPill";
import { Typography } from "./common/atoms/Typography";

export interface InfoCardProps {
  icon?: string;
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
  const t = useTranslations("common");

  const cardClasses = cn(
    "border-2 md:border rounded-xl md:rounded-3xl flex flex-col gap-2",
    isDynamic &&
      (comingSoon
        ? "border-brandRichBlack-40 shadow-brandRichBlack-20"
        : "border-brandBlue-60 shadow-brandBlue-20"),
    isDynamic
      ? "pb-3 md:pb-6 shadow-lg hover:shadow-lg"
      : "pb-3 md:py-8 border-brandEgyptianBlue-20 border-2 md:min-h-[343px]"
  );

  const contentPadding = cn(
    isDynamic
      ? "space-y-2 md:space-y-3 md:px-7 px-3"
      : "space-y-2 md:space-y-6 px-3 md:px-8"
  );

  const titleColor = isDynamic
    ? comingSoon
      ? "brandRichBlack80"
      : "brandEgyptianBlue"
    : "default";

  const descriptionColor = isDynamic ? "default" : "brandRichBlack80";

  return (
    <div className={cardClasses} role="region" aria-label={title}>
      <div className="hidden md:block">
        {isDynamic &&
          (comingSoon ? (
            <div className="flex justify-end pt-3 md:pt-4 px-4">
              <InfoPill variant={"brandBlue"}>{t("comingSoon")}</InfoPill>
            </div>
          ) : (
            <div className="pt-3 md:pt-[38px]" />
          ))}
      </div>

      <div className={contentPadding}>
        {icon && (
          <Image
            src={icon}
            alt={title}
            className="size-[38px] md:size-[54px] hidden md:block"
            width={54}
            height={54}
          />
        )}
        <div className={cn("pt-2", "block md:hidden")}>
          <div className="flex justify-between items-start">
            {icon && (
              <Image
                src={icon}
                alt={title}
                className="size-[38px] md:size-[54px] block md:hidden"
                width={54}
                height={54}
              />
            )}
            {isDynamic && comingSoon && (
              <InfoPill variant={"brandBlue"}>Coming Soon</InfoPill>
            )}
          </div>
        </div>
        <div className="space-y-0.5 md:space-y-2">
          <Typography
            as="h4"
            color={titleColor}
            className="text-sm md:text-[22px] font-bold leading-6"
          >
            {title}
          </Typography>
          <Typography
            className="text-[12px] md:text-lg"
            color={descriptionColor}
          >
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
