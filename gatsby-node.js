
const { fmImagesToRelative } = require("gatsby-remark-relative-images")


exports.onCreateNode = ({ node, actions, getNode }) => {
  fmImagesToRelative(node)
}

exports.createPages = async function ({node, actions, graphql, getNode }) {
  
  const { data } = await graphql(`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/works/" } }) {
        edges {
          node {
            frontmatter {
              title
              date
              work_type
              description
              main_image {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `)
  data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.frontmatter.title
    actions.createPage({
      path: `works/${slug.split(" ").join("")}`,
      component: require.resolve(`./src/templates/work.js`),
      context: { slug: slug },
    })
  })
}
