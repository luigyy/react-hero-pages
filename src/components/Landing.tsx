import React from "react";

interface LandingProps {}

const Landing: React.FC<LandingProps> = ({}) => {
  return (
    <div className="bg-base-100 overflow-hidden" data-theme="lofi">
      {/* hero  */}
      <div className="md:m-3 md:flex bg-white p-5 border-4 rounded-xl shadow-lg h-[calc(100vh-50px)]">
        <div className="h-full md:w-1/2 border-2 py-5">
          <p className="font-bold uppercase text-primary md:text-left text-4xl text-center mt-16">
            React components for hero sections
          </p>
          <p className="md:text-left text-center my-10 w-[70%] mx-auto md:mx-0 md:w-[80%]">
            A free, responsive and open source collection of components ready to
            be customize and used on your own website built with tailwindcss and
            daisyui
          </p>
          <div>
            <button className="btn btn-primary rounded-lg hover:shadow-2xl  flex mx-auto md:mx-0">
              Explore
            </button>
          </div>
        </div>
        <div className="h-full w-1/2 border-2 md:inline hidden overflow-hidden relative ">
          <img src="landing.jpg" className="w-[80%] mx-auto " alt="" />
        </div>
      </div>
      {/* hero  */}
    </div>
  );
};

export default Landing;
