import FeaturesSection from "./Components/FeatuersSection";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import WorkFlow from "./Components/WorkFlow";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeaturesSection />
        <WorkFlow />
      </div>
    </>
  );
};
export default App;
