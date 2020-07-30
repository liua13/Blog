import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

import LinkWrapper from "../linkWrapper"

const Wrapper = styled.div`
  margin: 30px auto;
  clear: left;
  display: block;
  width: 800px;
  overflow: hidden;
  background-color: white;
  border-radius: 20px;

  @media (max-width: 850px) {
    width: 85%;
  }
`

const ImageWrapper = styled.div`
  float: left;
  width: 39%;

  :hover {
    filter: brightness(60%);
    -webkit-transition: all 0.5s ease-in-out;
  }

  @media (max-width: 850px) {
    width: 100%;
  }
`
const ImageComponent = styled(Image)`
  width: 100%;
  border-radius: 20px 0 0 20px;
  @media (max-width: 850px) {
    border-radius: 20px 20px 0 0;
  }
`
const TextWrapper = styled.div`
  margin: auto;
  width: 55%;
  display: inline-block;
  padding: 20px 3%;
  @media (max-width: 850px) {
    padding: 20px 20px;
    width: 90%;
  }
`

const Category = styled.span`
  text-transform: uppercase;
  font-size: 15px;

  a {
    color: purple;
  }

  a:hover {
    color: #a9a9a9;
  }
`

const Title = styled.span`
  margin: 5px 0px 10px 0px;
  font-size: 30px;
  display: block;

  a {
    color: black;
  }

  a:hover {
    color: purple;
  }
`

const Subtitle = styled.span`
  display: block;
  font-size: 17px;
  margin: 0px 0px 15px 0px;
`

const Date = styled.span`
  display: block;
  font-size: 14px;
  font-family: "Barlow", sans-serif;
`

const BlogStub = ({
  slug,
  title,
  date,
  subtitle,
  image,
  caption,
  categories,
}) => {
  return (
    <Fade bottom>
      <Wrapper>
        <ImageWrapper>
          <LinkWrapper to={`/post${slug}`}>
            <ImageComponent fluid={image} />
          </LinkWrapper>
        </ImageWrapper>
        <TextWrapper>
          {categories.map((category, index) => (
            <Category key={category}>
              {index ? ", " : ""}
              <LinkWrapper to={`/category/${category}/`}>
                {category}
              </LinkWrapper>
            </Category>
          ))}
          <Title>
            <LinkWrapper to={`/post${slug}`}>{title}</LinkWrapper>
          </Title>
          <Subtitle>{subtitle}</Subtitle>
          <Date>{date}</Date>
        </TextWrapper>
      </Wrapper>
    </Fade>
  )
}

export default BlogStub
