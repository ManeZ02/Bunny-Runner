import Loader from"./loader.js";
import WorldOne from"./worldOne.js";
import WorldTwo from"./worldTwo.js";

const config = {
    width: 768,
    height: 432,
    pixelArt: true,
    autoResize: true,
    physics: {
      default: "arcade",
      arcade: {
        debug: false,
        gravity: { y: 1000 },
      },
    },
    scene: [
        Loader,
        WorldOne,
        WorldTwo
    ]
}
new Phaser.Game(config);

  