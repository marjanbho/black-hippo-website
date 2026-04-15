# Tracking Setup — Supplier Portal

Overzicht van alle tracking die opgezet is op `https://blackhippo.be/supplier-portal/`.

---

## 1. Plausible Analytics

**Script:** `https://plausible.io/js/script.js`
**Data-domain:** `blackhippo.be`

Geïnstalleerd op alle 5 pagina's. Geen cookie consent vereist — Plausible is privacy-vriendelijk en valt buiten GDPR-cookieplicht.

### Automatisch bijgehouden door Plausible
- Paginabezoeken en navigatiepad tussen pagina's
- Herkomst van bezoekers (direct, Google, e-mail, UTM-parameters)
- Geografische data (land/stad)
- Apparaat (desktop / mobiel / tablet)
- Bounce rate en sessieduur

### Custom events (handmatig toegevoegd)

#### index.html — Stap clicks
Bijgehouden wanneer iemand op een van de 6 stappen klikt in de interactieve sectie.

| Event | Parameter | Waarden |
|---|---|---|
| `step_click` | `step_number` | 1 t.e.m. 6 |
| `step_click` | `step_label` | Plan your assortment / Choose suppliers / Review products / Ensure compliance / Validate profitability / Learn from performance |

#### index.html — CTA clicks
Bijgehouden welke "Request Demo" knop aangeklikt wordt en van waar op de pagina.

| Event | Parameter | Waarden |
|---|---|---|
| `cta_click` | `cta_label` | Request Demo |
| `cta_click` | `cta_location` | `header` / `hero` / `mid_page` / `footer_cta` |
| `cta_click` | `cta_label` | Explore the product |

#### how-it-works.html — Tab clicks
Bijgehouden welke tab aangeklikt wordt in de workflow sectie.

| Event | Parameter | Waarden |
|---|---|---|
| `tab_click` | `tab_name` | Planning / Sourcing / Development / Pricing / Compliance / Insights |

#### request-demo.html — Demo funnel
Bijgehouden hoe ver mensen geraken in het boekingsproces.

| Event | Parameter | Betekenis |
|---|---|---|
| `demo_funnel` | `funnel_label: Time slot selected` | Stap 1 voltooid — tijdslot gekozen, klik op Continue |
| `demo_funnel` | `funnel_label: Company info submitted` | Stap 2 voltooid — gegevens ingevuld, klik op Confirm Booking |
| `demo_booked` | `funnel_label: Demo booking completed` | Volledige conversie — Add to Calendar geklikt |

---

## 2. Microsoft Clarity

**Project ID:** `wc2tpvvf6g`
**Project naam:** Supplier Portal

Geïnstalleerd op alle 5 pagina's (zelfde als Plausible). Laadt enkel na cookie consent.

### Wat je kan zien in Clarity
- **Sessie-opnames** — terugkijken hoe individuele bezoekers door de site navigeren
- **Heatmaps** — welke zones op een pagina het meest aangeklikt worden (beschikbaar na ~enkele honderd bezoeken)
- **Dead clicks** — klikken op elementen die niet klikbaar zijn
- **Rage clicks** — gefrustreerde herhaalde klikken op hetzelfde element

---

## 3. UTM-links voor Lemlist (cold outreach wholesalers)

Gebruik deze links als hyperlink in je Lemlist e-mails. De ontvanger ziet een gewone link, maar Plausible registreert vanuit welke mail het bezoek komt.

| Mail | UTM-link |
|---|---|
| Cold email | `https://blackhippo.be/supplier-portal/?utm_source=lemlist&utm_medium=email&utm_campaign=cold-outreach-wholesalers&utm_content=cold-email-1` |
| Follow-up 1 | `https://blackhippo.be/supplier-portal/?utm_source=lemlist&utm_medium=email&utm_campaign=cold-outreach-wholesalers&utm_content=follow-up-1` |
| Follow-up 2 | `https://blackhippo.be/supplier-portal/?utm_source=lemlist&utm_medium=email&utm_campaign=cold-outreach-wholesalers&utm_content=follow-up-2` |

### Wat je ziet in Plausible na de campagne
- Hoeveel mensen vanuit elke mail op de site terechtkomen
- Of de cold email of een follow-up beter converteert
- Of die bezoekers daarna doorklikken naar `request-demo.html`

In Plausible te vinden via: **Sources** — filter op `utm_campaign = cold-outreach-wholesalers`
