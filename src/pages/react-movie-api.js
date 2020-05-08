import React from "react"

import Layout from "../components/layout"
import Container from "../components/container/container"
import Column from "../components/column/column"
import SEO from "../components/seo"

import reactIntroImage from "../images/react-movie-api-intro.jpg"
import reactSplitImage from "../images/react-movie-api-split.jpg"
import reactMobileImage from "../images/react-movie-api-mobile.jpg"

import ProjectDetailed from "../components/project-detailed/project-detailed"

const Cardon = () => (
  <Layout>
    <SEO
      title="ReactJS MovieDB API"
      description="In order to learn ReactJS, I decided to build out a movieDB API. Click here to learn more."
    />
    <Container>
      <Column>
        <ProjectDetailed
          introImage={reactIntroImage}
          altTag="react intro image"
          projectTitle="Movie Database API"
          projectLink="https://zeqk4.csb.app/"
          projectDescription="I wanted to learn ReactJS as well as Axios for API fetching, since my full time job didn't allow for this type of work. I took an idea based on something I liked (movies), and made a Movie Database API search out of it."
          techUsed="Adobe XD, React, JavaScript, Node, Axios, REST API, Sass"
          githubText="View Code on Github"
          githubLink="https://github.com/jd-fillmore/react-movie-api"
          splitImage={reactSplitImage}
          altTagSplit="react split image"
          mobileImage={reactMobileImage}
          altTagMobile="react mobile image"
        />
      </Column>
    </Container>
  </Layout>
)

export default Cardon
