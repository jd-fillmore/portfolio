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
      title="Front End Developer | React &amp; WordPress | St. Catharines, Niagara, ON"
      description="JD Fillmore is a front end developer from St. Catharines, Niagara, ON. Specializing in WordPress and React. Click here to contact!"
    />
    <Hero
      title="Hi! I'm JD. A frontend developer &amp; UI designer that creates interactive online experiences."
      description="I've worked with amazing clients such as Tim Hortons, PC Financial and Blackberry."
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
