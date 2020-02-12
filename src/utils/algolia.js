const pageQuery = `{
    pages: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/pages/" },
        frontmatter: {purpose: {eq: "page"}}
      }
    ) {
      edges {
        node {
          objectID: id
          frontmatter {
            title
            
          }
          excerpt(pruneLength: 5000)
        }
      }
    }
  }`
const notesQuery = `{
    notes: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/notes/" } }
    ) {
      edges {
        node {
          objectID: id
          frontmatter {
            title
            
            date(formatString: "MMM D, YYYY")
            
          }
          excerpt(pruneLength: 5000)
        }
      }
    }
  }`
const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest,
  }))
const settings = { attributesToSnippet: [`excerpt:20`] }
const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => flatten(data.pages.edges),
    indexName: `Pages`,
    settings,
  },
  {
    query: notesQuery,
    transformer: ({ data }) => flatten(data.notes.edges),
    indexName: `Notes`,
    settings,
  },
]
module.exports = queries
