import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Skills from "../components/skills/skills"
import Work from "../components/work/work"

const Home = () => (
  <Layout>
    <SEO
      title="Web Developer in Toronto, Front End Designer"
      description="As a front end web developer in Toronto, and designer, JD Fillmore has had the pleasure of doing work for Tim Hortons, PC Financial and Blackberry. Contact him today to see how he can help."
    />
    <Hero
      title="Hi! I'm JD. A front end designer &amp; web developer in Toronto that creates interactive online experiences."
      description="I've worked with amazing clients such as Tim Hortons, PC Financial and Blackberry."
    />
    <Work />
    <Skills />
  </Layout>
)

export default Home
