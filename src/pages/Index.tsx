import Layout from "@/components/layout/Layout";
import PageTransition from "@/components/layout/PageTransition";
import HeroSection from "@/components/home/heroSection";
import ContactUs from "@/components/home/contactUs";
import StatSection from "@/components/home/statSection";
import WhyChooseus from "@/components/home/whyChooseus";
import ActivitiesShowcase from "@/components/home/ActivitiesShowcase";

const Index = () => {
  return (
    <Layout>
      <PageTransition>
        <HeroSection />
        <StatSection />
        <WhyChooseus />
        <ActivitiesShowcase />
        <ContactUs />
      </PageTransition>
    </Layout>
  );
};

export default Index;
