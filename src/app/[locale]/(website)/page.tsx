import AcceptOffersFromMultipleLenders from "@/assets/home/AcceptOffersFromMultipleLenders.png";
import bankApproval from "@/assets/home/bankApproval.png";
import aiyusur from "@/assets/home/banks/aiyusur.png";
import alimna from "@/assets/home/banks/alimna.png";
import alrajhiBank from "@/assets/home/banks/alrajhiBank.png";
import arabNationalBank from "@/assets/home/banks/arabNationalBank.png";
import bankAlBibad from "@/assets/home/banks/bankAlBibad.png";
import bsf from "@/assets/home/banks/bsf.png";
import emkun from "@/assets/home/banks/emkun.png";
import riyadBank from "@/assets/home/banks/riyadBank.png";
import saudiNationalBank from "@/assets/home/banks/saudiNationalBank.png";
import sulfa from "@/assets/home/banks/sulfa.png";
import tamam from "@/assets/home/banks/tamam.png";
import tasheelFinance from "@/assets/home/banks/tasheelFinance.png";
import CTAImageLg from "@/assets/home/CTAImageLg.png";
import CTAImageMobile from "@/assets/home/CTAImageMobile.png";
import habibiKUluKulu from "@/assets/home/habibiKUluKulu.png";
import HandAndiPhone16ProMobile from "@/assets/home/HandAndiPhone16ProMobile.png";
import heroMobileInHand from "@/assets/home/hero-mobile-in-hand.png";
import iPhone16Pro from "@/assets/home/iPhone-16-Pro.png";
import BankLogosGrid from "@/components/BankLogosGrid";
import { Typography } from "@/components/common/atoms/Typography";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import InfoCard, { InfoCardProps } from "@/components/InfoCard";
import InfoImageCard from "@/components/InfoImageCard";
import { ResponsiveAccordion } from "@/components/ResponsiveAccordion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const infoCards: InfoCardProps[] = [
  {
    icon: "/images/personalFinance.svg",
    title: "Personal Financing",
    description:
      "Simple, flexible loans to help you cover personal needs confidently.",
  },
  {
    icon: "/images/autoLeaseFinance.svg",
    title: "Auto Lease Financing",
    description: "Lease your dream car with ease and tailored monthly plans.",
  },
  {
    icon: "/images/creditCard.svg",
    title: "Credit Card",
    description:
      "Turn your credit card purchases into easy monthly payments — no hassle, no surprises.",
    comingSoon: true,
  },
  {
    icon: "/images/realEstateFinance.svg",
    title: "Real Estate Financing",
    description:
      "Finance your future home with trusted, straightforward lending support.",
    comingSoon: true,
  },
];
const infoCardsPlatform: InfoCardProps[] = [
  {
    icon: "/images/digitalApplicationProcess.svg",

    title: "Digital Application Process",
    description:
      "Apply online in just a few minutes — no paperwork, no hassle.",
  },
  {
    icon: "/images/multipleBankOffer.svg",

    title: "Multiple Bank Offers",
    description:
      "Compare real offers from trusted banks and choose what’s best for you. ",
  },
  {
    icon: "/images/easyRegistration.svg",

    title: "Easy Registration with SIMAH & Yaqeen",
    description:
      "We clearly show costs, fees, and terms. No hidden charges, ever.",
  },
  {
    icon: "/images/transparencySystem.svg",

    title: "Transparent System",
    description:
      "We clearly show costs, fees, and terms. No hidden charges, ever.",
  },
  {
    icon: "/images/fastUpdate.svg",

    title: "Fast Updates",
    description:
      "Track your application status at every step. Stay informed and in control.",
  },
  {
    icon: "/images/LocalExpertise.svg",
    title: "Local Expertise",
    description:
      "Built for the Saudi market — with support for Mada, SIMAH, and more.",
  },
];

