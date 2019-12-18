import React from "react"
import Navbar from "./Navbar"
// import "../scss/layout.scss"

export default ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}
