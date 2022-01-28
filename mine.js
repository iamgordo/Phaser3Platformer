const config = {
  type: Phaser.AUTO,
  parent: "game",
  width: 1800,
  heigth: 620,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [SceneZero, SceneOne, SceneTwo, SceneThree],
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
      timeScale: 0.5,
      gravity: { y: 580 },
      overlapBias: 8,
    },
  },
};
const game = new Phaser.Game(config);

class BadGuy extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "badgfx");
    this.xSpeed = 50;
    this.score = 0;
    // some default physics properties
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.body.setVelocityX(this.xSpeed);
    // this.body.setOrigin(0.5, 0.5);
    this.body.setOffset(10, 0);
    this.body.width = 40;
    this.play("wiggle");
  }
  navigate() {
    if (this.body.velocity.x === 0) {
      this.xSpeed *= -1;
      this.body.setVelocityX(this.xSpeed);
    }
  }
  preUpdate(time, delta) {
    super.preUpdate(time, delta);
    this.navigate();
  }
}
