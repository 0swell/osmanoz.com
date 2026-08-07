export type Locale = "tr" | "en";

export const dictionaries = {
  tr: {
    nav: ["Merhaba", "Projeler", "CV"],
    hero: {
      greet: "Merhaba, ben",
      tagline: "Software Developer",
      desc: "Bilgisayar Mühendisliği mezunu, Yazılım Mühendisliği yüksek lisans öğrencisiyim. React, Next.js ve TypeScript ile modern web uygulamaları geliştiriyorum; yüksek lisansta ise Python ve makine öğrenmesiyle alakalı projeler gerçekleştiriyorum. Yazılım plan ve geliştirme süreçlerini, modern yapay zekâ araçlarıyla verimli hâle getiriyorum.",
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
    faq: {
      title: "Sıkça Sorulan Sorular",
      subtitle: "Osman Öz hakkında en çok merak edilenler.",
      stats: [
        { value: "2025", label: "Bilgisayar Müh. mezunu" },
        { value: "Y. Lisans", label: "Yazılım Mühendisliği (2025–)" },
        { value: "10+", label: "teknoloji ve araç" },
      ],
      items: [
        {
          q: "Osman Öz kimdir?",
          a: "Osman Öz, 2025'te Bilgisayar Mühendisliği'nden mezun olmuş ve aynı yıl Burdur Mehmet Akif Ersoy Üniversitesi'nde Yazılım Mühendisliği yüksek lisansına başlamış bir yazılım geliştiricidir. React, Next.js ve TypeScript ile modern web uygulamaları geliştirir.",
        },
        {
          q: "Osman Öz hangi teknolojilerle çalışıyor?",
          a: "10'dan fazla teknoloji ve araçla çalışır: başlıca React, Next.js, TypeScript ve Tailwind CSS ile frontend; ayrıca Python ve makine öğrenmesi (YOLOv8), Flutter/Dart ile mobil ve T-SQL ile veritabanı projeleri üretir.",
        },
        {
          q: "Osman Öz yapay zekâ destekli geliştirme yapıyor mu?",
          a: "Evet. Yazılım planlama ve geliştirme süreçlerini Claude ve Gemini gibi modern yapay zekâ araçlarıyla hızlandırır; verimliliği artırmak için yapay zekâ destekli iş akışını merkeze alır.",
        },
        {
          q: "Osman Öz ile nasıl iletişime geçilir?",
          a: "İletişim için z0nams0@gmail.com adresine e-posta gönderebilir ya da footer'daki GitHub ve LinkedIn bağlantılarından ulaşabilirsiniz.",
        },
        {
          q: "Osman Öz'ün CV'si nasıl indirilir?",
          a: "CV bölümündeki 'CV İndir' butonuna tıklayarak güncel özgeçmişi PDF olarak indirebilirsiniz.",
        },
      ],
    },
    footer: {
      contact: "İletişim",
      rights: "Tüm hakları saklıdır.",
      updated: "Son güncelleme",
      copied: "E-posta panoya kopyalandı",
      copyFail: "Kopyalanamadı",
    },
  },
  en: {
    nav: ["Hello", "Projects", "CV"],
    hero: {
      greet: "Hi, I'm",
      tagline: "Software Developer",
      desc: "Computer Engineering graduate and Software Engineering master's student. I build modern web applications with React, Next.js and TypeScript, while my graduate work focuses on Python and machine learning projects. I streamline software planning and development processes with modern AI tools.",
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
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "The most common questions about Osman Öz.",
      stats: [
        { value: "2025", label: "Computer Eng. graduate" },
        { value: "MSc", label: "Software Engineering (2025–)" },
        { value: "10+", label: "technologies & tools" },
      ],
      items: [
        {
          q: "Who is Osman Öz?",
          a: "Osman Öz is a software developer who graduated in Computer Engineering in 2025 and started a Software Engineering master's the same year at Burdur Mehmet Akif Ersoy University. He builds modern web applications with React, Next.js and TypeScript.",
        },
        {
          q: "Which technologies does Osman Öz work with?",
          a: "He works with 10+ technologies and tools: mainly React, Next.js, TypeScript and Tailwind CSS for frontend; plus Python and machine learning (YOLOv8), mobile apps with Flutter/Dart, and databases with T-SQL.",
        },
        {
          q: "Does Osman Öz use AI-assisted development?",
          a: "Yes. He speeds up software planning and development with modern AI tools such as Claude and Gemini, placing an AI-assisted workflow at the center of his process to boost productivity.",
        },
        {
          q: "How can I contact Osman Öz?",
          a: "You can email z0nams0@gmail.com or reach out through the GitHub and LinkedIn links in the footer.",
        },
        {
          q: "How do I download Osman Öz's CV?",
          a: "Click the 'Download CV' button in the CV section to get the latest resume as a PDF.",
        },
      ],
    },
    footer: {
      contact: "Contact",
      rights: "All rights reserved.",
      updated: "Last updated",
      copied: "Email copied to clipboard",
      copyFail: "Copy failed",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];
