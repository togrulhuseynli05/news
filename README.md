# NBC News – Tam Layihə (Ana səhifə + Xəbər detay səhifəsi)

Vite + React (JavaScript) + CSS + react-router-dom ilə yazılıb. Ana səhifə və xəbər detay səhifəsi eyni layihədədir.

## İşə salma

Tələb: **Node.js 18** və ya daha yeni.

```bash
npm install
npm run dev
```

Brauzerdə aç: **http://localhost:5173**

## Səhifələr (URL-lər)

Layihə `HashRouter` istifadə edir, ona görə ünvanlar `#` ilə başlayır. Bu, GitHub Pages-də səhifəni yeniləyəndə 404 çıxmamasını təmin edir.

| Ünvan | Səhifə |
|---|---|
| `/#/` | Ana səhifə |
| `/#/news/1` … `/#/news/14` | Xəbər detay səhifəsi |
| `/#/news/999` (və ya mövcud olmayan id) | 404 səhifəsi |

## Qovluq strukturu

```
src/
  main.jsx                   → HashRouter və React-ın başlanğıcı
  App.jsx                    → Route-lar (/, /news/:id, 404)
  App.css                    → Bütün stillər (kompüter, planşet, mobil)
  lib/mockData.js            → BÜTÜN DATA (xəbərlər, məqalə məzmunu, müəlliflər)
  hooks/
    useBookmark.js           → Favoritlər (localStorage, açar: sv_bookmarks)
    useInfiniteScroll.js     → VIEW MORE məntiqi (hazırda deaktivdir)
  pages/
    HomePage.jsx             → Ana səhifə
    ArticlePage.jsx          → Xəbər detay səhifəsi (id-yə görə xəbər tapır)
    NotFoundPage.jsx         → 404 səhifəsi
  components/                → Ana səhifənin komponentləri (Navbar, Hero, Footer ...)
    news/                    → Detay səhifəsinin komponentləri
      ArticleHero.jsx        → Tünd başlıq zolağı və böyük şəkil
      StickyActions.jsx      → Sol sticky panel (like, şərh, paylaş, bookmark)
      ArticleContent.jsx     → Paraqraf, başlıq, şəkil (caption), sitat
      NewsletterSignup.jsx   → Newsletter kartı
      ArticleTags.jsx        → Etiket düymələri və ikon sırası
      AuthorCard.jsx         → Müəllif kartı və FOLLOW
      RelatedArticles.jsx    → Sağ panel (Recommended, Based on Like) və alt Related Topics
public/
  images/                    → Şəkillər
  icons/                     → SVG ikonlar
```

## Ekran ölçüləri (responsive)

- **Kompüter:** 1000px-dən böyük
- **Planşet:** 800px – 999px
- **Mobil:** 600px – 799px

Bu ölçülərin hər birində üfüqi scroll olmamalıdır. Editor's Picks 800px-dən böyük ekranda 2 kart, kiçik ekranda 1 kart göstərir.

## Yeni xəbər və ya məzmun əlavə etmək

`src/lib/mockData.js` faylında xəbərin obyektinə bunları yazın:

- `id` – URL-də istifadə olunur (`/#/news/id`), unikal olmalıdır
- `content` – məqalə blokları: `paragraph`, `heading`, `image` (src, caption, source), `quote` (text, author)
- `tags` – etiket düymələri üçün massiv
- `authorProfile` – müəllif obyekti (`authors` siyahısından)
- `relatedIds` – alt sıradakı "Related Topics" xəbərlərinin id-ləri
- `recommendedIds` və `basedOnLikeId` – sağ paneldəki tövsiyələr

## Qeydlər

- Favoritlər hər iki səhifədə eyni `sv_bookmarks` açarı ilə saxlanılır. Detay səhifəsində əlavə etdiyiniz xəbər ana səhifədə də dolu görünür.
- Newsletter və FOLLOW düymələri mock-dur: məlumat heç yerə göndərilmir.
- Kateqoriya linkləri (Politics, Business …) hələ işləmir.
- API gələndə `mockData.js`-i API çağırışları ilə əvəz edin.

## GitHub Pages-ə yükləmək

```bash
npm run deploy
```

Bu əmr əvvəlcə build edir (`predeploy`), sonra `dist` qovluğunu `gh-pages` branch-inə yükləyir. GitHub-da **Settings → Pages** bölməsində Source: `gh-pages` seçilməlidir.
