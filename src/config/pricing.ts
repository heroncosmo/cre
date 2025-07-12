interface Tier {
    period: '1mes' | '6meses' | '1ano' | '2anos' | '3anos';
    price: string;
    renewalPrice: string;
    discount: string;
    total: string;
    savings: string;
    freeDomains: number;
}

const pricing: { [plan: string]: { name: string; tiers: Tier[] } } = {
    "plano-start": {
        name: "Plano Start",
        tiers: [
            { period: "3anos", price: "6,77", renewalPrice: "17,19", discount: "71% OFF", total: "243,77", savings: "797,55", freeDomains: 1 },
            { period: "2anos", price: "8,77", renewalPrice: "21,99", discount: "63% OFF", total: "210,77", savings: "515,86", freeDomains: 1 },
            { period: "1ano", price: "8,77", renewalPrice: "21,99", discount: "63% OFF", total: "105,77", savings: "311,92", freeDomains: 1 }
        ]
    },
    "plano-p": {
        name: "Plano P",
        tiers: [
            { period: "3anos", price: "8,77", renewalPrice: "26,69", discount: "74% OFF", total: "315,77", savings: "1.143,12", freeDomains: 1 },
            { period: "1ano", price: "10,77", renewalPrice: "31,39", discount: "70% OFF", total: "129,77", savings: "423,50", freeDomains: 1 },
            { period: "6meses", price: "12,77", renewalPrice: "36,99", discount: "64% OFF", total: "76,77", savings: "151,82", freeDomains: 1 },
            { period: "1mes", price: "34,77", renewalPrice: "34,77", discount: "0% OFF", total: "34,77", savings: "0", freeDomains: 0 }
        ]
    },
    "plano-m": {
        name: "Plano M",
        tiers: [
            { period: "3anos", price: "12,77", renewalPrice: "34,69", discount: "69% OFF", total: "459,77", savings: "1.222,29", freeDomains: 1 },
            { period: "1ano", price: "13,77", renewalPrice: "38,79", discount: "65% OFF", total: "165,77", savings: "451,08", freeDomains: 1 },
            { period: "6meses", price: "15,77", renewalPrice: "41,99", discount: "62% OFF", total: "94,77", savings: "170,36", freeDomains: 1 },
            { period: "1mes", price: "40,77", renewalPrice: "40,77", discount: "0% OFF", total: "40,77", savings: "0", freeDomains: 0 }
        ]
    },
    "plano-turbo": {
        name: "Plano Turbo",
        tiers: [
            { period: "3anos", price: "22,77", renewalPrice: "56,99", discount: "59% OFF", total: "819,77", savings: "1.543,78", freeDomains: 2 },
            { period: "1ano", price: "24,77", renewalPrice: "59,89", discount: "57% OFF", total: "297,77", savings: "634,25", freeDomains: 2 },
            { period: "6meses", price: "24,77", renewalPrice: "61,29", discount: "56% OFF", total: "148,77", savings: "211,86", freeDomains: 2 },
            { period: "1mes", price: "55,77", renewalPrice: "55,77", discount: "0% OFF", total: "55,77", savings: "0", freeDomains: 0 }
        ]
    }
};

export default pricing;
