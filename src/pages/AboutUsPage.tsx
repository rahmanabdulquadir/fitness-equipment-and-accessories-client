import AboutUsIntro from "../components/ui/about/AboutUsIntro";
import ContactInfo from "../components/ui/about/ContactInfo";
import Hero from "../components/ui/about/Hero";
import Team from "../components/ui/about/Team";
import Testimonial from "../components/ui/about/Testimonial";

const AboutUsPage = () => {
  return (
    <div className="">
      <Hero />
      <AboutUsIntro/>
      <Team/>
      <Testimonial/>
      <ContactInfo/>
    </div>
  );
};

export default AboutUsPage;
