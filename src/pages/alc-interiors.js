import React from "react"

import Layout from "../components/layout"
import Container from "../components/container/container"
import Column from "../components/column/column"
import SEO from "../components/seo"

import alcIntroImage from "../images/alc-intro.jpg"
import alcSplitImage from "../images/alc-split.jpg"
import alcMobileImage from "../images/alc-mobile.jpg"

import ProjectDetailed from "../components/project-detailed/project-detailed"

const Portfolio = () => (
  <Layout>
    <SEO
      title="ALC Interiors"
      description="ALC Interiors website based on Gatsby and React, launched with Netlify. Click here to learn more."
    />
    <Container>
      <Column>
        <ProjectDetailed
          introImage={alcIntroImage}
          altTag="ALC Interiors intro image"
          projectTitle={[
            "ALC Interiors",
            <p>
              <strong>Website is still in development.</strong>
            </p>,
          ]}
          projectLink="https://alcint.netlify.com"
          projectDescription="ALC Interiors came to me with a website in mind. I decided to build out the website with newer technologies, to expand my skillset. Those technologies were ReactJS, Gatsby and Netlify. My role here was to manage the client and their expectations, UI design, front end development and on-page SEO."
          techUsed="Adobe XD, React, Gatsby, JavaScript, Node, Sass."
          githubText="View Code on Github"
          githubLink="https://github.com/jd-fillmore/alc-interiors"
          splitImage={alcSplitImage}
          altTagSplit="ALC Interiors split image"
          mobileImage={alcMobileImage}
          altTagMobile="ALC Interiors mobile image"
        />
      </Column>
    </Container>
  </Layout>
)

export default Portfolio
