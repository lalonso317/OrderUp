import React from "react"
import "font-awesome/css/font-awesome.min.css"

export default function(props) {
  return <i className={"fa fa-" + props.icon} style={{color: props.color, fontSize: props.size, zIndex: props.zIndex}}></i>
}
