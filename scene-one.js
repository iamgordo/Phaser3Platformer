let allowpress = true;
let goody;
let baddy;
let bad3, bad4;

var SceneOne = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function () {
    Phaser.Scene.call(this, { key: "SceneOne" });
  },
  // init: function () {},
  preload: function () {
    var text = this.add.text(640, 260, "Loading...", {
      fontSize: 50,
      color: "#FFF",
      fontStyle: "bold",
    });
    var progressBar = this.add.graphics();
    var progressBox = this.add.graphics();

    progressBox.fillStyle(0x222222, 0.9);
    progressBox.fillRect(240, 270, 380, 70);

    this.load.on("progress", function (value) {
      // console.log(value);
      progressBar.clear();
      progressBar.fillStyle(0xffff00, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    this.load.on("fileprogress", function (file) {
      // console.log(file.src);
    });
    this.load.on("complete", function () {
      console.log("complete");
    });
    this.load.audio("sfx", "./assets/audio/chinese_dream.mp3");
    this.load.audio("sfx1", "./assets/audio/enigma.mp3");
    this.load.audio("boom", "./assets/audio/boom.mp3");
    this.load.audio("jump", "./assets/audio/jump.wav");
    this.load.audio("jumpon", "./assets/audio/jumpon.wav");
    this.load.audio("reward", "./assets/audio/reward.wav");
    this.load.audio("sfx2", "./assets/audio/global_trash.mp3");
    this.load.bitmapFont(
      "font",
      "assets/img/azo-fire.png",
      "assets/img/azo-fire.xml"
    );
    this.load.image("door", "./assets/img/door.png");
    this.load.image("box", "./assets/img/box.png");
    this.load.image("tiles", "./assets/img/tileset.png");
    this.load.image("tiles2", "./assets/img/kenney-tileset-64px.png");
    this.load.image("crate", "./assets/img/crate_04.png");
    this.load.image("guy2", "./assets/img/player_01.png");
    // this.load.image("jump", "./assets/img/jump.png");
    this.load.image("bad1", "./assets/img/Mushroom_1.png");
    this.load.spritesheet("guy", "./assets/img/character1a.png", {
      frameWidth: 80,
      frameHeight: 116,
    });
    this.load.spritesheet("3stars", "./assets/img/3stars2.png", {
      frameWidth: 64,
      frameHeight: 64,
    });
    this.load.spritesheet("bad", "./assets/img/bad2.png", {
      frameWidth: 64,
      frameHeight: 64,
    });
    this.load.spritesheet("jump", "./assets/img/jump.png", {
      frameWidth: 88,
      frameHeight: 111,
    });
    this.load.spritesheet("star", "./assets/img/starsm.png", {
      frameWidth: 50,
      frameHeight: 50,
    });
    this.load.spritesheet("badgfx", "./assets/img/bad64.png", {
      frameWidth: 64,
      frameHeight: 64,
    });
    this.load.tilemapTiledJSON("map", "assets/tilemap/level1.json");
  },
  create: function () {
    this.fx = this.sound.add("sfx", { loop: true });
    this.fx.setVolume(0.2);
    this.fx.play();

    this.jump = this.sound.add("jump", { loop: false });
    this.jump.setVolume(0.2);

    this.jumpon = this.sound.add("jumpon", { loop: false });
    this.jumpon.setVolume(0.2);

    this.rew = this.sound.add("reward", { loop: false });
    this.rew.setVolume(0.9);

    this.boom = this.sound.add("boom", { loop: false });
    this.boom.setVolume(0.6);

    this.anims.create({
      key: "walk",
      frameRate: 20,
      frames: this.anims.generateFrameNumbers("guy", { start: 0, end: 6 }),
      repeat: -1,
    });
    this.anims.create({
      key: "jumping",
      frameRate: 20,
      frames: this.anims.generateFrameNumbers("jump", { start: 0, end: 3 }),
      repeat: 0,
    });
    // available>>>
    this.anims.create({
      key: "move",
      frameRate: 20,
      frames: this.anims.generateFrameNumbers("bad", { start: 0, end: 7 }),
      repeat: -1,
    });
    this.anims.create({
      key: "sparkle",
      frameRate: 20,
      frames: this.anims.generateFrameNumbers("star", { start: 0, end: 7 }),
      repeat: -1,
    });
    this.anims.create({
      key: "wiggle",
      frameRate: 20,
      frames: this.anims.generateFrameNumbers("badgfx", { start: 0, end: 7 }),
      repeat: -1,
    });
    this.cameras.main.setBounds(0, 0, 8392, 400);
    this.physics.world.setBounds(0, 0, 8392, 440);
    const map = this.make.tilemap({ key: "map" });
    const tileset = map.addTilesetImage("tileset", "tiles");
    const platforms = map.createLayer("Platforms", tileset, 0, 0);
    const two = map.createLayer("Two", tileset, 0, 0);
    // find camera x and add it toscore below
    var txt = this.add.bitmapText(0, 0, "font", "SCORE:", 48).setOrigin(0);
    this.scoreTxt = this.add
      .bitmapText(txt.x + txt.width + 10, 0, "font", score, 48)
      .setOrigin(0);

    bad3 = new BadGuy(this, 500, 400);
    bad4 = new BadGuy(this, 400, 400);
    let collide1 = this.physics.add.collider(bad4, platforms);
    let collide2 = this.physics.add.collider(bad3, platforms);
    // below available>>>
    // baddy = this.physics.add.sprite(500, 400, "bad");
    // baddy.play("move");
    // this.physics.add.collider(baddy, platforms);
    // baddy.setVelocityX(100);
    let door1 = this.physics.add.staticImage(8000, 570, "door");
    goody = this.physics.add.sprite(300, 400, "guy");
    goody.body.width = 57;

    this.physics.add.collider(
      door1,
      goody,
      function () {
        this.fx.stop();
        this.time.addEvent({
          delay: 2000,
          loop: false,
          callback: () => {
            this.scene.start("SceneTwo");
          },
        });
      },
      null,
      this
    );

    this.physics.add.collider(
      bad4,
      goody,
      function () {
        if (bad4.body.y - goody.body.y > 102) {
          goody.body.setVelocityY(-130);
          this.physics.world.removeCollider(collide1);
          showScore(20);
        } else {
          this.fx.stop();
          this.cameras.main.shake(500);
          this.time.addEvent({
            delay: 500,
            loop: false,
            callback: () => {
              this.scene.restart();
            },
          });
        }
      },
      null,
      this
    );
    this.physics.add.collider(
      bad3,
      goody,
      function () {
        if (bad3.body.y - goody.body.y > 102) {
          goody.body.setVelocityY(-130);
          this.physics.world.removeCollider(collide2);
          this.jumpon.play();
        } else {
          this.boom.play();
          this.cameras.main.shake(500);
          this.fx.stop();
          this.time.addEvent({
            delay: 500,
            loop: false,
            callback: () => {
              this.scene.restart();
            },
          });
        }
      },
      null,
      this
    );
    // if (!goody.body.onFloor()) {
    //   // goody.play("jumping");
    // }
    this.physics.add.collider(goody, platforms, function () {
      // goody.play("jumping");
    });

    platforms.setCollisionByExclusion(-1, true);
    this.walkspeed = 200;

    this.cameras.main.startFollow(goody, true, 0.08, 0.08);
    this.cursors = this.input.keyboard.createCursorKeys();
    // mushrooms
    this.bad1s = this.physics.add.group({
      key: "bad1",
      allowGravity: false,
      immovable: true,
    });

    this.bad2s = this.physics.add.group({
      key: "bad2",
      allowGravity: false,
      immovable: false,
    });
    this.stars = this.physics.add.group({
      allowGravity: false,
      immovable: true,
    });
    //
    map.getObjectLayer("Bad1").objects.forEach((bad1) => {
      const bad1Sprite = this.bad1s
        .create(bad1.x, bad1.y - 20, "bad1")
        .setOrigin(0.5, 0.5);
      this.xSpeed = 60;
      bad1Sprite.body
        .setSize(bad1.width - 15, bad1.height)
        .setOffset(0, 0)
        .setVelocity(this.xSpeed, 0);
    });
    // Brain
    map.getObjectLayer("Bad2").objects.forEach((bad2) => {
      const bad2Sprite = this.bad2s
        .create(bad2.x, bad2.y - 30, "bad")
        .setOrigin(0.5, 0.5);
      this.xSpeed = 60;
      bad2Sprite.body
        .setSize(bad2.width - 15, bad2.height)
        .setOffset(0, 0)
        .setVelocity(this.xSpeed, 0);
    });
    // brain
    // this.bad2s.getChildren().forEach(function (bad1) {
    //   bad1.play("move");
    //   // bad1.setRotation(100);
    // }, this);
    // this.physics.add.collider(goody, this.bad2s, function () {
    //   // bad2s.destroy();
    // });
    this.physics.add.overlap(this.bad2s, goody, function (bod1, bod2) {
      // this.stars.body.destroy();
      this.jumpon.play();
      bod2.destroy();
    });
    map.getObjectLayer("Stars").objects.forEach((star) => {
      const starSprite = this.stars
        .create(star.x, star.y - 20, "star")
        .setOrigin(0.5, 0.5);
      starSprite.body.setSize(star.width / 2, star.height / 2).setOffset(10, 0);
    });
    this.stars.getChildren().forEach(function (star) {
      star.play("sparkle");
      star.setRotation(100);
    }, this);
    let self1 = this;
    this.physics.add.overlap(this.stars, goody, function (bod1, bod2) {
      bod2.destroy();
      self1.rew.play();
    });
    let collide4 = this.physics.add.collider(this.bad1s, platforms);
    let collide5 = this.physics.add.collider(
      this.bad2s,
      platforms,
      function (bod1, bod2) {
        bod2.destroy();
      }
    );
    // !!!this is all or nothing collision detection possibly?????Unsure
    let collide3 = this.physics.add.collider(
      goody,
      this.bad1s,
      function (bod1, bod2) {
        self1.jumpon.play();
        if (bod2.y - bod1.y > 80) {
          bod1.setVelocityY(-160);
          this.time.addEvent({
            delay: 200,
            loop: false,
            callback: () => {
              bod2.destroy();
            },
          });
        } else {
          this.fx.stop();
          this.boom.play();
          this.cameras.main.shake(500);
          this.time.addEvent({
            delay: 500,
            loop: false,
            callback: () => {
              // this.scene.resume();
              this.scene.restart();
            },
          });
        }
      },
      null,
      this
    );
  },
  update: function () {
    this.stars.getChildren().forEach(function (star) {
      // star.play("sparkle");
      star.rotation += 0.04;
    }, this);
    if (bad4.body && bad4.body.y > 650) {
      bad4.destroy();
    }
    if (bad3.body && bad3.body.y > 650) {
      bad3.destroy();
    }

    this.bad1s.getChildren().forEach(function (bad1) {
      if (bad1.body.velocity.x === 0) {
        this.xSpeed *= -1;
        bad1.body.setVelocityX(this.xSpeed);
      }
    }, this);

    if (this.cursors.left.isDown) {
      goody.setVelocityX(-this.walkspeed);
    } else if (this.cursors.right.isDown) {
      goody.setVelocityX(this.walkspeed);
    } else {
      goody.setVelocityX(0);
      goody.play("walk", false);
    }
    if (this.cursors.up.isDown && goody.body.onFloor() && allowpress) {
      this.jump.play();
      goody.setVelocityY(-470);
      allowpress = false;
      // goody.play("jumping", false);
    } else if (this.cursors.up.isUp) {
      allowpress = true;
      this.cursors.up.isUp = false;
      // goody.play("jumping");
    }
    if (goody.body.velocity.x > 0) {
      goody.setFlipX(false);
      if (goody.body.onFloor()) {
        // goody.play("walk");
      }
    } else if (goody.body.velocity.x < 0) {
      goody.setFlipX(true);
      if (goody.body.onFloor()) {
        // goody.play("jumping");
      }
    }
    if (!goody.body.onFloor()) {
      // goody.play("jumping", true);
    }
    if (goody.onFloor && goody.body.velocity.x != 0) {
      goody.animations.stop(null, false);
      // goody.play("jump");
    }
  },
});
