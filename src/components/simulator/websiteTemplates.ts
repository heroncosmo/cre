// Professional website templates inspired by modern landing pages
export interface WebsiteTemplate {
  id: string;
  name: string;
  domain: string;
  type: string;
  tagline: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  heroImage?: string;
  logo?: string;
  services: {
    title: string;
    description: string;
    price: string;
    icon?: string;
    highlight?: boolean;
  }[];
  features: string[];
  testimonial?: {
    text: string;
    author: string;
    role: string;
    avatar?: string;
  };
  stats?: {
    value: string;
    label: string;
  }[];
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    gradient?: string;
  };
  icon: string;
  cta: {
    primary: string;
    secondary: string;
  };
}

export const websiteTemplates: WebsiteTemplate[] = [
  {
    id: 'tech-saas',
    name: 'CloudFlow',
    domain: 'cloudflow.io',
    type: 'SaaS Platform',
    tagline: 'Infrastructure as Code',
    title: 'Deploy faster than ever before',
    subtitle: 'Ship your applications in minutes, not days',
    description: 'The modern cloud platform that developers love. Scale effortlessly with our intelligent infrastructure.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop',
    services: [
      {
        title: 'Starter',
        description: 'Perfect for small projects',
        price: '$29/mo',
        icon: '🚀',
        highlight: false
      },
      {
        title: 'Professional',
        description: 'For growing teams',
        price: '$99/mo',
        icon: '⚡',
        highlight: true
      },
      {
        title: 'Enterprise',
        description: 'Custom solutions',
        price: 'Contact us',
        icon: '🏢',
        highlight: false
      }
    ],
    features: ['99.99% Uptime SLA', 'Global CDN', '24/7 Expert Support', 'Advanced Analytics'],
    testimonial: {
      text: 'CloudFlow transformed how we deploy. What used to take hours now takes minutes.',
      author: 'Sarah Chen',
      role: 'CTO at TechCorp',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    },
    stats: [
      { value: '10M+', label: 'Deployments' },
      { value: '99.99%', label: 'Uptime' },
      { value: '<50ms', label: 'Response Time' },
      { value: '150+', label: 'Countries' }
    ],
    colors: {
      primary: 'indigo',
      secondary: 'purple',
      accent: 'cyan',
      gradient: 'from-indigo-600 via-purple-600 to-pink-600'
    },
    icon: '☁️',
    cta: {
      primary: 'Start free trial',
      secondary: 'View demo'
    }
  },
  {
    id: 'luxury-restaurant',
    name: 'Le Jardin Secret',
    domain: 'lejardinsecret.com',
    type: 'Fine Dining Restaurant',
    tagline: 'Michelin Star Excellence',
    title: 'An unforgettable culinary journey',
    subtitle: 'Where French tradition meets modern innovation',
    description: 'Experience the art of gastronomy in an intimate setting. Our chef creates magic with the finest seasonal ingredients.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&h=600&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&h=800&fit=crop',
    services: [
      {
        title: 'Lunch Menu',
        description: '3-course seasonal menu',
        price: '€65',
        icon: '🌞',
        highlight: false
      },
      {
        title: 'Tasting Menu',
        description: '7-course experience',
        price: '€185',
        icon: '✨',
        highlight: true
      },
      {
        title: 'Wine Pairing',
        description: 'Curated selection',
        price: '€95',
        icon: '🍷',
        highlight: false
      }
    ],
    features: ['Private Dining', 'Sommelier Service', 'Seasonal Menu', 'Valet Parking'],
    testimonial: {
      text: 'An extraordinary experience. Every dish was a masterpiece of flavor and presentation.',
      author: 'James Mitchell',
      role: 'Food Critic, Gourmet Magazine',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    },
    stats: [
      { value: '⭐⭐', label: 'Michelin Stars' },
      { value: '4.9/5', label: 'Guest Rating' },
      { value: '15+', label: 'Years of Excellence' },
      { value: '50', label: 'Seats Only' }
    ],
    colors: {
      primary: 'amber',
      secondary: 'stone',
      accent: 'rose',
      gradient: 'from-amber-700 via-amber-600 to-orange-600'
    },
    icon: '🍽️',
    cta: {
      primary: 'Reserve a table',
      secondary: 'View menu'
    }
  },
  {
    id: 'health-clinic',
    name: 'Vitality Medical',
    domain: 'vitalitymedical.com',
    type: 'Healthcare Center',
    tagline: 'Your Health, Our Priority',
    title: 'World-class healthcare at your doorstep',
    subtitle: 'Comprehensive medical services with a personal touch',
    description: 'State-of-the-art facilities combined with compassionate care. Your journey to better health starts here.',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=600&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&h=800&fit=crop',
    services: [
      {
        title: 'Health Checkup',
        description: 'Comprehensive screening',
        price: '$299',
        icon: '🏥',
        highlight: false
      },
      {
        title: 'Premium Care',
        description: '24/7 concierge medicine',
        price: '$199/mo',
        icon: '💎',
        highlight: true
      },
      {
        title: 'Telemedicine',
        description: 'Virtual consultations',
        price: '$49',
        icon: '💻',
        highlight: false
      }
    ],
    features: ['Same-day appointments', 'Digital health records', 'On-site pharmacy', 'Multilingual staff'],
    testimonial: {
      text: 'The care I received was exceptional. The staff made me feel like family.',
      author: 'Maria Rodriguez',
      role: 'Patient since 2019',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
    },
    stats: [
      { value: '50k+', label: 'Patients Served' },
      { value: '98%', label: 'Satisfaction Rate' },
      { value: '45+', label: 'Specialists' },
      { value: '<30min', label: 'Average Wait' }
    ],
    colors: {
      primary: 'teal',
      secondary: 'emerald',
      accent: 'sky',
      gradient: 'from-teal-500 to-emerald-600'
    },
    icon: '⚕️',
    cta: {
      primary: 'Book appointment',
      secondary: 'Our services'
    }
  },
  {
    id: 'law-firm',
    name: 'Sterling & Associates',
    domain: 'sterlinglegal.com',
    type: 'Law Firm',
    tagline: 'Excellence in Legal Practice',
    title: 'Protecting your interests with unwavering dedication',
    subtitle: 'Trusted legal counsel for over 50 years',
    description: 'From complex litigation to strategic counsel, we deliver results that matter to our clients.',
    image: 'https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?w=800&h=600&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop',
    services: [
      {
        title: 'Consultation',
        description: 'Initial case review',
        price: '$350',
        icon: '📋',
        highlight: false
      },
      {
        title: 'Full Representation',
        description: 'Complete legal services',
        price: 'Custom quote',
        icon: '⚖️',
        highlight: true
      },
      {
        title: 'Corporate Retainer',
        description: 'Ongoing counsel',
        price: '$5,000/mo',
        icon: '🏛️',
        highlight: false
      }
    ],
    features: ['24/7 Emergency Line', 'Global Network', 'Multilingual Team', 'Pro Bono Program'],
    testimonial: {
      text: 'Sterling & Associates secured a favorable outcome in our most challenging case. True professionals.',
      author: 'David Thompson',
      role: 'CEO, Global Industries Inc.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
    },
    stats: [
      { value: '$2.5B', label: 'Recovered for Clients' },
      { value: '95%', label: 'Success Rate' },
      { value: '200+', label: 'Attorneys' },
      { value: '30+', label: 'Practice Areas' }
    ],
    colors: {
      primary: 'slate',
      secondary: 'zinc',
      accent: 'gold',
      gradient: 'from-slate-800 to-slate-900'
    },
    icon: '⚖️',
    cta: {
      primary: 'Schedule consultation',
      secondary: 'Our expertise'
    }
  },
  {
    id: 'fashion-boutique',
    name: 'Maison Élégance',
    domain: 'maisonelegance.com',
    type: 'Luxury Fashion',
    tagline: 'Haute Couture Redefined',
    title: 'Where fashion becomes art',
    subtitle: 'Exclusive collections for the discerning individual',
    description: 'Discover timeless elegance with our curated selection of designer pieces and bespoke creations.',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&h=800&fit=crop',
    services: [
      {
        title: 'Ready-to-Wear',
        description: 'Current collection',
        price: 'From €500',
        icon: '👗',
        highlight: false
      },
      {
        title: 'Haute Couture',
        description: 'Custom creations',
        price: 'By appointment',
        icon: '✨',
        highlight: true
      },
      {
        title: 'Personal Styling',
        description: 'Private consultation',
        price: '€300/session',
        icon: '💅',
        highlight: false
      }
    ],
    features: ['Private Shopping', 'Worldwide Delivery', 'Alterations Service', 'VIP Events'],
    testimonial: {
      text: 'Maison Élégance understands fashion as few others do. Each piece tells a story of craftsmanship.',
      author: 'Isabella Laurent',
      role: 'Fashion Editor, Vogue Paris',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop'
    },
    stats: [
      { value: '30+', label: 'Years of Heritage' },
      { value: '500+', label: 'Exclusive Pieces' },
      { value: '50+', label: 'Global Boutiques' },
      { value: '24h', label: 'Delivery Time' }
    ],
    colors: {
      primary: 'rose',
      secondary: 'pink',
      accent: 'fuchsia',
      gradient: 'from-rose-400 via-pink-500 to-fuchsia-600'
    },
    icon: '👗',
    cta: {
      primary: 'Explore collection',
      secondary: 'Book appointment'
    }
  },
  {
    id: 'fitness-studio',
    name: 'APEX Performance',
    domain: 'apexperformance.com',
    type: 'Fitness Studio',
    tagline: 'Transform Your Limits',
    title: 'Unlock your peak potential',
    subtitle: 'Where champions are made',
    description: 'Elite training programs designed by world-class athletes. Your transformation starts today.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop',
    services: [
      {
        title: 'Group Classes',
        description: 'High-energy sessions',
        price: '$99/mo',
        icon: '🏋️',
        highlight: false
      },
      {
        title: 'Personal Training',
        description: '1-on-1 coaching',
        price: '$150/session',
        icon: '💪',
        highlight: true
      },
      {
        title: 'Performance Lab',
        description: 'Advanced testing',
        price: '$299',
        icon: '🧬',
        highlight: false
      }
    ],
    features: ['Olympic Equipment', 'Recovery Suite', 'Nutrition Bar', 'App Integration'],
    testimonial: {
      text: 'APEX changed my life. I\'m stronger, faster, and more confident than ever before.',
      author: 'Michael Torres',
      role: 'Marathon Runner',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop'
    },
    stats: [
      { value: '10k+', label: 'Members' },
      { value: '97%', label: 'Goal Achievement' },
      { value: '50+', label: 'Expert Coaches' },
      { value: '24/7', label: 'Access' }
    ],
    colors: {
      primary: 'orange',
      secondary: 'red',
      accent: 'yellow',
      gradient: 'from-orange-500 via-red-500 to-pink-500'
    },
    icon: '💪',
    cta: {
      primary: 'Start free trial',
      secondary: 'Tour facility'
    }
  }
];
