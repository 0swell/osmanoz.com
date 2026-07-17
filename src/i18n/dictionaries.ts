export type Locale = "tr" | "en";

export const dictionaries = {
  tr: {
    nav: ["Merhaba", "Projeler", "CV"],
    hero: {
      greet: "Merhaba, ben",
      tagline: "Software Developer",
      desc: "Bilgisayar Mühendisliği mezunu, Yazılım Mühendisliği yüksek lisans öğrencisiyim. React, Next.js ve TypeScript ile modern web uygulamaları geliştiriyorum; yüksek lisansta ise Python ve makine öğrenmesiyle alakalı projeler gerçekleştiriyorum. Yapay zekâ destekli geliştirme iş akışımın merkezindedir.",
      scroll: "↓ kaydır",
    },
    projects: {
      title: "Projeler",
      subtitle: "Üzerinde çalıştığım işlerden seçmeler.",
      empty: "Projeler yakında burada olacak.",
      code: "Kod",
      live: "Canlı",
    },
    cv: {
      title: "Profil & CV",
      desc: "Eğitimimi, projelerimi ve yazılım geliştirme yolculuğumu merak ediyorsan CV'mi indirebilirsin.",
      button: "CV İndir",
      downloadedPrefix: "Bugüne kadar",
      downloadedSuffix: "kez indirildi",
      downloading: "CV indiriliyor",
      unavailable: "CV şu an mevcut değil",
    },
    footer: {
      contact: "İletişim",
      rights: "Tüm hakları saklıdır.",
      copied: "E-posta panoya kopyalandı",
      copyFail: "Kopyalanamadı",
    },
  },
  en: {
    nav: ["Hello", "Projects", "CV"],
    hero: {
      greet: "Hi, I'm",
      tagline: "Software Developer",
      desc: "Computer Engineering graduate and Software Engineering master's student. I build modern web applications with React, Next.js and TypeScript, while my graduate work focuses on Python and machine learning projects. AI-assisted development is at the core of my workflow.",
      scroll: "↓ scroll",
    },
    projects: {
      title: "Projects",
      subtitle: "Selected work I've been building.",
      empty: "Projects will appear here soon.",
      code: "Code",
      live: "Live",
    },
    cv: {
      title: "Profile & CV",
      desc: "Curious about my education, projects and software journey? Grab my CV.",
      button: "Download CV",
      downloadedPrefix: "Downloaded",
      downloadedSuffix: "times so far",
      downloading: "Downloading CV",
      unavailable: "CV is not available right now",
    },
    footer: {
      contact: "Contact",
      rights: "All rights reserved.",
      copied: "Email copied to clipboard",
      copyFail: "Copy failed",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];
