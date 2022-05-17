import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import "../styles/index.scss"
export default function Home() {
const data = useStaticQuery(
  graphql`
    query {
      desktop: file(relativePath: { eq: "background.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 4032, maxHeight: 3024) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `
)


  const imageData = data.desktop.childImageSharp.fluid




  return (
    <div className="">
      <BackgroundImage
        className="background-image"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100vw'

        }}
        Tag="section"
        fluid={imageData}
        backgroundColor={`#040e18`}
      >
        <Link className="home-name-link" to="/works">
          <h1>Rajkomal Chowdhury</h1>
        </Link>
      </BackgroundImage>
    </div>
  ) 
  }