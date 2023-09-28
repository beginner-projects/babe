import "./App.css";
import { Clients, avtaarsImg } from "./Data/Data";
import HeroSection from "./components/HeroSection";

function App() {
  console.log(avtaarsImg);
  console.log(Clients);
  return (
    <div className=" box-border w-full h-full flex bg-bg justify-center items-center flex-col">
      <HeroSection />
    </div>
  );
}

export default App;
