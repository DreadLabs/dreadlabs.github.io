const path = require("path")

exports.createPages = ({actions, graphql}) => {
  const {createPage} = actions

  const impressumTemplate = path.resolve(`src/templates/impressum.js`)

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({node}) => {
      createPage({
        path: node.frontmatter.path,
        component: impressumTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  })
}
