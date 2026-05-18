# Práctica Cloudflare

Proyecto de práctica para aprender el ecosistema de Cloudflare, paso a paso.

## Estado actual: Cloudflare Pages

Sitio estático en HTML/CSS/JS puro, desplegado en [Cloudflare Pages](https://pages.cloudflare.com/) desde este repositorio de GitHub. Cada `git push` a `main` dispara un deploy automático.

## Estructura

```
.
├── index.html      # Página principal
├── styles.css      # Estilos
├── script.js       # Toggle de tema y hora de carga
└── README.md
```

## Desarrollo local

No requiere build. Abrir `index.html` directamente en el navegador, o levantar un servidor estático:

```bash
# Con Python
python -m http.server 8000

# Con Node
npx serve .
```

## Roadmap

- [x] Sitio estático en Cloudflare Pages
- [ ] Acortador de URLs con Workers + KV
- [ ] API CRUD con Workers + D1
- [ ] Storage de imágenes con R2
