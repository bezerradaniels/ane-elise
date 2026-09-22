# Dra. Ane Elise — Site

Landing page da Dra. Ane Elise, cirurgiã dentista em Bom Jesus da Lapa - BA.

Feita em HTML estático + Tailwind CSS v4 + um arquivo pequeno de JavaScript. Não tem framework.

## Estrutura

```
index.html      ← a página inteira
css/input.css   ← fonte do CSS (Tailwind + cores da marca)
css/style.css   ← CSS gerado — NÃO editar à mão
js/main.js      ← header ao rolar, menu mobile, carrossel, ano do rodapé
img/            ← imagens (.webp, com versões -640 e -800 para celular)
fonts/          ← fonte Figtree (servida pelo próprio site)
.htaccess       ← HTTPS, compressão e cache (Hostinger)
scripts/        ← deploy.sh (gera o site.zip)
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
- **Novas fotos:** gere as 3 versões e use `srcset` como nas outras imagens:
  `cwebp -q 80 foto.jpg -o img/foto.webp` + `-resize 800 0` (`foto-800.webp`) + `-resize 640 0` (`foto-640.webp`).
- **Ícones:** ficam num sprite SVG no início do `<body>` e são usados com `<svg class="icon ..."><use href="#bx-nome"/></svg>`. Para um ícone novo, copie o SVG de [boxicons.com](https://boxicons.com) como novo `<symbol>`.

## Deploy (Hostinger)

O deploy é manual, pelo Gerenciador de Arquivos da Hostinger:

1. `npm run deploy`: gera o CSS, monta a pasta `dist/` (com `?v=` nos links de CSS/JS para renovar o cache) e cria o `site.zip`.
2. No Gerenciador de Arquivos, abra `public_html`, envie o `site.zip` e use **Extrair** (sobrescrevendo os arquivos existentes).
3. Apague o `site.zip` de dentro do `public_html`.

O zip inclui o `.htaccess` (HTTPS, compressão e cache). Se precisar de outra regra no servidor, adicione no `.htaccess` do projeto, senão o próximo deploy apaga.

Se o navegador mostrar o visual antigo depois de um deploy, limpe o cache do LiteSpeed no hPanel.

## Rastreamento

Os IDs dos botões do WhatsApp usados no GTM estão em [WHATSAPP_BUTTONS_MAPPING.md](WHATSAPP_BUTTONS_MAPPING.md).
