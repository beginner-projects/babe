import "./App.css";
import HeroSection from "./components/HeroSection";
import Contacts from "./components/Contacts";
import LatestArticleSection from "./components/LatestArticleSection";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Testimonial from "./components/Testimonial/Testimonial";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Midbox from "./components/Midbox";

function App() {
  return (
    <div className=" box-border w-full h-full flex bg-bg justify-center items-center flex-col scroll-smooth">
      <NavigationBar />
      <HeroSection />
      <Features />
      <Midbox />
      <Testimonial />
      <Contacts />
      <LatestArticleSection />

      <Footer />
    </div>
  );
}

export default App;
