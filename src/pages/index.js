import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Skills from "../components/skills/skills"
import Work from "../components/work/work"

const Home = () => (
  <Layout>
    <SEO
      title="Burlington Freelance Web Designer, Front End Developer"
      description="Burlington freelance web designer, front end developer. JD has has had the pleasure of doing work for Tim Hortons, PC Financial and Blackberry. Contact him today to see how he can help."
    />
    <Hero
      title="Hi! I'm JD. A Burlington freelance web designer and front end developer that creates interactive online experiences."
      description="I've worked with amazing clients such as Tim Hortons, PC Financial and Blackberry."
    />
    <Work
      introDescription="As a Burlington freelance web designer and front end web developer that works with local businesses in all sorts of different industries, I only have two main goals when it comes to your any businesses digital strategy:"
      introPointOne="To help build trust &amp; credibility, and"
      introPointTwo="To help make more money"
      introDescriptionTwo="A big part of my success as being a Burlington front end web developer, is that I understand how digital strategy works."
      introDescriptionThree="I understand how important that first impressions are, and also how website optimization and performance directly affects how you're perceived as a business, and how it can affect the bottom line. And as a digital strategist and web developer, it's my job to make sure your online presence reflects that you're credible and trustworthy to people that visit your website for the first time."
    />
    <Skills />
  </Layout>
)

export default Home
