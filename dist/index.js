"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const appconfig_1 = __importDefault(require("./config/appconfig"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
// [CONFIG]
(0, appconfig_1.default)(app);
// [ROUTES]
(0, routes_1.default)(app);
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`application run port : ${PORT}`);
});
