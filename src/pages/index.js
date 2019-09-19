import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Skills from "../components/skills/skills"
import Work from "../components/work/work"

const Home = () => (
  <Layout>
    <SEO
      title="JD Fillmore | WordPress Web Developer, Design Consultant | Grimsby, ON"
      description="JD Fillmore is a web developer in Grimsby, ON that specializes in WordPress development, and other website development technologies. Click here to start your next project."
    />
    <Hero
      title="Hi! I'm JD. A WordPress developer, front end developer &amp; web designer from Grimsby, Ontario that creates interactive online experiences."
      description="I've worked with amazing clients such as Tim Hortons, PC Financial and Blackberry."
    />
    <Work />
    <Skills />
  </Layout>
)

export default Home
