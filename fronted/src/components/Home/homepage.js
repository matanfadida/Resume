import About from "./About/About";
import Contact from "./contact/contact";
import Details from "./detail/detail";
import Footer from "./footer/footer";
import Qualification from "./qualification/qualification";
import Skills from "./Skills/skills";
import Volunteering from "./volunteering/volunteering";

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
