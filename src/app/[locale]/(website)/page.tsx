import AcceptOffersFromMultipleLenders from "@/assets/home/AcceptOffersFromMultipleLenders.png";
import bankApproval from "@/assets/home/bankApproval.png";
import habibiKUluKulu from "@/assets/home/habibiKUluKulu.png";
import heroMobileInHand from "@/assets/home/hero-mobile-in-hand.png";
import iPhone16Pro from "@/assets/home/iPhone-16-Pro.png";
import { Typography } from "@/components/common/atoms/Typography";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import InfoCard, { infoCardProps } from "@/components/InfoCard";
import InfoImageCard from "@/components/InfoImageCard";
import { Button } from "@/components/ui/button";
import AppleStoreIcon from "@/svgs/AppleStoreIcon";
import AutoLeaseFinance from "@/svgs/AutoLeaseFinance";
import CreditCardIcon from "@/svgs/CreditCardIcon";
import PersonalFInance from "@/svgs/PersonalFInance";
import PlayStoreIcon from "@/svgs/PlayStoreIcon";
import RealEstateFinance from "@/svgs/RealEstateFinance";
import Image from "next/image";

const infoCards: infoCardProps[] = [
  {
    icon: <PersonalFInance />,
    title: "Personal Financing",
    description:
      "Simple, flexible loans to help you cover personal needs confidently.",
  },
  {
    icon: <AutoLeaseFinance />,
    title: "Auto Lease Financing",
    description: "Lease your dream car with ease and tailored monthly plans.",
  },
  {
    icon: <CreditCardIcon />,
    title: "Credit Card",
    description:
      "Turn your credit card purchases into easy monthly payments — no hassle, no surprises.",
    comingSoon: true,
  },
  {
    icon: <RealEstateFinance />,
    title: "Real Estate Financing",
    description:
      "Finance your future home with trusted, straightforward lending support.",
    comingSoon: true,
  },
];

const page = () => {
  return (
    <div className="space-y-8">
      <div className="container">
        <div className="space-y-8 pt-16 relative overflow-hidden">
          <Typography
            as="h1"
            className="uppercase text-[46px] sm:text-[58px] md:text-[64px] xl:text-[82px] font-bold tracking-tight leading-[1.2]"
          >
            Find the <br /> right financing <br /> fast and easy.
          </Typography>

          <div className="bg-[linear-gradient(269.83deg,_#6598FE_1.23%,_#0054FD_99.87%)] rounded-3xl space-y-8 relative pt-8">
            <div className="grid md:grid-cols-2 items-center gap-8 ">
              <div className="space-y-8">
                <div className="space-y-8 px-8">
                  <Typography
                    color={"white"}
                    className="text-lg sm:text-xl md:text-2xl lg:text-[28px] max-w-md"
                  >
                    Access real-time financing offers tailored to your needs.
                    From the comfort of your home.
                  </Typography>
                  <Button size={"lg"} variant={"outline"}>
                    Apply for Finance
                  </Button>
                </div>

                <div className="flex items-center gap-4 px-8 xl:pb-8">
                  <Typography color={"blueGrayLight"} className="capitalize">
                    Get the <br />
                    Mobile App
                  </Typography>
                  <AppleStoreIcon />
                  <PlayStoreIcon />
                </div>
                <Image
                  src={heroMobileInHand.src}
                  alt="Hero Mobile in hand"
                  width={1000}
                  height={1000}
                  className="hidden xl:block xl:absolute xl:bottom-0 xl:right-0 xl:z-0 w-full object-cover max-w-xl xl:max-w-md xl:rounded-3xl"
                />
              </div>
              <div className="flex justify-end">
                <Image
                  src={heroMobileInHand.src}
                  alt="Hero Mobile in hand"
                  width={1000}
                  height={1000}
                  className=" block sm:hidden md:block xl:hidden max-w-xs rounded-3xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoCards.map((item, index) => (
            <InfoCard {...item} key={index} />
          ))}
        </div>
      </div>
      <div className="container pt-20">
        <SectionWrapper
          heading="How It Works"
          title="Your Loan Journey, Simplified"
          subtitle="See how quick and simple it is to apply for financing, compare offers, and get approved — all in one place."
          className="max-w-2xl"
        >
          <div className="pb-52 space-y-5">
            <div className="grid md:grid-cols-5 gap-5">
              <InfoImageCard
                title="Submit Request"
                description="Complete a short form in just a few steps."
                imageSrc={iPhone16Pro.src}
                imageClassName="max-w-xs"
                className="md:col-span-2"
              />

              <InfoImageCard
                title="Receive & Accept Offers From Multiple Lenders"
                description="Get real loan offers from top banks and choose the one that works best for you."
                imageSrc={AcceptOffersFromMultipleLenders.src}
                className="md:col-span-3"
                imageClassName="max-w-lg"
              />
            </div>
            <div className="grid md:grid-cols-7 gap-5">
              <InfoImageCard
                title="Wait for banks Approval"
                description="Once you accept an offer, the bank reviews your application and shares the decision."
                imageSrc={bankApproval.src}
                className="md:col-span-4"
                imageClassName="max-w-xl"
              />
              <InfoImageCard
                title="Sign Agreement with Bank"
                description="Complete your loan by signing the agreement at your chosen branch."
                imageSrc={habibiKUluKulu.src}
                imageClassName="max-w-lg mb-9"
                className="md:col-span-3"
              />
            </div>
          </div>
        </SectionWrapper>
      </div>
    </div>
  );
};

export default page;
