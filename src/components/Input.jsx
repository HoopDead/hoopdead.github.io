import React from "react";
import "../styles/style.scss";

class Input extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        active: (props.locked && props.active) || false,
        id: props.id || "",
        name: props.name || "",
        value: props.value || "",
        error: props.error || "",
        label: props.label || "Label"
      };
    }
  
    changeValue(event) {
      const value = event.target.value;
      this.setState({ value, error: "" }); 
    }
  
    handleKeyPress(event) {
      if (event.which === 13) {
        this.setState({ value: this.props.predicted });
      }
    }

  
    render() {
      const { active, id, name, value, error, label } = this.state;
      const { predicted, locked } = this.props;
      const fieldClassName = `field ${(locked ? active : active || value) &&
        "active"} ${locked && !active && "locked"}`;
  
      return (
        <div className={fieldClassName}>
          {active &&
            value &&
            predicted &&
            predicted.includes(value) && <p className="predicted">{predicted}</p>}
          <input
            id={id}
            name = {name}
            type="text"
            value={value}
            placeholder={label}
            onChange={this.changeValue.bind(this)}
            onKeyPress={this.handleKeyPress.bind(this)}
            onFocus={() => !locked && this.setState({ active: true })}
            onBlur={() => !locked && this.setState({ active: false })}
          />
          <label htmlFor={1} className={error && "error"}>
            {error || label}
          </label>
        </div>
      );
    }
  }

  export default Input;