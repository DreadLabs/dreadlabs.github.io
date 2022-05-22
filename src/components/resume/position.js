import React from "react"

import * as Styles from "./position.module.scss";

class Position extends React.Component {

  render() {
    const props = this.props;

    return (
      <div className={`${Styles.resume__position}`}>
        <div className={Styles.resume__positionWaypoint} />

        <div className={`${Styles.resume__positionContent} ${props.even ? Styles.resume__positionContentRight : ''}`}>

          <div className={`${Styles.resume__positionTitle} ${props.even ? Styles.resume__positionTitleRight : ''}`}>
            <h4 className="mdc-typography--headline6">{props.headline}</h4>

            <div className={Styles.resume__positionDate}>
              {props.date} <i className={`${Styles.resume__positionPlace} material-icons`} aria-hidden="true">place</i> {props.location}
            </div>
          </div>

          {props.children}

        </div>
      </div>
    )
  }
}

export default Position
