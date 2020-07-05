---
marp: true
---

<!--
theme: gaia
class: lead
 -->

# Q2 Quarter Task

## Authentifizierung

![bg right](./img/clipart-castle.png)

<!-- [Marp Documentation](https://marpit.marp.app/markdown) -->

---

# Outline

- Ziel
- Vorgehen
- _CS253_
- Auth in _Nest.js_ & _Angular_
- Identity Providers
  - _Twitter OAuth_
- Auth as a Service
  - _Auth0_
- Fazit

![bg right](./img/clipart-castle.png)

---

# Ziel

- Meine Motivation für die Themenwahl
- Ziel gemäss Max und mir: **Zwei Authentifizierungen anschauen**
- 2h/w plus eigener Aufwand

---

# Vorgehen

- Anfangs unterwegs im Blindflug
- Kurs _Web-Security CS253_
- _Nest.js_ Auth Tutorial
- Ausbau und Integration eines _Angular_ Frontends
- Integration von _OAuth_

---

# Web-Security CS253

- Offener [Kurs der Uni Stanford](https://web.stanford.edu/class/cs253/)
- Inhalt: _Browser Architektur, HTTP/S, Session attacks, Cookies, Same Origin Policy, CSRF, CORS, Best practice, **Auth?**, ..._
- Wertvoller Kurs, aber zu wenig Fokus auf mein eigenes Ziel

---

# Bastelzeit

### Auth in Nest.js

- [Auth Tutorial](https://docs.nestjs.com/techniques/authentication) von _Nest.js_
- LocalStrategy & JwtStrategy von _Passports.js_

### Auth in Angular

- Auseinandersetzung mit Guards, canActivate, Best Practices
- Aufwendig und etwas mühsam
- Viel Verbesserungspotential

---

# Demo

<!-- _color: white -->

![bg contain](./img/showme.gif)

---

# Twitter OAuth

- Inegration via [OAuth 1.0a](https://developer.twitter.com/en/docs/basics/authentication/oauth-1-0a)
- Soweit keine Verbindung zum Frontent
- Konnte einfach verwendet werden, aber braucht noch Weiterentwicklung
- Evt. Verwendung als Social Login von Auth0

---

# Auth0

- Authentication as a [service](https://auth0.com/)
- [Grossartiges Tutorial](https://auth0.com/blog/developing-a-secure-api-with-nestjs-getting-started/)
- Integration via "JwtZStrategy" & [Auth0 SPA mock](https://dashboard.whatabyte.now.sh)
- Soweit sehr empfehlenswerter Service aber mit 1-2 Unbekannten (z.B. [Preis](https://auth0.com/pricing/), [Verwendung mit Angular](https://auth0.com/docs/quickstart/spa/angular2?framed=1&sq=1#add-the-authentication-service))

---

# Fazit

- Früher mit Coden beginnen
- Breites Thema benötigt mehr Zeitaufwand
- Ich bin kein Experte, aber ich weiß worum es geht
- Wissen gerne weiter vertiefen
  - Implementierung in Backoffice
  - QX Quarter Task: **Auth 2.0**
