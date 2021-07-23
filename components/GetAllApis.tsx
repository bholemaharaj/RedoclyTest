import * as React from 'react';
import { StaticQuery, graphql } from "gatsby"


// export function GetAllApis() {
//   const [count, setCount] = React.useState(0);

//   return (
//     <div style={{ border: '1px solid red', padding: '10px' }}>
//       <div style={{ fontSize: '18px', marginBottom: '10px' }}>
//         Clicks: <strong>{count}</strong>
//       </div>
//       <button onClick={() => setCount(count + 1)}> Click </button>
//     </div>
//   );
// }


// export const ComponentName = () => (
//   <StaticQuery
//     query={graphql`
//       {
//         allSidebar(filter: {name: {eq: "catalog"}}) {
//           edges {
//             node {
//               id
//               name
//               pages {
//                 page
//                 group
//                 expanded
//                 label
//                 pages {
//                   label
//                   separator
//                   pages {
//                     page
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     `}
//     render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}
//   ></StaticQuery>
// )

export function MyList() {
  return (
    <StaticQuery
    query={graphql`
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
    `}
    render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}
  ></StaticQuery>
  );
}