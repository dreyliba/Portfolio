import AboutMe from "../components/Home/AboutMe";
import Banner from "../components/Home/Banner";
import Contact from "../components/Home/Contact";
import Statistics from "../components/Home/Statistics";

export default function Home() {
  return (
    <div>
      <Banner />
      <Statistics />
      <AboutMe />
      <Contact />
    </div>
  );
}
