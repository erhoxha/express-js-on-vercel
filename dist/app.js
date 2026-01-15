"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const calculateLotSizeController_1 = require("./controllers/calculateLotSizeController");
dotenv_1.default.config();
const app = (0, express_1.default)();
// Determine the correct base path
// In production (compiled): __dirname = 'dist', so we need '../views'
// In development (ts-node): __dirname = root, so we need 'views'
const isCompiled = __dirname.endsWith('dist');
const viewsPath = isCompiled ? path_1.default.join(__dirname, '../views') : path_1.default.join(__dirname, 'views');
const publicPath = isCompiled ? path_1.default.join(__dirname, '../public') : path_1.default.join(__dirname, 'public');
app.set('view engine', 'ejs');
app.set('views', viewsPath);
app.use(express_1.default.static(publicPath));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.redirect('/calculateLotSize');
});
app.get('/calculateLotSize', calculateLotSizeController_1.getCalculateLotSize);
app.post('/calculateLotSize', calculateLotSizeController_1.postCalculateLotSize);
exports.default = app;
//# sourceMappingURL=app.js.map