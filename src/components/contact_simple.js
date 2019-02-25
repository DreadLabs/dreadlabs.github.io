import React from "react"

export default () => (
  <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
    <div className="mdc-layout-grid__inner">
      <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-4">
        <p>
          <a href="mailto:contact@dreadlabs.de" className="mdc-button mdc-button--raised">{/*mdc-theme--primary-bg mdc-theme--on-primary*/}
            <i className="mdc-button__icon material-icons">email</i>
            <span className="mdc-button__label">per E-Mail</span>
          </a>
        </p>
      </div>

      <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-8">
        <p>
          Rüdigerstraße 43<br />
          10365 Berlin<br />
          +49 (0) 178 54 56 492
        </p>
      </div>
    </div>
  </div>
)
