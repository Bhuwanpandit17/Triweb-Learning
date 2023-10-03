"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const registerUser = (req, res, next) => {
    console.log(req.body);
    console.log("Registration done");
    res.send("Registration done");
};
exports.registerUser = registerUser;
