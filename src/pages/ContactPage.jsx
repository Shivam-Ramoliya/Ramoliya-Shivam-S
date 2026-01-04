import React from "react";
import Contact from "../component/Contact";
import PageTitleHero from "../component/PageTitleHero";
import AnimatedContent from "../component/AnimatedContent";
import { portfolioData } from "../portfolioData";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const ContactPage = () => {
  useDocumentTitle("Contact");

  return (
    <>
      <PageTitleHero
        title="Contact"
        gradientText="Me"
        description="Let's work together to create something amazing"
      />
      <AnimatedContent>
        <div className="pt-20">
          <Contact
            email={portfolioData.contact.email}
            phone={portfolioData.contact.phone}
            location={portfolioData.contact.location}
            socialLinks={portfolioData.contact.socialLinks}
          />
        </div>
      </AnimatedContent>
    </>
  );
};

export default ContactPage;
