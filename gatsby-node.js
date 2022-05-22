exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allGraphCmsWorks1 {
        edges {
          node {
            title
          }
        }
      }
    }
  `)
  
  data.allGraphCmsWorks1.edges.forEach(edge => {
    const slug = edge.node.title
    actions.createPage({
      path: `works/${slug.split(" ").join("")}`,
      component: require.resolve(`./src/templates/work.js`),
      context: { slug: slug },
    })
  })
}
