"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//----------- start import -----------
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
const routes_1 = __importDefault(require("./routes"));
//------------ end import ------------
// [EXPRESS]
const app = (0, express_1.default)();
// [CONFIG]
(0, config_1.default)(app);
// [ROUTES]
(0, routes_1.default)(app);
const port = process.env.PORT;
const type_env = process.env.TYPE_ENV;
app.listen(port, () => {
    console.log(`Application run in [ ${type_env} ] - port : ${port}`);
});
