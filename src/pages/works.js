import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import WorkTile from "../components/WorkTile"
import "../styles/works.scss"



const Works = ({ data }) => {
  const [works, setWorks] = useState(data.allGraphCmsWorks1.edges)
  const [openFilterPanel, setOpenFilterPanel] = useState(false)
  const [filterValue, setFilterValue] = useState('')

  const handleSetFilter = (e) => {
    if (filterValue === e.target.value) {
      setFilterValue("")
    } else {
      setFilterValue(e.target.value)
    }

  }
  


  return (
    <>
      <Layout>
        <div className="works-container">
          <div className="filter-column-container">
            <button
              onClick={() => setOpenFilterPanel(!openFilterPanel)}
              className="filter-toggle-btn"
            >
              <h2>Filter</h2>
            </button>
            {openFilterPanel && (
              <div className="filter-list">
                <button
                  className={`filter-val-button ${
                    filterValue === "Architecture"
                      ? "filter-val-button__selected"
                      : null
                  }`}
                  value="Architecture"
                  onClick={e => handleSetFilter(e)}
                >
                  architecture
                </button>
                <button
                  className={`filter-val-button ${
                    filterValue === "Apparel"
                      ? "filter-val-button__selected"
                      : null
                  }`}
                  value="Apparel"
                  onClick={e => handleSetFilter(e)}
                >
                  apparel
                </button>
                <button
                  className={`filter-val-button ${
                    filterValue === "Objects"
                      ? "filter-val-button__selected"
                      : null
                  }`}
                  value="Objects"
                  onClick={e => handleSetFilter(e)}
                >
                  objects
                </button>
                <button
                  className={`filter-val-button ${
                    filterValue === "Studies"
                      ? "filter-val-button__selected"
                      : null
                  }`}
                  value="Studies"
                  onClick={e => handleSetFilter(e)}
                >
                  studies
                </button>
                <button
                  className={`filter-val-button ${
                    filterValue === "Academia"
                      ? "filter-val-button__selected"
                      : null
                  }`}
                  value="Academia"
                  onClick={e => handleSetFilter(e)}
                >
                  academia
                </button>
              </div>
            )}
          </div>
          <div className="work-main-images">
            {works.filter(work => {
              if (filterValue) {
               if (work.node.workTypes === filterValue) {
                 return work
               }
              } else {
                return work
              }

            }).map(edge => {
              return (
                <WorkTile
                  key={edge.node.id}
                  image={edge.node.mainImage}
                  title={edge.node.title}
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
    allGraphCmsWorks1 {
      edges {
        node {
          mainImage {
            gatsbyImageData(width: 720, height: 540)
          }
          title
          id
          workTypes
        }
      }
    }
  }
`


export default Works
