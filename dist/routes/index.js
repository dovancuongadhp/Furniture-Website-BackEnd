"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function appRoutes(app) {
    app.use("/sayHi", (req, res) => {
        res.send("Say Hi");
    });
}
exports.default = appRoutes;
