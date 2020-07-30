import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BlogIndex from "../components/blog/index"

const BlogPage = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <BlogIndex />
    </Layout>
  )
}

export default BlogPage
