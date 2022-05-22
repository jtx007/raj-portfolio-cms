import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import "../styles/work.scss"
export default function WorkPost({ data }) {

  const work = data.graphCmsWorks1

  
  return (
    <Layout>
      <div className="work-container">
        <div className="image-gallery">
          <GatsbyImage
            alt={work.title}
            image={work.mainImage.gatsbyImageData}
          />
          {work.imageGallery &&
            work.imageGallery.map(image => {
              return (
                <GatsbyImage
                  key={image.id}
                  alt={image.title}
                  image={image.gatsbyImageData}
                />
              )
            })}
        </div>
        <section className="work-text-container">
            <h2>{work.title}</h2>
            <p>{work.description.text}</p>
        </section>
      </div>
    </Layout>
  )



}

  export const query = graphql`
    query ($slug: String!) {
      graphCmsWorks1(title: { eq: $slug }) {
        id
        
        description {
          text
          raw
          html
        }
        imageGallery {
          id
          gatsbyImageData(height: 540, width: 720)
        }
        mainImage {
          gatsbyImageData(height: 540, width: 720)
        }
        title
        workTypes
        projectDate
      }
    }
  `