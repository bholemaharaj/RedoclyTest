import React from "react"
import { StaticQuery, graphql } from "gatsby"
 
/* Loading Static Query
export default () => ( 
  <StaticQuery
  query={graphql`
  {
    site {
      siteMetadata {
        title
        siteUrl
        description
      }
    }
  }
  `
  }
  render={ data =>(
      <div>
        <h1>About {JSON.stringify(data)}</h1>
        <h2>We're a very cool website you should return to often.</h2>
      </div>
    )
  } 
  />
)
*/
 
//export default Page
 

/* export const Page = () =>{
  const { data } = useStaticQuery(query)

  return (
    <div>
      <h1>About {data.site.siteMetadata.title}</h1>
      <h2>We're a very cool website you should return to often.</h2>
    </div>
  )
} */

export const query = graphql`
{
  site {
    siteMetadata {
      title
      siteUrl
      description
    }
  }
}`

const Page = ({ data }) => <h3>{JSON.stringify(data)}</h3>


console.log(Page);

export default Page


/* export const Page = () => (
  <StaticQuery
    query={graphql`
      {
        allFile {
          edges {
            node {
              id
            }
          }
        }
      }
    `}
    render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}
  ></StaticQuery>
) */

/* export var Page = () => {
  const data = useStaticQuery(graphql`
    {
      allFile {
        edges {
          node {
            id
          }
        }
      }
    }
  `)
  return <pre>{JSON.stringify(data, null, 4)}</pre>
} */



/* 
const Page = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            siteUrl
            description
          }
        }
      }
    `}
    render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}
  ></StaticQuery>
)

export default Page */