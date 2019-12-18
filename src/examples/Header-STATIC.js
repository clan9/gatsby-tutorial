import React from "react"
import { graphql, StaticQuery } from "gatsby"

const getData = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
  }
`

const HeaderStatic = () => {
  return (
    <StaticQuery
      query={getData}
      render={data => {
        return (
          <div>
            <p>This header uses StaticQuery (older way with render props):</p>
            <h1>{data.site.siteMetadata.description}</h1>
          </div>
        )
      }}
    ></StaticQuery>
  )
}

export default HeaderStatic
