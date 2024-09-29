import AboutMe from "../AboutMe";
import Enrolls from "../Enroll";
import HeroSection from "../HeroSection";
import MyServices from "../Services";

export default function Home () {

  return(
    <>
      <HeroSection />
      <AboutMe />
      <MyServices />
      <Enrolls />
    </>
  );
}