# Mapeamento de Botões do WhatsApp

Este documento mapeia todos os botões do WhatsApp no site, seus IDs únicos e localizações.

## Prefixo Padrão
Todos os botões seguem o padrão: `btn-wpp-{seção}-{variante}`

---

## Lista de Botões

### 1. Header - Desktop
- **ID:** `btn-wpp-header-desktop`
- **Localização:** Cabeçalho do site (visível apenas em desktop)
- **Texto:** "Agendar"
- **Arquivo:** `/src/secoes/Header/index.tsx`
- **Linha:** ~80
- **Descrição:** Botão principal no menu superior para desktop

---

### 2. Header - Mobile
- **ID:** `btn-wpp-header-mobile`
- **Localização:** Menu mobile (hamburguer)
- **Texto:** "Agendar no WhatsApp"
- **Arquivo:** `/src/secoes/Header/index.tsx`
- **Linha:** ~137
- **Descrição:** Botão no menu mobile que aparece quando o usuário abre o menu hamburguer

---

### 3. Hero Section
- **ID:** `btn-wpp-hero`
- **Localização:** Seção principal/banner do site (primeira seção)
- **Texto:** "Agendar avaliação"
- **Arquivo:** `/src/secoes/Hero/index.tsx`
- **Linha:** ~29
- **Descrição:** Call-to-action principal na primeira dobra do site

---

### 4. About Section
- **ID:** `btn-wpp-about`
- **Localização:** Seção "Sobre" (About)
- **Texto:** "Agendar consulta no WhatsApp"
- **Arquivo:** `/src/secoes/About/index.tsx`
- **Linha:** ~97
- **Descrição:** Botão secundário na seção sobre a dentista

---

### 5. FAQ Section - Desktop
- **ID:** `btn-wpp-faq-desktop`
- **Localização:** Seção de perguntas frequentes (visível apenas em desktop)
- **Texto:** "Falar no WhatsApp"
- **Arquivo:** `/src/secoes/Faq/index.tsx`
- **Linha:** ~51
- **Descrição:** CTA no card "Ainda tem dúvidas?" para desktop

---

### 6. FAQ Section - Mobile
- **ID:** `btn-wpp-faq-mobile`
- **Localização:** Seção de perguntas frequentes (visível apenas em mobile)
- **Texto:** "Falar no WhatsApp"
- **Arquivo:** `/src/secoes/Faq/index.tsx`
- **Linha:** ~100
- **Descrição:** CTA no card "Ainda tem dúvidas?" para mobile (aparece no final da seção)

---

### 7. Contact Section
- **ID:** `btn-wpp-contact`
- **Localização:** Seção de contato
- **Texto:** "Chamar no WhatsApp"
- **Arquivo:** `/src/secoes/Contact/index.tsx`
- **Linha:** ~59
- **Descrição:** Botão principal no card de contato

---

## Informações Técnicas

### Número do WhatsApp
- **Número:** +55 77 99859-7104
- **Link:** `https://wa.me/5577998597104`

### Rastreamento com Google Tag Manager
Todos os botões podem ser rastreados usando o Google Tag Manager através de:
- **Trigger:** Click - All Elements
- **Condição:** Click ID matches RegEx `^btn-wpp-.*`

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
Tipo: Clique - Todos os elementos
Condição: Click ID corresponde à RegEx ^btn-wpp-.*
```

---

## Resumo por Seção

| Seção | Desktop | Mobile | Total |
|-------|---------|--------|-------|
| Header | 1 | 1 | 2 |
| Hero | 1 (responsivo) | - | 1 |
| About | 1 (responsivo) | - | 1 |
| FAQ | 1 | 1 | 2 |
| Contact | 1 (responsivo) | - | 1 |
| **TOTAL** | **5** | **2** | **7** |

---

## Notas
- Botões marcados como "responsivo" aparecem em todas as telas mas podem ter layout diferente
- Botões com variantes desktop/mobile são renderizados condicionalmente
- Todos os links abrem em nova aba (`target="_blank"`)
- Todos os links têm `rel="noreferrer"` para segurança

---

**Última atualização:** 30 de Janeiro de 2026
