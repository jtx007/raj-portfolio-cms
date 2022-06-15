import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import "../styles/about.scss"
const About = ({ data }) => {
  const { text } = data.graphCmsAboutPage.body

  return (
    <Layout>
      <div className="about-page-container">
        <div className="about-text">{text}</div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    graphCmsAboutPage {
      id
      body {
        text
      }
    }
  }
`

export default About
