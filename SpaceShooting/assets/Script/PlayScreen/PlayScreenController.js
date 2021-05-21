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
    _killCount: 0,
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    mEmitter.instance = new mEmitter();
    this.node.on(cc.Node.EventType.MOUSE_DOWN, this.returnMousePos.bind(this));
    mEmitter.instance.registerEvent("killCount", this.killCount.bind(this));
    var manager = cc.director.getCollisionManager();
    manager.enabled = true;
    manager.enabledDebugDraw = true;
  },

  start() {},

  returnMousePos(event) {
    let mouseType = event.getButton();
    if (mouseType === cc.Event.EventMouse.BUTTON_LEFT) {
      let mousePoint = event.getLocation();
      let localPoint = this.node.convertToNodeSpaceAR(mousePoint);
      mEmitter.instance.emit("moveShip", localPoint);
    }
  },

  killCount() {
    this._killCount++;
    if (this._killCount >= 20) {
      mEmitter.instance.emit("summonBoss", 1, this.node);
      this._killCount = 0;
    }
  },
  // update (dt) {},
});
