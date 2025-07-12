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
            { period: "3anos", price: "7,79", renewalPrice: "17,19", discount: "71% OFF", total: "278,48", savings: "797,55", freeDomains: 1 },
            { period: "2anos", price: "9,99", renewalPrice: "21,99", discount: "63% OFF", total: "237,49", savings: "515,86", freeDomains: 1 },
            { period: "1ano", price: "9,99", renewalPrice: "21,99", discount: "63% OFF", total: "118,75", savings: "311,92", freeDomains: 1 }
        ]
    },
    "plano-p": {
        name: "Plano P",
        tiers: [
            { period: "3anos", price: "9,89", renewalPrice: "26,69", discount: "74% OFF", total: "355,51", savings: "1.143,12", freeDomains: 1 },
            { period: "1ano", price: "11,69", renewalPrice: "31,39", discount: "70% OFF", total: "139,37", savings: "423,50", freeDomains: 1 },
            { period: "6meses", price: "13,69", renewalPrice: "36,99", discount: "64% OFF", total: "82,12", savings: "151,82", freeDomains: 1 },
            { period: "1mes", price: "38,99", renewalPrice: "38,99", discount: "0% OFF", total: "38,99", savings: "0", freeDomains: 0 }
        ]
    },
    "plano-m": {
        name: "Plano M",
        tiers: [
            { period: "3anos", price: "13,89", renewalPrice: "34,69", discount: "69% OFF", total: "499,54", savings: "1.222,29", freeDomains: 1 },
            { period: "1ano", price: "15,59", renewalPrice: "38,79", discount: "65% OFF", total: "186,19", savings: "451,08", freeDomains: 1 },
            { period: "6meses", price: "16,89", renewalPrice: "41,99", discount: "62% OFF", total: "100,78", savings: "170,36", freeDomains: 1 },
            { period: "1mes", price: "45,19", renewalPrice: "45,19", discount: "0% OFF", total: "45,19", savings: "0", freeDomains: 0 }
        ]
    },
    "plano-turbo": {
        name: "Plano Turbo",
        tiers: [
            { period: "3anos", price: "25,69", renewalPrice: "56,99", discount: "59% OFF", total: "923,24", savings: "1.543,78", freeDomains: 2 },
            { period: "1ano", price: "26,99", renewalPrice: "59,89", discount: "57% OFF", total: "323,41", savings: "634,25", freeDomains: 2 },
            { period: "6meses", price: "27,59", renewalPrice: "61,29", discount: "56% OFF", total: "165,48", savings: "211,86", freeDomains: 2 },
            { period: "1mes", price: "62,89", renewalPrice: "62,89", discount: "0% OFF", total: "62,89", savings: "0", freeDomains: 0 }
        ]
    }
};

export default pricing;
