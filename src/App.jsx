import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";

import HeroSection from "./components/HeroSection";
import NavigationBar from "./components/NavigationBar/NavigationBar";

function App() {
  return (
    <div className=" box-border w-full h-full flex bg-bg justify-center items-center flex-col">
      <NavigationBar />
      <HeroSection />
    </div>
  );
}

export default App;
