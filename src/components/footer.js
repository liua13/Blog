import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

import Social from "./social"

const FooterWrapper = styled.footer`
  background-color: black;
  width: 100%;
  text-align: center;
  padding: 50px 0px;
  color: white;
  bottom: 0;
  height: auto;

  a {
    color: white;
  }
`

const Footer = () => {
  return (
    <FooterWrapper>
      <Fade bottom>
        <>
          <Social />
          {/* © {new Date().getFullYear()}  */}
          made with &hearts; in nyc & cambridge
        </>
      </Fade>
    </FooterWrapper>
  )
}

export default Footer
