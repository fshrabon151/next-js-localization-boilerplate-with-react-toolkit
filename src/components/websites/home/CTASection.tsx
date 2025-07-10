import CTAImageLg from "@/assets/home/CTAImageLg.png";
import CTAImageMobile from "@/assets/home/CTAImageMobile.png";
import { Typography } from "@/components/common/atoms/Typography";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const CTASection = () => {
  return (
    <div className="md:pt-7">
      <div className="bg-[linear-gradient(269.83deg,_#6598FE_1.23%,_#0054FD_99.87%)] rounded-3xl space-y-8 relative pt-16">
        <div className="grid md:grid-cols-3 items-center gap-0">
          <div className="md:col-span-2 space-y-8 pb-14">
            <div className="space-y-6 px-6 md:px-12">
              <div className="space-y-2">
                <Typography
                  className="text-[32px] sm:text-[40px] md:text-[48px] font-bold tracking-tighter"
                  color={"white"}
                >
                  Ready to take the next step?
                </Typography>

                <Typography
                  className="text-[18px] sm:text-[20px] md:text-[24px] max-w-xl"
                  color={"white"}
                >
                  Complete your application in just a few steps and unlock loan
                  options tailored to you.
                </Typography>
              </div>
              <Button size="xl" variant="outline">
                Apply for Finance
              </Button>
            </div>

            {/* Lazy loaded image - XL screens only */}
            <Image
              src={CTAImageLg.src}
              alt="Hero Mobile in hand"
              width={1000}
              height={1000}
              loading="lazy"
              className="
    hidden md:block md:absolute md:bottom-0 
    md:ltr:right-4 md:rtl:left-4 md:z-0 object-cover
    transition-all duration-500 ease-in-out
    opacity-0 md:opacity-100
    scale-95 md:scale-100
    max-w-[35%] min-[1057px]:max-w-sm xl:max-w-md
  "
            />
          </div>

          <div className="justify-end flex">
            {/* Lazy loaded image - mobile/tablet screens */}
            <Image
              src={CTAImageMobile.src}
              alt="Hero Mobile in hand"
              width={1000}
              height={1000}
              loading="lazy"
              className="block sm:hidden lg:hidden max-w-xs w-full object-cover mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
