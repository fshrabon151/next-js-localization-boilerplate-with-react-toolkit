import BankLogosGrid from "@/components/BankLogosGrid";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { partnerLogos } from "./constants/partnerLogos";

const PartnersSection = () => {
  return (
    <SectionWrapper
      heading="Our Financial Partners"
      title="Backed by Saudi Arabia’s Trusted Finance Institutes"
      subTitle="We work with leading financial institutions across the Kingdom to bring you reliable loan options you can trust."
      subTitleClassName="max-w-4xl mx-auto"
    >
      <BankLogosGrid logos={partnerLogos} />
    </SectionWrapper>
  );
};

export default PartnersSection;
