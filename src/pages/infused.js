import React from "react"

import Layout from "../components/layout"
import Container from "../components/container/container"
import Column from "../components/column/column"
import SEO from "../components/seo"

import infusedIntroImage from "../images/infused-intro.jpg"
import infusedSplitImage from "../images/infused-split.jpg"
import infusedMobileImage from "../images/infused-mobile.jpg"

import ProjectDetailed from "../components/project-detailed/project-detailed"

const Infused = () => (
  <Layout>
    <SEO
      title="Infused"
      description="As a side project, I built out a website to try and rank for SEO. Click here to learn more."
    />
    <Container>
      <Column>
        <ProjectDetailed
          introImage={infusedIntroImage}
          altTag="infused intro image"
          projectTitle="Infused Agency"
          projectLink="https://infused.agency"
          projectDescription="I wanted to learn VueJS, and Gridsome (a Vue-based static site generator). I also wanted to see if I could rank a side website for a competitive SEO term. So, I decided to build it. I also blog frequently about the business side of SEO, website design and website development."
          techUsed="Static generated site on VueJS, JavaScript, Gridsome, HTML5, CSS3, Bootstrap 4, NPM, Node"
          splitImage={infusedSplitImage}
          altTagSplit="infused split image"
          mobileImage={infusedMobileImage}
          altTagMobile="infused mobile image"
        />
      </Column>
    </Container>
  </Layout>
)

export default Infused
