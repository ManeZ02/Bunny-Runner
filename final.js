class Final extends Phaser.Scene{

  constructor(){
    super({key: "Final" });
  }
    
    create(){
      //player
      this.physics.world.gravity.y = 0;
      //bunny
      this.player = this.physics.add.sprite(768,323, "player").setScale(2);
      
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
  
      
      //camera
      this.cameras.main.setBounds(300,0,this.width,0);
      this.cameras.main.startFollow(this.player);
      this.player.body.setVelocityX(200);
      
    }
    update(){
      this.bg_1.tilePositionX = this.cameras.main.scrollX;
      this.ground.tilePositionX = this.cameras.main.scrollX;
      this.bg_2.tilePositionX = this.cameras.main.scrollX * 0.03;
      this.bg_3.tilePositionX = this.cameras.main.scrollX * 0.06;
      this.bg_4.tilePositionX = this.cameras.main.scrollX * 0.09;
      this.bg_5.tilePositionX = this.cameras.main.scrollX * 0.3;
  
      
    }
  
  }
  export default Final;
  