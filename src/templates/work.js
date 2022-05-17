import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import "../styles/work.scss"
export default function WorkPost({ data }) {
  const work = data.markdownRemark
  return (
    <Layout>
      <div className="work-container">
        <div className="image-gallery">
        <GatsbyImage
          alt={work.frontmatter.title}
          image={work.frontmatter.main_image.childImageSharp.gatsbyImageData}
          />
        </div>
        <section className="work-text-container">
          <h1>{work.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: work.html }} />
          <p>{work.frontmatter.description}</p>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { title: { eq: $slug } }) {
      html
      frontmatter {
        date
        description
        title
        work_type
        main_image {
          childImageSharp {
            gatsbyImageData(width: 720, height: 540)
          }
        }
      }
    }
  }
`