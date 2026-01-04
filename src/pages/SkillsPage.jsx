import React from "react";
import Skills from "../component/Skills";
import PageTitleHero from "../component/PageTitleHero";
import AnimatedContent from "../component/AnimatedContent";
import { portfolioData } from "../portfolioData";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const SkillsPage = () => {
  useDocumentTitle("Skills");

  return (
    <>
      <PageTitleHero
        title="My"
        gradientText="Skills"
        description="Technologies and tools I work with"
      />
      <AnimatedContent>
        <div className="pt-20">
          <Skills skillCategories={portfolioData.skillCategories} />
        </div>
      </AnimatedContent>
    </>
  );
};

export default SkillsPage;
