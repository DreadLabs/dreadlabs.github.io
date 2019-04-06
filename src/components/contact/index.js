import React from "react"

import {MDCSnackbar} from '@material/snackbar';

import Checkbox from "./checkbox"
import Input from "./input"
import Textarea from "./textarea"

class ContactSimple extends React.Component {

  constructor(props) {
    super(props);

    this.formRef = React.createRef();
    this.snackbarRef = React.createRef();

    this.state = {
      name: '',
      email: '',
      message: '',
      data_protection: false
    };
  }

  componentDidMount() {

  }

  handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const snackBar = new MDCSnackbar(this.snackbarRef.current);

    fetch('https://script.google.com/macros/s/AKfycbw4ssuPhTZdiEjZT3jNxD4FyRhFufXHIxJSlqZEn5-krDpUDV4/exec', {
      method: 'POST',
      body: formData
    })
      .then(
        (result) => {
          this.setState({
            name: '',
            email: '',
            message: '',
            data_protection: false
          });

          snackBar.open();
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          snackBar.labelText = 'Beim Versenden der Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.';
          snackBar.open();
        }
      )
  }

  handleValueChange(name, value) {
    this.setState({[name]: value});
  }

  render() {
    return (
      <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-4">
            <p>
              Rüdigerstraße 43<br />
              10365 Berlin
            </p>

            <p>
              <a href="mailto:contact@dreadlabs.de" className="mdc-button mdc-button--raised mdc-theme--secondary-bg">
                <i className="mdc-button__icon material-icons">email</i>
                <span className="mdc-button__label">per E-Mail</span>
              </a>
            </p>
          </div>

          <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-8">

            <form ref={this.formRef} className="dl-contact-form mdc-layout-grid__inner" onSubmit={this.handleSubmit.bind(this)} >

              <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
                <h3 className="mdc-typography--headline4">Schreiben Sie mir</h3>
                <p className="mdc-typography--subtitle2"><strong>*</strong> Pflichtfeld</p>
              </div>

              <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
                <Input id="name" name="name" value={this.state.name} label="Ihr Name" size={60} required={true} onValueChange={this.handleValueChange.bind(this)} />
              </div>

              <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
                <Input id="email" name="email" value={this.state.email} label="Ihre E-Mail-Adresse" size={60} required={true} onValueChange={this.handleValueChange.bind(this)} />
              </div>

              <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
                <Textarea id="message" name="message" value={this.state.message} label="Ihre Nachricht" required={true} onValueChange={this.handleValueChange.bind(this)} />
              </div>

              <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
                <h4 className="mdc-typography--headline5">Schutz Ihrer Daten *</h4>

                <Checkbox id="data_protection" name="data_protection" value={this.state.data_protection} onValueChange={this.handleValueChange.bind(this)}
                          label="Ich stimme hiermit der automatischen Verarbeitung meiner in diesem Formular angegebenen personenbezogenen Daten zum Zwecke der Bearbeitung meiner Anfrage zu. Nach der Bearbeitung werden diese Daten gelöscht. Ebenso akzeptiere ich die Datenschutzerklärung."
                          required={true}/>
              </div>

              <div className="mdc-layout-grid__cell  mdc-layout-grid__cell--span-12">
                <button className="mdc-button mdc-button--raised mdc-theme--secondary-bg">
                  <i className="material-icons mdc-button__icon" aria-hidden="true">send</i>
                  <span className="mdc-button__label">Senden</span>
                </button>
              </div>

            </form>

            <div ref={this.snackbarRef} className="mdc-snackbar">
              <div className="mdc-snackbar__surface">
                <div className="mdc-snackbar__label"
                     role="status"
                     aria-live="polite">
                  Vielen Dank für Ihre Nachricht!
                </div>
                <div className="mdc-snackbar__actions">
                  <button type="button" className="mdc-button mdc-snackbar__action">Schließen</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default ContactSimple
