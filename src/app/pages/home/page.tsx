import Hero from "./hero/page";
import Goal from "./goal/page";
import AboutMe from "./about-me/page";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Goal />
    </div>
  );
};

export default HomePage;
