import React from "react"
import styled from "styled-components"

import LinkWrapper from "./linkWrapper"
import navData from "../data/navData.json"

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  padding: 30px 0px;
  text-align: center;
  z-index: 100;
  display: block;
  width: 100%;
  background-color: black;
  font-size: 17px;

  a {
    color: white;
    text-transform: uppercase;
    margin: 5px;
    position: relative;
  }

  a:after {
    content: "";
    position: absolute;
    width: 0;
    left: 0;
    top: 100%;
    height: 0.5px;
    background-color: white;
    margin: auto;
    transition: width 0.5s ease-in-out;
  }

  a:hover:after {
    width: 100%;
  }

  // @media (max-width: 400px) {
  //   font-size: 14px;
  // }
`

const Nav = () => {
  return (
    <NavWrapper>
      {navData.map(navLink => (
        <LinkWrapper to={navLink.link} key={navLink.link}>
          {navLink.name}
        </LinkWrapper>
      ))}
    </NavWrapper>
  )
}
export default Nav
