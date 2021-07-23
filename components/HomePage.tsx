import * as React from 'react';
import { graphql } from 'gatsby';

export const query = graphql`
  query HomePageQuery {
      allFile {
      edges {
        node {
          id
        }
      }
    }
  }
`

export function HomePage({data}) {

  console.log(data);

  return (
    <div>
      Hello!
    </div>
  );
}

