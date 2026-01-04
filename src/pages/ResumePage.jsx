import React from "react";
import Resume from "../component/Resume";
import PageTitleHero from "../component/PageTitleHero";
import AnimatedContent from "../component/AnimatedContent";
import { portfolioData } from "../portfolioData";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const ResumePage = () => {
  useDocumentTitle("Resume");

  return (
    <>
      <PageTitleHero
        title="My"
        gradientText="Resume"
        description="My professional journey and qualifications"
      />
      <AnimatedContent>
        <div className="pt-20">
          <Resume
            resumePdfUrl={portfolioData.resume.pdfUrl}
            experience={portfolioData.resume.experience}
            education={portfolioData.resume.education}
            positionsOfResponsibility={
              portfolioData.resume.positionsOfResponsibility
            }
            codingProfiles={portfolioData.resume.codingProfiles}
          />
        </div>
      </AnimatedContent>
    </>
  );
};

export default ResumePage;
