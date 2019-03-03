import React from "react"

import Styles from "./position.module.scss";

export default(props) => (
  <div className={Styles.resume__position}>
    <div className={Styles.resume__positionWaypoint} />

    <div className={Styles.resume__positionContent}>
      <h5 className="mdc-typography--headline6">{props.headline}</h5>

      {props.children}

      <span className={Styles.resume__positionDate}>{props.date}<br /><i className="fa fa-map-marker"></i> {props.location}</span>
    </div>
  </div>
)
