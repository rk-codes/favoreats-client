import React from "react";
import "./input.css";

export default class RatingDropdown extends React.Component {
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
        <select
          {...this.props.input}
          id={this.props.input.name}
          type={this.props.type}
          ref={input => (this.input = input)}
        >
          <option />
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        {/* {error} */}
        {warning}
      </div>
    );
  }
}
