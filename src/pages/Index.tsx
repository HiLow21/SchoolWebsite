import Layout from "@/components/layout/Layout";
import PageTransition from "@/components/layout/PageTransition";
import FeatureCard from "@/components/home/FeatureCard";
import ImageScroll from "@/components/home/imageScroll";

import HeroSection from "@/components/home/heroSection";
import AboutSchool from "@/components/home/aboutSchool";
import ContactUs from "@/components/home/contactUs";
import StatSection from "@/components/home/statSection";
import WhyChooseus from "@/components/home/whyChooseus";

const Index = () => {
  return (
    <Layout >
      <PageTransition >
        <HeroSection />
        <StatSection />
        <WhyChooseus />


        <ImageScroll />

        <ContactUs />
      </PageTransition>
    </Layout>
  );
};

export default Index;
