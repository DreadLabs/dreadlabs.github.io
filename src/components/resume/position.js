import React from "react"

import Styles from "./position.module.scss";

export default(props) => (
  <div className={`${Styles.resume__position}`}>
    <div className={Styles.resume__positionWaypoint} />

    <div className={`${Styles.resume__positionContent} ${props.even ? Styles.resume__positionContentRight : ''}`}>
      <div className={`${Styles.resume__positionTitle} ${props.even ? Styles.resume__positionTitleRight : ''}`}>
        <h5 className="mdc-typography--headline6">{props.headline}</h5>

        <div className={Styles.resume__positionDate}>
          {props.date} <i className={`${Styles.resume__positionPlace} material-icons`} aria-hidden="true">place</i> {props.location}
        </div>
      </div>

      {props.children}
    </div>
  </div>
)
