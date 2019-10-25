import React from "react"

import Layout from "../components/layout"
import Container from "../components/container/container"
import Column from "../components/column/column"
import SEO from "../components/seo"
import Section from "../components/section/section"

import "../pages/about.scss"
import Resume from "../resume.pdf"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faWordpress,
  faHtml5,
  faCss3,
  faSass,
  faJs,
  faReact,
  faVuejs,
  faGit,
  faBootstrap,
  faSketch,
  faAdobe,
  faGithub,
  faNode,
  faNpm,
} from "@fortawesome/free-brands-svg-icons"

const About = () => (
  <Layout>
    <SEO
      title="About"
      description="Read a little about front end developer JD. Click here to read more."
    />
    <Section className="about inner">
      <Container className="container">
        <Column className="column">
          <h1>About</h1>
          <p>Hi, I'm JD.</p>
          <p>
            Currently working as a front end web developer at a digital agency
            in Burlington. We get to work with amazing brands like Tim Hortons,
            PC Financial, Meridian and Blackberry, just to name a few.
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
              Developed a code component library for continued use on all
              projects, improving the development team's efficiency
            </li>
            <li>
              Design and develop interactive user-experience driven custom CMS
              websites and web applications with HTML5, CSS3 (Sass), Flexbox,
              JavaScript, Foundation, Bulma, Reactjs, VueJS, Gatsby and
              WordPress
            </li>
            <li>Front end developer quotes for RFPs and new business</li>
            <li>
              Member of the AODA / WCAG board, that primarily deals with the
              importance and implementation of accessibility throughout all web
              projects
            </li>
            <li>
              Co-created WorkShare - an internal project tracking system that
              helps teams within the company track fly-ins, among other projects
            </li>
            <li>
              Work closely with the strategy and design team to ensure project
              success and to meet client-expected deadlines
            </li>
          </ul>
          <p>
            <strong>Technical skills:</strong>
          </p>
          <Container className="container flex">
            <Column className="column">
              <FontAwesomeIcon icon={faHtml5} />
            </Column>
            <Column className="column">
              <FontAwesomeIcon icon={faCss3} />
            </Column>
            <Column className="column">
              <FontAwesomeIcon icon={faSass} />
            </Column>
            <Column className="column">
              <FontAwesomeIcon icon={faJs} />
            </Column>
          </Container>
          <Container className="container flex">
            <Column className="column">
              <FontAwesomeIcon icon={faWordpress} />
            </Column>
            <Column className="column">
              <FontAwesomeIcon icon={faReact} />
            </Column>
            <Column className="column">
              <FontAwesomeIcon icon={faVuejs} />
            </Column>
            <Column className="column">
              <FontAwesomeIcon icon={faGit} />
            </Column>
          </Container>
          <Container className="container flex">
            <Column className="column">
              <FontAwesomeIcon icon={faBootstrap} />
            </Column>
            <Column className="column">
              <FontAwesomeIcon icon={faSketch} />
            </Column>
            <Column className="column">
              <FontAwesomeIcon icon={faAdobe} />
            </Column>
            <Column className="column">
              <FontAwesomeIcon icon={faGithub} />
            </Column>
          </Container>
          <Container className="container flex">
            <Column className="column">
              <FontAwesomeIcon icon={faNode} />
            </Column>
            <Column className="column">
              <FontAwesomeIcon icon={faNpm} />
            </Column>
            <Column className="column">&nbsp;</Column>
            <Column className="column">&nbsp;</Column>
          </Container>
        </Column>
      </Container>
    </Section>
  </Layout>
)

export default About
