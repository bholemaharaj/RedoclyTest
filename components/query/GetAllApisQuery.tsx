import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const GetAllApisQuery = () => {
    const {data} = useStaticQuery(graphql`
    query GetAllApisQuery{
      allSidebar(filter: {name: {eq: "catalog"}}) {
        edges {
          node {
            pages {
              group
              page
              pages {
                page
                label
                pages {
                  page
                }
              }
            }
          }
        }
      }
    }
  `)
    return data.allSidebar.edges[0].node.pages
  }

export default GetAllApisQuery

