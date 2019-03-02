import React from "react"

import modulesStyles from "./index.module.scss"

export default props => (
  <section id={props.id} className={`${modulesStyles.sectionCenter} ${props.additionalClasses}`}>
    {props.children}
  </section>
)
