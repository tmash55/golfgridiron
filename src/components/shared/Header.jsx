import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navigation } from "@/constants";
import { useLocation } from "react-router-dom";
import CustomButton from "./CustomButton";
import MenuSvg from "@/assets/svg/MenuSvg";
import { HambugerMenu } from "../design/Header";
import { useState } from "react";
import Container from "./Container";
//import { useSelector } from "react-redux";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setopenNavigation] = useState(false);
  //const authStatus = useSelector((state) => state.auth.status);

  const toggleNavigation = () => {
    if (openNavigation) {
      setopenNavigation(false);
      enablePageScroll();
    } else {
      setopenNavigation(true);
      disablePageScroll();
    }
  };
  const handleClick = () => {
    if (!openNavigation) return;
    setopenNavigation(false);
    enablePageScroll();
  };

  return (
    <Container>
      <div
        className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
          openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
        }`}
      >
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
          <a className="block w-[12rem] xl:mr-8" href="#">
            <h1 className="font-code text-2xl text-n-1">GOLF GRIDIRON</h1>
          </a>
          <nav
            className={`${
              openNavigation ? "flex" : "hidden"
            } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
          >
            <div className="relative flex flex-col items-center justify-center m-auto lg:flex-row z-2">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={handleClick}
                  className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                    item.url === pathname.hash
                      ? "z-2 lg:text-n-1"
                      : "lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                >
                  {item.title}
                </a>
              ))}
            </div>
            <HambugerMenu />
          </nav>
          <CustomButton
            href="/signup"
            className="hidden lg:flex rounded-lg mr-8 text-n-1/50"
          >
            New Account
          </CustomButton>
          <CustomButton
            className="hidden lg:flex border-2 border-color-1 rounded-lg"
            href="/login"
          >
            Sign in
          </CustomButton>

          <CustomButton
            className="ml-auto lg:hidden px-3"
            onClick={toggleNavigation}
          >
            <MenuSvg openNavigation={openNavigation} />
          </CustomButton>
        </div>
      </div>
    </Container>
  );
};

export default Header;
