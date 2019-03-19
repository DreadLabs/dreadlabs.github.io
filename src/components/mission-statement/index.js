import React from "react"

import {Centered} from "../sections"
import Styles from "./index.module.scss"

export default () => (
  <Centered additionalClasses={`${Styles.missionStatement} mdc-layout-grid mdc-elevation--z4`}>
    <div className="mdc-layout-grid__inner">
      <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
        <h2 id="mission-statement" className="mdc-typography--headline3">Leitbild</h2>

        <p>Ich entwickle <strong>Software nach Ihren Wünschen</strong> mit hohen
          Anforderungen an <strong>Qualität, Sicherheit und Zuverlässigkeit</strong>,
          testgetrieben und unter Berücksichtigung Ihrer Geschäftsdomäne in Anlehnung
          an Domain Driven Design-Praktiken.</p>

        <p>Die <strong>Pflege und Weiterentwicklung Ihrer bestehenden Softwarelösungen</strong>
          sind für mich ebenso bedeutsam wie die Integration von <strong>neuen Technologien,
          wenn es sinnvoll ist</strong> und es die Anforderungen zulassen.</p>
      </div>
    </div>
  </Centered>
)

