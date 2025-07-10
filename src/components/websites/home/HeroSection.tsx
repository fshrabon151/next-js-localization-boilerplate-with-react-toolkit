"use client";

import HandAndiPhone16ProMobile from "@/assets/home/HandAndiPhone16ProMobile.png";
import heroMobileInHand from "@/assets/home/hero-mobile-in-hand.png";
import { Typography } from "@/components/common/atoms/Typography";
import InfoCard from "@/components/InfoCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { infoCards } from "./constants/infoCards";

export default function HeroSection() {
  return (
    <div className="space-y-8">
      <div className="space-y-8 pt-16 relative overflow-hidden">
        <Typography variant="headingHero">
          Find the <br /> right financing <br /> fast and easy.
        </Typography>

        <div className="bg-[linear-gradient(269.83deg,_#6598FE_1.23%,_#0054FD_99.87%)] rounded-3xl space-y-8 relative pt-8">
          <div className="grid md:grid-cols-2 items-center gap-8">
            <div className="space-y-8">
              <div className="space-y-4 md:space-y-8 px-8">
                <Typography variant="paragraphHero" color="white">
                  Access real-time financing offers tailored to your needs. From
                  the comfort of your home.
                </Typography>
                <Button size="lg" variant="outline">
                  Apply for Finance
                </Button>
              </div>

              <div className="flex items-center gap-2 md:gap-4 px-8 xl:pb-8">
                <Typography color="blueGrayLight" className="capitalize">
                  Get the <br />
                  Mobile App
                </Typography>
                <Image
                  src={"/images/heroAppleIcon.svg"}
                  height={58}
                  width={58}
                  alt="heroAppleIcon"
                  className="size-[42px] md:size-14"
                />
                <Image
                  src={"/images/heroPlayIcon.svg"}
                  height={58}
                  width={58}
                  alt="heroAppleIcon"
                  className="size-[42px] md:size-14"
                />
              </div>

              {/* Lazy loaded image - XL screens only */}
              <Image
                src={heroMobileInHand.src}
                alt="Hero Mobile in hand"
                width={1000}
                height={1000}
                loading="lazy"
                className="hidden xl:block xl:absolute xl:bottom-0 xl:rtl:left-0 xl:ltr:right-0 xl:z-0 w-full object-cover max-w-xl xl:max-w-md xl:rounded-3xl"
              />
            </div>

            <div className="flex justify-end">
              {/* Lazy loaded image - mobile/tablet screens */}
              <Image
                src={HandAndiPhone16ProMobile.src}
                alt="Hero Mobile in hand"
                width={1000}
                height={1000}
                loading="lazy"
                className="block sm:hidden md:block xl:hidden max-w-sm rounded-3xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        {infoCards.map((item, index) => (
          <InfoCard {...item} key={index} />
        ))}
      </div>
    </div>
  );
}
