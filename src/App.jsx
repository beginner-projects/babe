import "./App.css";
import HeroSection from "./components/HeroSection";
import Contacts from "./components/Contacts";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Features from "./components/Features";

function App() {
  return (
    <div className=" box-border w-full h-full flex bg-bg justify-center items-center flex-col">
      <NavigationBar />
      <HeroSection />
      <Contacts />
      <Features />
    </div>
  );
}

export default App;
