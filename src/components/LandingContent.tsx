import React from "react";
import { BsGithub } from "react-icons/bs";

interface CardProps {}

const Card = () => {
  return (
    <div className="card md:w-60 w-[80%] bg-base-100 shadow-xl rounded-xl">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="" />
      </figure>
      <div className="card-body bg-primary">
        <a href="" target="_blank">
          <BsGithub className="text-white text-3xl mx-auto" />
        </a>
      </div>
    </div>
  );
};

interface LandingContentProps {}

const LandingContent: React.FC<LandingContentProps> = ({}) => {
  return (
    <div className="min-h-screen my-40 mx-10 ">
      <h1 className="  font-bold -tracking-widest text-5xl p-10 ">
        Components
      </h1>
      <div className="w-full flex justify-around flex-wrap gap-5 mx-auto">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default LandingContent;
