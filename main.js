/* eslint-disable */
'use strict';

const path = require('path');
const {app, ipcMain} = require('electron');

const Common = require('./common');

const WeChatWindow = require('./wechat');

class ElectronicWeChat {
  constructor() {
    this.wechatWindow = null;
  }

  init() {
    this.initApp();
  }

  initApp() {
    app.on('ready', ()=> {
      this.createWeChatWindow();
    });

    app.on('activate', (e) => {
      if (this.wechatWindow === null) {
        this.createWeChatWindow();
      } else {
        this.wechatWindow.show();
      }
    });
  };

  createWeChatWindow() {
    this.wechatWindow = new WeChatWindow();
  }
}

new ElectronicWeChat().init();
