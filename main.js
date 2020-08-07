import Loader from"./loader.js";
import Menu from"./menu.js"
import Final from"./final.js"
import WorldOne from"./worldOne.js";
import WorldTwo from"./worldTwo.js";
//prueba
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
        Menu,
        Final,
        WorldOne,
        WorldTwo
    ]
}
new Phaser.Game(config);

  