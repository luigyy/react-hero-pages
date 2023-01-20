import React, { useEffect, useState } from "react";
//

const NavForMD = () => {
  return (
    <div className=" flex md:gap-10 justify-around py-3 ">
      <h1
        style={{ fontFamily: "Lemon Milk" }}
        className="text-accent font-semibold"
      >
        Home
      </h1>
      <h1 style={{ fontFamily: "Lemon Milk" }}>Projects</h1>
      <h1 style={{ fontFamily: "Lemon Milk" }}>About</h1>
      <h1 style={{ fontFamily: "Lemon Milk" }}>Contact</h1>
    </div>
  );
};

interface NavbarForHeroProps {}

const NavbarForHero: React.FC<NavbarForHeroProps> = ({}) => {
  return (
    <div className=" flex md:justify-between justify-around items-center">
      <div className="font-semibold text-2xl flex items-center">
        <span className="font-semibold">your</span>
        <span className="text-primary ">logo</span>
      </div>
      <div className="">
        <span className="md:mx-2 bg-primary text-primary-content font-semibold px-4 py-3 rounded-3xl">
          lorem ipsum
        </span>
        <span className="mx-2 bg-accent text-accent-content font-semibold  px-4 py-3 rounded-3xl">
          lorem ipsum
        </span>
      </div>
    </div>
  );
};

interface HeroProps {}

const Hero1: React.FC<HeroProps> = ({}) => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);
  return (
    <div
      className="h-screen md:px-16 md:py-10 p-5 bg-white"
      data-theme="cupcake"
    >
      <div className="">{width > 768 ? <NavbarForHero /> : <NavForMD />}</div>
      <div className="h-[calc(100vh-80px)] flex flex-wrap md:flex-nowrap">
        {/* left div  */}
        <div className=" md:w-1/2  pt-24">
          <h1
            style={{ fontFamily: "Lemon Milk" }}
            className="uppercase md:text-left text-center text-7xl mb-2"
          >
            L<span className="text-accent">o</span>rem ipsum
          </h1>
          <h1
            style={{ fontFamily: "Lemon Milk" }}
            className="uppercase md:text-left text-center text-5xl mb-10 text-primary"
          >
            landing page
          </h1>
          <p className="w-[75%] mx-auto md:mx-0 md:text-left text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            perferendis, provident accusamus dicta nobis nisi sapiente similique
            nihil dolore facere!
          </p>
          <div className="hidden md:inline md:fixed md:bottom-10  ">
            <NavForMD />
          </div>
        </div>
        {/* left div  */}
        {/* right div  */}
        <div className="h-full w-full  md:w-1/2    ">
          <img
            className=" md:mt-10 mt-2 h-1/3 md:h-4/5 mx-auto "
            src="pic.jpg"
          />
        </div>
        {/* right div  */}
      </div>
    </div>
  );
};

export default Hero1;
