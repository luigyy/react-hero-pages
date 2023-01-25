import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
// navbar
interface NavbarProps {}

const Navbar = () => {
  return (
    <div className="  flex justify-center    ">
      <div className="flex md:w-full md:justify-around items-center border-2 border-base-300 md:border-0 px-4 py-1 rounded-3xl gap-4">
        <div>
          <p className=" tracking-tighter text-3xl font-semibold  ">
            <BiHomeAlt />
          </p>
        </div>
        <div>
          <p className=" text-2xl">
            <BsGithub />
          </p>
        </div>
      </div>
    </div>
  );
};
// navbar

interface LandingHeroProps {}

const LandingHero: React.FC<LandingHeroProps> = ({}) => {
  return (
    <div>
      {/* hero  */}
      <div className="md:m-3  bg-white p-5  rounded-xl shadow-lg md:h-[calc(100vh-100px)] h-screen">
        <Navbar />
        <div className="flex">
          <div className="h-full md:w-1/2 pl-2 py-5 relative overflow-hidden">
            <p className="font-bold uppercase text-primary md:text-left text-4xl text-center mt-16">
              React components for hero sections
            </p>
            <p className="md:text-left text-center my-10 w-[70%] mx-auto md:mx-0 md:w-[80%]">
              A free, responsive and open source collection of components ready
              to be customize and used on your own website built with
              tailwindcss and daisyui
            </p>
            <div>
              <button className="btn btn-primary rounded-lg hover:shadow-2xl  flex mx-auto md:mx-0">
                Explore
              </button>
            </div>
          </div>
          <div className="h-full w-1/2 md:inline hidden overflow-hidden relative ">
            <img src="landing.jpg" className="md:w-[70%] mx-auto " alt="" />
          </div>
        </div>
      </div>
      {/* hero  */}
    </div>
  );
};

export default LandingHero;
