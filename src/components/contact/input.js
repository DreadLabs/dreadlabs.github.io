import React from "react"

import {MDCTextField} from "@material/textfield";
import {MDCFloatingLabel} from "@material/floating-label";
import {MDCNotchedOutline} from "@material/notched-outline";

class Input extends React.Component {

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

  input(props, required) {
    if (required) {
      return <input type="text" name={props.name} size={props.size} value={props.value} required={required}
                    onChange={this.handleChange.bind(this)}
                    className="mdc-text-field__input"
                    id={props.id}
                    aria-controls={this.helperTextId} aria-describedby={this.helperTextId}
      />;
    }

    return <input type="text" name={props.name} size={props.size} value={props.value}
                  className="mdc-text-field__input"
                  id={props.id}/>;
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
        <div ref={this.textFieldRef} className="mdc-text-field mdc-text-field--outlined">
          {this.input(props, required)}

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

Input.defaultProps = {
  id: 'input',
  name: 'anonymous-input-field',
  value: '',
  label: 'Your input',
  required: false,
  size: 20,
  onValueChange: function (name, value) {}
};

export default Input
