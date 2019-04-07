import React from "react"

import Container from "../container/container"
import Column from "../column/column"
import ProjectOverview from "../project-overview/project-overview"
import Button from "../button/button"

import ff7 from "../../images/ff7.jpg"
import infused from "../../images/infused.jpg"
import tims from "../../images/tims.jpg"
import portfolio from "../../images/port.jpg"
import cardon from "../../images/cardon.jpg"
import hps from "../../images/hps.jpg"
import cma from "../../images/cma.jpg"

import "../work/work.scss"

const Work = () => (
  <>
    <section className="work">
      <Container className="container">
        <Column className="column">
          <h2>My Purpose As Your Web Developer</h2>
          <p>As a web developer in Toronto that works with local businesses in all sorts of different industries, I only have two main goals when it comes to your digital strategy:</p>
          <ul>
            <li>To help you <strong>build trust &amp; credibility</strong>, and</li>
            <li>To help you <strong>make more money</strong></li>
          </ul>
        </Column>
        <Column className="column">
          <h2>Digital Strategy in Toronto</h2>
          <p>A big part of my success as being a web developer in Toronto, is that I understand how digital strategy works. I understand how important that first impressions are, and also how website optimization and performance directly affects how you're perceived as a business, and how it can affect the bottom line. And as a digital strategist and web developer, it's my job to make sure your online presence reflects that you're credible and trustworthy to people that visit your website for the first time.</p>
        </Column>
      </Container>
      <Container className="container">
        <Column className="column">
          <h3>Projects in Toronto &amp; Beyond</h3>
        </Column>
      </Container>
       {/* Row 1 */}
       <Container className="container">
        <Column className="column">
          <ProjectOverview image={tims} altTag="Tim's" heading="Tim Hortons" description="Built with HTML5, CSS3, Sass and JavaScript" linkText="View Project" link="/tims"/>
        </Column>
        <Column className="column">
          <ProjectOverview image={cardon} altTag="Cardon" heading="Cardon Rehab" description="Custom WordPress build, HTML5, Sass and JavaScript" linkText="View Project" link="/cardon"/>
        </Column>
      </Container>
      {/* Row 2 */}
      <Container className="container two">
        <Column className="column">
          <ProjectOverview image={hps} altTag="Hammond" heading="Hammond Power" description="HTML5, CSS3, Sass and JavaScript on SiteCore" linkText="View Project" link="/hammond"/>
        </Column>
        <Column className="column">
        <ProjectOverview image={cma} altTag="CMA" heading="CMA Mortgages" description="Custom WordPress build, HTML5, Sass and JavaScript" linkText="View Project" link="/cma"/>
        </Column>
      </Container>
      <Container className="container">
        <Column className="column">
          <h3>Self-Learning Side Projects</h3>
        </Column>
      </Container>
      <Container className="container">
        <Column className="column flex">
          <ProjectOverview image={ff7} altTag="FF7 Stats App" heading="Final Fantasy Stats" description="JavaScript and React-based web application" linkText="View Project" link="/ff7"/>
        </Column>
        <Column className="column flex">
          <ProjectOverview image={infused} altTag="Infused Agency" heading="Infused Agency" description="Static generated site on VueJS, JavaScript and Gridsome" linkText="View Project" link="/infused"/>
        </Column>
        <Column className="column flex">
          <ProjectOverview image={portfolio} altTag="Portfolio" heading="Portfolio" description="Static generated site on React, Gatsby and JavaScript" linkText="View Project" link="/portfolio"/>
        </Column>  
      </Container>
      <Container className="container">
        <Column className="column work-row">
        <a href="https://www.behance.net/jdfillmore" target="_blank" rel="noopener noreferrer"><Button className="work-btn">View More Work</Button></a>
        </Column>
      </Container>
    </section>
  </>
)

export default Work
