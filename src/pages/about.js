import React from "react"

import Layout from "../components/layout"
import Container from "../components/container/container"
import Column from "../components/column/column"
import SEO from "../components/seo"
import Section from "../components/section/section"
import Skills from "../components/skills/skills"
import Image from "../images/burlington-freelance-web-designer.jpg"

import "../pages/about.scss"
import Resume from "../resume.pdf"

const About = () => (
  <Layout>
    <SEO
      title="About"
      description="Read a little about front end developer JD. Click here to read more."
    />
    <Section className="about inner">
      <Container className="container">
        <Column className="column">
          <img src={Image} alt="me" />
        </Column>
        <Column className="column">
          <h1>About</h1>
          <p>Hi, I'm JD.</p>
          <p>
            Currently working as a frontend developer at VelocityEHS, I get to
            work on a web application that's used by over 14 million people
            worldwide.
          </p>
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="resume"
          >
            Download resume.
          </a>
          <p>
            <strong>Latest accomplishments at my current position:</strong>
          </p>
          <ul>
            <li>
              Developed a Storybook code component library for continued use on
              internal project, improving the development team's efficiency
            </li>
            <li>
              Develop interactive user-experience driven internal web
              application with HTML5, CSS3 (Sass, BEM), Flexbox, JavaScript and
              Reactjs
            </li>
            <li>
              Team lead for AODA WCAG AA Compliance for internal project,
              implementing accessibility
            </li>
            <li>
              Work closely UX designers and back-end developers team to ensure
              project success and to meet deadlines
            </li>
          </ul>
          <Skills />
        </Column>
      </Container>
    </Section>
  </Layout>
)

export default About
