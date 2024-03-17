"use strict";
exports.__esModule = true;
exports.main = void 0;
var axios_1 = require("axios");
// import { Qiita } from './qiita';
function main() {
    axios_1["default"]
        .get("https://zipcloud.ibsnet.co.jp/api/search?zipcode=1610032")
        .then(function (res) { console.log(res); })["catch"](function (err) { console.error(err); });
}
exports.main = main;
if (require.main === module) {
    main();
}
