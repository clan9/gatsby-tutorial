import React from "react"
import Layout from "../components/Layout"
import Tours from "../components/Tours/Tours"
import { graphql } from "gatsby"

const tours = ({ data }) => {
  return (
    <Layout>
      hello from tours page
      <Tours tours={data.tours.edges} />
    </Layout>
  )
}

export const getTours = graphql`
  query {
    tours: allContentfulTour {
      edges {
        node {
          name
          price
          slug
          country
          id: contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default tours
