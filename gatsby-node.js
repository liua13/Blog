/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const data = await graphql(`
    {
      posts: allMarkdownRemark {
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
              caption
              categories
            }
            html
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
                base64
                aspectRatio
                src
                srcSet
                sizes
              }
            }
          }
        }
      }
    }
  `)

  const allCategories = {}
  data.data.posts.edges.forEach(({ node }) => {
    const postInfo = node.frontmatter
    const postImage = data.data.images.edges.find(
      x => x.node.childImageSharp.fluid.originalName === postInfo.image
    )

    node.frontmatter.categories.forEach(category => {
      if (category in allCategories) {
        allCategories[category].append(node)
      } else {
        allCategories[category] = [node]
      }
    })

    createPage({
      path: `/post${node.fields.slug}`,
      component: path.resolve(`./src/components/blog/post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
        date: postInfo.date,
        title: postInfo.title,
        subtitle: postInfo.subtitle,
        image: postImage.node.childImageSharp.fluid,
        caption: postInfo.caption,
        categories: postInfo.categories,
        content: node.html,
      },
    })
  })

  for (const category in allCategories) {
    createPage({
      path: `/category/${category}/`,
      component: path.resolve(`./src/components/blog/category.js`),
      context: {
        category: category,
        posts: allCategories[category],
      },
    })
  }
}
