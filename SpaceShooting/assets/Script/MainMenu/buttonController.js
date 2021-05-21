// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const mEmitter = require("EmitterClass");

cc.Class({
  extends: cc.Component,

  properties: {
    btnPlay: cc.Button,
    btnOption: cc.Button,
    btnQuit: cc.Button,
    btnTutorial: cc.Button,
    excute: true,
    //btnHighscore: cc.Button,
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    //this.btnHighscore.node.on("mouseenter", this.hoverButton.bind(this));
    this.btnOption.node.on("mouseenter", this.hoverButton.bind(this));
    this.btnPlay.node.on("mouseenter", this.hoverButton.bind(this));
    this.btnTutorial.node.on("mouseenter", this.hoverButton.bind(this));
    this.btnQuit.node.on("mouseenter", this.hoverButton.bind(this));

    //this.btnHighscore.node.on("mouseleave", this.leaveButton.bind(this));
    this.btnOption.node.on("mouseleave", this.leaveButton.bind(this));
    this.btnPlay.node.on("mouseleave", this.leaveButton.bind(this));
    this.btnTutorial.node.on("mouseleave", this.leaveButton.bind(this));
    this.btnQuit.node.on("mouseleave", this.leaveButton.bind(this));

    //this.btnHighscore.node.on("mousedown", this.clickHighscore.bind(this));
    this.btnPlay.node.on("mousedown", this.clickPlay.bind(this));
    this.btnOption.node.on("mousedown", this.clickOption.bind(this));
    this.btnQuit.node.on("mousedown", this.clickQuit.bind(this));
    this.btnTutorial.node.on("mousedown", this.clickTutorial.bind(this));

    mEmitter.instance.registerEvent(
      "enableButton",
      this.enableButton.bind(this)
    );
  },

  start() {},

  hoverButton(evt) {
    cc.tween(evt.target).to(0.2, { scale: 1.3 }, { ease: "bounceOut" }).start();
  },

  leaveButton(evt) {
    cc.tween(evt.target).to(0.2, { scale: 1 }, { ease: "bounceout" }).start();
  },

  clickOption() {
    if (this.excute) {
      this.disableButton();
      mEmitter.instance.emit("showPopup", "Option");
    }
  },

  clickPlay() {
    //this.disableButton();
    cc.director.loadScene("PlayScene");
  },

  clickQuit() {
    if (this.excute) {
      this.disableButton();
      mEmitter.instance.emit("showPopup", "Quit");
    }
  },

  clickTutorial() {
    if (this.excute) {
      this.disableButton();
      mEmitter.instance.emit("showPopup", "Tutorial");
    }
  },

  // clickHighscore() {
  //   this.disableButton();
  //   mEmitter.instance.emit("showPopup", "Highscore");
  // },

  disableButton() {
    this.node.active = false;
    this.excute = false;
  },

  enableButton() {
    this.node.active = true;
    this.excute = true;
    // this.btnHighscore.node.active = true;
    // this.btnQuit.node.active = true;
    // this.btnPlay.node.active = true;
    // this.btnOption.node.active = true;
    // this.btnTutorial.node.active = true;
    // this.btnHighscore.node.on("mousedown", this.clickHighscore.bind(this));
    // this.btnPlay.node.on("mousedown", this.clickPlay.bind(this));
    // this.btnOption.node.on("mousedown", this.clickOption.bind(this));
    // this.btnQuit.node.on("mousedown", this.clickQuit.bind(this));
    // this.btnTutorial.node.on("mousedown", this.clickTutorial.bind(this));
  },

  // update (dt) {},
});
