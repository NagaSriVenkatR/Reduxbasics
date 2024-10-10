import React, { Children } from "react";
import PropTypes from 'prop-types'
const Link = ({active,children,onclick}) => {
  if(active){
    return <span>{children}</span>
  }
  return(
    <a href="" onClick={e => {
      e.preventDefault()
      onclick()
    }}>
      {children}
    </a>
  )
}
Link.propTypes = {
  active:PropTypes.bool.isRequired,
  Children:PropTypes.node.isRequired,
  onClick:PropTypes.func.isRequired
}
export default Link