import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Paper from "@material-ui/core/Paper"

import NoteCard from "./components/NoteCard"
import AccountingSvg from "../images/accounting.svg"
import EconomicsSvg from "../images/economics.svg"

export default () => (
  <StaticQuery
    query={graphql`
      query SITE_INDEX_QUERY {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { frontmatter: { published: { eq: true } } }
        ) {
          nodes {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    `}
    render={data => (
      <>
        {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
          <NoteCard
            key={id}
            title={frontmatter.title}
            chapters="14"
            src={AccountingSvg}
            link={fields.slug}
          />
        ))}
      </>
    )}
  />
)
