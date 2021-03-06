import React, { Component } from "react"

import AOS from "aos"
import "aos/dist/aos.css"

import Layout from "../components/layout"
import Container from "../components/container/container"
import Column from "../components/column/column"
import SEO from "../components/seo"
import Section from "../components/section/section"

import "../pages/about.scss"

class Contact extends Component {
  componentDidMount() {
    AOS.init({})
  }
  render() {
    return (
      <Layout>
        <SEO
          title="About"
          description="Read a little about front end developer JD. Click here to read more."
        />
        <Section className="about inner">
          <Container className="container">
            <Column className="column">
              <h1>Contact</h1>
              <p>Feel free to reach out to discuss a project, or say hello.</p>
              <a href="mailto:jd@jdfill.me">jd@jdfill.me</a>
            </Column>
          </Container>
        </Section>
      </Layout>
    )
  }
}

export default Contact
