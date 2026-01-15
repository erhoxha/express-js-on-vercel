"use strict";
/**
 * Server entry point for LOCAL DEVELOPMENT only
 *
 * NOTE: This file is NOT used on Vercel deployment.
 * Vercel automatically handles server.listen() and uses app.ts directly.
 *
 * For local development, run: npm run dev
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const PORT = process.env.PORT || 3000;
app_1.default.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=server.js.map