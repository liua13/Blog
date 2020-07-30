import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Nav from "../nav"
import Footer from "../footer"
import BlogComponent from "./stub"

const SectionWrapper = styled.div``

const PostWrapper = styled.div`
  padding: 125px 0 100px 0;
  background-color: #eeeeee;
`

const Category = styled.div`
  text-align: center;
  font-size: 40px;
  font-family: "Barlow", sans-serif;
  text-transform: uppercase;
`

const BlogCategory = props => {
  const { category, posts } = props.pageContext

  const images = useStaticQuery(graphql`
    {
      images: allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          relativeDirectory: { eq: "blogImages" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 1000) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <SectionWrapper>
      <Nav />
      <PostWrapper>
        <div style={{ textAlign: "center" }}>category</div>
        <Category>{category}</Category>
        {posts.map(postInfo => {
          const post = postInfo.frontmatter
          const postImage = images.images.edges.find(
            x => x.node.childImageSharp.fluid.originalName === post.image
          )

          return (
            <BlogComponent
              slug={postInfo.fields.slug}
              key={post.title}
              title={post.title}
              date={post.date}
              subtitle={post.subtitle}
              image={postImage.node.childImageSharp.fluid}
              caption={post.caption}
              categories={post.categories}
            />
          )
        })}
      </PostWrapper>
      <Footer />
    </SectionWrapper>
  )
}

export default BlogCategory
