# 🌿 Verde con Rosa — Tienda de Jabones Artesanales

Proyecto base de ecommerce artesanal construido con las últimas versiones de React y sus dependencias.

## 🛠 Stack tecnológico

| Tecnología       | Versión  |
|------------------|----------|
| React            | 19.2.4   |
| Vite             | 8.0.0    |
| Tailwind CSS     | 4.2.1    |
| React Router DOM | 7.13.1   |
| Framer Motion    | 12.37.0  |
| Lucide React     | 0.577.0  |

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── Layout.jsx       # Wrapper con Navbar + Footer + scroll al top
│   ├── Navbar.jsx       # Header fijo con navegación y menú mobile
│   ├── Footer.jsx       # Footer completo con links y redes sociales
│   └── ProductCard.jsx  # Tarjeta de producto reutilizable
├── pages/
│   ├── HomePage.jsx     # Landing page (Hero, Features, Productos, Testimonios)
│   ├── ShopPage.jsx     # Catálogo con filtros y toggle de grilla
│   ├── ProductPage.jsx  # Detalle del producto con relacionados
│   ├── AboutPage.jsx    # Página Nosotros con valores y proceso
│   └── ContactPage.jsx  # Formulario de contacto
├── data/
│   └── products.js      # Datos: productos, categorías, testimonios
├── App.jsx              # Router principal
├── main.jsx             # Entry point
└── index.css            # Tokens de diseño con @theme de Tailwind 4
```

## 🚀 Inicio rápido

```bash
npm install
npm run dev
```

## 🔜 Próximos pasos (Cursor Pro)

- Carrito de compras con Zustand
- Checkout y MercadoPago
- Búsqueda con filtros avanzados
- Autenticación de usuarios
- Panel de administración
- CMS headless / backend
- Galería múltiple por producto
- Wishlist / favoritos
- SEO con React Helmet

---
Hecho con 💚 en Argentina
