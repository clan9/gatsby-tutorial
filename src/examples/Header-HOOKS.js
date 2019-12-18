import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        data {
          name
          age
        }
      }
    }
  }
`

const HeaderHook = () => {
  // Note - destructuring data.site.siteMetadata
  // and then rename/alias siteMetadata to 'info':
  // const { site: { siteMetadata: info } } = useStaticQuery(getData)
  const {
    site: { siteMetadata: info },
  } = useStaticQuery(getData)
  return (
    <div>
      {/*<h1>author: {data.site.siteMetadata.author}</h1> */}
      <p>This header uses useStaticQuery hook: </p>
      <h1>author: {info.author}</h1>
      <h1>title: {info.title}</h1>
    </div>
  )
}

export default HeaderHook
