import React from "react"

import Layout from "../components/layout"
import Container from "../components/container/container"
import Column from "../components/column/column"
import SEO from "../components/seo"

import Image from "../images/niagara-front-end-web-developer.jpg";

import Skills from "../components/skills/skills"

const About = () => (
  <Layout>
    <SEO
      title="About"
      description="Read a little about front end developer JD. Click here to read more."
    />
    <Container className="container">
      <Column className="column">
        <img src={Image} alt="Me" />
      </Column>
      <Column className="column">
        <h1>About</h1>
        <p>Welcome to about</p>
        <Skills />
      </Column>
    </Container>
  </Layout>
)

export default About
