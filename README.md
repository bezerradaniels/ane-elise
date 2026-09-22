# Dra. Ane Elise — Site

Landing page da Dra. Ane Elise, cirurgiã dentista em Bom Jesus da Lapa - BA.

Feita em HTML estático + Tailwind CSS v4 + um arquivo pequeno de JavaScript. Não tem framework.

## Estrutura

```
index.html      ← a página inteira
css/input.css   ← fonte do CSS (Tailwind + cores da marca)
css/style.css   ← CSS gerado — NÃO editar à mão
js/main.js      ← header ao rolar, menu mobile, carrossel, ano do rodapé
img/            ← imagens (fotos em .webp)
```

## Editando

- **Textos, links e imagens:** edite `index.html` direto.
- **Classes Tailwind:** depois de adicionar ou trocar classes em `index.html` ou `js/`, gere o CSS de novo:

```bash
npm install      # só na primeira vez
npm run dev      # recompila o CSS a cada alteração
npm run build    # gera o css/style.css minificado para publicar
```

O `css/style.css` fica versionado, então o site funciona sem precisar de build no servidor.

- **Cores da marca:** variáveis `--brand-*` em `css/input.css`.
- **Novas fotos:** converta para WebP (`cwebp -q 80 foto.jpg -o img/foto.webp`).

## Deploy (Hostinger)

O deploy é manual, pelo Gerenciador de Arquivos da Hostinger:

1. `npm run deploy`: gera o CSS e cria o `site.zip` com os arquivos do site (incluindo `robots.txt` e `sitemap.xml`).
2. No Gerenciador de Arquivos, abra `public_html`, envie o `site.zip` e use **Extrair** (sobrescrevendo os arquivos existentes).
3. Apague o `site.zip` de dentro do `public_html`.

Se o navegador mostrar o visual antigo depois de um deploy, limpe o cache (Ctrl+Shift+R) ou o cache do LiteSpeed no hPanel.

## Rastreamento

Os IDs dos botões do WhatsApp usados no GTM estão em [WHATSAPP_BUTTONS_MAPPING.md](WHATSAPP_BUTTONS_MAPPING.md).
