import React from "react"

import Portrait from "../portrait";

export default () => (
  <section className="section--center mdc-layout-grid vcard">
    <div className="mdc-layout-grid__inner">
      <div
        className="mdc-layout-grid__cell mdc-layout-grid__cell--span-4 mdc-layout-grid__cell--span-2-tablet mdc-layout-grid__cell--span-4-phone mdc-layout-grid__cell--align-middle mdl-typography--text-center vcard__avatar-container">
        <Portrait />
      </div>
      <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-8 mdc-layout-grid__cell--span-6-tablet mdc-layout-grid__cell--span-4-phone mdc-layout-grid__cell--align-middle">
        <h1 className="vcard__header mdl-typography--text-uppercase">
          <small className="vcard__header--small">Thomas</small><br/>Juhnke<br/>
          <small className="vcard__header--small">Software&shy;entwickler</small>
        </h1>
      </div>
    </div>
  </section>
)
