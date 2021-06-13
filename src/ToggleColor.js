import React from "react";

const Green = "#39D1B4";

const Block = {
  width: "400px",
  height: "400px",
  textAlign: "center",
  fontSize: "32px",
};

export default class ToggleColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { colorBlock: Green };

    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    let letters = "0123456789ABCDEF";
    let colory = "#";
    for (let i = 0; i < 6; i++) {
      colory += letters[Math.floor(Math.random() * 16)];
    }

    this.setState({ colorBlock: colory });
  }

  render() {
    return (
      <div>
        <div
          style={{ ...Block, backgroundColor: this.state.colorBlock }}
          onClick={this.changeColor}
        >
          Нажми
        </div>
      </div>
    );
  }
}
