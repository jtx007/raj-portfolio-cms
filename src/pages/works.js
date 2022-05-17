import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import WorkTile from "../components/WorkTile"
import "../styles/works.scss"

const Works = ({ data }) => {
  const [filter, setFilter] = useState()
  const [openFilterPanel, setOpenFilterPanel] = useState(false)
  const works = data.allMarkdownRemark.edges

  

  return (
    // TODO: grid 3 X 3 with images the same size
    // TODO: on hover have project title come up and make picture filter darker

    <>
      <Layout>
        <div className="works-container">
          <div className="filter-column-container">
            <button onClick={() => setOpenFilterPanel(!openFilterPanel)} className="filter-toggle-btn">
              <h2>Filter</h2>
            </button>
            {openFilterPanel && (
              // TODO: Put filter options to the left 
              
            <div className="filter-list">
                <p>architecture</p>
                <p>apparel</p>
                <p>objects</p>
                <p>studies</p>
                <p>academia</p>
            </div>
      
            )}

          </div>
          <div className="work-main-images">
            {works.map(work => {
              return (
                <WorkTile
                  key={work.node.id}
                  image={work.node.frontmatter.main_image}
                  title={work.node.frontmatter.title}
                  type={work.node.frontmatter.work_type}
                />
              )
            })}
          </div>
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/works/" } }) {
      edges {
        node {
          id
          frontmatter {
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
    }
  }
`

export default Works
