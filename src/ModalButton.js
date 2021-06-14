import React from "react";
export default class ModalButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };

    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    this.setState((state) => ({
      hover: !state.hover,
    }));
  }

  render() {
    let linkStyle;
    if (this.state.hover) {
      linkStyle = {
        display: "block",
        fontSize: "24px",
        padding: "15px",
        border: "none",
        margin: "20px",
        width: "90%",
        textDecoration: "none",
        color: "rgb(126, 4, 4)",
        backgroundColor: "white",
        textAlign: "center",
        borderRadius: "5px",
        borderWidth: "1px",
        borderColor: "white",
        cursor: "pointer",
      };
    } else {
      linkStyle = {
        display: "block",
        fontSize: "24px",
        padding: "15px",
        border: "none",
        margin: "20px",
        width: "90%",
        borderWidth: "1px",
        borderColor: "transparent",
        textDecoration: "none",
        color: "white",
        backgroundColor: "rgb(126, 4, 4)",
        textAlign: "center",
        borderRadius: "5px",
      };
    }
    return (
      <div>
        <input
          type="submit"
          style={linkStyle}
          onMouseEnter={this.toggleHover}
          onMouseLeave={this.toggleHover}
          value="Заказать"
        />
      </div>
    );
  }
}
