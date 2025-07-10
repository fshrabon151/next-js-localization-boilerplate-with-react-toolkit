import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Typography } from "./common/atoms/Typography";

interface InfoImageCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  className?: string;
  imageClassName?: string;
  children?: React.ReactNode;
}

const InfoImageCard: React.FC<InfoImageCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt = "Info card image",
  className,
  imageClassName,
  children,
}) => {
  return (
    <div
      className={cn(
        "bg-[#F0F5FF] p-7 pb-0 rounded-3xl flex flex-col justify-between space-y-4 md:space-y-8",
        className
      )}
      style={{
        boxShadow: `
          0px 4.68px 9.37px 0px #DCE7FF,
          0px 0px 3.12px 0px #0054FD70,
          -2.34px -2.34px 4.68px 0px #D7E3FC inset,
          2.34px 2.34px 4.68px 0px #FFFFFF inset
        `,
      }}
    >
      <div className="space-y-2">
        <Typography as="h2" className="text-lg md:text-[28px] font-medium">
          {title}
        </Typography>
        <Typography className="text-[15px] md:text-[20px] font-normal">
          {description}
        </Typography>
      </div>

      <div className="flex justify-center">
        <Image
          src={imageSrc}
          alt={imageAlt}
          height={1000}
          width={1000}
          className={cn("w-full mx-auto", imageClassName)}
        />
      </div>

      {children}
    </div>
  );
};

export default InfoImageCard;
