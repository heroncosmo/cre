import pricing from '../config/pricing';

type SiteLimit = '1' | 'ilimitados';

interface PlanMobileInfo {
    freeDomains: number;
    siteLimit: SiteLimit;
    support: string;
}

function getSiteLimit(planKey: string): SiteLimit {
    // Derive site limit based on features (this is a stub, replace with actual logic)
    if (planKey === 'plano-turbo') {
        return 'ilimitados';
    }
    return '1';
}

export function planMobileInfo(planKey: string, period: string): PlanMobileInfo | undefined {
    const plan = pricing[planKey];

    if (!plan) return undefined;

    const tier = plan.tiers.find(t => t.period === period);
    if (!tier) return undefined;

    const freeDomains = tier.freeDomains;
    const siteLimit = getSiteLimit(planKey);

    return {
        freeDomains,
        siteLimit,
        support: 'Suporte especialista 24h + Garantia de 30 dias',
    };
}

