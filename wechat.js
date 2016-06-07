/**
 * Created by Zhongyi on 5/2/16.
 */
"use strict";

const path = require('path');
const {app, shell, BrowserWindow} = require('electron');
const Common = require('./common');
const CSSInjector = require('./styles');

class WeChatWindow {
  constructor() {
    this.createWindow();
  }

  createWindow() {
    this.wechatWindow = new BrowserWindow({
      title: Common.ELECTRONIC_WECHAT,
      resizable: true,
      center: true,
      show: true,
      frame: true,
      autoHideMenuBar: true,
      titleBarStyle: 'hidden-inset',
      webPreferences: {
        javascript: true,
        plugins: true,
        nodeIntegration: false,
        webSecurity: false,
      }
    });

    this.wechatWindow.webContents.setUserAgent(Common.USER_AGENT);
    if (Common.DEBUG_MODE) {
      this.wechatWindow.webContents.openDevTools();
    }

    this.connect();

    this.wechatWindow.on('close', (e) => {
      if (this.wechatWindow.isVisible()) {
        e.preventDefault();
        this.wechatWindow.hide();
      }
    });

    this.wechatWindow.webContents.on('dom-ready', () => {
      if (process.platform === "darwin") {
        this.wechatWindow.webContents.insertCSS(CSSInjector.osxCSS);
      }
    });
  }

  loadURL(url) {
    this.wechatWindow.loadURL(url);
  }

  show() {
    this.wechatWindow.show();
  }

  connect() {
    this.loadURL(Common.WEB_WECHAT);
  }
}

module.exports = WeChatWindow;
