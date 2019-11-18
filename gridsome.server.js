// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  // api.createPages(({ createPage }) => {
  //   // Use the Pages API here: https://gridsome.org/docs/pages-api/
  // })
  api.createPages(async({ graphql, createPage }) => {
    const result = await graphql(`{
      allPost {
        edges {
          node {
            id
            path
          }
        }
      }
    }`)

    result.data.allPost.edges.forEach(({ node }, i, edges) => {
      const prev = edges[i - 1]
      const next = edges[i + 1]
    
      createPage({
        path: node.path,
        component: './src/templates/PostTemplate.vue',
        queryVariables: {
          id: node.id,
          prevId: prev ? prev.node.id : null,
          nextId: next ? next.node.id : null
        }
      })
    })
  })
}
