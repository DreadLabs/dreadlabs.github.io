import React from "react"

export default props => (
  <p className="resume__position-tags mdc-chip-set">
    {props.tags.map((tag, index) => {
      return (
        <span key={index} className="mdc-chip">
            <span className="mdc-chip__text"><small>{tag}</small></span>
        </span>
      )
    })}
  </p>
)
