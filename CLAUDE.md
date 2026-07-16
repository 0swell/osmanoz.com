# Proje Kılavuzu ve Geliştirme Standartları

## 1. Proje Özeti
- **Proje Adı:** Osman Öz Kişisel Web Sayfası & Portfolyo & Resume Sharing
- **Canlı Adres:** osmanoz.com
- **Repo:** https://github.com/0swell/osmanoz.com.git (public — hassas veri/secret asla commit edilmeyecek, hepsi `.env`'de tutulup `.gitignore`'a eklenecek).
- **Amacı:** Kişisel markalaşma, profesyonel CV sunumu, proje sergileme ve etkileşim analitiği.
- **Dil ve Yaklaşım:** Türkçe/İngilizce (İleride i18n eklenebilecek yapıda), Mobile-First ve Responsive Design.


## 2. Teknolojiler (Tech Stack)
- **Framework & Dil:** Next.js (App Router) ve TypeScript.
- **Stil & UI:** Tailwind CSS (Grid/Flexbox ağırlıklı, modern yerleşimler).
- **İkonlar:** `lucide-react` tüm UI ikonları için (login/logout, indirme, ok, tema vb.); sosyal medya marka ikonları (GitHub, LinkedIn) için `react-icons`.
- **State Yönetimi:** Ekstra state kütüphanesi kullanılmayacak; tema `next-themes`, admin yetki durumu NextAuth session ile yönetilir.
- **Animasyon:** Framer Motion. Scroll-stack efekti: 3 ana section (Hero → Projeler → CV) sticky katmanlar halinde üst üste duracak; scroll ettikçe üstteki section kalkıp alttaki ortaya çıkacak (yumuşak geçiş, uyumlu 2-4px kenarlık).
- **Veritabanı (Prisma & Neon PostgreSQL):** Vercel entegrasyonu ile ücretsiz katman kullanılacak.
  - `Project`: id, slug, title, desc, techStack, links, order, clickCount, isActive, createdAt, updatedAt.
  - `Analytics`: id, eventType (`CARD_CLICK` | `CV_DOWNLOAD`), projectId (opsiyonel), createdAt. Proje kartı tıklamaları ve "CV İndir" butonu tetiklendiğinde log atılır.
  - `Settings`: key, value (anahtar-değer tablosu; örn. `cv_url` → Blob'daki PDF adresi).
- **Auth (NextAuth.js):** Admin rotaları korunacak. `.env`'de düz şifre yerine bcrypt hash tutulacak, login'de karşılaştırılacak.
- **CV Yönetimi:** Vercel Blob (PDF buluta yüklenir, URL'si `Settings` tablosunda `cv_url` olarak tutulup, CV indir butonuna bağlanır).
- **Admin UI:** Ağır grafik paketleri (Chart.js vb.) gerek yok. Sayaçlar sadece Tailwind ile "Stat Cards" olarak tasarlanabilir.

## 3. Mimari ve Geliştirme Standartları
- **Atomic Design Metodolojisi:**
  - `Atoms`: Butonlar, Inputlar, İkonlar, Typography.
  - `Molecules`: ProjectCard, StatCard, ThemeToggle, SocialLinks (İkon + Metin birleşimleri).
  - `Organisms`: Navbar, Footer, Hero Section, Proje Grid'i.
  - Not: Templates katmanı kullanılmayacak; sayfa iskeleti işini App Router'daki `layout.tsx` dosyaları üstlenir. Pages = `page.tsx` dosyaları.
- **Render Stratejisi, Next.js sayesinde (SSR/CSR):** Componentler varsayılan olarak Server Component; `"use client"` sadece state/etkileşim gerektirenlerde (kart etkileşimi, tema toggle, formlar vb.) ve "client kabuk + server içerik (children)" kalıbıyla kullanılacak.
- **Modülerlik:** Tekrar eden mantıklar (sayaç artırma, veri çekme) Custom Hook (`hooks/`) veya Utility fonksiyonları (`utils/`) olarak dışarı aktarılacak.

## 4. Kullanıcı Arayüzü (UI) Senaryosu ve Sayfa Yapısı

### 4.1. Public Alan (Ziyaretçi Arayüzü)
- **Hero Section (Bölüm 1):** - Kendimi tanıttığım, vurucu bir giriş alanı. 
  - Scroll-stack efekti için `min-h-screen` (tam ekran) olacak.
  - Glassmorphism detayları eklenebilir (admin login paneli dahil; başka alanlarda da denenebilir, esnek).
- **Projeler Section (Bölüm 2):** - CSS Grid kullanılarak listelenen proje kartları.
  - Hover efektleri ve tıklandığında genişleyen (Expandable/Modal/Accordion) detay görünümü.
  - Her karta tıklandığında arka planda "Tıklanma Sayacı" API'si tetiklenecek.
- **Profil ve CV Section (Bölüm 3):** - Kişisel özet kartım.
  - Çarpıcı bir "CV İndir" CTA (Call to Action) butonu.
  - İndirme işlemi tetiklendiğinde analitik logu oluşturulacak.
  - CV kartında toplam indirilme sayısı gösterilecek (server'dan çekilir, tasarıma yedirilmiş küçük bir rozet/metin olarak).
- **Footer (Bölüm 4):** - Sosyal medya bağlantıları (GitHub, LinkedIn, vb.).
  - Telif hakkı metni.
- **Global UI Elemanları:**
  - **Scroll-to-Top (Yukarı Çık):** Belli bir miktar aşağı kaydırınca beliren ve en üste atan buton (Client Component).
  - **Gece/Gündüz Modu (Dark/Light Theme):** `next-themes` kütüphanesi kullanılarak yapılan, kullanıcının tercihini kaydeden tema değiştirici buton (Client Component).
  - **Scroll Progress Bar:** Sayfanın en üstünde scroll ilerlemesini gösteren ince çizgi.
  - **Aktif Section Göstergesi:** Navbar'da bulunulan section'ın vurgulanması.
  - **Toast Bildirimleri:** CV indirme, e-posta kopyalama gibi aksiyonlarda kısa geri bildirim (`sonner`).
  - **E-posta Kopyala:** Footer'da tıklayınca mail adresini panoya kopyalayan buton.
  - **Reduced Motion:** `prefers-reduced-motion` tercihinde animasyonlar devre dışı kalacak.

### 4.2. Admin Panel (`/admin`)
- **Login Sayfası (`/admin/login`):** - Sayfa ortasında yatay/dikey hizalanmış (Flex/Grid center).
  - Arka planı blurlu (Backdrop-blur) şık ve modern bir giriş paneli.
- **Dashboard ve Layout:**
  - **Top Navigation:** Sağ üst köşede "Admin (Osman Öz) Logged In" bildirimi ve Log out (Çıkış) butonu/ikonu.
- **Yönetim Modülleri:**
  - **İçerik Yönetimi (CMS):** Proje kartlarındaki metinleri (Title, Description, Tech Stack) ve CV dosyasını güncellemeye yarayan form arayüzleri.
  - **Analitik:** CV indirme ve proje tıklanma sayıları Tailwind ile "Stat Card" olarak; zaman bazlı (günlük/haftalık) veriler basit Tailwind bar'larıyla gösterilecek. Grafik kütüphanesi kullanılmayacak.

### 4.3. Tasarım Sistemi
- **Esneklik:** Bu kurallar başlangıç noktasıdır, katı değildir; modern/sıcak alternatifler denenebilir, beğenilmezse değiştirilebilir.
- **Kontrast:** Metin/zemin okunabilirliği WCAG AA hedeflenir (normal metin ~4.5:1, katı şart değil); asıl önemli olan section geçişlerinde ayrımın hissedilmesi — arka planlar arası ton farkı ve/veya border ile scroll-stack katmanları birbirinden net ayrılacak. Dark ve light temada ayrı kontrol edilecek.
- **Renk Kuralı (60-30-10):** %60 zemin, %30 ikincil (kart/yüzeyler), %10 vurgu rengi (CTA butonları, linkler).
- **Renk Paleti:** Dark/Light değerleri Tailwind config'de CSS variable (token) olarak tanımlanacak; component içine hardcoded renk yazılmayacak. Palet: (belirlenecek).
- **Tipografi:** `next/font` ile Google Fonts; başlık + gövde için en fazla 2 font ailesi. Font: (belirlenecek).
- **Tutarlılık:** Spacing, border-radius ve gölgelerde Tailwind scale dışına çıkılmayacak.

## 5. Hedeflenen Dosya Yapısı (Folder Structure)

```text
osmanoz-portfolio/
├── src/
│   ├── app/                    # Next.js App Router yapısı
│   │   ├── (public)/           # Ziyaretçi sayfaları
│   │   │   ├── page.tsx        # Ana sayfa
│   │   │   └── layout.tsx
│   │   ├── admin/              # Admin paneli (Protected Route)
│   │   │   ├── dashboard/
│   │   │   │   └── page.tsx
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx
│   │   ├── api/                # Route Handlers (Backend)
│   │   │   ├── auth/[...nextauth]/route.ts   # NextAuth endpoint'i
│   │   │   └── track/route.ts  # Tıklanma/indirme sayaç endpoint'i
│   │   ├── sitemap.ts          # Otomatik sitemap
│   │   ├── robots.ts           # Robots kuralları
│   │   ├── globals.css         # Tailwind direktifleri ve global stiller
│   │   └── layout.tsx          # Root Layout
│   ├── components/             # Atomic Design Yapısı
│   │   ├── atoms/
│   │   ├── molecules/
│   │   └── organisms/
│   ├── lib/                    # DB, NextAuth gibi 3. parti konfigürasyonları
│   ├── hooks/                  # Custom React Hooks
│   ├── types/                  # TypeScript interface ve typeları
│   ├── utils/                  # Yardımcı fonksiyonlar (Tarih formatlama, helperlar)
│   └── middleware.ts           # /admin rotalarını koruyan auth kontrolü
├── prisma/
│   └── schema.prisma           # DB modelleri (Project, Analytics, Settings)
├── public/                     # Statik dosyalar (Resimler, İkonlar — CV Blob'da tutulur)
├── .env                        # Secret'lar (gitignore'da)
├── tailwind.config.ts
└── tsconfig.json
```

## 6. SEO, Semantik Yapı ve Performans Kuralları

*   **Semantik DOM:** Anlamsız `<div>` yığınları kullanılmayacak. Yapı `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>` ile kurulacak. Başlık hiyerarşisi: Hero'da tek `<h1>`, section başlıkları `<h2>`, alt başlıklar `<h3>`.
*   **Metadata:** Next.js Metadata API ile title, description ve Open Graph (paylaşım görseli) tanımlanacak; `sitemap.ts` ve `robots.ts` eklenecek.
*   **Micro-SEO:** Her proje kartı semantik bütünlük için `<article>` etiketiyle sarmalanacak.
*   **Performans (LCP):** İlk ekranda görünmeyen bileşenler `next/dynamic` ile lazy yüklenecek; `ssr: false` kullanılmayacak (SEO'dan düşmemesi için).