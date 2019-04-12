import Phaser from "phaser";
// import logoImg from "../../imgs/logo.png";
import ExampleScene from "./scenes/ExampleScene";

import * as React from "react";

export default class Game extends React.Component {
  componentDidMount() {
    const config = {
      type: Phaser.AUTO,
      parent: "phaser-example",
      width: 800,
      height: 600,
      scene: [ExampleScene]
    };

    new Phaser.Game(config);
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <div id="phaser-game" />;
  }
}
