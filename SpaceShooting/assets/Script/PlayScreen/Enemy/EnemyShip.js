// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
import enemyList from "./Config";

// const

cc.Class({
  extends: cc.Component,

  properties: {
    enemy1: cc.Prefab,
    enemy2: cc.Prefab,
    enemy3: cc.Prefab,
    enemy4: cc.Prefab,
    enemy5: cc.Prefab,
    enemy6: cc.Prefab,
    enemy7: cc.Prefab,
    enemy8: cc.Prefab,
    enemy9: cc.Prefab,
    enemy10: cc.Prefab,
    enemy11: cc.Prefab,
    enemy12: cc.Prefab,
    enemy: cc.Node,
    objEnemy: cc.Object,
    listEnemy: cc.Node,
    _wave1: {
      default: [],
      serializable: false,
    },
    _position: {
      default: new cc.Vec2(),
      serializable: false,
    },
    _objJson: null,
    // listEnemy:cc.Node,
  },

  // getData(){
  //   cc.loader.loadRes('MapEnemy.json',this.getMap.bind(this))
  // },

  // getMap(){

  // },

  createEnemy(type, pos) {
    switch (type) {
      case 1:
        this.enemy = cc.instantiate(this.enemy1);
        this.enemy.parent = this.node;
        this.objEnemy = Object.values(enemyList)[0];
        cc.log("Run");
        cc.tween(this.enemy)
          .to(2, { position: pos }, { easing: "sineOutIn" })
          .start();
        break;
      case 2:
        this.enemy = cc.instantiate(this.enemy2);
        this.enemy.parent = this.node;
        this.objEnemy = Object.values(enemyList)[1];
        cc.tween(this.enemy).to(2, { position: pos }).start();
        break;
      case 3:
        enemy = cc.instantiate(this.enemy3);
        objEnemy = Object.values(enemyList)[2];
        break;
      case 4:
        enemy = cc.instantiate(this.enemy4);
        objEnemy = Object.values(enemyList)[3];
        break;
      case 5:
        enemy = cc.instantiate(this.enemy5);
        objEnemy = Object.values(enemyList)[4];
        break;
      case 6:
        enemy = cc.instantiate(this.enemy6);
        objEnemy = Object.values(enemyList)[5];
        break;
      case 7:
        enemy = cc.instantiate(this.enemy7);
        objEnemy = Object.values(enemyList)[6];
        break;
      case 8:
        enemy = cc.instantiate(this.enemy8);
        objEnemy = Object.values(enemyList)[7];
        break;
      case 9:
        enemy = cc.instantiate(this.enemy9);
        objEnemy = Object.values(enemyList)[8];
        break;
      case 10:
        enemy = cc.instantiate(this.enemy10);
        objEnemy = Object.values(enemyList)[9];
        break;
      case 11:
        enemy = cc.instantiate(this.enemy11);
        objEnemy = Object.values(enemyList)[10];
        break;
      case 12:
        enemy = cc.instantiate(this.enemy12);
        objEnemy = Object.values(enemyList)[11];
        break;
      default:
        break;
    }
  },

  makeWave1() {
    this.valuesObj = Object.values(enemyList);
    let index = 0;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 7; j++) {
        let x = -265 + (640 / 7) * j;
        let y = 500 - (700 / 4) * i;
        this._position = cc.v2(x, y);
        if (this._wave1[index] === 1) {
          this.createEnemy(this.valuesObj[0].type, this._position);
        } else if (this._wave1[index] === 2) {
          this.createEnemy(this.valuesObj[1].type, this._position);
        }
        index++;
      }
    }
  },
  // LIFE-CYCLE CALLBACKS:

  onLoad() {},

  getMap(err, obj) {
    if (err) {
      return;
    }
    let data = obj.json;
    this._wave1 = obj.json.wave1.map;
    this.makeWave1();
  },
  start() {
    cc.loader.loadRes("MapEnemy.json", this.getMap.bind(this));
  },
  // update (dt) {},
});
