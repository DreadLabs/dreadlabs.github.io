import React from "react"

import {Centered} from "../sections"
import * as Styles from "./index.module.scss"

const MissionStatement = () => (
    <Centered additionalClasses={`${Styles.missionStatement} mdc-layout-grid mdc-elevation--z4 mdc-theme--primary-bg mdc-theme--on-primary`}>
      <div className="mdc-layout-grid__inner">
        <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
          <h2 id="mission-statement" className="mdc-typography--headline3">Leitbild</h2>

          <p>Ich entwickle <strong>Software im Team</strong> mit hohen
            Anforderungen an <strong>Qualität, Sicherheit und Zuverlässigkeit</strong>,
            testgetrieben und unter Berücksichtigung der Geschäftsdomäne in Anlehnung
            an Domain Driven Design-Praktiken.</p>

          <p>Die <strong>Pflege und Weiterentwicklung von bestehenden Softwarelösungen</strong>{' '}
            sind für mich ebenso bedeutsam wie die Integration von <strong>neuen Technologien,
              wenn es sinnvoll ist</strong> und es die Anforderungen zulassen.</p>
        </div>
      </div>
    </Centered>
)

export default MissionStatement

