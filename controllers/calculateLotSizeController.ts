import { Request, Response } from 'express';
import { calculateLotSize } from '../services/lotSizeCalculator';

// GET handler
export function getCalculateLotSize(req: Request, res: Response): void {
    res.render('calculateLotSize', { request: {}, response: null });
}

// POST handler
export function postCalculateLotSize(req: Request, res: Response): void {
    const result = calculateLotSize(req.body);
    res.render('calculateLotSize', {
        request: req.body,
        response: result
    });
}
