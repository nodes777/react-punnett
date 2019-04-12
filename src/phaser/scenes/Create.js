import Phaser from "phaser";

export default class extends Phaser.State {
  init() {}
  preload() {}

  create() {
    const bannerText = "Phaser + ES6 + Webpack";
    const banner = this.add.text(
      this.world.centerX,
      this.game.height - 80,
      bannerText
    );
    banner.font = "Bangers";
    banner.padding.et(10, 16);
    banner.fontSize = 40;
    banner.fill = "#77BFA3";
    banner.smoothed = false;
    banner.anchor.setTo(0.5);
  }

  render() {
    this.game.debug.spriteInfo(this.mushroom, 32, 32);
  }
}
