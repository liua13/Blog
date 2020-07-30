import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/portfolio/header"
import About from "../components/portfolio/about"
import Projects from "../components/portfolio/projects"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Hi!" />
      <Header />

      <About />
      <Projects />
    </Layout>
  )
}

export default IndexPage
