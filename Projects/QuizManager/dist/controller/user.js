"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.updateUser = exports.getUser = exports.registerUser = void 0;
const user_1 = __importDefault(require("../models/user"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
//Post
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let resp;
    try {
        const email = req.body.email;
        const name = req.body.name;
        let password = yield bcryptjs_1.default.hash(req.body.password, 12);
        const user = new user_1.default({ email, name, password });
        const result = yield user.save();
        // To model
        if (!result) {
            resp = { status: "error", message: "No result found", data: {} };
            res.send(resp);
        }
        else {
            resp = {
                status: "success",
                message: "Registration done",
                data: { userId: result._id },
            };
            res.send(resp);
        }
    }
    catch (error) {
        resp = { status: "error", message: "Something went wrong", data: {} };
        res.status(500).send(resp);
    }
});
exports.registerUser = registerUser;
//Login module
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let resp;
    try {
        const email = req.body.email;
        const password = req.body.password;
        //Find user with email
        const user = yield user_1.default.findOne({ email });
        if (!user) {
            resp = { status: "error", message: "No user found", data: {} };
            res.send(resp);
        }
        else {
            resp = { status: "success", message: "user found", data: { user: user } };
            res.send(resp);
        }
        //Verify password using bcrypt
        //then  decide
        res.send("Login");
    }
    catch (error) {
        console.log(error);
        resp = { status: "error", message: "Something went wrong", data: {} };
        res.status(500).send(resp);
    }
});
exports.loginUser = loginUser;
// Get user
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let resp;
    try {
        const userId = req.params.userId;
        const user = yield user_1.default.findById(userId, { name: 1, email: 2 });
        if (!user) {
            resp = { status: "error", message: "No user found", data: {} };
            res.send(resp);
        }
        else {
            resp = { status: "success", message: "user found", data: { user: user } };
            res.send(resp);
        }
    }
    catch (error) {
        resp = { status: "error", message: "Something went wrong", data: {} };
        res.status(500).send(resp);
    }
});
exports.getUser = getUser;
//Put
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let resp;
    try {
        const userId = req.body._id;
        const user = yield user_1.default.findById(userId, { name: 1 });
        //console.log(user);
        if (!user) {
            resp = { status: "error", message: "No user found", data: {} };
            res.send(resp);
        }
        else {
            user.name = req.body.name;
            yield user.save();
            resp = {
                status: "success",
                message: "user Updated",
                data: { user: user },
            };
            res.send(resp);
        }
    }
    catch (error) {
        console.log(error);
        resp = { status: "error", message: "Something went wrong", data: {} };
        res.status(500).send(resp);
    }
});
exports.updateUser = updateUser;
