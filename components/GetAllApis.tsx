import React from "react"
import { graphql } from "gatsby"

const Result = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    allSidebar(filter: {name: {eq: "catalog"}}) {
      edges {
        node {
          id
          name
          pages {
            page
            group
            expanded
            label
            pages {
              label
              separator
              pages {
                page
              }
            }
          }
        }
      }
    }
  }
`

export function ComponentName({Result}) {

  console.log(Result);

  return (
    <div>
      {Result}
    </div>
  );
}
