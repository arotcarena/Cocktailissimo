export const calcMargin = (supplyPriceHT, salesPriceHT) => {
    const amount = salesPriceHT - supplyPriceHT;
    const rate = (amount / supplyPriceHT) * 100;
    
    //pour arrondir avec 2 décimales
    const roundedRate = Math.round(rate * 100) / 100;

    return { amount, rate: roundedRate };
}