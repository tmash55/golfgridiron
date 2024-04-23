import Benefits from "@/components/shared/Benefits";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";
import Pricing from "@/components/shared/Pricing";

function Home() {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <Hero />
      <Benefits />
      <Pricing />
      <Footer />
    </div>
  );
}

export default Home;
