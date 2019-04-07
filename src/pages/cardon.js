import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ProjectDetailed from "../components/project-detailed/project-detailed";

const Tims = () => (
  <Layout>
    <SEO
      title="Cardon Rehab"
      description="While at Thrillworks, I constructed the front end development on Cardon Rehab's new website. Click here to learn more."
    />
    <ProjectDetailed/>
  </Layout>
)

export default Tims;