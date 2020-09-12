import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/portfolio/header"
import About from "../components/portfolio/about"
import Projects from "../components/portfolio/projects"
import Courses from "../components/portfolio/courses"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Hi!" />
      <Header />

      <About />
      <Projects />
      <Courses />
    </Layout>
  )
}

export default IndexPage
