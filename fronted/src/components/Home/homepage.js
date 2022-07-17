import About from "./About";
import Contact from "./contact";
import Details from "./detail";
import Qualification from "./qualification";
import Skills from "./skills";

const HomePage = () => {
  return (
    <div>
      <Details />
      <About />
      <Skills />
      <Qualification />
      <Contact/>
    </div>
  );
};

export default HomePage;
