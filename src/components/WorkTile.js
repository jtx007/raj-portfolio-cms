import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
const WorkTile = ({ image, title, type }) => {
  console.log(image, title, type)
  return (
    <div className="work-tile">
      <div className="work-tile-overlay">
        <Link to={`${title.split(" ").join("")}`}>
          <GatsbyImage
            imgClassName="work-main-image"
            alt={title}
            image={image.gatsbyImageData}
          />
          <div className="work-details">
            <h3 className="work-title">{title}</h3>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default WorkTile
