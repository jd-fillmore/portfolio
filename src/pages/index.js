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
      title="JD | Front-End Developer, Web / UI Designer"
      description="JD is a front-end developer and UI Designer. Click here to view some of JD Fillmore's client work and to get a quote today."
    />
    <Hero
      title="👋 J.D. Fillmore - Front-End Developer"
      description="Front-End Developer with 8 years of experience designing and developing responsive websites & web applications for small to large companies."
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
