import React from "react"

import Layout from "../components/layout"
import Container from "../components/container/container"
import Column from "../components/column/column"
import SEO from "../components/seo"

import cassIntroImage from "../images/cass-intro.jpg"
import cassSplitImage from "../images/cass-split.jpg"
import cassMobileImage from "../images/cass-mobile.jpg"
import cassSpeedImage from "../images/cass-score.jpg"

import ProjectDetailed from "../components/project-detailed/project-detailed"

const FF7 = () => (
  <Layout>
    <SEO
      title="Cass-A-Bella Construction"
      description="Built out a client project based on React for Cass-A-Bella Construction. Click here to learn more."
    />
    <Container>
      <Column>
        <ProjectDetailed
          introImage={cassIntroImage}
          altTag="cass intro image"
          projectTitle="Cass-A-Bella Construction"
          projectLink="https://cassabella.netlify.com"
          projectDescription="Reached out to Cass-A-Bella Construction, offering to re-design and re-build their website on a modern platform. Their current website was very outdated in terms of design and technology stack. I decided to completely re-design and re-build their website from the ground up, using modern design and front-end development technologies. The website is now faster, more performant and accessible, and looks a lot nicer than previously."
          techUsed="HTML5, CSS3, Sass, JavaScript, Gatsby, React, NPM, Flexbox, Sketch"
          speedScore={cassSpeedImage}
          altSpeedScore="cassabella score"
          splitImage={cassSplitImage}
          altTagSplit="cass split image"
          mobileImage={cassMobileImage}
          altTagMobile="cass mobile image"
        />
      </Column>
    </Container>
  </Layout>
)

export default FF7
