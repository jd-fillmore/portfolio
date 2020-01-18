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
      description="JD Fillmore is a front end developer that has worked with national brands building out interactive, online experiences. Click here to view projects."
    />
    <Hero
      title="Front-End Developer &amp; UI Designer who enjoys working with React."
      description="Hi, I'm JD. I've worked with amazing international brands such as Tim Hortons, VelocityEHS and Thrillworks."
    />
    <Work />
    <Skills />
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
