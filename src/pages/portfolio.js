import React from "react"

import Layout from "../components/layout"
import Container from "../components/container/container"
import Column from "../components/column/column"
import SEO from "../components/seo"

import portfolioIntroImage from "../images/portfolio-intro.jpg"
import portfolioSplitImage from "../images/portfolio-split.jpg"
import portfolioMobileImage from "../images/portfolio-mobile.jpg"

import ProjectDetailed from "../components/project-detailed/project-detailed"

const Portfolio = () => (
  <Layout>
    <SEO
      title="Portfolio"
      description="As a side project, I built out my portfolio website to try and rank for SEO, and try new tech. Click here to learn more."
    />
    <Container>
      <Column>
        <ProjectDetailed
          introImage={portfolioIntroImage}
          altTag="portfolio intro image"
          projectTitle="Portfolio"
          projectLink="https://jdfill.me"
          projectDescription="I wanted to learn VueJS, and Gridsome (a Vue-based static site generator). I also wanted to see if I could rank a side website for a competitive SEO term. So, I decided to build it. I also blog frequently about the business side of SEO, website design and website development."
          techUsed="Static generated site on VueJS, JavaScript, Gridsome, HTML5, CSS3, Bootstrap 4, NPM, Node"
          splitImage={portfolioSplitImage}
          altTagSplit="portfolio split image"
          mobileImage={portfolioMobileImage}
          altTagMobile="portfolio mobile image"
        />
      </Column>
    </Container>
  </Layout>
)

export default Portfolio;
