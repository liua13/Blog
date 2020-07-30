import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import BlogStub from "./stub"

const BlogWrapper = styled.div`
  padding: 125px 0 100px 0;
  background-color: #eeeeee;
`

const BlogText = styled.div`
  text-align: center;
  font-size: 40px;
  font-family: "Barlow", sans-serif;
  text-transform: uppercase;
`

const BlogIndex = () => {
  const data = useStaticQuery(graphql`
    {
      posts: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM D, YYYY")
              title
              subtitle
              image
              categories
            }
          }
        }
      }
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
    <BlogWrapper>
      <div style={{ textAlign: "center" }}>welcome to</div>
      <BlogText>My blog</BlogText>
      {data.posts.edges.map(post => {
        const postInfo = post.node.frontmatter

        const postImage = data.images.edges.find(
          x => x.node.childImageSharp.fluid.originalName === postInfo.image
        )

        return (
          <BlogStub
            slug={post.node.fields.slug}
            key={postInfo.title}
            title={postInfo.title}
            date={postInfo.date}
            subtitle={postInfo.subtitle}
            image={postImage.node.childImageSharp.fluid}
            caption={postInfo.caption}
            categories={postInfo.categories}
          />
        )
      })}
    </BlogWrapper>
  )
}

export default BlogIndex
