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
      title="👋 Hey, I'm JD. I design and code for the front-end."
      description="Currently with Battlefield Equipment Rentals as a remote front-end developer &amp; designer."
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
