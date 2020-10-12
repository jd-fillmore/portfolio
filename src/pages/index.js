import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Skills from "../components/skills/skills"
import Work from "../components/work/work"

const skills = [
  "React",
  "React Hooks",
  "JavaScript",
  "TypeScript",
  "Styled Components",
  "Gatsby",
  "Sass",
  "Accessibility",
  "Adobe XD",
]

const Home = () => (
  <Layout>
    <SEO
      title="JD Fillmore | Front-End Developer, UI Designer"
      description="JD is a front-end developer and UI Designer. Click here to view some of JD Fillmore's client work and to get a quote today."
    />
    <Hero
      title="Front-end developer & UI designer."
      description="Years of experience working with national brand & SaaS products. Enjoy tinkering with API's, creating beautiful user interfaces and more."
    />
    <Skills title="Recent Technology Stack" skills={skills} />
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
