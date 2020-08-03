class WorldOne extends Phaser.Scene {
  constructor() {
    super({ key: "WorldOne" });
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
    var map = this.make.tilemap({ key: "wrld1" });
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
    stars.create(600, 880, "star");
    stars.create(2010, 530, "star");
    stars.create(3160, 580, "star");
    stars.playAnimation("star_anim");

    stars.children.iterate(function (child) {
      child.setScale(2.2);
      child.setOrigin(0.2);
      child.setSize(25,27);

    });
    //creating carrots

    
    carrots.create(450, 880, "carrot");
    carrots.create(1033, 600, "carrot");
    carrots.create(1206, 535, "carrot");
    carrots.create(1376, 503, "carrot");

    
    carrots.create(1540, 407, "carrot");
    carrots.create(1640, 407, "carrot");
    carrots.create(1740, 407, "carrot");
    carrots.create(1840, 407, "carrot");
    carrots.create(1940, 407, "carrot");

    
    carrots.create(1030, 887, "carrot");
    carrots.create(1230, 887, "carrot");
    carrots.create(1430, 887, "carrot");
    carrots.create(1630, 887, "carrot");


    
    carrots.create(1680, 620, "carrot");
    carrots.create(1720, 607, "carrot");
    carrots.create(1760, 620, "carrot");

    
    carrots.create(2500, 630, "carrot");

    carrots.create(2900, 610, "carrot");

    carrots.playAnimation("carrot_anim");

    carrots.children.iterate(function (child) {
      child.setScale(1.3);
      child.setOrigin(0.4,0.3);
      child.setSize(16,23);
    });

    //player
    this.player = this.physics.add.sprite(200, 887, "player").setScale(2);
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
      this.scene.start("WorldTwo");
    }

    if(this.repeat.isDown){
    this.audio.stop();

      this.scene.start("WorldOne");

    }
    
  }
  
}


export default WorldOne;
