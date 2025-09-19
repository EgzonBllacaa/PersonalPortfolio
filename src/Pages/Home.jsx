import Hero from "../Components/HomeComp/Hero";
import FeaturedProjects from "../Components/HomeComp/FeaturedProjects";
import AboutMe from "../Components/AboutComp/AboutMe";
import LetsConnect from "../Components/HomeComp/LetsConnect";
import Accordion from "../Components/HomeComp/Accordion";

const Home = ({ contactRef, projectRef, aboutMe }) => {
  return (
    <>
      <Hero contactRef={contactRef} />
      <FeaturedProjects projectRef={projectRef} />
      <Accordion />
      <AboutMe aboutMe={aboutMe} />
      <LetsConnect contactRef={contactRef} />
    </>
  );
};

export default Home;
