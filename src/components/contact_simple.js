import React from "react"

export default () => (
  <div className="mdl-cell mdl-cell--12-col">
    <div className="mdl-cell mdl-cell--4-col">
      <p>Rüdigerstraße 43<br />
        10365 Berlin<br />
        +49 (0) 178 54 56 492
      </p>
    </div>

    <div className="mdl-cell mdl-cell--8-col">
      <p>Ich bin für Sie per E-Mail erreichbar:</p>
      <p>
        <a href="mailto:contact@dreadlabs.de" className="mdl-button mdl-button--colored mdl-button--fab">
          <i className="material-icons">email</i></a>
      </p>
    </div>
  </div>
)
