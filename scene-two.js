// let goody;

var SceneTwo = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function () {
    Phaser.Scene.call(this, { key: "SceneTwo" });
  },
  init: function () {},
  preload: function () {
    this.load.spritesheet("guy", "./assets/img/character1.png", {
      frameWidth: 80,
      frameHeight: 115,
    });
    // this.load.audio("boom", "./assets/audio/boom.mp3");
    this.load.tilemapTiledJSON("map2", "assets/tilemap/level2.json");
  },
  create: function () {
    // this.minimap = this.cameras.add(0, 0, 448, 64).setZoom(1).setName("mini");
    this.fx = this.sound.add("sfx2", { loop: true });
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

    this.cameras.main.setBounds(0, 0, 8392, 400);
    this.physics.world.setBounds(0, 0, 8392, 440);
    const map = this.make.tilemap({ key: "map2" });
    const tileset = map.addTilesetImage("tileset", "tiles");
    const platforms = map.createLayer("Platforms", tileset, 0, 0);
    const two = map.createLayer("Two", tileset, 0, 0);

    this.txt = this.add.bitmapText(0, 0, "font", "SCORE:", 48).setOrigin(0);
    this.scoreTxt = this.add
      .bitmapText(this.txt.x + this.txt.width + 10, 0, "font", score, 48)
      .setOrigin(0);
    this.minimap = this.cameras.add(0, 0, 448, 64).setZoom(1).setName("mini");

    this.anims.create({
      key: "sparkle",
      frameRate: 20,
      frames: this.anims.generateFrameNumbers("star", { start: 0, end: 7 }),
      repeat: -1,
    });
    this.stars = this.physics.add.group({
      allowGravity: false,
      immovable: true,
    });
    map.getObjectLayer("Stars1").objects.forEach((star) => {
      const starSprite = this.stars
        .create(star.x, star.y - 20, "star")
        .setOrigin(0.5, 0.5);
      starSprite.body.setSize(star.width / 2, star.height / 2).setOffset(10, 0);
    });
    this.stars.getChildren().forEach(function (star) {
      star.play("sparkle");
      star.setRotation(100);
      star.setOffset(16, 0);
    }, this);
    let self1 = this;

    this.brainguys = this.physics.add.group({
      key: "brainguy",
      allowGravity: true,
      immovable: true,
    });
    map.getObjectLayer("Bad1").objects.forEach((brainguy) => {
      const bad1Sprite = this.brainguys
        .create(brainguy.x, brainguy.y - 20, "bad")
        .setOrigin(0.5, 0.5);
      this.xSpeed = 60;
      bad1Sprite.body
        .setSize(brainguy.width - 10, brainguy.height)
        .setOffset(0, 0)
        .setVelocity(this.xSpeed, 0);
    });
    var text = this.add.text(640, 260, "Scene Two!", {
      fontSize: 70,
      color: "#FFF",
      fontStyle: "bold",
    });
    this.time.addEvent({
      delay: 1600,
      loop: false,
      callback: () => {
        // this.scene.resume();
        text.destroy();
      },
    });
    this.anims.create({
      key: "walk",
      frameRate: 20,
      frames: this.anims.generateFrameNumbers("guy", { start: 0, end: 6 }),
      repeat: -1,
    });
    let door1 = this.physics.add.staticImage(8000, 615, "door");
    goody = this.physics.add.sprite(300, 400, "guy");
    goody.body.width = 57;
    goody.play("walk");
    this.physics.add.overlap(this.stars, goody, function (bod1, bod2) {
      bod2.destroy();
      self1.rew.play();
      score += 50;
      self.scoreTxt = self.add
        .bitmapText(self.txt.x + self.txt.width + 10, 0, "font", score, 48)
        .setOrigin(0);
    });
    this.brainguys.getChildren().forEach(function (bad1) {
      bad1.play("move");
    }, this);
    this.physics.add.collider(goody, platforms);
    let self = this;
    this.physics.add.collider(goody, this.brainguys, function (bod1, bod2) {
      // console.log(bod1, bod2);
      bod1.body.setVelocityY(-200);
      if (bod2.body.position.y - bod1.body.position.y > 90) {
        self.jumpon.play();
        bod2.destroy();
        score += 50;
        self.scoreTxt = self.add
          .bitmapText(self.txt.x + self.txt.width + 10, 0, "font", score, 48)
          .setOrigin(0);
      } else {
        self.fx.stop();
        self.boom.play();
        self.cameras.main.shake(500);
        self.time.addEvent({
          delay: 500,
          loop: false,
          callback: () => {
            self.scene.restart();
          },
        });
      }
    });
    this.physics.add.collider(platforms, this.brainguys);
    platforms.setCollisionByExclusion(-1, true);
    this.walkspeed = 200;

    this.physics.add.collider(
      door1,
      goody,
      function () {
        this.fx.stop();
        this.time.addEvent({
          delay: 2000,
          loop: false,
          callback: () => {
            this.scene.start("SceneThree");
          },
        });
      },
      null,
      this
    );

    this.cameras.main.startFollow(goody, true, 0.08, 0.08);
    this.cursors = this.input.keyboard.createCursorKeys();
  },
  update: function () {
    this.stars.getChildren().forEach(function (star) {
      // star.play("sparkle");
      star.rotation += 0.04;
    }, this);
    this.brainguys.getChildren().forEach(function (bad1) {
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
