import React, { Component } from "react"

import AOS from "aos"
import "aos/dist/aos.css"

import Layout from "../components/layout"
import Container from "../components/container/container"
import Column from "../components/column/column"
import SEO from "../components/seo"
import Section from "../components/section/section"
import Skills from "../components/skills/skills"

import "../pages/about.scss"

class About extends Component {
  componentDidMount() {
    AOS.init({})
  }
  render() {
    const aboutContent = {
      titleOne: "Career Profile",
      textOne: `Seasoned front end developer & UI designer with 7+ years
      experience working on national brand & SaaS products. Skilled in
      WCAG / AODA accessibility, JavaScript / CSS
      frameworks & design software. Dedicated to my craft through
      learning new technologies / techniques. Lead teams, projects and
      internal initiatives, forward-thinking and create clean
      documentation.`,
      titleTwo: "Career Accomplishments",
      bulletOne:
        "Helped numerous businesses generate millions in revenue due to better performant websites",
      bulletTwo:
        "Saved costs and increased efficiencies by building reusable code libraries for projects",
      bulletThree:
        "Developed various Tim Hortons campaigns, notably Every Cup Tells A Story and Tim’s Rewards",
      bulletFour:
        "Work on VelocityEHS’ webapp, that is used by over 14 million people in the EHS industry",
      bulletFive:
        "Team lead for AODA AA compliant websites, giving the disabled a better internet experience",
    }
    return (
      <Layout>
        <SEO
          title="About"
          description="Read a little about front end developer JD. Click here to read more."
        />
        <Section className="about inner">
          <Container className="container">
            <Column className="column">
              <h3>{aboutContent.titleOne}</h3>
              <p>{aboutContent.textOne}</p>
            </Column>

            <Column className="column">
              <h3>{aboutContent.titleTwo}</h3>
              <ul>
                <li>{aboutContent.bulletOne}</li>
                <li>{aboutContent.bulletTwo}</li>
                <li>{aboutContent.bulletThree}</li>
                <li>{aboutContent.bulletFour}</li>
                <li>{aboutContent.bulletFive}</li>
              </ul>
            </Column>
          </Container>
          <Container className="container">
            <Column className="column">
              <Skills />
            </Column>
          </Container>
        </Section>
      </Layout>
    )
  }
}

export default About
