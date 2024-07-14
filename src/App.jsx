import FeaturesSection from "./Components/FeatuersSection";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Pricing from "./Components/Pricing";
import WorkFlow from "./Components/WorkFlow";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeaturesSection />
        <WorkFlow />
        <Pricing />
      </div>
    </>
  );
};
export default App;
