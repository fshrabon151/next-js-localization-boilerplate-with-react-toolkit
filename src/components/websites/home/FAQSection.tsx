import { SectionWrapper } from "@/components/common/SectionWrapper";
import { ResponsiveAccordion } from "@/components/ResponsiveAccordion";
import { faqText } from "./constants/faqText";

const FAQSection = () => {
  return (
    <SectionWrapper
      heading="FAQ"
      title="Frequently Asked Questions"
      subTitle="We work with leading financial institutions across the Kingdom to bring you reliable loan options you can trust."
      className="max-w-3xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
        <ResponsiveAccordion items={faqText} />
      </div>
    </SectionWrapper>
  );
};

export default FAQSection;
