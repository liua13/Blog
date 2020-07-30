import React from "react"
import { Link } from "gatsby"

const LinkWrapper = props => {
  if (props.to.substring(0, 1) === "/") {
    return (
      <Link {...props} to={props.to}>
        {props.children}
      </Link>
    )
  } else {
    return (
      <a {...props} href={props.to} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    )
  }
}

export default LinkWrapper
