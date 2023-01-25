import React from "react";

interface LandingContentProps {}

const LandingContent: React.FC<LandingContentProps> = ({}) => {
  return (
    <div className="h-screen my-40 border-8 border-primary">
      <h1 className="  font-bold -tracking-widest text-5xl p-10 ">
        Components
      </h1>
    </div>
  );
};

export default LandingContent;
