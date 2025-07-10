import CTASection from "@/components/websites/home/CTASection";
import FAQSection from "@/components/websites/home/FAQSection";
import HeroSection from "@/components/websites/home/HeroSection";
import HowItWorksSection from "@/components/websites/home/HowItWorksSection";
import PartnersSection from "@/components/websites/home/PartnersSection";
import WhyChooseUsSection from "@/components/websites/home/WhyChooseUsSection";

const page = () => {
  return (
    <div className="container flex flex-col gap-y-20 md:-gap-y-28 lg:gap-y-36">
      <HeroSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <PartnersSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default page;
