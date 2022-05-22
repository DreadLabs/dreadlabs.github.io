import React from "react"

import * as Styles from "./index.module.scss"

function Fullwidth({children}) {
  return (
    <div className={Styles.fullwidth}>
      {children}
    </div>
  )
}

function Centered(props) {
  return (
    <section id={props.id} className={`${Styles.centered} ${props.additionalClasses}`}>
      {props.children}
    </section>
  )
}

export {
  Fullwidth,
  Centered
}
