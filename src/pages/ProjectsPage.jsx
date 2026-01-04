import React from "react";
import Portfolio from "../component/Portfolio";
import PageTitleHero from "../component/PageTitleHero";
import AnimatedContent from "../component/AnimatedContent";
import { portfolioData } from "../portfolioData";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const ProjectsPage = () => {
  useDocumentTitle("Projects");

  return (
    <>
      <PageTitleHero
        title="My"
        gradientText="Projects"
        description="Here are some of my recent projects that showcase my skills"
      />
      <AnimatedContent>
        <div className="pt-20">
          <Portfolio projects={portfolioData.projects} />
        </div>
      </AnimatedContent>
    </>
  );
};

export default ProjectsPage;
