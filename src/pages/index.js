import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Skills from "../components/skills/skills"
import Work from "../components/work/work"

const Home = () => (
  <Layout>
    <SEO
      title="Front End Developer Portfolio | React &amp; WordPress | Toronto, ON"
      description="JD Fillmore's front end developer, React and WordPress portfolio. Click here to start your next project. Based in Toronto, ON."
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
