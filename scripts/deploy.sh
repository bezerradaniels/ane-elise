#!/bin/sh
# Gera site.zip pronto para extrair no public_html da Hostinger.
# Adiciona ?v=<hash> aos links de CSS/JS para o cache longo não servir versões antigas.
set -e
cd "$(dirname "$0")/.."

npm run build

rm -rf dist site.zip
mkdir -p dist
cp -R index.html robots.txt sitemap.xml .htaccess css js img fonts dist/
rm -f dist/css/input.css
find dist -name .DS_Store -delete

css_v=$(md5 -q css/style.css 2>/dev/null || md5sum css/style.css | cut -c1-32)
js_v=$(md5 -q js/main.js 2>/dev/null || md5sum js/main.js | cut -c1-32)
sed -i.bak \
  -e "s#css/style.css\"#css/style.css?v=$(echo "$css_v" | cut -c1-8)\"#" \
  -e "s#js/main.js\"#js/main.js?v=$(echo "$js_v" | cut -c1-8)\"#" \
  dist/index.html
rm dist/index.html.bak

(cd dist && zip -rq ../site.zip .)
echo "site.zip gerado ($(du -h site.zip | cut -f1))"
