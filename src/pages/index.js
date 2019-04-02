import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Skills from "../components/skills/skills"
import Work from "../components/work/work"

const Home = () => (
  <Layout>
    <SEO
      title="Niagara Front End Developer, Designer"
      keywords={[`gatsby`, `application`, `react`]}
      description="JD Fillmore is a Niagara-based front and developer and designer. He's had the pleasure of doing work for Tim Hortons, PC Financial and Blackberry."
    />
    <Hero
      title="Hi! I'm JD."
      subtitle="A front end developer & designer that creates interactive online experiences."
      description="Currently working at Thrillworks, with amazing clients such as Tim Hortons, PC Financial and Blackberry."
    />
    <Work />
    <Skills />
  </Layout>
)

export default Home
