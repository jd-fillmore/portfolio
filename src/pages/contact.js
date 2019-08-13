import React from "react"

import Layout from "../components/layout"
import Container from "../components/container/container"
import Column from "../components/column/column"
import SEO from "../components/seo"
import Section from "../components/section/section"

import "../pages/about.scss"
import Image from "../images/burlington-freelance-web-designer.jpg"

const About = () => (
  <Layout>
    <SEO
      title="About"
      description="Read a little about front end developer JD. Click here to read more."
    />
    <Section className="about inner">
      <Container className="container">
        <Column className="column">
          <img src={Image} alt="Me" />
        </Column>
        <Column className="column">
          <h1>Contact</h1>
          <p>Feel free to reach out to discuss a project, or say hello.</p>
          <a href="mailto:jd@jdfill.me">jd@jdfill.me</a>
        </Column>
      </Container>
    </Section>
  </Layout>
)

export default About
