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
      description="Seasoned remote front-end developer with a core focus on driving business results. Experienced in developing websites and web applications that deliver on impact, functionality and accessibility. Employed at one of Canada’s largest equipment rental operations."
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
