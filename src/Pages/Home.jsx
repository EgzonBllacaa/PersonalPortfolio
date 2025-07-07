import Hero from "../Components/HomeComp/Hero";
import FeaturedProjects from "../Components/HomeComp/FeaturedProjects";
import AboutMe from "../Components/AboutComp/AboutMe";
import LetsConnect from "../Components/HomeComp/LetsConnect";

const Home = ({ contactRef, projectRef }) => {
  return (
    <>
      <Hero contactRef={contactRef} />
      <FeaturedProjects projectRef={projectRef} />
      <AboutMe />
      <LetsConnect contactRef={contactRef} />
    </>
  );
};

export default Home;
