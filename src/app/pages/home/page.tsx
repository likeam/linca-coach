import Hero from "./hero/page";
import Goal from "./goal/page";
import AboutMe from "./about-me/page";
import MyServices from "./my-services/page";
import VideoCard from "./video-card/page";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Goal />
      <AboutMe />
      <MyServices />
      <VideoCard />
    </div>
  );
};

export default HomePage;
