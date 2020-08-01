import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

import LinkWrapper from "../linkWrapper"
import Nav from "../nav"
import Footer from "../footer"

const ImageWrapper = styled.div`
  height: 70vh;
  overflow: hidden;
  margin: 75px 0 0 0;
`

const BackgroundText = styled.div`
  color: white;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 55%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 80%;
`

const BodyWrapper = styled.div`
  width: 50%;
  margin: 50px auto 75px auto;

  @media (max-width: 825px) {
    width: 425px;
  }
  @media (max-width: 525px) {
    width: 80%;
  }
`

const HeaderWrapper = styled.div`
  padding: 0px 0px 30px 0;
  border-bottom: 1px solid #a9a9a9;
`

const Title = styled.div`
  font-size: 40px;
  margin: 0 0 5px 0;
`

const Subtitle = styled.div`
  font-size: 20px;
  width: 100%;
`

const Caption = styled.div`
  font-size: 20px;
`

const Date = styled.div`
  font-size: 19px;
  font-family: "Barlow", sans-serif;
`

const Category = styled.span`
  font-size: 15px;
  text-transform: uppercase;

  a {
    color: black;
  }

  a:hover {
    color: purple;
  }
`

const Content = styled.div`
  margin: 30px 0;
  font-size: 18px;

  p {
    margin: 20px 0;
  }
`

export default props => {
  const {
    slug,
    date,
    title,
    subtitle,
    image,
    caption,
    categories,
    content,
    previous,
    next,
  } = props.pageContext

  const ImageComponent = styled(BackgroundImage)`
    min-height: 100vh;
    ::before {
      filter: brightness(60%);
    }
  `

  return (
    <div>
      <Nav />
      <ImageWrapper>
        <ImageComponent fluid={image}>
          <BackgroundText>
            <Fade bottom>
              <>
                <Title>{title}</Title>
                <Caption>{caption}</Caption>
              </>
            </Fade>
          </BackgroundText>
        </ImageComponent>
      </ImageWrapper>
      {/* <Subtitle>{subtitle}</Subtitle> */}
      <BodyWrapper>
        <HeaderWrapper>
          <Date>{date}</Date>
          {categories.map((category, index) => (
            <Category key={category}>
              {index ? ", " : ""}
              <LinkWrapper to={`/category/${category}/`}>
                {category}
              </LinkWrapper>
            </Category>
          ))}
        </HeaderWrapper>

        <Content dangerouslySetInnerHTML={{ __html: content }}></Content>

        <PreviousWrapper>
          <PreviousNext postInfo={previous} symbol="<" text="previous" />
        </PreviousWrapper>

        <NextWrapper>
          <PreviousNext postInfo={next} symbol=">" text="next" />
        </NextWrapper>
      </BodyWrapper>

      <Footer />
    </div>
  )
}

// -------------------------
// for the PREVIOUS / NEXT links on bottom of page

const PreviousNext = ({ postInfo, symbol, text }) => {
  if (postInfo) {
    return (
      <PreviousNextWrapper>
        <PreviousNextLink to={`/post${postInfo.fields.slug}`}>
          <Symbol style={{ marginRight: "10px" }}>
            {symbol === "<" ? symbol : ""}
          </Symbol>
        </PreviousNextLink>

        <div>
          <PreviousNextText>{text} post</PreviousNextText>
          <PreviousNextLink
            to={`/post${postInfo.fields.slug}`}
            style={{ fontSize: "20px" }}
          >
            {postInfo.frontmatter.title}
          </PreviousNextLink>
        </div>

        <PreviousNextLink to={`/post${postInfo.fields.slug}`}>
          <Symbol style={{ marginLeft: "10px" }}>
            {symbol === ">" ? symbol : ""}
          </Symbol>
        </PreviousNextLink>
      </PreviousNextWrapper>
    )
  } else {
    return <span></span>
  }
}

const PreviousWrapper = styled.div``

const NextWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const PreviousNextLink = styled(LinkWrapper)`
  :hover {
    color: #a9a9a9;
  }
`

const Symbol = styled.div`
  font-size: 25px;
  font-weight: lighter;
  height: 100%;
`

const PreviousNextWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
`

const PreviousNextText = styled.div`
  text-transform: uppercase;
  color: #a9a9a9;
`
