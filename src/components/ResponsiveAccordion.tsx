"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Typography } from "./common/atoms/Typography";

type AccordionItem = {
  title: string;
  description: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export const ResponsiveAccordion: React.FC<AccordionProps> = ({ items }) => {
  const [openId, setOpenId] = useState<string | number | null>(null);

  const toggle = (index: string | number) => {
    setOpenId((prev) => (prev === index ? null : index));
  };

  return (
    <React.Fragment>
      {items.map(({ title, description }, index) => (
        <div
          key={`${title} ${index}`}
          className="border rounded-2xl  md:rounded-3xl border-brandBlue-20 bg-brandBlue-light
                     duration-300
                     md:border-brandBlue-20 md:px-8 md:py-6"
        >
          {/* Title clickable area */}
          <button
            onClick={() => toggle(index)}
            className={cn(
              "w-full text-left flex justify-between items-center md:items-center px-4 md:px-0 md:py-0 focus:outline-none md:cursor-default",
              openId === index ? "pt-3" : "py-3"
            )}
            aria-expanded={openId === index}
            aria-controls={`desc-${index}`}
          >
            <Typography className="font-medium text-[16px] md:text-[20px]">
              {title}
            </Typography>

            {/* Arrow icon only on small devices */}
            <span
              className={`ml-2 transition-transform duration-300 transform
                          ${openId === index ? "rotate-180" : "rotate-0"}
                          md:hidden`}
            >
              <svg
                width={14}
                height={9}
                viewBox="0 0 14 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1.77246L7 7.77246L13 1.77246"
                  stroke="#69707D"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>

          {/* Description */}
          <div
            key={`desc-${index}`}
            className={cn(
              "px-4 md:pt-2 pb-4 text-gray-700 text-base overflow-hidden transition-all duration-300 ease-in-out",
              openId === index ? "max-h-96" : "max-h-0",

              "md:px-0 md:pt-2 md:pb-0 md:max-h-full md:block",
              openId === index ? "" : "hidden md:block"
            )}
          >
            <Typography className="text-[#14282E9E] text-sm md:text-base">
              {description}
            </Typography>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};
