import React, { useEffect } from "react"
import { navigate } from "gatsby"
import styled from "styled-components"

// import Layout from "../components/layout"
// import SEO from "../components/seo"

// const Wrapper = styled.div`
//   margin: 250px auto;
//   text-align: center;
// `

const NotFoundPage = () => {
  // send user to home page if page not found
  useEffect(() => {
    navigate("/")
  }, [])

  return null
  // return (
  //   <Layout>
  //     <SEO title="404: Not found" />
  //     <Wrapper>
  //       <h1>NOT FOUND</h1>
  //       <p>You just hit a route that doesn't exist...</p>
  //     </Wrapper>
  //   </Layout>
  // )
}

export default NotFoundPage
