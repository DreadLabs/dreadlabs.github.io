import React from "react"

export default () => (
  <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
    <div className="mdc-layout-grid__inner">
      <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-4">
        <p>Rüdigerstraße 43<br />
          10365 Berlin<br />
          +49 (0) 178 54 56 492
        </p>
      </div>

      <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-8">
        <p>Ich bin für Sie per E-Mail erreichbar:</p>
        <p>
          <a href="mailto:contact@dreadlabs.de" className="mdc-fab mdl-button--colored">
            <i className="mdc-fab__icon material-icons">email</i>
          </a>
        </p>
      </div>
    </div>
  </div>
)
