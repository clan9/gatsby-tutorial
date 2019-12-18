import React from "react"
import Layout from "../components/Layout"
import HeaderHook from "../examples/Header-HOOKS"
import HeaderStatic from "../examples/Header-STATIC"
import { graphql } from "gatsby"

const example = props => {
  // Note that we aliased 'data' to 'person' in the query below
  const { name, age } = props.data.site.siteMetadata.person

  return (
    <Layout>
      <p>examples page</p>
      <HeaderHook />
      <HeaderStatic />
      <p>The data below is from a PageQuery in examples.js:</p>
      <h4>Person Name: {name}</h4>
      <h4>Person age: {age}</h4>
    </Layout>
  )
}

// This is how you set up a PageQuery
// You can use static queries in page files & components i.e. StaticQuery & useStaticQuery
// But you can only use PageQuery in pages
// It needs to be exported so that the data prop
// gets added to the existing props already on a page component
export const getPageData = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        person: data {
          name
          age
        }
      }
    }
  }
`

export default example
