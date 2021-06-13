import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval();
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        <h1>Отсчет врмени начинается</h1>
        <p>Сейчас: {this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}
