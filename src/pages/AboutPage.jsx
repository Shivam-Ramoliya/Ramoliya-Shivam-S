import React from "react";
import About from "../component/About";
import PageTitleHero from "../component/PageTitleHero";
import AnimatedContent from "../component/AnimatedContent";
import { portfolioData } from "../portfolioData";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const AboutPage = () => {
  useDocumentTitle("About");

  return (
    <>
      <PageTitleHero
        title="About"
        gradientText="Me"
        description="Get to know me better"
      />
      <AnimatedContent>
        <div className="pt-20">
          <About
            bio={portfolioData.personal.bio}
            image={portfolioData.personal.aboutImage}
            stats={portfolioData.stats}
          />
        </div>
      </AnimatedContent>
    </>
  );
};

export default AboutPage;
