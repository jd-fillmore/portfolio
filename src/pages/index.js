import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Skills from "../components/skills/skills"
import Work from "../components/work/work"

const Home = () => (
  <Layout>
    <SEO
      title="WordPress Developer | Web Development React | Grimsby, ON"
      description="JD Fillmore is a web developer in Grimsby, ON that specializes in WordPress and React development, and other website development technologies. Click here to start your next project."
    />
    <Hero
      title="Hi! I'm JD. A front end developer from Grimsby, Ontario that creates interactive online experiences."
      description="I've worked with amazing clients such as Tim Hortons, PC Financial and Blackberry."
    />
    <Work />
    <Skills />
  </Layout>
)

export default Home
