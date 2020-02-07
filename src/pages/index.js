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
      title="Front-End Developer and UI Designer"
      description="Hi, I'm JD. I design &amp; build the front-end for web applications and websites. Currently at Battlefield Equipment Rentals as a front-end developer &amp; designer."
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
