import React from "react";
import LandingHero from "./LandingHero";
import LandingContent from "./LandingContent";
import LandingFooter from "./LandingFooter";

interface LandingProps {}

const Landing: React.FC<LandingProps> = ({}) => {
  return (
    <div className="bg-gray-50 overflow-hidden" data-theme="lofi">
      <LandingHero />
      <LandingContent />
      <LandingFooter />
    </div>
  );
};

export default Landing;
