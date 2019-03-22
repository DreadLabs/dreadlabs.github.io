import React from "react"

import Styles from "./position.module.scss";

export default(props) => (
  <div className={Styles.resume__position}>
    <div className={Styles.resume__positionWaypoint} />

    <div className={Styles.resume__positionContent}>
      <h5 className="mdc-typography--headline6">{props.headline}</h5>

      <div className={Styles.resume__positionDate}>
        {props.date} <i className={`${Styles.resume__positionPlace} material-icons`} aria-hidden="true">place</i> {props.location}
      </div>

      {props.children}
    </div>
  </div>
)
