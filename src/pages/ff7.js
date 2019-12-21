import React from "react"

import Layout from "../components/layout"
import Container from "../components/container/container"
import Column from "../components/column/column"
import SEO from "../components/seo"

import ff7IntroImage from "../images/ff7-intro.jpg"
import ff7SplitImage from "../images/ff7-split.jpg"
import ff7MobileImage from "../images/ff7-mobile.jpg"

import ProjectDetailed from "../components/project-detailed/project-detailed"

const FF7 = () => (
  <Layout>
    <SEO
      title="Final Fantasy 7 Character Stats"
      description="As a side project, I built out a Final Fantasy 7 Character Stats Web App. Click here to learn more."
    />
    <Container>
      <Column>
        <ProjectDetailed
          introImage={ff7IntroImage}
          altTag="ff7 intro image"
          projectTitle="Final Fantasy 7 Character Stats"
          projectLink="https://ff7.netlify.com"
          projectDescription="I wanted to learn ReactJS. So, I decided to build a side project. Practicing React, JavaScript ES6 filtering and arrays as well. Purpose - as you click on a character, it filters in their information on the right (desktop) and on the bottom (mobile)."
          techUsed="HTML5, CSS3, Sass, JavaScript, React, NPM, Flexbox"
          splitImage={ff7SplitImage}
          altTagSplit="ff7 split image"
          mobileImage={ff7MobileImage}
          altTagMobile="ff7 mobile image"
        />
      </Column>
    </Container>
  </Layout>
)

export default FF7
