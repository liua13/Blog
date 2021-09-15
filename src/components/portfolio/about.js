import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

import LinkWrapper from "../linkWrapper"

const SectionWrapper = styled.section`
  display: block;
  width: 80vw;
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
  font-size: 24px;
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
            <br />
            <br />
            <br />
            <HeaderWrapper>{data.site.siteMetadata.description}</HeaderWrapper>
            <Description>
              {/* <div>
                I'm extremely interested in how technology can tell us more
                about ourselves and better inform the decisions we make in our
                lives. I love learning and completing projects along
                the way! Other than coding, I enjoy writing, running, rock
                climbing, and listening to music.
              </div> */}
              <br />
              <br />
              I'm a junior at MIT studying computer science with a potential minor in creative writing. Some fun facts about me include:
              <ul>
                {/* <li>I'm planning on minoring in writing!</li> */}
                <li>
                  My{" "}
                  <LinkWrapper to="/post/havah/">friend</LinkWrapper> and I
                  wrote an (unpublished) 60k - 70k word novel in middle school
                </li>
                <li>
                  My favorite foods include brussel sprouts, asparagus, mushrooms, noodles, cheesecake, blueberries, or any kind of fruit — yum!
                </li>
                <li>
                  <LinkWrapper to="/post/a-bit-about-my-fit/">
                    I nearly walked / ran the distance of a marathon in one day
                  </LinkWrapper>
                </li>
                <li>I'm currently vegetarian!</li>
                {/* <li>
                  I'm most scared of never reaching my fullest potential,
                  whether it's regret over missed opportunities or not enjoying
                  my life until it's too late
                </li> */}
              </ul>
              <br />
              <br />
            </Description>
          </TextWrapper>
        </FlexBox>
      </Fade>
    </SectionWrapper>
  )
}

export default About
