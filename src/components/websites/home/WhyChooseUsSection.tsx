import { SectionWrapper } from "@/components/common/SectionWrapper";
import InfoCard from "@/components/InfoCard";
import { infoCardsPlatform } from "./constants/infoCards";

const WhyChooseUsSection = () => {
  return (
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
  );
};

export default WhyChooseUsSection;
