import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Skills from "../components/skills/skills"
import Work from "../components/work/work"

const Home = () => (
  <Layout>
    <SEO
      title="JD Fillmore | Front-End Developer, UI Designer"
      description="JD is a front-end developer and UI Designer. Click here to view some of JD Fillmore's client work and to get a quote today."
    />
    <Hero
      title="Front-end developer & UI designer."
      description={[
        "Experience developing and designing functional, accessible websites and web applications for in-house corporations and clients. Experienced in leading projects, amplifying company revenue and mentoring junior front-end developers.",
        <br />,
        <br />,
        "If you require a technology I haven’t used, I am willing to learn it.",
      ]}
    />
    <Skills title="Recent Technology Stack" />
    <Work />
  </Layout>
)

export default Home

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            heroText
            heroTitle
            myImage
          }
        }
      }
    }
  }
`
