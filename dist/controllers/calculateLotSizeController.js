"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCalculateLotSize = getCalculateLotSize;
exports.postCalculateLotSize = postCalculateLotSize;
const lotSizeCalculator_1 = require("../services/lotSizeCalculator");
// GET handler
function getCalculateLotSize(req, res) {
    res.render('calculateLotSize', { request: {}, response: null });
}
// POST handler
function postCalculateLotSize(req, res) {
    const result = (0, lotSizeCalculator_1.calculateLotSize)(req.body);
    res.render('calculateLotSize', {
        request: req.body,
        response: result
    });
}
//# sourceMappingURL=calculateLotSizeController.js.map