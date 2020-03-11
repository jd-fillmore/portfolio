import React from "react"

import Layout from "../components/layout"
import Container from "../components/container/container"
import Column from "../components/column/column"
import SEO from "../components/seo"
import introImage from "../images/freelance-web-designer-burlington.jpg"

import "../components/seo.scss"

const Burlington = () => (
  <Layout>
    <SEO
      title="Freelance Web Designer in Burlington, ON"
      description="Hire the best freelance Web Designer in Burlington, ON. Need a website designer, website developer or SEO done? Get a fast quote from me ASAP."
    />
    <section class="seo-landing">
      <div className="hero">
        <Container className="container">
          <Column className="column">
            <h1>Best Freelance Web Designer in Burlington, ON</h1>
            <p>
              Live in Burlington, ON and need a freelance website designer to...
            </p>
            <ul>
              <li>Get your website re-designed?</li>
              <li>Get a new website that brings in business?</li>
              <li>Get more sales through SEO?</li>
              <li>Maximize profits?</li>
            </ul>
          </Column>
          <Column className="column">
            <p>Fill out the form below and I'll get back to you ASAP.</p>
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <div class="form-group">
                <input
                  name="name"
                  type="name"
                  class="form-control"
                  id="Name"
                  aria-describedby="namehelp"
                  placeholder="Full Name"
                />
              </div>
              <div class="form-group">
                <input
                  name="email"
                  type="email"
                  class="form-control"
                  id="Email"
                  placeholder="Email"
                />
              </div>
              <div class="form-group">
                <input
                  name="company"
                  type="name"
                  class="form-control"
                  id="Company"
                  aria-describedby="companyname"
                  placeholder="Company Name"
                />
              </div>
              <div class="form-group">
                <input
                  name="url"
                  type="name"
                  class="form-control"
                  id="URL"
                  aria-describedby="urlhelp"
                  placeholder="Website URL"
                />
              </div>
              <div class="form-group">
                <textarea
                  name="message"
                  class="form-control"
                  id="Message"
                  rows="3"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
            </form>
          </Column>
        </Container>
      </div>

      {/* <!--Intro--> */}
      <div className="intro">
        <Container className="container">
          <Column className="column">
            <div className="center">
              <h2>Specialized Freelance Web Designer in Burlington</h2>
              <p>
                Some reasons why I'm your top pick as a freelance web designer
                based in the Burlington area
              </p>
            </div>
            <img src={introImage} alt="Freelance Web Designer Burlington, ON" />
            <p>
              "Since he built my new website, I've received lots of praise, and
              business from it".
            </p>
            <p>Cass-A-Bella Construction</p>
          </Column>
        </Container>
        <Container className="container">
          <Column className="column">
            <h4>Modern, Quality</h4>
            <p>
              I don't design or build websites on old, janky platforms. Your
              website will be that of top quality code.
            </p>
          </Column>
          <Column className="column">
            <h4>Speed, Performance</h4>
            <p>
              Blazing fast on all page speed website tests, and lightning fast
              for your users to browse and use.
            </p>
          </Column>
          <Column className="column">
            <h4>More Leads, More Revenue</h4>
            <p>
              With a modern, quality website that's fast and performant, this
              helps rank in Google. More leads for you.
            </p>
          </Column>
        </Container>
      </div>
    </section>
  </Layout>
)

export default Burlington
