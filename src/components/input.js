import React from "react";
import "./input.css";

export default class Input extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.meta.active && this.props.meta.active) {
      this.input.focus();
    }
  }

  render() {
    let error;
    if (this.props.meta.touched && this.props.meta.error) {
      error = (
        <span className="form-error">
          <i className="fa fa-exclamation-triangle" /> {this.props.meta.error}
        </span>
      );
    }

    let warning;
    if (this.props.meta.touched && this.props.meta.warning) {
      warning = <span className="form-warning">{this.props.meta.warning}</span>;
    }

    return (
      <div className="form-input">
        <label htmlFor={this.props.input.name}>
          {this.props.label}
          {error}
          {warning}
        </label>
        <input
          {...this.props.input}
          id={this.props.input.name}
          type={this.props.type}
          ref={input => (this.input = input)}
        />
        {/* {error} */}
        {warning}
      </div>
    );
  }
}
