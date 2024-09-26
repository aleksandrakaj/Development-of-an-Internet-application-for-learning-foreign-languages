"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_router_1 = __importDefault(require("./routers/user.router"));
const comment_router_1 = __importDefault(require("./routers/comment.router"));
const language_router_1 = __importDefault(require("./routers/language.router"));
const body_parser_1 = __importDefault(require("body-parser"));
const question_router_1 = __importDefault(require("./routers/question.router"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
mongoose_1.default.connect('mongodb://localhost:27017/myappDB');
const connection = mongoose_1.default.connection;
connection.once('open', () => {
    console.log('db connected');
});
const router = express_1.default.Router();
router.use('/users', user_router_1.default);
router.use('/comments', comment_router_1.default);
router.use('/language', language_router_1.default);
router.use('/questions', question_router_1.default);
app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
