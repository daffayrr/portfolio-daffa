export type Language = 'en' | 'id';

export const content = {
  en: {
    nav: {
      about: 'About / Pillars',
      ventures: 'Ventures',
      trackRecord: 'Track Record',
      thesis: 'Thesis / Tech',
      contact: 'Contact',
      cta: 'Inquire / Connect'
    },
    hero: {
      status: 'Founder of ToscaFlow & Software Engineer',
      titleLine1: 'The Convergence of',
      titleLine2: 'Software Engineering',
      titleLine3: '& Scalable Architecture.',
      description: 'Focused on developing scalable web and mobile applications. Building end-to-end software solutions with ASP.NET Core, Laravel, and Flutter, backed by solid database and server administration expertise.',
      ctaPrimary: 'Explore ToscaFlow',
      ctaSecondary: 'View Track Record'
    },
    aboutMe: {
      tag: 'About Me',
      title: 'Farras Daffa Yassarramadhan',
      subtitle: 'PHP Web Developer & IT Professional',
      p1: 'Highly motivated IT Professional bridging the gap between technical development and business operations. Equipped with a solid foundation in Informatics Engineering and practical expertise spanning full-stack web development, server administration, and infrastructure management.',
      p2: 'Demonstrated capability in leading operational centers and executing complex projects from planning to deployment. Possesses a strong analytical background enriched by experience in the finance sector and seeks to leverage a unique blend of technical acumen and operational efficiency.'
    },
    brandPath: {
      tag: 'Brand Evolution Path',
      title: 'Venture Timeline',
      items: [
        {
          id: 1,
          title: 'DF Computer',
          period: '2020 – 2021',
          domain: 'Hardware & IT Infrastructure Foundation',
          link: 'https://daffayr.netlify.app/',
          description: 'Initial foray into IT servicing and hardware maintenance. Focused on operating system deployment, computer troubleshooting, and essential web setups for local businesses and personal clients.',
          objective: 'To deliver dependable, accessible technical hardware solutions while establishing core competencies in low-level systems and client service.',
          logo: '/assets/logos/1_df_computer.png'
        },
        {
          id: 2,
          title: 'Zea Technologies and Innovation Lab',
          period: '2021 – 2023',
          domain: 'AI Research & Cloud Systems R&D',
          description: 'A technology research and innovation lab focusing on Artificial Intelligence (Computer Vision, CNN, NLP) and AWS Cloud computing architectures, prototyping production-ready intelligent software.',
          objective: 'To pioneer cutting-edge AI model deployments and scalable cloud infrastructures, transforming theoretical research into high-impact digital prototypes.',
          logo: '/assets/logos/0_ZeaTechLogo.jpg'
        },
        {
          id: 3,
          title: 'Ingenia Academy',
          period: '2024 – 2025',
          domain: 'Tech Education & Human Capital Enablement',
          description: 'An educational technology initiative committed to democratizing computer science, programming, and IT knowledge for diverse audiences—ranging from beginners to aspiring tech professionals.',
          objective: 'To close the digital literacy gap and cultivate market-ready engineering talent through hands-on curriculum, mentorship, and industry-oriented training.',
          logo: '/assets/logos/ingenia2.png'
        },
        {
          id: 4,
          title: 'ToscaFlow Tech Solution',
          period: '2025 – Present',
          domain: 'Enterprise Systems & Digital Transformation',
          link: 'https://toscaflow.id/',
          description: 'Full-scale enterprise software and IT infrastructure provider. Delivers robust web/mobile applications, SaaS architectures, continuous 24/7 Operation Center monitoring, and 99.9% server uptime guarantees.',
          objective: 'To accelerate corporate business transformations with secure, reliable, and high-performance IT solutions that power mission-critical operations.',
          logo: '/assets/logos/3_toscaflow.png'
        }
      ]
    },
    pillars: {
      tag: 'Pillars of Competence',
      title: 'Engineering Scalable Systems.',
      title2: 'Allocating Strategic Capital.',
      cards: [
        {
          title: 'ToscaFlow Ecosystem',
          status: '99.9% Production Uptime',
          desc: 'End-to-end enterprise digital infrastructure, SaaS architectures, and mission-critical software engineering. Leading organizational strategy and tech direction as Founder & CEO.',
          tags: ['Multi-tenant SaaS', 'Distributed Ops', 'High Concurrency'],
          link: 'Explore Ecosystem →'
        },
        {
          title: 'Financial Strategy & Capital',
          status: 'Thesis-Driven',
          desc: 'Macro-economic technology evaluation, discounted cash-flow (DCF) valuation models, and disciplined private capital allocation for long-term compounding.',
          tags: ['Tech Equity Valuation', 'Risk Architecture', 'Capital Efficiency'],
          metric: 'Focus: Asymmetric Risk-to-Reward & Digital Infrastructure'
        },
        {
          title: 'Full-Stack Software Architecture',
          status: 'Zero-Latency Focus',
          desc: 'Engineering high-reliability web and mobile solutions using ASP.NET Core, PHP (Laravel/CI), Flutter, and modern TypeScript frameworks designed for maintainability and speed.',
          tags: ['ASP.NET Core', 'Laravel / CI', 'Flutter', 'Next.js / TS']
        },
        {
          title: 'Cloud Infrastructure & Quantitative Models',
          status: 'AWS Certified Trainer',
          desc: 'Server provisioning, network edge routing, automated pipelines, and quantitative algorithmic scripts bridging technology automation with market data analytics.',
          tags: ['AWS Architecture', 'Cloudflare Edge', 'Linux Kernel', 'Algorithmic Models']
        }
      ]
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
    closingCta: {
      tag: 'STRATEGIC PARTNERSHIP',
      title: 'Architecting resilient systems. Scaling with calculated precision.',
      btn: 'Initiate Inquiry'
    },
    metrics: {
      stats: [
        { value: '99.9%', label: 'UPTIME RELIABILITY', sub: 'Mission-critical enterprise SLA' },
        { value: '6+ Years', label: 'COMPUTING & SYSTEMS R&D', sub: 'Foundations built since 2020' },
        { value: '4 Brands', label: 'VENTURE ECOSYSTEMS', sub: 'From DF Computer to ToscaFlow' },
        { value: '100%', label: 'DISCIPLINED ALLOCATION', sub: 'Systems & capital convergence' }
      ]
    },
    assets: {
      tag: 'CAPITAL PRESERVATION & GROWTH',
      title: 'Disciplined Allocation. Asymmetric Resilience.',
      desc: 'Beyond software architectures, my financial framework is anchored in proven stores of value, defensive currencies, and compounded instruments.',
      cards: [
        {
          tag: 'CURRENCY / SAFE-HAVEN',
          title: 'Swiss Franc (CHF)',
          thesis: 'Capital preservation anchored in fiscal sovereignty, zero geopolitical friction, and negative debt-to-GDP correlations.',
          role: 'Capital Defense & Hedging'
        },
        {
          tag: 'HARD ASSET / RESERVE',
          title: 'Physical Gold (Emas)',
          thesis: 'The uncompromised monetary base. Zero counterparty risk and timeless hedge against structural fiat debasement.',
          role: 'Liquidity & Inflation Anchor'
        },
        {
          tag: 'COMPOUND ASSETS / INDEX',
          title: 'Diversified Mutual Funds (Reksadana)',
          thesis: 'Systematic, risk-adjusted participation in high-performing debt securities and broad-market equity growth.',
          role: 'Systematic Wealth Compounding'
        }
      ]
    },
    footer: {
      rights: 'All rights reserved.',
      disclaimer: 'Disclaimer: This platform serves as a professional portfolio. Built with precision and Next.js.'
    }
  },
  id: {
    nav: {
      about: 'Tentang / Pilar',
      ventures: 'Ventura',
      trackRecord: 'Rekam Jejak',
      thesis: 'Tesis / Teknologi',
      contact: 'Kontak',
      cta: 'Hubungi / Koneksi'
    },
    hero: {
      status: 'Memimpin ToscaFlow & Mengembangkan Strategi Finansial Mandiri',
      titleLine1: 'Membangun Sistem Teknologi yang Kokoh.',
      titleLine2: 'Mengelola Pertumbuhan Finansial',
      titleLine3: 'dengan Presisi.',
      description: 'Menghubungkan rekayasa perangkat lunak skala enterprise dengan strategi pengelolaan modal yang disiplin dan berorientasi jangka panjang.',
      ctaPrimary: 'Jelajahi Portofolio',
      ctaSecondary: 'Lihat Rekam Jejak'
    },
    aboutMe: {
      tag: 'Tentang Saya',
      title: 'Farras Daffa Yassarramadhan',
      subtitle: 'PHP Web Developer & Profesional IT',
      p1: 'Profesional IT yang berdedikasi tinggi untuk menjembatani pengembangan teknis dan operasi bisnis. Dibekali fondasi kuat dalam Teknik Informatika dan keahlian praktis yang mencakup pengembangan web full-stack, administrasi server, serta manajemen infrastruktur.',
      p2: 'Memiliki rekam jejak yang terbukti dalam memimpin pusat operasi dan mengeksekusi proyek kompleks dari tahap perencanaan hingga deployment. Memiliki latar belakang analitis yang kuat, diperkaya oleh pengalaman di sektor keuangan, serta senantiasa memadukan ketajaman teknis dengan efisiensi operasional.'
    },
    brandPath: {
      tag: 'Jejak Evolusi Brand',
      title: 'Timeline Ventura',
      items: [
        {
          id: 1,
          title: 'DF Computer',
          period: '2020 – 2021',
          domain: 'Fondasi Infrastruktur IT & Hardware',
          link: 'https://daffayr.netlify.app/',
          description: 'Layanan teknis komputer dan pemeliharaan perangkat keras untuk personal dan pelaku usaha lokal.',
          objective: 'Menyediakan solusi perbaikan teknis komputer yang andal dan terjangkau sekaligus mengasah fondasi teknis sistem secara langsung di lapangan.',
          logo: '/assets/logos/1_df_computer.png'
        },
        {
          id: 2,
          title: 'Zea Technologies and Innovation Lab',
          period: '2021 – 2023',
          domain: 'Riset AI & Arsitektur Cloud',
          description: 'Eksplorasi kecerdasan buatan (AI) dan teknologi komputasi cloud berskala riset.',
          objective: 'Menjadi inkubator riset berbasis AI dan Cloud dalam memecahkan problem otomasi serta membuktikan efektivitas komputasi modern skala nyata.',
          logo: '/assets/logos/0_ZeaTechLogo.jpg'
        },
        {
          id: 3,
          title: 'Ingenia Academy',
          period: '2024 – 2025',
          domain: 'Edukasi Teknologi & Pemberdayaan SDM',
          description: 'Program pelatihan dan edukasi teknologi praktis untuk mencetak talenta digital siap kerja.',
          objective: 'Menjembatani kesenjangan talenta digital melalui kurikulum terapan, pendampingan intensif, serta pemberdayaan keahlian teknologi siap kerja.',
          logo: '/assets/logos/ingenia2.png'
        },
        {
          id: 4,
          title: 'ToscaFlow Tech Solution',
          period: '2025 – Present',
          domain: 'Sistem Enterprise & Transformasi Digital',
          link: 'https://toscaflow.id/',
          description: 'Penyedia solusi software dan infrastruktur sistem digital terpadu untuk kebutuhan korporasi.',
          objective: 'Mengakselerasi transformasi digital bisnis melalui ekosistem teknologi modern, aman, dan berkinerja tinggi untuk mendukung operasional perusahaan secara berkelanjutan.',
          logo: '/assets/logos/3_toscaflow.png'
        }
      ]
    },
    pillars: {
      tag: 'Pilar Kompetensi',
      title: 'Rekayasa Sistem Skalabel.',
      title2: 'Alokasi Modal Strategis.',
      cards: [
        {
          title: 'Ekosistem ToscaFlow',
          status: 'Jaminan Operasional Aktif 99,9%',
          desc: 'Penyedia solusi teknologi dan software bisnis terpadu. Memimpin strategi operasional dan pengembangan sistem sebagai Founder & CEO.',
          tags: ['SaaS Multi-tenant', 'Ops Terdistribusi', 'Konkurensi Tinggi'],
          link: 'Eksplorasi Ekosistem →'
        },
        {
          title: 'Strategi Finansial & Alokasi Modal',
          status: 'THESIS-DRIVEN',
          desc: 'Analisis nilai sektor teknologi, pemodelan keuangan terstruktur, serta pengelolaan modal yang disiplin demi menjaga stabilitas aset.',
          tags: ['Valuasi Ekuitas Teknologi', 'Arsitektur Risiko', 'Efisiensi Modal'],
          metric: 'Fokus: Risiko-ke-Imbal Asimetris & Infrastruktur Digital'
        },
        {
          title: 'Arsitektur & Rekayasa Perangkat Lunak',
          status: 'Kinerja Cepat & Andal',
          desc: 'Membangun aplikasi web dan mobile yang aman, responsif, dan mudah dirawat untuk mendukung operasional bisnis modern.',
          tags: ['ASP.NET Core', 'Laravel / CI', 'Flutter', 'Next.js / TS']
        },
        {
          title: 'Infrastruktur Cloud & Pengolahan Data',
          status: 'Instruktur Resmi AWS L4B',
          desc: 'Pengelolaan server andal, konfigurasi jaringan aman, serta otomatisasi data komputasi untuk efisiensi sistem.',
          tags: ['Arsitektur AWS', 'Cloudflare Edge', 'Kernel Linux', 'Model Algoritmik']
        }
      ]
    },
    portfolio: {
      tag: 'Rekam Jejak',
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
    closingCta: {
      tag: 'KOLABORASI STRATEGIS',
      title: 'Bangun sistem yang kokoh. Kembangkan bisnis dengan presisi.',
      btn: 'Hubungi Saya'
    },
    metrics: {
      stats: [
        { value: '99.9%', label: 'RELIABILITAS UPTIME', sub: 'SLA enterprise mission-critical' },
        { value: '6+ Tahun', label: 'RISET KOMPUTASI & SISTEM', sub: 'Fondasi dibangun sejak 2020' },
        { value: '4 Brand', label: 'EKOSISTEM VENTURA', sub: 'Dari DF Computer hingga ToscaFlow' },
        { value: '100%', label: 'ALOKASI DISIPLIN', sub: 'Konvergensi sistem & modal' }
      ]
    },
    assets: {
      tag: 'ALOKASI MODAL STRATEGIS',
      title: 'Alokasi Terdisiplin. Ketahanan Asimetris.',
      desc: 'Di luar arsitektur perangkat lunak, kerangka finansial saya berakar pada instrumen penyimpan nilai teruji, mata uang defensif, dan instrumen pertumbuhan majemuk.',
      cards: [
        {
          tag: 'MATA UANG / SAFE-HAVEN',
          title: 'Franc Swiss (CHF)',
          thesis: 'Mata uang rujukan dunia dengan ketahanan tinggi terhadap gejolak ekonomi global dan inflasi jangka panjang.',
          role: 'Penyimpan Nilai & Mata Uang Defensif'
        },
        {
          tag: 'ASET KERAS / CADANGAN',
          title: 'Emas Fisik (GOLD)',
          thesis: 'Pondasi keamanan finansial bebas risiko pihak ketiga yang teruji menjaga daya beli lintas generasi.',
          role: 'Aset Riil & Lindung Nilai'
        },
        {
          tag: 'ASET MAJEMUK / INDEKS',
          title: 'Reksadana',
          thesis: 'Pengembangan aset sistematis melalui portofolio pasar modal yang terdiversifikasi dan dikelola secara terencana.',
          role: 'Pertumbuhan Modal Terukur'
        }
      ]
    },
    footer: {
      rights: 'Seluruh hak cipta dilindungi.',
      disclaimer: 'Penafian: Platform ini berfungsi sebagai portofolio profesional. Dibangun dengan presisi menggunakan Next.js.'
    }
  }
};
