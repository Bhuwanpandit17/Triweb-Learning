"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = __importDefault(require("./routes/user"));
//userRoute
const app = (0, express_1.default)();
const connectionString = "mongodb+srv://bhuwan:1234@cluster0.ea4vyn3.mongodb.net/workshopdb?retryWrites=true&w=majority";
app.use(express_1.default.json());
// app.get('/',(req,res)=>{
//     res.send("Hello how are you");
// })
app.use('/user', user_1.default);
//Redirect /user to userRoute
mongoose_1.default.connect(connectionString)
    .then((success) => app.listen(3000))
    .catch((error) => console.log(error));
