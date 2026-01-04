import React from "react";
import Hero from "../component/Hero";
import { portfolioData } from "../portfolioData";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const HomePage = () => {
  useDocumentTitle("Home");

  return (
    <div>
      <Hero
        profileImage={portfolioData.personal.profileImage}
        name={portfolioData.personal.name}
        titles={portfolioData.personal.titles}
      />
    </div>
  );
};

export default HomePage;
