import React from "react"
import styled from "styled-components"

import socialData from "../data/socialData.json"
import LinkWrapper from "./linkWrapper"

const SocialWrapper = styled.div`
  margin: 10px 0;
`

const SVGWrapper = styled.div`
  width: 30px;
  display: inline-block;
  margin: 0 5px;
`

const SVG = styled.svg`
  width: 100%;
  height: 100%;
  fill-rule: evenodd;
  clip-rule: evenodd;
  stroke-linejoin: round;
  stroke-miterlimit: 2;
  fill: white;

  :hover {
    fill: #c2c2c2;
  }
`

const Social = () => (
  <SocialWrapper>
    {socialData.map(social => (
      <SVGWrapper key={social.site}>
        <LinkWrapper to={social.link}>
          <SVG viewBox={social.icon.viewBox} xmlSpace="preserve">
            <path d={social.icon.path}></path>
          </SVG>
        </LinkWrapper>
      </SVGWrapper>
    ))}
  </SocialWrapper>
)

export default Social
