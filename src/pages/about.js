import React from "react"

import Layout from "../components/layout"
import Container from "../components/container/container"
import Column from "../components/column/column"
import SEO from "../components/seo"

import Skills from "../components/skills/skills"

const About = () => (
  <Layout>
    <SEO
      title="About"
      description="Read a little about front end developer JD. Click here to read more."
    />
    <Container>
      <Column>Picture</Column>
      <Column>
        <h1>About</h1>
        <p>Welcome to about</p>
        <Skills />
      </Column>
    </Container>
  </Layout>
)

export default About
