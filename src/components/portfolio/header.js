import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

import Typing from "react-typing-animation"

import Social from "../social"

const BackgroundImageWrapper = styled(BackgroundImage)`
  min-height: 90vh;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  ::before {
    filter: brightness(60%);
  }
`

const TextWrapper = styled.div`
  font-size: 20px;
  color: white;
  height: 200px;
  text-align: center;
`

const SiteName = styled.p`
  font-family: "Oswald", "sans serif";
  font-size: 60px;
`

const Header = () => {
  const image = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "background.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <BackgroundImageWrapper
      fluid={image.background.childImageSharp.fluid}
      id="top"
    >
      <Fade bottom>
        <TextWrapper>
          <span>hey, i'm</span>
          <SiteName>ANNIE LIU</SiteName>
          <Social />

          <Typing hideCursor={true}>
            <Typing.Delay ms={400} />
            <span>nice to meet you!</span>
            {/* <Typing.Delay ms={500} />
          <Typing.Backspace count={1000} /> */}
          </Typing>
        </TextWrapper>
      </Fade>
    </BackgroundImageWrapper>
  )
}

export default Header
