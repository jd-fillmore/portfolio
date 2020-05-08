import React from "react"

import Layout from "../components/layout"
import Container from "../components/container/container"
import Column from "../components/column/column"
import SEO from "../components/seo"

import kdIntroImage from "../images/kd-flowers-intro.jpg"
import kdSplitImage from "../images/kd-flowers-split.jpg"
import kdMobileImage from "../images/kd-flowers-mobile.jpg"

import ProjectDetailed from "../components/project-detailed/project-detailed"

const FF7 = () => (
  <Layout>
    <SEO
      title="KD Flowers"
      description="Built out a client project based on React for KD Flowers. Click here to learn more."
    />
    <Container>
      <Column>
        <ProjectDetailed
          introImage={kdIntroImage}
          altTag="kd flowers intro image"
          projectTitle="KD Flowers"
          projectLink="https://kdflowers.ca"
          projectDescription="A past client of mine referred me to KD Flowers. She wanted a modern website built that was simple, attractive, and fast. Technically speaking, I reached for React / Gatsby to do the job. KD Flowers was extremely happy with the result of her new website and we continue to work together."
          techUsed="Adobe XD, React, Gatsby, JavaScript, Node, Sass"
          githubText="View Code on Github"
          githubLink="https://github.com/jd-fillmore/kdflowers"
          splitImage={kdSplitImage}
          altTagSplit="kd flowers split image"
          mobileImage={kdMobileImage}
          altTagMobile="kd flowers mobile image"
        />
      </Column>
    </Container>
  </Layout>
)

export default FF7
