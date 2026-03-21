# 🌍 Universal Search

A clean, dark-themed browser homepage for fast searching and organised bookmark access.

[![App Image](Non-App/App%20Image.png)](https://kay-who-codes.github.io/Universal-Search/)

---

## 📖 Overview

Universal Search is a single-file browser homepage that puts two things front and centre: your bookmarks and a multi-platform search bar. It's designed to replace your browser's default new tab page with something faster, more personal, and better organised.

---

## ✨ Features

### 🔖 Bookmarks
- Bookmarks organised into colour-coded categories (Entertainment, Productivity, Shopping, etc.)
- Instant search/filter to find any bookmark by name or tag
- **Compact / Comfortable view toggle** — switch between a dense grid and a spacious layout, with your preference saved across sessions

### 🔍 Search
- One-click search across 25+ platforms including Google, YouTube, Reddit, GitHub, Spotify, Amazon, IMDb, and more
- Type a query and click any platform card to search it directly
- Click a platform card with **no query** to open that site's homepage instead
- Press **Enter** to default-search with Google

### 🎨 Design
- Dark theme throughout
- Smooth tab switching between Bookmarks and Search views
- Fully responsive — works on desktop and mobile

---

## 🛠️ Customisation

Everything is configured via two plain JavaScript arrays at the top of the `<script>` block — no build tools or dependencies required.

### Adding a search engine
```js
{
    name: "My Site",
    icon: "fas fa-star",         // any Font Awesome icon class
    url: "https://mysite.com/search?q=",
    home: "https://mysite.com/",
    color: "#ff0000"
}
```

### Adding a bookmark
```js
{
    name: "🌟 My Bookmark",
    url: "https://example.com",
    category: "My Category",
    tags: ["tag1", "tag2"]
}
```

### Adding a bookmark category colour
```js
const categoryColors = {
    "My Category": "#ff9900"
}
```

---

## 🚀 Usage

No installation needed. Just open `index.html` (or `universal-search.html`) in any browser. To use it as your browser's homepage, point your browser's homepage setting to the local file path or hosted URL.

---

## 🧰 Tech Stack

| Technology | Usage |
|---|---|
| HTML / CSS / JS | Everything — single self-contained file |
| [Font Awesome 6](https://fontawesome.com/) | Icons (loaded via CDN) |
| localStorage | Remembers compact/comfortable view preference |
