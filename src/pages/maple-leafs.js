import React from "react"

import Layout from "../components/layout"
import Container from "../components/container/container"
import Column from "../components/column/column"
import SEO from "../components/seo"

import mapleLeafsIntroImage from "../images/maple-leafs-intro.jpg"
import mapleLeafsSplitImage from "../images/maple-leafs-split.jpg"
import mapleLeafsMobileImage from "../images/maple-leafs-mobile.jpg"

import ProjectDetailed from "../components/project-detailed/project-detailed"

const MapleLeafs = () => (
  <Layout>
    <SEO
      title="Maple Leafs Stats"
      description="I wanted to expand my knowledge with consuming REST APIs within React, so I took on a little side project. Click here to learn more."
    />
    <Container>
      <Column>
        <ProjectDetailed
          introImage={mapleLeafsIntroImage}
          altTag="Maple Leafs intro image"
          projectTitle="Maple Leafs Stats"
          projectLink="https://leafs.netlify.com/"
          projectDescription="As a front-end developer, I love learning new skills and expanding my knowledge. Before this project I did not know anything about React Hooks, Styled Components or Axios. With this project, I aimed to learn those things. This project gives the user the ability to view the best three players on the Leafs' statistics, consuming the NHL's REST API."
          techUsed="Adobe XD, React, React Hooks, Styled Components, JavaScript, Node, Axios, REST API, Sass"
          githubText="View Code on Github"
          githubLink="https://github.com/jd-fillmore/maple-leafs-api"
          splitImage={mapleLeafsSplitImage}
          altTagSplit="Maple Leafs split image"
          mobileImage={mapleLeafsMobileImage}
          altTagMobile="Maple Leafs mobile image"
        />
      </Column>
    </Container>
  </Layout>
)

export default MapleLeafs
