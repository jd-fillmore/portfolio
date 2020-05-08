import React from "react"

import Layout from "../components/layout"
import Container from "../components/container/container"
import Column from "../components/column/column"
import SEO from "../components/seo"

import mcIntroImage from "../images/mc-aesthetics-intro.jpg"
import mcSplitImage from "../images/mc-aesthetics-split.jpg"
import mcMobileImage from "../images/mc-aesthetics-mobile.jpg"

import ProjectDetailed from "../components/project-detailed/project-detailed"

const Portfolio = () => (
  <Layout>
    <SEO
      title="MC Aesthetics"
      description="MC Aesthetics website based on Gatsby and React, launched with Netlify. Click here to learn more."
    />
    <Container>
      <Column>
        <ProjectDetailed
          introImage={mcIntroImage}
          altTag="MC Aesthetics intro image"
          projectTitle="MC Aesthetics"
          projectLink="https://mcaesthetics.ca"
          projectDescription="MC Aeshetics came to me with a website in mind. I decided to build out the website with newer technologies, to expand my skillset. My role here was to manage the client and their expectations, UI design, front end development and on-page SEO."
          techUsed="Adobe XD, React, Gatsby, JavaScript, HTML5, CSS3, Sass"
          githubText="View Code on Github"
          githubLink="https://github.com/jd-fillmore/mc-aesthetics"
          splitImage={mcSplitImage}
          altTagSplit="MC Aesthetics split image"
          mobileImage={mcMobileImage}
          altTagMobile="MC Aesthetics mobile image"
        />
      </Column>
    </Container>
  </Layout>
)

export default Portfolio
