import React from "react"

import {MDCTextField} from "@material/textfield";
import {MDCFloatingLabel} from "@material/floating-label";
import {MDCNotchedOutline} from "@material/notched-outline";

class Textarea extends React.Component {

  constructor(props) {
    super(props);

    this.textFieldRef = React.createRef();
    this.notchedOutlineRef = React.createRef();
    this.labelRef = React.createRef();

    this.helperTextId = `helper-text__${props.id}`;
  }

  componentDidMount() {
    new MDCTextField(this.textFieldRef.current);
    new MDCNotchedOutline(this.notchedOutlineRef.current);
    new MDCFloatingLabel(this.labelRef.current);
  }

  handleChange(event) {
    this.props.onValueChange(this.props.name, event.target.value);
  }

  textarea(props, required) {
    if (required) {
      return <textarea name={props.name} rows={props.size.rows} cols={props.size.cols} value={props.value} required={required}
                       onChange={this.handleChange.bind(this)}
                       className="mdc-text-field__input"
                       id={props.id}
                       aria-label={props.label}
                       aria-controls={this.helperTextId} aria-describedby={this.helperTextId}/>;
    }

    return <textarea name={props.name} rows={props.size.rows} cols={props.size.cols} value={props.value}
                     onChange={this.handleChange.bind(this)}
                     className="mdc-text-field__input"
                     id={props.id}
                     aria-label={props.label}/>;
  }

  helperText() {
    if (this.props.required) {
      return <div id={this.helperTextId} className="mdc-text-field-helper-line">
        <div className="mdc-text-field-helper-text mdc-text-field-helper-text--validation-msg" aria-hidden="true">
          Dieses Feld muss ausgefüllt werden.
        </div>
      </div>;
    }

    return <></>
  }

  render() {
    const props = this.props;
    const required = this.props.required;

    return (
      <>
        <div ref={this.textFieldRef} className="mdc-text-field mdc-text-field--textarea">
          {this.textarea(props, required)}

          <div ref={this.notchedOutlineRef} className="mdc-notched-outline">
            <div className="mdc-notched-outline__leading"/>

            <div className="mdc-notched-outline__notch">
              <label ref={this.labelRef} className="mdc-floating-label" htmlFor={props.id}>{props.label}</label>
            </div>

            <div className="mdc-notched-outline__trailing"/>
          </div>
        </div>

        {this.helperText()}
      </>
    )
  }
}

Textarea.defaultProps = {
  id: 'textarea',
  name: 'anonymous-textarea-field',
  label: 'Your input',
  required: false,
  size: {rows: 8, cols: 60},
  onValueChange: function (name, value) {}
};

export default Textarea
