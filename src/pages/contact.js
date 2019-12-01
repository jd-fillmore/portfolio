import React, { Component } from "react"

import AOS from "aos"
import "aos/dist/aos.css"

import Layout from "../components/layout"
import Container from "../components/container/container"
import Column from "../components/column/column"
import SEO from "../components/seo"
import Section from "../components/section/section"

import "../pages/about.scss"
import Image from "../images/burlington-freelance-web-designer.jpg"

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
              <img
                data-aos="fade-right"
                data-aos-duration="800"
                src={Image}
                alt="Me"
              />
            </Column>
            <Column className="column">
              <h1
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                Contact
              </h1>
              <p
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                Feel free to reach out to discuss a project, or say hello.
              </p>
              <a
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="400"
                href="mailto:jd@jdfill.me"
              >
                jd@jdfill.me
              </a>
            </Column>
          </Container>
        </Section>
      </Layout>
    )
  }
}

export default Contact
