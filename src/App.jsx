import "./App.css";
import Midbox from "./components/Midbox";
// import HeroSection from "./components/HeroSection";
// import Contacts from "./components/Contacts";
// import LatestArticleSection from "./components/LatestArticleSection";
// import NavigationBar from "./components/NavigationBar/NavigationBar";


function App() {
  return (
    <div className=" box-border w-full h-full flex bg-bg justify-center items-center flex-col">
      {/* <NavigationBar />
      <HeroSection />
      <Contacts />
      <LatestArticleSection /> */}
      <Midbox/>
    </div>
  );
}

export default App;