const page = () => {
  return (
    <div className="container space-y-20 md:space-y-36">
      {/* Hero Section Start */}
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
                    Access real-time financing offers tailored to your needs.
                    From the comfort of your home.
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
      {/* Hero Section End */}

      {/* How it works start */}
      <SectionWrapper
        heading="How It Works"
        title="Your Loan Journey, Simplified"
        subTitle="See how quick and simple it is to apply for financing, compare offers, and get approved — all in one place."
        className="max-w-2xl"
      >
        <div className="space-y-5">
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
      {/* How it works End */}
      {/* Why choose us start */}
      <SectionWrapper
        heading="Why Choose Us?"
        title="One platform. Multiple offers. Total control."
        subTitle="We simplify the loan process so you can apply with confidence, compare real offers from trusted banks, and move forward knowing you're in control — every step of the way."
        className="max-w-5xl"
      >
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
          {infoCardsPlatform.map((item, index) => (
            <InfoCard {...item} key={index} minimal />
          ))}
        </div>
      </SectionWrapper>
      {/* Why choose us end */}
      {/* Our official partner start */}
      <SectionWrapper
        heading="Our Financial Partners"
        title="Backed by Saudi Arabia’s Trusted Finance Institutes"
        subTitle="We work with leading financial institutions across the Kingdom to bring you reliable loan options you can trust."
        subTitleClassName="max-w-4xl mx-auto"
      >
        <BankLogosGrid
          logos={[
            { name: "Al Rajhi Bank", src: alrajhiBank.src },
            { name: "Saudi National Bank", src: saudiNationalBank.src },
            { name: "Riyad Bank", src: riyadBank.src },
            { name: "Banque Saudi Fransi", src: bsf.src },
            { name: "Arab National Bank", src: arabNationalBank.src },
            { name: "Bank Albilad", src: bankAlBibad.src },
            { name: "Tasheel Finance", src: tasheelFinance.src },
            { name: "Aiyusur", src: aiyusur.src },
            { name: "Emkan", src: emkun.src },
            { name: "Tamam", src: tamam.src },
            { name: "Sulfa", src: sulfa.src },
            { name: "Alinma Bank", src: alimna.src },
          ]}
        />
      </SectionWrapper>
      {/* Our official partner end */}
      {/* FAQ start */}
      <SectionWrapper
        heading="FAQ"
        title="Frequently Asked Questions"
        subTitle="We work with leading financial institutions across the Kingdom to bring you reliable loan options you can trust."
        className="max-w-3xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
          <ResponsiveAccordion
            items={[
              {
                title: "How do I apply?",
                description:
                  "Once your information is verified, eligible offers will be displayed on your dashboard—usually within a few minutes of completing the process.",
              },
              {
                title: "When will I get a response?",
                description:
                  "Once your information is verified, eligible offers will be displayed on your dashboard—usually within a few minutes of completing the process.",
              },
              {
                title: "How do I track my application status?",
                description:
                  "Once your information is verified, eligible offers will be displayed on your dashboard—usually within a few minutes of completing the process.",
              },
              {
                title: "What does it mean if an offer says “More info needed?",
                description:
                  "Once your information is verified, eligible offers will be displayed on your dashboard—usually within a few minutes of completing the process.",
              },
              {
                title: "How do I sign the contract?",
                description:
                  "Once your information is verified, eligible offers will be displayed on your dashboard—usually within a few minutes of completing the process.",
              },
              {
                title: "I’m facing issues with the app.",
                description:
                  "Once your information is verified, eligible offers will be displayed on your dashboard—usually within a few minutes of completing the process.",
              },
            ]}
          />
        </div>
      </SectionWrapper>
      {/* FAQ end */}

      {/* CTA Start */}
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
                    Complete your application in just a few steps and unlock
                    loan options tailored to you.
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
                className="hidden md:block md:absolute md:bottom-0 md:right-4 md:z-0  object-cover
    transition-all duration-500 ease-in-out
    opacity-0 md:opacity-100
    scale-95 md:scale-100
max-w-[35%] min-[1057px]:max-w-sm xl:max-w-md  "
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
      {/* CTA end */}
    </div>
  );
};

export default page;
