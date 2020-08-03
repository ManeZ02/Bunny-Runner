class Loader extends Phaser.Scene {
  constructor() {
    super({ key: "Loader" });
  }
  preload() {

    //loading bar
    this.load.on("complete", () => {
      this.scene.start("WorldOne");
    });
    let loadingBar= this.add.graphics({
        fillStyle:{
            color: 0xffffff
        }
        
    })
    this.load.on("progress", (percent) => {
        loadingBar.fillRect(0,this.game.renderer.height/2,this.game.renderer.width*percent,50);
    })

    
    //background
    this.load.image("bg1", "./assets/background/bg.png");
    this.load.image("bg2", "./assets/background/bg2.png");
    this.load.image("bg3", "./assets/background/bg3.png");
    this.load.image("bg4", "./assets/background/bg4.png");
    this.load.image("bg5", "./assets/background/bg5.png");

    //tilemap
    
    this.load.image("tiles", "./assets/worlds/tileset.png");
    this.load.tilemapTiledJSON("wrld1", "./assets/worlds/WorldOne.json");
    this.load.tilemapTiledJSON("wrld2", "./assets/worlds/WorldTwo.json");

    //audio
    this.load.audio("music","./assets/music.wav");
    this.load.audio("jump","./assets/jump.wav");
    this.load.audio("carrot","./assets/carrot.wav");
    this.load.audio("star","./assets/star.wav");

    //items
    this.load.spritesheet('carrot', './assets/carrot.png', { frameWidth: 17, frameHeight: 19 });
    this.load.spritesheet('star', './assets/star.png', { frameWidth: 13, frameHeight: 13 });

    //player
    this.load.json("player_anim", "./assets/player/player_anim.json");
    this.load.atlas(
    "player",
    "./assets/player/player.png",
    "./assets/player/player_atlas.json"
  );
  }

  
}


export default Loader;
