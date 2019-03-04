import React from "react"

import {Centered} from "../sections";
import Styles from "./index.module.scss"

export default () => (
  <Centered additionalClasses="mdc-layout-grid">
    <div className="mdc-layout-grid__inner">
      <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
        <blockquote className={Styles.content}>
          The function of good software is to make the complex appear to be simple. <cite className={Styles.author}>Grady Booch</cite>
        </blockquote>
      </div>
    </div>
  </Centered>
)
