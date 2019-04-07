import React from "react"

import Layout from "../components/layout"
import Container from "../components/container/container"
import Column from "../components/column/column"
import SEO from "../components/seo"

import ProjectDetailed from "../components/project-detailed/project-detailed";

const Tims = () => (
  <Layout>
    <SEO
      title="Tim Hortons"
      description="I helped build out one of Tim Horton's campaigns, on the front end. Click here to learn more."
    />
    <Container>
      <Column>
        <ProjectDetailed/>
      </Column>
    </Container>
  </Layout>
)

export default Tims;