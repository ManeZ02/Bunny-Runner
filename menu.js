class Menu extends Phaser.Scene{

constructor(){
  super({key: "Menu" });
}
  
  create(){
    //player
    this.physics.world.gravity.y = 0;

    //background
    this.bg_1 = this.add.tileSprite(0, 0, 384, 216, "bg1").setScale(2);
    this.bg_1.setOrigin(0);
    this.bg_1.setScrollFactor(0);

    this.bg_2 = this.add.tileSprite(0, 0, 384, 216, "bg2").setScale(2);
    this.bg_2.setOrigin(0);
    this.bg_2.setScrollFactor(0);

    this.bg_3 = this.add.tileSprite(0, 0, 384, 216, "bg3").setScale(2);
    this.bg_3.setOrigin(0);
    this.bg_3.setScrollFactor(0);

    this.bg_4 = this.add.tileSprite(0, 0, 384, 216, "bg4").setScale(2);
    this.bg_4.setOrigin(0);
    this.bg_4.setScrollFactor(0);

    this.bg_5 = this.add.tileSprite(0, 0, 384, 216, "bg5").setScale(2);
    this.bg_5.setOrigin(0);
    this.bg_5.setScrollFactor(0);

    this.ground = this.add.tileSprite(0, 352, 768, 80, "ground");
    this.ground.setOrigin(0);
    this.ground.setScrollFactor(0);

    //bunny
    this.player = this.physics.add.sprite(768,323, "player").setScale(2);
    this.player_anim = this.cache.json.get("player_anim");
    this.anims.fromJSON(this.player_anim);
    this.player.anims.play("step");

    //menu
    this.name = this.physics.add.image(768,100,"runner").setScale(0.7);
    this.play = this.physics.add.image(768,250, "play").setScale(0.25);

    
    //camera
    this.cameras.main.setBounds(300,0,this.width,0);
    this.cameras.main.startFollow(this.player);
    this.player.body.setVelocityX(200);
    this.name.body.setVelocityX(200);
    this.play.body.setVelocityX(200);


    this.play.setInteractive();
    this.play.on("pointerdown",()=>{
      this.scene.start("WorldOne");
    })

    this.intro = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    this.space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  }
  update(){
    this.bg_1.tilePositionX = this.cameras.main.scrollX;
    this.ground.tilePositionX = this.cameras.main.scrollX;
    this.bg_2.tilePositionX = this.cameras.main.scrollX * 0.03;
    this.bg_3.tilePositionX = this.cameras.main.scrollX * 0.06;
    this.bg_4.tilePositionX = this.cameras.main.scrollX * 0.09;
    this.bg_5.tilePositionX = this.cameras.main.scrollX * 0.3;

    if(this.intro.isDown||this.space.isDown){  
        this.scene.start("WorldOne");
  
      }
  }

}
export default Menu;
