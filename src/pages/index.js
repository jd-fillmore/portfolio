import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Work from "../components/work/work"

const Home = () => (
  <Layout>
    <SEO title="Niagara Front End Developer, Designer" keywords={[`gatsby`, `application`, `react`]} description="JD Fillmore is a Niagara-based front and developer and designer. He's had the pleasure of doing work for Tim Hortons, PC Financial and Blackberry." />
    <Hero></Hero>
    <Work></Work>
  </Layout>
)

export default Home
