var SceneThree = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function () {
    Phaser.Scene.call(this, { key: "SceneThree" });
  },
  preload: function () {
    // this.load.spritesheet("guy", "./assets/img/character1.png", {
    //   frameWidth: 80,
    //   frameHeight: 115,
    // });
    this.load.image("box", "./assets/img/box1.png");
    // this.load.image("tiles2", "./assets/img/kenney-tileset-64px.png");
    this.load.tilemapTiledJSON("map3", "./assets/tilemap/level4.json");
  },
  create: function () {
    this.fx = this.sound.add("sfx1", { loop: true });
    this.fx.setVolume(0.1);
    this.fx.play();

    this.jump = this.sound.add("jump", { loop: false });
    this.jump.setVolume(0.2);

    this.jumpon = this.sound.add("jumpon", { loop: false });
    this.jumpon.setVolume(0.2);

    this.rew = this.sound.add("reward", { loop: false });
    this.rew.setVolume(0.9);

    this.cameras.main.setBounds(0, 0, 8392, 400);
    this.physics.world.setBounds(0, 0, 8392, 440);
    const map = this.make.tilemap({ key: "map3" });
    const tileset = map.addTilesetImage("tileset", "tiles2");
    const two = map.createLayer("Two", tileset, 0, 0);
    const platforms = map.createLayer("Platforms", tileset, 0, 0);
    // platforms.getChildren().setFrictionX(0.5);
    // const boxes = map.createLayer("Reward", tileset, 0, 0);

    this.boxes = this.physics.add.group({
      key: "box",
      allowGravity: true,
      immovable: false,
    });
    this.boxes.getChildren()[0].setFrictionX(0.5);
    map.getObjectLayer("Reward").objects.forEach((box) => {
      const boxSprite = this.boxes
        .create(box.x, box.y, "box")
        .setOrigin(0.5, 0.5)
        .setFriction(0.99, 0.5);
      // this.xSpeed = 60;
      boxSprite.body
        .setSize(box.width, box.height)
        .setFriction(0.5, 0.5)
        .setOffset(0, 0)
        .setVelocity(0, 0); //<<<<this is where the problem was!! x was this.xspeed!!
    });
    this.boxes.getChildren().forEach(function (box) {
      // this.body.setFrictionX = 0.5;
      box.setFrictionX(0.5);
    });
    platforms.setCollisionByExclusion(-1, true);
    this.physics.add.collider(platforms, this.boxes);
    this.anims.create({
      key: "walk",
      frameRate: 20,
      frames: this.anims.generateFrameNumbers("guy", { start: 0, end: 6 }),
      repeat: -1,
    });

    goody = this.physics.add.sprite(300, 480, "guy");
    goody.body.width = 57;
    goody.play("walk");
    let door1 = this.physics.add.staticImage(8100, 590, "door");
    this.physics.add.collider(goody, platforms);
    this.physics.add.collider(goody, this.boxes);
    this.physics.add.collider(this.boxes, this.boxes);
    this.walkspeed = 200;

    this.cameras.main.startFollow(goody, true, 0.08, 0.08);
    this.cursors = this.input.keyboard.createCursorKeys();
  },
  update: function () {
    if (this.cursors.left.isDown) {
      goody.setVelocityX(-this.walkspeed);
    } else if (this.cursors.right.isDown) {
      goody.setVelocityX(this.walkspeed);
    } else {
      goody.setVelocityX(0);
      goody.play("walk");
    }
    if (this.cursors.up.isDown && goody.body.onFloor() && allowpress) {
      this.jump.play();
      goody.setVelocityY(-470);
      allowpress = false;
    } else if (this.cursors.up.isUp) {
      allowpress = true;
      this.cursors.up.isUp = false;
    }
    if (goody.body.velocity.x > 0) {
      goody.setFlipX(false);
    } else if (goody.body.velocity.x < 0) {
      goody.setFlipX(true);
    }
  },
});
