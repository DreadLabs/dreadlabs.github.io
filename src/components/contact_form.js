import React from "react"

export default () => (
  <div>
    <div className="mdl-cell mdl-cell--4-col">
      <p>Rüdigerstraße 43<br />
        10365 Berlin<br />
        +49 (0) 178 54 56 492
      </p>
      <p>
        <a href="mailto:thomas.juhnke@dreadlabs.com" className="mdl-button mdl-button--colored mdl-button--fab">
          <i className="material-icons">email</i></a>
      </p>
    </div>

    <div className="mdl-cell mdl-cell--8-col">
      <p>Ich freue mich über Ihre Nachricht:</p>
      <form action="#">
        <div className="mdl-grid zzz-mdl-grid--no-spacing">
          <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--12-col-phone">
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--full-width">
              <input className="mdl-textfield__input" type="text" id="firstname" />
              <label className="mdl-textfield__label" htmlFor="firstname">Vorname</label>
            </div>
          </div>
          <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--12-col-phone">
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--full-width">
              <input className="mdl-textfield__input" type="text" id="lastname" />
              <label className="mdl-textfield__label" htmlFor="lastname">Nachname</label>
            </div>
          </div>
          <div className="mdl-cell mdl-cell--12-col">
            <div className="mdl-textfield mdl-textfield--full-width mdl-js-textfield">
              <textarea className="mdl-textfield__input" type="text" rows="9" id="message"></textarea>
              <label className="mdl-textfield__label" htmlFor="message">Ihre Nachricht</label>
            </div>
          </div>
        </div>
        <button
          className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color--accent mdl-color-text--accent-contrast mdl-button--raised">
          Senden
        </button>
      </form>
    </div>

  </div>
)
