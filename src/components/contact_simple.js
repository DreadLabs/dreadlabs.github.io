import React from "react"

export default () => (
  <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
    <div className="mdc-layout-grid__inner">
      <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-4">
        <p>
          <a href="mailto:contact@dreadlabs.de" className="mdc-button mdc-button--raised mdc-theme--secondary-bg">
            <i className="mdc-button__icon material-icons">email</i>
            <span className="mdc-button__label">per E-Mail</span>
          </a>
        </p>

        <p>
          Rüdigerstraße 43<br />
          10365 Berlin
        </p>
      </div>

      <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-8">
        <iframe
          title="Kontaktformular"
          src="https://docs.google.com/forms/d/e/1FAIpQLScvQaXImQMVDN8OqAcey7PqMX1fBnkuxTLAt6sXq7ndKipmDg/viewform?embedded=true"
          width="100%" height="1023" frameBorder="0" marginHeight="0" marginWidth="0">Wird geladen...
        </iframe>
      </div>
    </div>
  </div>
)
