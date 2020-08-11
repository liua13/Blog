import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

import LinkWrapper from "../linkWrapper"

const SectionWrapper = styled.section`
  display: block;
  width: 67vw;
  margin: auto;
  padding: 100px 0;
`
const FlexBox = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`

const ImageComponent = styled(Image)`
  display: block;
  margin: 0 auto;
  width: 200px;
`

const ImageWrapper = styled.div`
  margin: 20px auto;
`

const TextWrapper = styled.div`
  margin: 10px auto 0px auto;
  width: 40vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 976px) {
    width: 100%;
  }
`

const HeaderWrapper = styled.h3`
  text-align: center;
  font-size: 35px;
  margin-top: -30px;

  @media (max-width: 976px) {
    margin-top: 0px;
  }
`

const Description = styled.div`
  font-size: 17px;
  margin-top: 15px;
  text-align: justify;
`

const About = () => {
  const data = useStaticQuery(graphql`
    {
      favicon: file(relativePath: { eq: "favicon.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          description
        }
      }
    }
  `)

  return (
    <SectionWrapper id="about">
      <Fade bottom>
        <FlexBox>
          <ImageWrapper>
            <ImageComponent fluid={data.favicon.childImageSharp.fluid} />
          </ImageWrapper>
          <TextWrapper>
            <HeaderWrapper>ABOUT</HeaderWrapper>
            <Description>
              <div>{data.site.siteMetadata.description}</div>
              <br />
              Some fun facts about me:
              <ul>
                <li>I love pop + metal music — with a side of rock</li>
                <li>
                  Cheese, asparagus, noodles, cheesecake, or any kind of cake
                  are my favorites — yum
                </li>
                <li>
                  <LinkWrapper to="/post/a-bit-about-my-fit/">
                    I nearly walked + ran the distance of a marathon in one day
                  </LinkWrapper>
                </li>
                <li>
                  My <LinkWrapper to="/post/havah/">best friend</LinkWrapper>{" "}
                  and I wrote an (unpublished) 60k - 70k word novel in middle
                  school
                </li>
                <li>I was vegetarian for two years</li>
                <li>
                  I'm most scared of never reaching my fullest potential,
                  whether it's regret over missed opportunities or not enjoying
                  my life until it's too late
                </li>
              </ul>
            </Description>
          </TextWrapper>
        </FlexBox>
      </Fade>
    </SectionWrapper>
  )
}

export default About
