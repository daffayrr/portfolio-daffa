export type Language = 'en' | 'id';

export interface ContentDictionary {
  nav: {
    pillars: string;
    timeline: string;
    assets: string;
    cta: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    ctaProjects: string;
    ctaContact: string;
  };

  aboutMe: {
    tag: string;
    title: string;
    subtitle: string;
    p1: string;
    p2: string;
  };
  portfolio: {
    tag: string;
    title: string;
    viewAll: string;
    projects: Array<{
      title: string;
      description: string;
      tags: string[];
      metrics: string;
      featured: boolean;
    }>;
  };
  metrics: Array<{
    number: string;
    label: string;
    description: string;
  }>;
  pillars: {
    badge: string;
    heading: string;
    subheading: string;
    items: Array<{
      title: string;
      badge: string;
      description: string;
      tags: string[];
      link?: string;
      linkText?: string;
    }>;
  };
  assets: {
    badge: string;
    heading: string;
    description: string;
    items: Array<{
      title: string;
      type: string;
      role: string;
      thesis: string;
      logoSrc: string;
      isSvg?: boolean;
    }>;
  };
  timeline: {
    badge: string;
    heading: string;
    description: string;
    items: Array<{
      period: string;
      brand: string;
      domain: string;
      description: string;
      objective: string;
      link?: string;
    }>;
  };
  closingCta: {
    badge: string;
    heading: string;
    button: string;
  };
  footer: {
    copyright: string;
    disclaimer: string;
  };
}

