import React from "react";
import Option from "./Option";

class Options extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionsData.map((option) => {
            return <option optionText={option} />;
        })}
      </div>
    );
  }
}

export default Options;