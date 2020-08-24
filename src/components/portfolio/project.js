import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"

import LinkWrapper from "../linkWrapper"

const Wrapper = styled.div`
  width: 400px;
  margin: 5px;
  display: inline-block;
  background-color: white;
  @media (max-width: 600px) {
    margin: 5px auto;
    width: 100%;
  }

  @media (max-width: 976px) {
    height: auto;
  }

  vertical-align: top;
  height: 520px;
`

const ImageComponent = styled(Image)`
  display: block;
  margin: 0 auto;
  width: 100%;

  :hover {
    filter: brightness(60%);
    -webkit-transition: all 0.5s ease-in-out;
  }
`

const ProjectWrapper = styled.div`
  margin: auto;
  width: auto;
  padding: 20px;
`

const Title = styled.span`
  float: left;
  font-weight: bold;
  a {
    color: black;
  }

  a:hover {
    color: purple;
  }
`
const Date = styled.span`
  float: right;
  color: purple;
  font-size: 13px;
`

const Caption = styled.div`
  clear: both;
  text-align: left;
  font-style: italic;
  font-size: 13px;
`

const Description = styled.div`
  text-align: justify;
  margin: 10px 0;
  a:hover {
    color: #a9a9a9;
  }
`

const Technologies = styled.div`
  text-align: left;
  font-size: 13px;
`

const Project = ({
  date,
  title,
  caption,
  image,
  link,
  description,
  technologies,
}) => {
  return (
    <Wrapper>
      <LinkWrapper to={link}>
        <ImageComponent fluid={image} />
      </LinkWrapper>

      <ProjectWrapper>
        <div>
          <Title>
            <LinkWrapper to={link}>{title}</LinkWrapper>
          </Title>
          <Date>{date}</Date>
        </div>
        <Caption>{caption}</Caption>

        <Description
          dangerouslySetInnerHTML={{ __html: description }}
        ></Description>
        <Technologies>Technologies: {technologies}</Technologies>
      </ProjectWrapper>
    </Wrapper>
  )
}

export default Project
