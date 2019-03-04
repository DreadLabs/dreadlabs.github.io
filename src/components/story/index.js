import React from "react"

import {Centered} from "../sections";

export default (props) => (
  <Centered id={props.id} additionalClasses="mdc-layout-grid">
    <div className="mdc-layout-grid__inner">
      <h3 className="mdc-typography--headline4 mdc-layout-grid__cell mdc-layout-grid__cell--span-4">{props.title}</h3>
      <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-8">
        {props.children}
      </div>
    </div>
  </Centered>
)
