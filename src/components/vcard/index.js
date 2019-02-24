import React from "react"

import Portrait from "../portrait";

export default () => (
  <section className="section--center mdc-layout-grid vcard">
    <div className="mdc-layout-grid__inner">
      <div
        className="mdc-layout-grid__cell mdc-layout-grid__cell--span-4 mdc-layout-grid__cell--span-2-tablet mdc-layout-grid__cell--span-4-phone mdc-layout-grid__cell--align-middle">
        <Portrait />
      </div>
      <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-8 mdc-layout-grid__cell--span-6-tablet mdc-layout-grid__cell--span-4-phone mdc-layout-grid__cell--align-middle">
        <h1 className="vcard__header mdc-typography--headline3">
          <small className="vcard__header--small mdc-typography--headline4">Thomas</small><br/>Juhnke
        </h1>
        <h2 className="vcard__header--small mdc-typography--headline4">Software&shy;entwickler</h2>
      </div>
    </div>
  </section>
)
