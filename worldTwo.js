class WorldTwo extends Phaser.Scene {
  constructor() {
    super({ key: "WorldTwo" });
  }

  create() {
    this.stars=3;


    //audio
    this.audio=this.sound.add("music",{loop:true});
    this.jumpSound=this.sound.add("jump");
    this.carrotSound=this.sound.add("carrot");
    this.starSound=this.sound.add("star");
    this.audio.play();
    this.audio.volume=0.3;
    this.carrotSound.volume=0.3;
    //backgorund

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

    //map
    var map = this.make.tilemap({ key: "wrld2" });
    var tileset = map.addTilesetImage("tileset", "tiles");
    var solids = map.createDynamicLayer("back", tileset, 0, 0);
    var solids = map.createDynamicLayer("solids", tileset, 0, 0);
    solids.setCollisionByProperty({ solid: true });

    
    //items

    //item anims
    this.anims.create({
      key: "star_anim",
      frames: this.anims.generateFrameNumbers("star", { start: 0, end: 5 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "carrot_anim",
      frames: this.anims.generateFrameNumbers("carrot", { start: 0, end: 3 }),
      frameRate: 6,
      repeat: -1,
    });

    //stars
    var stars = this.physics.add.staticGroup({
      key: "star",
      setXY: { x: 0, y: 1000 },
    });

    var carrots = this.physics.add.staticGroup({
      key: "carrot",
      setXY: { x: 0, y: 1000 },
    });
    //creating stars
    stars.create(735, 363, "star");
    stars.create(1535, 870, "star");
    stars.create(2420, 660, "star");

    

    stars.playAnimation("star_anim");

    stars.children.iterate(function (child) {
      child.setScale(2.2);
      child.setOrigin(0.2);
      child.setSize(25,27);

    });
    //creating carrots

    
    carrots.create(85, 690, "carrot");
    carrots.create(450, 620, "carrot");
  
    carrots.create(735, 510, "carrot");

    carrots.create(920, 540, "carrot");


    carrots.create(478, 860, "carrot");
    carrots.create(970, 770, "carrot");

    carrots.create(1150, 650, "carrot");
    carrots.create(1230, 650, "carrot");
    carrots.create(1320, 650, "carrot");


    carrots.create(1650, 660, "carrot");
    carrots.create(1800, 640, "carrot");
    carrots.create(1960, 580, "carrot");


    carrots.create(2165, 540, "carrot");

    carrots.create(2430, 810, "carrot");

    carrots.create(2850, 750, "carrot");
    carrots.create(2720, 790, "carrot");

    carrots.create(2650, 700, "carrot");



    carrots.playAnimation("carrot_anim");

    carrots.children.iterate(function (child) {
      child.setScale(1.3);
      child.setOrigin(0.4,0.3);
      child.setSize(16,23);
    });

    //player
    this.player = this.physics.add.sprite(100, 887, "player").setScale(2);
    this.player_anim = this.cache.json.get("player_anim"); 
    this.player.body.setSize(15, 25);

    this.anims.fromJSON(this.player_anim);
    this.player.anims.play("idle");

    //camera
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.startFollow(this.player);
    this.cameras.main.setZoom(1);

    //keys para el movimiento
    this.up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.down = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.repeat = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    //physics

    //colisions
    this.physics.add.collider(this.player, solids);
    this.physics.add.overlap(this.player, stars,this.collectStar,null,this);
    

    this.physics.add.overlap(this.player, carrots,this.collectCarrot,null,this);

  }
  collectStar(player,item){
    this.starSound.play();

    item.disableBody(true,true);
    this.stars--;

  }  
  collectCarrot(player,item){
    this.carrotSound.play();

    item.disableBody(true,true);

  }    
  update() {
    //paralax

    this.bg_1.tilePositionX = this.cameras.main.scrollX;
    this.bg_2.tilePositionX = this.cameras.main.scrollX * 0.03;
    this.bg_3.tilePositionX = this.cameras.main.scrollX * 0.06;
    this.bg_4.tilePositionX = this.cameras.main.scrollX * 0.09;
    this.bg_5.tilePositionX = this.cameras.main.scrollX * 0.3;

    this.player.body.setVelocityX(0);

    if (this.left.isDown) {
      this.player.body.setVelocityX(-200);
      this.player.flipX = true;
    }

    if (this.right.isDown) {
      this.player.body.setVelocityX(200);
      this.player.flipX = false;
    }

    if (this.up.isDown && this.player.body.onFloor()) {
      this.player.body.setVelocityY(-500);
      this.player.anims.play("jump", true);
      this.jumpSound.play();

    }

    if (this.right.isDown && this.player.body.onFloor()) {
      this.player.anims.play("step", true);
    } else if (this.down.isDown && this.player.body.onFloor()) {
      this.player.anims.play("down", true);
      this.player.body.setSize(15, 21);
      this.player.setPosition(this.player.x, this.player.y + 4);
    } else if (this.left.isDown && this.player.body.onFloor()) {
      this.player.anims.play("step", true);
    } else if (!this.player.body.onFloor()) {
      this.player.anims.play("fall", true);
    } else {
      this.player.anims.play("idle", true);
      this.player.body.setSize(15, 25);
    }
    if(this.stars==0){
    this.audio.stop();
      this.scene.start("Final");
    }
    if(this.repeat.isDown){
    this.audio.stop();

      this.scene.start("WorldTwo");

    }
    
  }
  
}


export default WorldTwo;
