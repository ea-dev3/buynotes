const pageQuery = `{
    pages: allMdx(filter: {fileAbsolutePath: {regex: "/notes/"}}) {
      nodes {
        fields {
          slug
        }
      }
    }
  }`
const notesQuery = `{
  allMdx(filter: {fileAbsolutePath: {regex: "/notes/"}}) {
    nodes {
      fields {
        slug
      }
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        tag
        title
      }
      headings {
        value
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
