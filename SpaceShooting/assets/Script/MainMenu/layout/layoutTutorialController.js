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
    btnNext: cc.Button,
    btnBack: cc.Button,
    btnClose: cc.Button,
    tutorialPopup: cc.PageView,
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.btnBack.node.on("mousedown", this.clickBack.bind(this));
    this.btnClose.node.on("mousedown", this.clickClose.bind(this));
    this.btnNext.node.on("mousedown", this.clickNext.bind(this));
  },

  start() {},

  clickBack() {
    this.tutorialPopup.scrollToLeft();
  },

  clickNext() {
    this.tutorialPopup.scrollToRight();
  },

  clickClose() {
    mEmitter.instance.emit("enableButton");
    mEmitter.instance.emit("hidePopup", "Tutorial");
  },

  // update (dt) {},
});
