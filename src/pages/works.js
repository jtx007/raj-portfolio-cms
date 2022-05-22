import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import WorkTile from "../components/WorkTile"
import "../styles/works.scss"



const Works = ({ data }) => {
  const [openFilterPanel, setOpenFilterPanel] = useState(false)


  
  

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
            {data.allGraphCmsWorks1.edges.map(edge => {
              return <WorkTile key={edge.node.id} image={edge.node.mainImage} title={edge.node.title} />
            })}
          </div>
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    allGraphCmsWorks1 {
      edges {
        node {
          mainImage {
            gatsbyImageData(width: 720, height: 540)
          }
          title
          id
        }
      }
    }
  }
`


export default Works