export const content: Record<'en' | 'id', ContentDictionary> = {
  en: {
    nav: {
      pillars: "Pillars",
      timeline: "Venture Path",
      assets: "Asset Allocation",
      cta: "Initiate Inquiry",
    },
    hero: {
      badge: "Founder & CEO at ToscaFlow • Technology & Capital Strategy",
      headline: "Engineering Scalable Systems. Allocating Strategic Capital.",
      subheadline: "Converging mission-critical software engineering with disciplined, long-term personal capital allocation.",
      ctaProjects: "Explore Ventures",
      ctaContact: "Get in Touch",
    },
    aboutMe: {
      tag: 'About Me',
      title: 'Farras Daffa Yassarramadhan',
      subtitle: 'PHP Web Developer & IT Professional',
      p1: 'Highly motivated IT Professional bridging the gap between technical development and business operations. Equipped with a solid foundation in Informatics Engineering and practical expertise spanning full-stack web development, server administration, and infrastructure management.',
      p2: 'Demonstrated capability in leading operational centers and executing complex projects from planning to deployment. Possesses a strong analytical background enriched by experience in the finance sector and seeks to leverage a unique blend of technical acumen and operational efficiency.'
    },
    portfolio: {
      tag: 'Track Record',
      title: 'Professional Experience',
      viewAll: 'View Full CV',
      projects: [
        {
          title: 'ToscaFlow Tech Solution',
          description: 'Founder & Chief Executive Officer. Leading operations and technical direction for end-to-end software solutions.',
          tags: ['ASP.NET Core', 'Laravel', 'Flutter'],
          metrics: 'Since Apr 2024',
          featured: true,
        },
        {
          title: 'Yayasan Sagasitas Indonesia',
          description: 'Web Administrator, DevOps, & Database Administrator for sagasitas.org. Lead of SagaFarm IoT Program.',
          tags: ['DevOps', 'AWS', 'IoT'],
          metrics: 'Since Dec 2022',
          featured: false,
        },
        {
          title: 'Universitas Alma Ata',
          description: 'Assistant Lecturer & KKN Tematik Team Leader. Educating students and leading community projects.',
          tags: ['Education', 'Leadership', 'Tech'],
          metrics: 'Since Mar 2024',
          featured: false,
        }
      ]
    },
    metrics: [
      {
        number: "99.9%",
        label: "UPTIME RELIABILITY",
        description: "Enterprise SLA guaranteed for mission-critical deployments.",
      },
      {
        number: "6+ Years",
        label: "SYSTEMS EXPERIENCE",
        description: "Continuous computing, IT hardware, and software development since 2020.",
      },
      {
        number: "4 Brands",
        label: "VENTURE ECOSYSTEMS",
        description: "From technical computer support to enterprise SaaS solutions.",
      },
      {
        number: "100%",
        label: "DISCIPLINED ALLOCATION",
        description: "Zero counterparty risk focus across defensive and compound assets.",
      },
    ],
    pillars: {
      badge: "PILLARS OF COMPETENCE",
      heading: "Architecting for Scale. Engineering for Impact.",
      subheading: "A dual-domain framework uniting enterprise technology architectures with measured capital execution.",
      items: [
        {
          title: "ToscaFlow Ecosystem",
          badge: "99.9% Production SLA",
          description: "End-to-end enterprise digital infrastructure, custom software engineering, and continuous 24/7 Operations Center monitoring.",
          tags: ["Multi-tenant SaaS", "Operation Center", "Enterprise Architecture"],
          link: "[https://toscaflow.id](https://toscaflow.id)",
          linkText: "Explore ToscaFlow →",
        },
        {
          title: "Financial Strategy & Capital Allocation",
          badge: "Thesis-Driven",
          description: "Quantitative tech valuation, macroeconomic currency evaluations, and disciplined personal asset allocation frameworks.",
          tags: ["Capital Preservation", "Tech Valuation", "Risk Management"],
        },
        {
          title: "Full-Stack Software Architecture",
          badge: "High-Concurrency",
          description: "Engineering resilient, maintainable web and mobile applications using ASP.NET Core, PHP (Laravel/CI), and modern TypeScript.",
          tags: ["ASP.NET Core", "Laravel / CI", "Flutter", "Next.js / TS"],
        },
        {
          title: "Cloud Systems & Infrastructure",
          badge: "AWS Certified Trainer",
          description: "Server clustering, network edge protection, cloud architecture, and technical knowledge transfer programs.",
          tags: ["AWS Architecture", "Linux Kernel", "Cloudflare Edge", "Database Ops"],
        },
      ],
    },
    assets: {
      badge: "STRATEGIC CAPITAL ALLOCATION",
      heading: "Defensive Reserves & Compounded Growth",
      description: "A disciplined investment framework anchored in proven stores of value, defensive foreign reserves, and market indexes.",
      items: [
        {
          title: "Swiss Franc (Valas CHF)",
          type: "CURRENCY / DEFENSIVE ASSET",
          role: "Capital Protection & Hedging",
          thesis: "Global safe-haven reserve backed by strong fiscal sovereignty, zero geopolitical friction, and low debt-to-GDP stability.",
          logoSrc: "/assets/logos/swiss.svg",
          isSvg: true,
        },
        {
          title: "Physical Gold (Emas Fisik)",
          type: "HARD ASSET / RESERVE",
          role: "Inflation Hedge & Liquidity Base",
          thesis: "Tangible monetary foundation with zero counterparty risk and a multi-century track record of preserving purchasing power.",
          logoSrc: "/assets/logos/gold.svg",
          isSvg: true,
        },
        {
          title: "Mutual Funds (Reksadana)",
          type: "COMPOUND PORTFOLIO / INDEX",
          role: "Systematic Wealth Compounding",
          thesis: "Structured exposure to diversified fixed income and high-quality broad market equity instruments for compounding growth.",
          logoSrc: "/assets/logos/reksadana.png",
        },
      ],
    },
    timeline: {
      badge: "CAREER EVOLUTION",
      heading: "The Venture Journey",
      description: "The strategic progression from hands-on IT maintenance to AI lab research, tech education, and enterprise software leadership.",
      items: [
        {
          period: "2020 – 2021",
          brand: "DF Computer",
          domain: "IT Hardware & Technical Infrastructure",
          description: "The foundational stage providing hardware troubleshooting, OS deployment, and technical service for local consumers and businesses.",
          objective: "To deliver reliable, accessible computer servicing while developing low-level hardware mastery directly in the field.",
          link: "[https://daffayr.netlify.app/](https://daffayr.netlify.app/)",
        },
        {
          period: "2021 – 2023",
          brand: "Zea Technologies and Innovation Lab",
          domain: "Artificial Intelligence & Cloud R&D",
          description: "Applied technology research incubator exploring Computer Vision, CNN/NLP models, and scalable AWS Cloud architectures.",
          objective: "To bridge academic research and enterprise automation through functional, intelligent software prototypes.",
        },
        {
          period: "2024 – 2025",
          brand: "Ingenia Academy",
          domain: "Tech Education & Human Enablement",
          description: "Educational technology initiative dedicated to democratizing computer programming and modern IT skills across all demographics.",
          objective: "To narrow the digital talent divide by providing hands-on coding bootcamps and industry-aligned technical mentorship.",
        },
        {
          period: "2025 – Present",
          brand: "ToscaFlow Tech Solution",
          domain: "Enterprise Software & Cloud Systems",
          description: "Comprehensive software and digital infrastructure provider offering multi-tenant SaaS, 24/7 Operations, and high SLA guarantees.",
          objective: "To accelerate enterprise digital transformations with resilient, secure, and mission-critical software ecosystems.",
          link: "[https://toscaflow.id/](https://toscaflow.id/)",
        },
      ],
    },
    closingCta: {
      badge: "STRATEGIC INQUIRY",
      heading: "Architecting resilient systems. Scaling with calculated precision.",
      button: "Initiate Collaboration",
    },
    footer: {
      copyright: "© 2026 Farras Daffa Yassarramadhan. All rights reserved.",
      disclaimer: "Engineered with Next.js, TypeScript & Tailwind CSS. Focused on Enterprise IT & Strategic Capital.",
    },
  },

  id: {
    nav: {
      pillars: "Pilar Keahlian",
      timeline: "Jejak Karir",
      assets: "Alokasi Aset",
      cta: "Hubungi Saya",
    },
    hero: {
      badge: "Founder & CEO di ToscaFlow • Strategi Teknologi & Finansial",
      headline: "Membangun Sistem Skalabel. Mengelola Modal Strategis.",
      subheadline: "Menghubungkan rekayasa perangkat lunak skala enterprise dengan strategi alokasi modal pribadi yang disiplin dan terukur.",
      ctaProjects: "Lihat Portofolio",
      ctaContact: "Mulai Konsultasi",
    },
    aboutMe: {
      tag: 'Tentang Saya',
      title: 'Farras Daffa Yassarramadhan',
      subtitle: 'PHP Web Developer & Profesional IT',
      p1: 'Profesional IT yang berdedikasi tinggi untuk menjembatani pengembangan teknis dan operasi bisnis. Dibekali fondasi kuat dalam Teknik Informatika dan keahlian praktis yang mencakup pengembangan web full-stack, administrasi server, serta manajemen infrastruktur.',
      p2: 'Memiliki rekam jejak yang terbukti dalam memimpin pusat operasi dan mengeksekusi proyek kompleks dari tahap perencanaan hingga deployment. Memiliki latar belakang analitis yang kuat, diperkaya oleh pengalaman di sektor keuangan, serta senantiasa memadukan ketajaman teknis dengan efisiensi operasional.'
    },
    portfolio: {
      tag: 'Jejak Rekam',
      title: 'Pengalaman Profesional',
      viewAll: 'Lihat CV Lengkap',
      projects: [
        {
          title: 'ToscaFlow Tech Solution',
          description: 'Pendiri & Pejabat Eksekutif Tertinggi (CEO). Memimpin operasi dan arah teknis untuk solusi perangkat lunak end-to-end.',
          tags: ['ASP.NET Core', 'Laravel', 'Flutter'],
          metrics: 'Sejak Apr 2024',
          featured: true,
        },
        {
          title: 'Yayasan Sagasitas Indonesia',
          description: 'Administrator Web, DevOps, & Administrator Database untuk sagasitas.org. Pemimpin Program IoT SagaFarm.',
          tags: ['DevOps', 'AWS', 'IoT'],
          metrics: 'Sejak Des 2022',
          featured: false,
        },
        {
          title: 'Universitas Alma Ata',
          description: 'Asisten Dosen & Ketua Tim KKN Tematik. Mendidik mahasiswa dan memimpin proyek pengabdian masyarakat.',
          tags: ['Edukasi', 'Kepemimpinan', 'Teknologi'],
          metrics: 'Sejak Mar 2024',
          featured: false,
        }
      ]
    },
    metrics: [
      {
        number: "99,9%",
        label: "RELIABILITAS SISTEM",
        description: "Jaminan SLA enterprise untuk operasional aplikasi skala bisnis.",
      },
      {
        number: "6+ Tahun",
        label: "PENGALAMAN SISTEM",
        description: "Eksplorasi komputasi, perangkat keras, dan rekayasa software sejak 2020.",
      },
      {
        number: "4 Brand",
        label: "EVOLUSI BISNIS",
        description: "Transformasi dari layanan teknis hardware hingga solusi SaaS enterprise.",
      },
      {
        number: "100%",
        label: "ALOKASI TERDISIPLIN",
        description: "Fokus aset bebas risiko pihak ketiga untuk pertahanan dan pertumbuhan modal.",
      },
    ],
    pillars: {
      badge: "PILAR KOMPETENSI",
      heading: "Arsitektur Skalabel. Eksekusi Berdampak Nyata.",
      subheading: "Kerangka terpadu yang memadukan rekayasa infrastruktur enterprise dengan strategi finansial terukur.",
      items: [
        {
          title: "Ekosistem ToscaFlow",
          badge: "SLA Produksi 99,9%",
          description: "Infrastruktur digital enterprise terpadu, rekayasa software kustom, dan pemantauan aktif 24/7 melalui Operation Center.",
          tags: ["SaaS Multi-tenant", "Operation Center", "Arsitektur Enterprise"],
          link: "[https://toscaflow.id](https://toscaflow.id)",
          linkText: "Kunjungi ToscaFlow →",
        },
        {
          title: "Strategi Finansial & Alokasi Modal",
          badge: "Berbasis Tesis",
          description: "Valuasi kuantitatif sektor teknologi, analisis mata uang makroekonomi, dan kerangka pengelolaan portofolio aset terdisiplin.",
          tags: ["Proteksi Modal", "Valuasi Teknologi", "Manajemen Risiko"],
        },
        {
          title: "Arsitektur Perangkat Lunak Full-Stack",
          badge: "Konkurensi Tinggi",
          description: "Pengembangan aplikasi web dan mobile yang tangguh dan mudah dirawat menggunakan ASP.NET Core, PHP (Laravel/CI), serta TypeScript modern.",
          tags: ["ASP.NET Core", "Laravel / CI", "Flutter", "Next.js / TS"],
        },
        {
          title: "Sistem Cloud & Infrastruktur Server",
          badge: "Instruktur Resmi AWS",
          description: "Manajemen server, proteksi edge network, arsitektur komputasi cloud, dan program transfer keahlian teknologi.",
          tags: ["Arsitektur AWS", "Linux Kernel", "Cloudflare Edge", "Operasional Database"],
        },
      ],
    },
    assets: {
      badge: "ALOKASI MODAL STRATEGIS",
      heading: "Cadangan Defensif & Pertumbuhan Majemuk",
      description: "Kerangka investasi disiplin yang bertumpu pada instrumen penyimpan nilai teruji, mata uang defensif, dan instrumen pasar modal.",
      items: [
        {
          title: "Swiss Franc (Valas CHF)",
          type: "MATA UANG / ASET DEFENSIF",
          role: "Proteksi Modal & Lindung Nilai",
          thesis: "Cadangan safe-haven global dengan kedaulatan fiskal yang kokoh, netralitas geopolitik, dan rasio utang terhadap PDB yang sangat rendah.",
          logoSrc: "/assets/logos/swiss.svg",
          isSvg: true,
        },
        {
          title: "Emas Fisik (Physical Gold)",
          type: "ASET RIIL / CADANGAN UTAMA",
          role: "Lindung Nilai Inflasi & Likuiditas",
          thesis: "Fondasi moneter riil tanpa risiko pihak ketiga (counterparty risk) yang terbukti menjaga daya beli lintas generasi.",
          logoSrc: "/assets/logos/gold.svg",
          isSvg: true,
        },
        {
          title: "Reksadana Terpilih (Mutual Funds)",
          type: "PORTOFOLIO TERSTRUKTUR / INDEKS",
          role: "Pertumbuhan Nilai Majemuk",
          thesis: "Partisipasi sistematis pada instrumen pendapatan tetap dan pasar modal berkualitas tinggi untuk compounding aset jangka panjang.",
          logoSrc: "/assets/logos/reksadana.png",
        },
      ],
    },
    timeline: {
      badge: "LINIMASA KARIR",
      heading: "Evolusi Brand & Perjalanan Usaha",
      description: "Tahapan transformasi karir dari pemeliharaan perangkat keras, laboratorium riset AI, edukasi talenta, hingga solusi software korporasi.",
      items: [
        {
          period: "2020 – 2021",
          brand: "DF Computer",
          domain: "Perangkat Keras & Pemeliharaan IT",
          description: "Fase awal yang menyediakan servis hardware, instalasi sistem operasi, dan dukungan teknis langsung untuk pengguna personal serta UMKM.",
          objective: "Menghadirkan layanan perbaikan komputer yang andal dan terjangkau sekaligus memperkuat pemahaman teknis dasar di lapangan.",
          link: "[https://daffayr.netlify.app/](https://daffayr.netlify.app/)",
        },
        {
          period: "2021 – 2023",
          brand: "Zea Technologies and Innovation Lab",
          domain: "Riset AI & Komputasi Cloud",
          description: "Inkubator riset teknologi terapan yang mengeksplorasi model Computer Vision, CNN/NLP, serta arsitektur komputasi awan AWS.",
          objective: "Menjembatani konsep riset mutakhir dengan otomatisasi industri melalui pembuatan prototipe software cerdas.",
        },
        {
          period: "2024 – 2025",
          brand: "Ingenia Academy",
          domain: "Edukasi IT & Pemberdayaan Talenta",
          description: "Inisiatif edukasi teknologi yang berfokus mendemokratisasi keahlian pemrograman dan literasi komputer untuk berbagai kalangan.",
          objective: "Mengikis kesenjangan talenta digital melalui pelatihan praktis, kurikulum terapan, dan pendampingan terarah.",
        },
        {
          period: "2025 – Sekarang",
          brand: "ToscaFlow Tech Solution",
          domain: "Software Korporat & Sistem Enterprise",
          description: "Penyedia ekosistem software bisnis terpadu, aplikasi SaaS multi-tenant, pemantauan 24/7 Operation Center, dan jaminan reliabilitas tinggi.",
          objective: "Mengakselerasi transformasi digital perusahaan melalui sistem software yang aman, stabil, dan berkinerja tinggi.",
          link: "[https://toscaflow.id/](https://toscaflow.id/)",
        },
      ],
    },
    closingCta: {
      badge: "KOLABORASI STRATEGIS",
      heading: "Bangun sistem yang kokoh. Kelola pertumbuhan dengan presisi.",
      button: "Mulai Diskusi",
    },
    footer: {
      copyright: "© 2026 Farras Daffa Yassarramadhan. Seluruh hak cipta dilindungi.",
      disclaimer: "Dibangun dengan Next.js, TypeScript & Tailwind CSS. Berfokus pada Solusi IT Enterprise & Pengelolaan Modal.",
    },
  },
};