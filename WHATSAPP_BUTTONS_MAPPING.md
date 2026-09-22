# Mapeamento de Botões e Links do Site

Este documento mapeia todos os botões do WhatsApp e links importantes no site, seus IDs únicos e localizações.

## Prefixo Padrão
- Botões WhatsApp: `btn-wpp-{seção}-{variante}`
- Links diversos: `{seção}-{descrição}`

---

## Lista de Botões

### 1. Header - Desktop
- **ID:** `btn-wpp-header-desktop`
- **Localização:** Cabeçalho do site (visível apenas em desktop)
- **Texto:** "Agendar"
- **Arquivo:** `/index.html`
- **Linha:** ~140
- **Descrição:** Botão principal no menu superior para desktop

---

### 2. Header - Mobile
- **ID:** `btn-wpp-header-mobile`
- **Localização:** Menu mobile (hamburguer)
- **Texto:** "Agendar no WhatsApp"
- **Arquivo:** `/index.html`
- **Linha:** ~203
- **Descrição:** Botão no menu mobile que aparece quando o usuário abre o menu hamburguer

---

### 3. Hero Section
- **ID:** `btn-wpp-hero`
- **Localização:** Seção principal/banner do site (primeira seção)
- **Texto:** "Agendar avaliação"
- **Arquivo:** `/index.html`
- **Linha:** ~250
- **Descrição:** Call-to-action principal na primeira dobra do site

---

### 4. About Section
- **ID:** `btn-wpp-about`
- **Localização:** Seção "Sobre" (About)
- **Texto:** "Agendar consulta no WhatsApp"
- **Arquivo:** `/index.html`
- **Linha:** ~430
- **Descrição:** Botão secundário na seção sobre a dentista

---

### 5. FAQ Section - Desktop
- **ID:** `btn-wpp-faq-desktop`
- **Localização:** Seção de perguntas frequentes (visível apenas em desktop)
- **Texto:** "Falar no WhatsApp"
- **Arquivo:** `/index.html`
- **Linha:** ~818
- **Descrição:** CTA no card "Ainda tem dúvidas?" para desktop

---

### 6. FAQ Section - Mobile
- **ID:** `btn-wpp-faq-mobile`
- **Localização:** Seção de perguntas frequentes (visível apenas em mobile)
- **Texto:** "Falar no WhatsApp"
- **Arquivo:** `/index.html`
- **Linha:** ~896
- **Descrição:** CTA no card "Ainda tem dúvidas?" para mobile (aparece no final da seção)

---

### 7. Contact Section
- **ID:** `btn-wpp-contact`
- **Localização:** Seção de contato
- **Texto:** "Chamar no WhatsApp"
- **Arquivo:** `/index.html`
- **Linha:** ~954
- **Descrição:** Botão principal no card de contato

---

### 8. Footer - Developer Link
- **ID:** `footer-developer-link`
- **Localização:** Rodapé do site (barra inferior)
- **Texto:** "Desenvolvido por Daniel Bezerra"
- **Arquivo:** `/index.html`
- **Linha:** ~1030
- **Descrição:** Link para o portfólio do desenvolvedor no rodapé

---

## Informações Técnicas

### Número do WhatsApp
- **Número:** +55 77 99808-5944
- **Link:** `https://wa.me/5577998085944?text=...`

### Rastreamento com Google Tag Manager
Todos os botões podem ser rastreados usando o Google Tag Manager através de:
- **Trigger:** Click - Just Links
- **Condição:** Click ID matches RegEx `^btn-wpp-.*`

> O ID fica no `<a>`. Use "Just Links" (e não "All Elements"): assim o GTM reporta o link mesmo quando o clique cai no ícone ou no texto de dentro dele.

### Exemplo de Configuração GTM

#### Tag de Evento
```
Tipo: Google Analytics: GA4 Event
Nome do Evento: whatsapp_click
Parâmetros do Evento:
  - button_id: {{Click ID}}
  - button_location: {{Page Path}}
```

#### Acionador
```
Tipo: Clique - Somente links
Condição: Click ID corresponde à RegEx ^btn-wpp-.*
```

---

## Mensagens pré-preenchidas

Cada botão abre o WhatsApp com uma mensagem já digitada (parâmetro `?text=` no link `wa.me`, com o texto codificado para URL).

| Botão | Mensagem |
|-------|----------|
| `btn-wpp-header-desktop` / `btn-wpp-header-mobile` | Olá, Dra. Ane Elise! Vim pelo site e gostaria de agendar uma consulta. |
| `btn-wpp-hero` | Olá, Dra. Ane Elise! Vim pelo site e gostaria de agendar uma avaliação. |
| `btn-wpp-about` | Olá, Dra. Ane Elise! Vim pelo site e gostaria de agendar uma consulta. |
| `btn-wpp-faq-desktop` / `btn-wpp-faq-mobile` | Olá, Dra. Ane Elise! Vim pelo site e tenho uma dúvida sobre os tratamentos. |
| `btn-wpp-contact` | Olá, Dra. Ane Elise! Vim pelo site e gostaria de agendar minha avaliação. Quais horários estão disponíveis? |

Para alterar uma mensagem, gere o texto codificado (ex.: `encodeURIComponent("sua mensagem")` no console do navegador) e troque o valor depois de `?text=` no `index.html`.

---

## Resumo por Seção

| Seção | Desktop | Mobile | Total |
|-------|---------|--------|-------|
| Header | 1 | 1 | 2 |
| Hero | 1 (responsivo) | - | 1 |
| About | 1 (responsivo) | - | 1 |
| FAQ | 1 | 1 | 2 |
| Contact | 1 (responsivo) | - | 1 |
| Footer | - | 1 (link) | 1 |
| **TOTAL** | **5** | **3** | **8** |

---

## Notas
- Botões marcados como "responsivo" aparecem em todas as telas mas podem ter layout diferente
- Botões com variantes desktop/mobile ficam os dois no HTML; o CSS (`lg:hidden` / `hidden lg:block`) mostra só um por vez
- Todos os links abrem em nova aba (`target="_blank"`)
- Todos os links têm `rel="noreferrer"` para segurança

---

**Última atualização:** 22 de Setembro de 2026
