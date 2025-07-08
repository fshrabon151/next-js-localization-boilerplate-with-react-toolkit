import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Typography } from "./common/atoms/Typography";

export interface infoCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  comingSoon?: boolean;
}

const InfoCard = ({
  icon,
  title,
  description,
  comingSoon = false,
}: infoCardProps) => {
  return (
    <div
      className={cn(
        "border pb-6 rounded-3xl flex flex-col gap-2 shadow-lg hover:shadow-lg",
        comingSoon
          ? "border-brandRichBlack-40 shadow-brandRichBlack-20"
          : "border-brandBlue-60 shadow-brandBlue-20"
      )}
    >
      {comingSoon ? (
        <div className="flex justify-end pt-4 px-4">
          <Button
            className="cursor-context-menu"
            variant="solidOutline"
            size="sm"
          >
            Coming Soon
          </Button>
        </div>
      ) : (
        <div className="pt-[38px]" />
      )}
      <div className="px-7 space-y-2">
        {icon && <div>{icon}</div>}
        <Typography
          as="h4"
          color={comingSoon ? "brandRichBlack80" : "brandEgyptianBlue"}
          className="text-[22px] font-bold"
        >
          {title}
        </Typography>
        <Typography className="text-lg">{description}</Typography>
      </div>
    </div>
  );
};

export default InfoCard;
