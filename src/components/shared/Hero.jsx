import { heroBackground, robot, golf2, golf1, golfcart } from "@/assets";
import CustomButton from "./CustomButton";
import Section from "./Section";
import { useRef } from "react";
import { ScrollParallax } from "react-just-parallax";
import { heroIcons } from "@/constants";
import { BackgroundCircles, BottomLine, Gradient } from "../design/Hero";
import Notification from "./Notification";
import Creating from "./Creating";
import CompanyLogos from "./CompanyLogos";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative ">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-6[rem]">
          <h1 className="h1 mb-6">
            Elevate Your Golfing Experience with Custom Events & Tournaments!
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-1 lg:mb-8">
            Join Golf Gridiron for unforgettable golfing experiences! Create
            custom events and tournaments effortlessly. Tee off with us now!
          </p>
          <Button className="bg-n-1 text-n-8 hover:text-color-1 hover:bg-n-8 hover:border-2 hover:border-color-1 rounded-xl w-[200px]">
            <Link href="/login">Get Started</Link>
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl border-2 border-color-1">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={golfcart}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />
                <Creating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Round Finished!"
                  />
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>
          <BackgroundCircles />
        </div>
        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
