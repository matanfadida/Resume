import PopMessage from "../UI/pop-message";
import About from "./About";
import Contact from "./contact";
import Details from "./detail";
import Footer from "./footer";
import Qualification from "./qualification";
import Skills from "./skills";
import Volunteering from "./volunteering";

const HomePage = () => {
  return (
    <div>
      <Details />
      <About />
      <Skills />
      <Qualification />
      <Volunteering/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default HomePage;
