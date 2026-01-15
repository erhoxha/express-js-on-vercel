interface CalculateLotSizeParams {
    entryPrice: string | number;
    stopLossPrice: string | number;
    accountBalance: string | number;
    riskPercentageUWantToRisk: string | number;
    goldOrJPYPair?: string | boolean;
}
interface CalculateLotSizeResult {
    recommendedLotSize: string;
    pipsIfLoose: string;
}
/**
 * Calculates the recommended lot size based on risk parameters
 * @param {CalculateLotSizeParams} params - Calculation parameters
 * @returns {CalculateLotSizeResult} Recommended lot size and pips at risk
 */
export declare function calculateLotSize({ entryPrice, stopLossPrice, accountBalance, riskPercentageUWantToRisk, goldOrJPYPair }: CalculateLotSizeParams): CalculateLotSizeResult;
export {};
//# sourceMappingURL=lotSizeCalculator.d.ts.map