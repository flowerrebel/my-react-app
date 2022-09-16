import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        <hi>[this.props.titleData]</hi>
        <h2>[this.props.subtitleData]</h2>
      </div>
    );
  }
}

export default Header;
