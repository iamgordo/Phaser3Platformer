var SceneZero = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function () {
    Phaser.Scene.call(this, { key: "SceneZero" });
  },
  init: function () {},
  preload: function () {
    this.load.image("brain", "brain.png");
  },
  create: function () {
    this.brain = this.add.image(300, 300, "brain");
    var text = this.add
      .text(640, 360, "               My Phaser 3 Platformer", {
        fontSize: 50,
        color: "#FFF",
        fontStyle: "bold",
      })
      .setOrigin(0.5)
      .setInteractive();
    // text.on("pointerdown", function (pointer) {
    //   console.log("here");
    //   // this.scene.start('SceneThree');
    // });
    // this.time.addEvent({
    //   delay: 3000,
    //   loop: false,
    //   callback: () => {
    //     this.scene.start("SceneThree");
    //   },
    // });
    this.input.on(
      "pointerdown",
      function () {
        this.input.stopPropagation();
        this.scene.switch("SceneOne");
      },
      this
    );
  },
  update: function () {},
});
