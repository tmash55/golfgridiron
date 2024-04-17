import Benefits from "./components/shared/Benefits";
import Header from "./components/shared/Header";
import Hero from "./components/shared/Hero";
import Pricing from "./components/shared/Pricing";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Pricing />
      </div>
    </>
  );
};

export default App;
