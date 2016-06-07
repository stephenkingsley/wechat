"use strict";
var Common = {};
Common.ELECTRON = "Electron";
Common.ELECTRONIC_WECHAT = "微信";
Common.DEBUG_MODE = false;
Common.WINDOW_SIZE = {width: 1000, height: 800};
Common.USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) " +
    "Chrome/41.0.2227.1 Safari/537.36";

Common.WEB_WECHAT = "https://wx.qq.com/";

Common.MENTION_MENU_INITIAL_X = 300;
Common.MENTION_MENU_OFFSET_X = 30;
Common.MENTION_MENU_INITIAL_Y = 140;
Common.MENTION_MENU_OFFSET_Y = 45;
Common.MENTION_MENU_WIDTH = 120;
Common.MENTION_MENU_OPTION_HEIGHT = 30;
Common.MENTION_MENU_OPTION_DEFAULT_NUM = 4;
Common.MENTION_MENU_HINT_TEXT = "Mention:";
Common.MENTION_MENU_HINT_TEXT_CN = "选择回复的人:";

Common.MESSAGE_PREVENT_RECALL = "Blocked a message recall.";
Common.MESSAGE_PREVENT_RECALL_CN = "阻止了一次撤回";
Common.EMOJI_MAXIUM_SIZE = 120;

module.exports = Common;
