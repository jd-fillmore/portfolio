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
import Resume from "../resume.pdf"

class About extends Component {
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
              <h3
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                Career Profile
              </h3>
              <p
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                Seasoned front end developer & UI designer with 7+ years
                experience working on national brand & SaaS products. Skilled in
                accessibility many of the major CMS platforms, JavaScript / CSS
                frameworks & design software. Dedicated to my craft through
                learning new technologies / techniques. Lead teams, projects and
                internal initiatives, forward-thinking and create clean
                documentation.
              </p>
            </Column>

            <Column className="column">
              <h3
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                Career Accomplishments
              </h3>
              <ul
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                <li>
                  {" "}
                  Helped numerous businesses generate millions in revenue due to
                  better performant websites
                </li>
                <li>
                  Saved costs and increased efficiencies by building reusable
                  code libraries for projects
                </li>
                <li>
                  Developed various Tim Hortons campaigns, notably Every Cup
                  Tells A Story and Tim’s Rewards
                </li>
                <li>
                  {" "}
                  Work on VelocityEHS’ webapp, that is used by over 14 million
                  people in the EHS industry
                </li>
                <li>
                  Team lead for AODA AA compliant websites, giving the disabled
                  a better internet experience
                </li>
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
