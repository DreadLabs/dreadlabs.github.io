import React from "react"

export default props => (
  <p className="resume__position-tags">
    {props.tags.map((tag, index) => {
      return (
        <span key={index} className="mdl-chip mdl-color--cyan-100 mdl-color-text--grey-700">
            <span className="mdl-chip__text"><small>{tag}</small></span>
        </span>
      )
    })}
  </p>
)
