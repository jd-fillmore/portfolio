import React from "react"
import { graphql } from "gatsby"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Skills from "../components/skills/skills"
import Work from "../components/work/work"

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const Home = () => (
  <Layout>
    <SEO
      title="Freelance Designer, Web Developer, WordPress in Niagara | JD Fillmore"
      description="JD Fillmore is Niagara-based freelance designer, web developer and WordPress developer. Click here to view some of his work."
    />
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1 }}
    >
      <Hero
        title="Front-end developer with an eye for design."
        description="Years of experience working with national brand & SaaS products. Enjoy tinkering with API's, creating beautiful user interfaces and more."
      />
    </motion.div>
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
