import "./App.css";
import HeroSection from "./components/HeroSection";
import Data from "./Data/Data"
function App() {
  return (
    <div className=" box-border w-full h-full flex bg-bg justify-center items-center flex-col">
      <HeroSection />
      {console.log(Data)}
    </div>
  );
}

export default App;
