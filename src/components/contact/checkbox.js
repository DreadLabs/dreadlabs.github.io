import React from "react"

import {MDCFormField} from "@material/form-field";
import {MDCCheckbox} from "@material/checkbox";

class Checkbox extends React.Component {

  constructor(props) {
    super(props);

    this.formFieldRef = React.createRef();
    this.checkboxRef = React.createRef();
  }

  componentDidMount() {
    const checkbox = new MDCCheckbox(this.checkboxRef.current);
    const formField = new MDCFormField(this.formFieldRef.current);
    formField.input = checkbox;
  }

  handleChange(event) {
    this.props.onValueChange(this.props.name, event.target.value);
  }

  render() {
    const props = this.props;

    return (
      <div ref={this.formFieldRef} className="mdc-form-field">
        <div ref={this.checkboxRef} className="mdc-checkbox">

          <input type="checkbox" name={props.name} required={props.required} checked={props.value}
                 onChange={this.handleChange.bind(this)}
                 className="mdc-checkbox__native-control"
                 id={props.id}
          />

          <div className="mdc-checkbox__background">
            <svg viewBox="0 0 24 24"
                 className="mdc-checkbox__checkmark"
            >
              <path fill="none"
                    d="M1.73,12.91 8.1,19.28 22.79,4.59"
                    className="mdc-checkbox__checkmark-path"
              />
            </svg>

            <div className="mdc-checkbox__mixedmark"/>
          </div>

        </div>

        <label htmlFor={props.id}>{props.label}</label>
      </div>
    )
  }
}

Checkbox.defaultProps = {
  id: 'checkbox',
  name: 'anonymous-checkbox-field',
  label: 'Your input',
  required: false,
  onValueChange: function (name, value) {}
};

export default Checkbox
