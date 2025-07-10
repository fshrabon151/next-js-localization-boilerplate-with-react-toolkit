import AcceptOffersFromMultipleLenders from "@/assets/home/AcceptOffersFromMultipleLenders.png";
import bankApproval from "@/assets/home/bankApproval.png";
import habibiKUluKulu from "@/assets/home/habibiKUluKulu.png";
import iPhone16Pro from "@/assets/home/iPhone-16-Pro.png";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import InfoImageCard from "@/components/InfoImageCard";
const HowItWorksSection = () => {
  return (
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
  );
};

export default HowItWorksSection;
