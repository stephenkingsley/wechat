"use strict";
const Common = require("./common");

class CSSInjector {}

CSSInjector.osxCSS = `
    div.header div.avatar img.img {
      width: 24px;
      height: 24px;
    }
    div.header {
      padding-top: 38px;
      padding-bottom: 8px;
    }
    span.display_name {
      width: 172px !important;
    }
`;

module.exports = CSSInjector;
