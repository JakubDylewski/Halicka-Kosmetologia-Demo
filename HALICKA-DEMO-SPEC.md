# HALICKA — KOSMETOLOGIA ESTETYCZNA · SPECYFIKACJA DEMO (GRUPA 2)

> **Czym jest:** trzecie i ostatnie demo agencji Connectiva — fikcyjny gabinet kosmetologii estetycznej zbudowany na marce osobistej. Zamyka portfolio: Aurelia (klinika lekarska) + ELARA (salon beauty) + HALICKA (kosmetologia).
>
> **Metodyka identyczna:** budowa etapami w Claude Code, jeden etap naraz, commit po każdym, audyt mobilny jako twardy wymóg, popup demo, etykiety PRZYKŁAD na makietach.
>
> **Podstawa projektowa:** analiza rynku gabinetów kosmetologii estetycznej (m.in. Face Med — nagradzany gabinet marki osobistej: „Beauty plan" jako produkt konsultacyjny, autorskie protokoły, kongresy, ceny premium 300–2500 zł) + wnioski z leadów Trójmiasta (Paulina Bojdo, Lewandowska Cosmetology — nazwisko w nazwie to standard tej grupy).
>
> **Luka rynkowa (argument sprzedażowy):** nawet nagradzane gabinety mają strony-sklepy z „dodaj do koszyka" przy zabiegach, bez programów, bez kategorii, z błędami SEO. Ta grupa ma pieniądze na premium (zabiegi po 500–1500 zł), a strony ma najsłabsze z całej niszy. Demo ma pokazać przepaść.

---

## 0. KLUCZOWE RÓŻNICE WZGLĘDEM POPRZEDNICH DEMO

| | AURELIA (klinika) | ELARA (salon beauty) | **HALICKA (kosmetologia)** |
|---|---|---|---|
| Marka | instytucja | instytut wielousługowy | **OSOBA — mgr kosmetologii z nazwiskiem** |
| Klientka | ma problem, nie zna zabiegów | wie czego chce, chce szybko | **ma problem skórny, szuka EKSPERTKI i PLANU** |
| Ścieżka | problem → edukacja → konsultacja | usługa → cena → rezerwacja | **diagnoza → program (seria) → efekty** |
| Serce strony | moduł „Dobierz zabieg" | cennik z filtrem | **PROGRAMY (kuracje w seriach) + diagnoza skóry** |
| Ceny | wysokie, lekarskie | niskie-średnie (60–220 zł) | **premium (200–1500 zł/zabieg, pakiety 1500–4000 zł)** |
| Prawo | zakaz reklamy | pełna swoboda | **reklama OK, ale bez obietnic leczenia chorób** |
| Sprzedaż | zaufanie do lekarzy | promocje, vouchery | **autorytet: dyplomy, certyfikaty, autorskie protokoły, nabór** |
| Hero | typograficzne 60/40, foto prawa | mozaika trójkątna, foto prawa | **editorial, PORTRET PO LEWEJ, tekst po prawej** |
| Typografia | serif klasyczny (Cormorant) | serif ciepły (Fraunces) | **SANS-LED (Sora) — precyzja, nowoczesność** |
| Paleta | złoto + kość słoniowa | miedź + pudrowy róż | **głęboka zieleń + szałwia + porcelana** |
| Sygnatura graficzna | złoty łuk | linia z kropką (nić/paznokieć) | **PIERŚCIEŃ z podziałką (cykl skóry)** |
| Ruch | minimalny | intensywny (nić, ucieczka) | **precyzyjny: rysujące się pierścienie, oś czasu, suwak przed/po** |

**Zasada nadrzędna:** klientka ma poczuć, że trafia pod opiekę konkretnej ekspertki, która poprowadzi jej skórę WEDŁUG PLANU — nie kupuje pojedynczego zabiegu, wchodzi w program.

---

## 1. MARKA (fikcyjna)

- **Nazwa:** HALICKA — Kosmetologia Estetyczna
- **Założycielka:** mgr Nina Halicka (fikcyjna; przed użyciem wzorca u klienta sprawdzić kolizje nazwiska lokalnie)
- **Miasto:** Gdańsk-Wrzeszcz, al. Grunwaldzka 141/5 (fikcyjny lokal; główna oś usługowa Trójmiasta)
- **Telefon demo:** 512 340 220 · e-mail: gabinet@halicka-kosmetologia.pl (fikcyjny)
- **Claim:** „Twoja skóra ma plan."
- **Charakter:** ekspercki, precyzyjny, spokojny premium. NIE ciepło-salonowy (ELARA), NIE instytucjonalno-kliniczny (Aurelia). Jedna kobieta-autorytet i jej metoda.

### 1.1 Paleta (chłodna, ekspercka — kontrast wobec obu poprzednich)
- `--pine` #1E3A32 — głęboka zieleń: nagłówki sekcji ciemnych, stopka, akcenty mocne
- `--sage` #A9BFB1 — szałwia: tła subtelne, obramowania, detale
- `--porcelain` #F7F5F1 — tło główne (chłodna porcelana, nie ciepły krem)
- `--mist` #E9EDE9 — tło sekcji naprzemiennych
- `--ink` #212623 — tekst główny
- `--ink-soft` #5C6660 — tekst drugorzędny
- Kontrasty: wszystkie pary tekst/tło ≥4.5:1 (lekcja z obu poprzednich audytów — sprawdzić PRZED buildem, zwłaszcza sage na porcelain używać tylko dekoracyjnie, nigdy dla tekstu)

### 1.2 Typografia (sans-led — pierwszy raz)
- Nagłówki: **Sora** (fontsource) — geometryczny, precyzyjny, „laboratoryjny"
- Tekst: **Inter** (fontsource)
- Duże liczby/ceny/numery sekcji: Sora, cięższy grubość
- Skala clamp(), mobile-first

### 1.3 Sygnatura graficzna: PIERŚCIEŃ
Cienki okrąg z podziałką (jak tarcza pomiaru / cykl), kolor `--pine`, z jednym akcentem `--sage`. Komponent `Ring.astro`.
Występuje: przy numerach sekcji (01–06 w pierścieniu), jako znacznik kroków programu, w logo, jako element rysujący się przy scrollu (sekcja 12). **Zero łuków (Aurelia), zero linii z kropką (ELARA).**

### 1.4 Stack i infrastruktura
- Astro 5 + Tailwind CSS 4 + waniliowy JS (bez bibliotek UI)
- Folder: `C:\Users\jakdy\Documents\Halicka Kosmetologia Demo`
- GitHub: `Halicka-Kosmetologia-Demo` (main) · Cloudflare **Pages** (Connect to Git → Astro → `npm run build` → `dist`)
- Zdjęcia: `public/images/` (wyjątek: hero → `src/assets/` dla srcset)
- Rytm: jeden etap → sprawdzenie → commit → push

---

## 2. ARCHITEKTURA STRON

```
/                            strona główna (numerowane sekcje 01–06)
/programy                    przegląd 5 programów (SERCE STRONY)
/programy/[slug]             strona programu z OSIĄ CZASU wizyt
/zabiegi                     katalog pojedynczych zabiegów (~24) z cenami
/diagnoza-skory              produkt wejściowy: czym jest, jak przebiega, 200 zł
/efekty                      galeria przed/po z SUWAKIEM + zasady uczciwości
/o-mnie                      marka osobista: historia, dyplomy, certyfikaty, publikacje
/kontakt                     rezerwacja (formularz z kontekstem; domyślnie diagnoza)
/jak-pozyskujemy-klientki    manifest systemu dla właścicielki gabinetu
/kosmetologia-[slug]         9 lądowisk SEO (sekcja 8)
```

---

## 3. STRONA GŁÓWNA — sekcje numerowane + boczna nawigacja

**Wyróżnik strukturalny:** strona główna ma charakter editorialu z **numerowanymi sekcjami (01–06)**. Na desktopie po prawej krawędzi cienka **przyklejona nawigacja punktowa** (kropki w pierścieniach z numerami) — klik przewija do sekcji, aktywna sekcja podświetlona. Na mobile bez bocznej nawigacji.

**Górny pasek** (pine, jasny tekst): `Wt–Pt 10:00–19:00 · Sob 9:00–14:00` · telefon klikalny · przycisk `Umów diagnozę` → /kontakt

**Menu:** `Strona główna | Programy | Zabiegi | Diagnoza skóry | Efekty | O mnie | Kontakt` + przycisk `Umów diagnozę` (lekcja z ELARY: „Strona główna" jako jawna pozycja od razu, nie po fakcie)

**01 — HERO (editorial, odwrócony):**
- **Portret założycielki PO LEWEJ** (pionowy 3:4, z `src/assets`, srcset) — pierwszy raz zdjęcie z lewej strony; to celowe odwrócenie schematu poprzednich demo
- Po prawej: overline `KOSMETOLOGIA ESTETYCZNA · GDAŃSK WRZESZCZ` → H1 `Twoja skóra ma plan.` → 2 zdania: `Nazywam się Nina Halicka. Od 11 lat prowadzę skórę moich klientek — nie od zabiegu do zabiegu, ale według planu, który układamy razem na diagnozie.` → przycisk `Umów diagnozę skóry` + drobne `200 zł · w całości odliczane od programu` → pod spodem podpis graficzny `mgr Nina Halicka` (stylizowany, tekstowy — NIE obrazek)
- Tło hero: porcelain; za portretem duży, cienki pierścień (sygnatura) wystający zza krawędzi zdjęcia
- Wysokość max 80vh; mobile: portret NAD tekstem, mniejszy (max 36vh)

**02 — ZAUFANIE (mist):** pas 4 pozycji: `11 lat praktyki` · `mgr kosmetologii + 23 certyfikaty` · `4,9/5 — 214 opinii` · `zabiegi wyłącznie osobiście` (bez liczników — spokój, nie fajerwerki; różnica vs ELARA)

**03 — PROGRAMY (porcelain) — SERCE:**
- Overline `03 · PROGRAMY` · H2 `Nie sprzedaję zabiegów. Prowadzę skórę.`
- Lead: `Pojedynczy zabieg daje efekt na tydzień. Program — na lata. Każdy zaczyna się diagnozą i ma jasny plan wizyt.`
- 5 kart programów (nazwa, dla kogo 1 zdanie, liczba wizyt, czas trwania, cena pakietu + przekreślona suma pojedynczych):
  1. `Skóra pod kontrolą` — niedoskonałości i zaskórniki · 6 wizyt / 3 mies. · 1 890 zł (zamiast 2 340)
  2. `Odbudowa` — skóra odwodniona, zmęczona · 4 wizyty / 2 mies. · 1 490 zł (zamiast 1 760)
  3. `Równy koloryt` — przebarwienia, poszarzenie · 5 wizyt / 3 mies. · 2 190 zł (zamiast 2 590)
  4. `Napięcie i kontur` — utrata jędrności, owal · 6 wizyt / 4 mies. · 3 490 zł (zamiast 4 080)
  5. `Protokół Halicka` — autorski program łączony, po diagnozie · indywidualnie
- Karta → /programy/[slug]. Pod siatką: `Nie wiesz, który program? Od tego jest diagnoza →`

**04 — DIAGNOZA (mist):**
- Overline `04 · OD CZEGO ZACZYNAMY` · H2 `Najpierw diagnoza. Zawsze.`
- 3 kroki w pierścieniach: `Rozmowa i analiza skóry (40 min)` → `Plan: program albo pojedyncze zabiegi` → `200 zł odliczane w całości od programu`
- Blok szczerości: `Jeśli Twoja skóra potrzebuje dermatologa, nie kosmetologa — powiem to wprost i wskażę, do kogo iść.`
- CTA `Umów diagnozę`

**05 — EFEKTY (porcelain):** 3 pary przed/po z **suwakiem** (interaktywny slider — przeciągasz i porównujesz; placeholdery do czasu zdjęć), podpis czego dotyczy + po ilu wizytach; adnotacja `Efekty indywidualne. Zdjęcia publikujemy wyłącznie za pisemną zgodą klientek.` Link `Zobacz więcej efektów →` /efekty

**06 — O MNIE zajawka + OPINIE (mist):** krótki blok z drugim zdjęciem (przy pracy), 3 zdania drogi zawodowej, link `Poznaj moją historię →`; pod spodem 4 opinie format Google (w treściach: konkretne problemy skórne i nazwy programów)

**CTA końcowe (pine, jasny tekst):** `Zacznijmy od diagnozy.` + przycisk + telefon

**Pływające:** przycisk `Umów diagnozę` (prawy dolny róg, po 400px, ukryty na /kontakt) + na desktopie przycisk `Strona główna` (lewy dolny, wzorzec z ELARY — oddychanie max 3px, ukryty na /)

---

## 4. PROGRAMY `/programy` i `/programy/[slug]` — SERCE STRONY

**/programy:** H1 `Programy pielęgnacyjne` + lead o filozofii serii + 5 kart jak na głównej + sekcja `Jak to działa` (diagnoza → plan → wizyty co 2–3 tyg. → kontrola efektów) + FAQ (3: czy mogę kupić pojedynczy zabieg? co jeśli program nie dla mnie? czy mogę płacić ratalnie za wizyty?)

**/programy/[slug] — szablon strony programu (wyróżnik całego demo):**
1. Breadcrumb + H1 + dla kogo (2 zdania) + pasek faktów: liczba wizyt · czas trwania · cena pakietu vs suma pojedynczych · oszczędność
2. **OŚ CZASU PROGRAMU (kluczowy element):** pozioma na desktopie (przewijana/scrubowana), pionowa na mobile. Każda wizyta jako punkt w pierścieniu: `Wizyta 1 — diagnoza kontrolna + oczyszczanie wodorowe · czego się spodziewać po tej wizycie`, `Wizyta 2 — peeling + mezoterapia mikroigłowa · skóra może być zaczerwieniona 24h`… — konkretnie, wizyta po wizycie, z uczciwymi uwagami o reakcji skóry
3. `Dla kogo TAK / dla kogo NIE` — dwie kolumny (uczciwość jak w Aurelii)
4. Efekt przed/po z suwakiem (1 para, placeholder)
5. Cena: pakiet z góry vs płatność za wizytę (obie opcje, pakiet −15%)
6. FAQ programu (3 pytania)
7. CTA `Umów diagnozę — dobierzemy program` (NIE „kup program" — do programu wchodzi się przez diagnozę; to różnica filozofii vs sklep)

**Dane:** `src/data/programs.ts` — wszystkie programy z pełną strukturą wizyt.

---

## 5. ZABIEGI `/zabiegi` (katalog wspierający, nie serce)

- H1 `Zabiegi` + lead: `Każdy z tych zabiegów wykonuję też pojedynczo — ale najlepsze efekty daje seria. Jeśli nie wiesz, od czego zacząć, zacznij od diagnozy.`
- ~24 zabiegi w 4 kategoriach, **akordeony z cenami i czasem** (bez filtra na żywo — to sygnatura ELARY; tu katalog jest prostszy, bo ścieżka prowadzi przez programy):
  - Oczyszczanie i regeneracja (oczyszczanie wodorowe 260, peeling chemiczny 280–380, oxybrazja 240…)
  - Aparaturowe anti-aging (HIFU 700–1400, RF mikroigłowa 550–900, laser frakcyjny 600–1100…)
  - Mezoterapia i stymulacja (mezoterapia mikroigłowa 350–500, osocze… **UWAGA sekcja 9**)
  - Pielęgnacja specjalistyczna (zabieg bankietowy 320, terapia okolicy oczu 220…)
- Każda pozycja: nazwa · czas · cena · 1 zdanie · `Umów` → /kontakt?zabieg=[nazwa]
- Ceny realne premium (Trójmiasto 2026, poziom gabinetu z aparaturą)

---

## 6. DIAGNOZA SKÓRY `/diagnoza-skory` (produkt wejściowy)

H1 `Diagnoza skóry — początek każdej współpracy` · przebieg 4 kroki (wywiad → analiza skóry aparatem → omówienie → plan na piśmie) · czas 40 min · cena `200 zł, w całości odliczane od pierwszego programu lub zabiegu` · blok szczerości (odesłanie do dermatologa gdy trzeba) · FAQ (3) · CTA. Wzorzec rynkowy potwierdzony (konsultacja-produkt istnieje u liderów), u nas podniesiony do rangi bramy wejściowej.

---

## 7. EFEKTY `/efekty` + O MNIE `/o-mnie`

**/efekty:** siatka 6 par przed/po z suwakami (placeholdery), każda z podpisem: problem, program, liczba wizyt. Na górze zasady: `Wszystkie zdjęcia za pisemną zgodą klientek. Bez retuszu skóry. To samo światło i kadr.` — uczciwość jako pozycjonowanie.

**/o-mnie:** historia pierwszoosobowa (dlaczego kosmetologia, droga), wykształcenie i **lista certyfikatów/szkoleń** (fikcyjne, realistyczne nazwy szkoleń branżowych bez przypisywania realnym firmom), sprzęt gabinetu (kategorie, bez nazw realnych marek), zdjęcie gabinetu, wartości (3): `Zabiegi wykonuję wyłącznie osobiście` · `Nie obiecuję cudów — pokazuję plan` · `Mniej, ale regularnie`.

---

## 8. LĄDOWISKA SEO `/kosmetologia-[slug]` (wzorzec „drzwi, nie dom")

9 lokalizacji: `gdansk-wrzeszcz` (dzielnica siedziby), `gdansk-oliwa`, `gdansk-przymorze`, `gdansk-zaspa`, `gdansk-srodmiescie`, `gdansk-morena`, `sopot`, `gdynia`, `pruszcz-gdanski`.
Szablon LEKKI jak w poprzednich: breadcrumb → H1 `Kosmetologia estetyczna [Miejsce]` → unikalny lead z realnym dojazdem (SKM/tramwaj/al. Grunwaldzka) → zdanie obowiązkowe z poprawnym dopełniaczem: `Gabinet mieści się w Gdańsku-Wrzeszczu przy al. Grunwaldzkiej — klientki z [Miejsca] dojeżdżają do mnie w ok. X minut.` → akapit o gabinecie → lista programów jako linki → **przycisk `Zobacz pełną ofertę →` na stronę główną** → mapa (adres zawsze Wrzeszcz) → linki do pozostałych 8. Deklinacja ręcznie (lekcja z obu demo). JSON-LD z areaServed; ukryte w nawigacji; w sitemapie.

---

## 9. ZGODNOŚĆ PRAWNA I UCZCIWOŚĆ (dla tej grupy — specyficzne)

- **Kosmetolog ≠ lekarz.** Zero obietnic „leczenia" chorób (trądzik jako choroba, łuszczyca itd.) — język: `redukcja niedoskonałości`, `poprawa kondycji skóry`, `wsparcie skóry problematycznej`. Blok szczerości z odesłaniem do dermatologa to nie tylko etyka — to tarcza prawna i pozycjonowanie.
- **BEZ iniekcji z pogranicza medycyny** (wypełniacze, toksyna) — na rynku bywają w gabinetach kosmetologicznych, ale to szara strefa prawna; DEMO ich nie zawiera, żeby wzorzec był bezpieczny dla każdego klienta agencji. Mezoterapia mikroigłowa — tak; wypełniacze — nie. (Notatka wdrożeniowa w kodzie: jeśli realny klient wykonuje takie zabiegi na własną odpowiedzialność, sekcję można rozszerzyć — decyzja i odpowiedzialność po stronie gabinetu.)
- **Przed/po = wizerunek = RODO:** komentarz wdrożeniowy w kodzie /efekty: publikacja wymaga pisemnej zgody klientki na wykorzystanie wizerunku w tym celu; zgoda odwoływalna; przechowywać dokumentację zgód.
- **Popup demo** (wzorzec DemoNoticeModal z ELARY — natywny `<dialog>`, raz na sesję, focus trap): treść dostosowana — `Gabinet HALICKA nie istnieje — to fikcyjna marka demonstracyjna Connectivy… Prowadzisz gabinet kosmetologii? Taką stronę zbudujemy dla Ciebie.` Przyciski: `Chcę taką stronę` → connectiva-website.pages.dev · `Rozumiem, chcę zobaczyć demo`.
- Makiety (wizytówka, raport) z etykietą `PRZYKŁAD`. Certyfikaty/szkolenia fikcyjne bez logotypów realnych organizacji. Stopka: `© 2026 HALICKA · Strona demonstracyjna Connectiva`.

---

## 10. STRONA SYSTEMU `/jak-pozyskujemy-klientki`

H1 `Strona, która zamienia wizyty w programy.` Warstwy DZIAŁA: (1) diagnoza jako brama — każda ścieżka prowadzi do jednego, policzalnego CTA; (2) programy pakietowe — wyższa wartość klientki od pierwszej wizyty; (3) oś czasu programu — klientka widzi, za co płaci; (4) rezerwacja z kontekstem; (5) lądowiska SEO. Warstwy PRZYKŁAD: wizytówka, raport miesięczny. Blok `Dlaczego programy, nie zabiegi` z prostą matematyką (klientka jednorazowa vs programowa — wartość 6×). CTA `Chcę taki system`.

---

## 11. REZERWACJA `/kontakt`

Formularz z kontekstem (parametry `program`, `zabieg`; **domyślne zaznaczenie: Diagnoza skóry** — wszystko prowadzi tu). Pola: Imię* · Telefon* · Czego dotyczy (Diagnoza [domyślne] / konkretny program / pojedynczy zabieg — select z danych) · Preferowany kontakt (telefon/SMS) · Uwagi · RODO*. Web3Forms `TODO_WEB3FORMS_KEY`. Obok: telefon, godziny, adres, mapa Wrzeszcza (bez fałszywej pinezki lokalu). Adnotacja: `Odpowiadam osobiście, zwykle tego samego dnia.` (jednoosobowość = atut).

---

## 12. WARSTWA RUCHU (precyzyjna, powściągliwa — inna niż ELARA)

> Ruch HALICKIEJ = precyzja pomiaru, nie taniec. Mniej, wolniej, celniej.

- **12.1 Rysujące się pierścienie:** sygnaturowe okręgi (numery sekcji, kroki diagnozy, punkty osi czasu) rysują się (`stroke-dashoffset`) gdy wchodzą w ekran, 700ms, raz. To główny motyw ruchu.
- **12.2 Suwak przed/po:** przeciągalny (pointer events) + klawiatura (strzałki) + na mobile dotyk; start 50/50; etykiety PRZED/PO zawsze widoczne; bez autoplay.
- **12.3 Oś czasu programu:** desktop — pozioma, punkty aktywują się kolejno przy przewijaniu sekcji (podświetlenie + wypełnienie pierścienia), linia postępu rośnie; mobile — pionowa, aktywacja przy wejściu punktu w ekran. Scroll-linked, odwracalne, `transform`/`opacity` only.
- **12.4 Wejścia sekcji:** delikatny fade+translateY(12px), raz, kaskada 60ms w siatkach. ŻADNEJ nici, żadnego efektu ucieczki, żadnego marquee — to sygnatury ELARY.
- **12.5 Boczna nawigacja punktowa (desktop):** aktywna kropka wypełnia pierścień; klik = płynne przewinięcie.
- **12.6 Wymogi twarde:** `prefers-reduced-motion` wyłącza wszystko (pierścienie narysowane, suwak działa bez animacji, oś statyczna z wszystkimi punktami aktywnymi); jeden wspólny nasłuch scrolla + IntersectionObserver; zero poziomego scrolla; Lighthouse Performance ≥90 mobile, Accessibility 100; kontrasty sprawdzone przed buildem.

---

## 13. ZDJĘCIA (Higgsfield, osobna sesja później)

~12: portret założycielki hero 3:4 (spokojny, profesjonalny, gabinet w tle rozmyty), portret przy pracy, 2× wnętrze gabinetu (stanowisko z aparaturą, poczekalnia), 3× zabiegi w trakcie (dłonie+aparat przy twarzy klientki), 6× pary przed/po (na start: pary placeholderów). **BEZ tekstu na ubraniach i sprzęcie** (lekcja fartuchów). Styl: chłodne, czyste światło, zieleń+porcelana w tle, `photorealistic, no text`.

---

## 14. ETAPY BUDOWY (jeden naraz, STOP po każdym)

**ETAP 1 — Fundament:** Astro+Tailwind, fonty Sora/Inter, paleta, Base, Header (górny pasek + menu ze „Strona główna"), Footer, `Ring.astro`, oba pływające przyciski, sprawdzenie kontrastów palety. Build, STOP.
**ETAP 2 — Strona główna:** sekcje 01–06 wg pkt 3 (placeholdery zdjęć), boczna nawigacja punktowa (desktop), programs.ts wstępnie. Build, STOP.
**ETAP 3 — Programy:** programs.ts w pełni, /programy + 5 stron /programy/[slug] z osią czasu (wersja statyczna osi — ruch w E8). Build, STOP.
**ETAP 4 — Zabiegi + Diagnoza:** treatments.ts (~24), /zabiegi (akordeony), /diagnoza-skory. Build, STOP.
**ETAP 5 — Efekty + O mnie:** /efekty z suwakami przed/po (interakcja od razu), /o-mnie, komentarz RODO-wizerunek. Build, STOP.
**ETAP 6 — Rezerwacja:** /kontakt z kontekstem i domyślną diagnozą. Build, STOP.
**ETAP 7 — Strona systemu:** /jak-pozyskujemy-klientki z makietami PRZYKŁAD. Build, STOP.
**ETAP 8 — Warstwa ruchu:** pierścienie, oś czasu scroll-linked, wejścia, boczna nawigacja aktywna — wg sekcji 12. Build, Lighthouse mobile, STOP.
**ETAP 9 — Lądowiska SEO:** cities.ts + 9 stron wg pkt 8, sitemap, JSON-LD. Build, adresy, STOP.
**ETAP 10 — Popup + SEO + audyt:** DemoNoticeModal, robots.txt, 404, meta/OG, pełny audyt mobile 360/390/414 + desktop, Lighthouse (≥90/100), raport. STOP.

---

*Specyfikacja HALICKA v1 — Grupa 2, marka osobista. Trzecie demo domyka portfolio: trzy grupy, trzy różne systemy, trzy różne języki wizualne. Metodyka wspólna, tożsamość osobna.*









# ETAP 1B — ODRÓŻNIENIE SZKIELETU (przebudowa ramy przed Etapem 2)

> **Powód:** trzy elementy ramy powtarzają się we wszystkich demach agencji (ciemny górny pasek, pływające pigułki w rogach, naprzemienne pełnoszerokie pasy tła) i tworzą wrażenie jednego szablonu mimo innych kolorów. HALICKA dostaje własną ramę. Ta sekcja ZASTĘPUJE odpowiednie fragmenty sekcji 3 specyfikacji (górny pasek, pływające przyciski, rytm teł).

---

## 1B.1 NAGŁÓWEK JEDNORZĘDOWY (bez ciemnego górnego paska)

- **Usuń ciemny górny pasek całkowicie.** Żadnego osobnego pasa z godzinami.
- Jeden rząd, tło `--porcelain`, dolna krawędź: linia 1px `--pine` z przezroczystością ~12% (hairline).
- Układ desktop: **logo (lewa)** · **menu (środek/prawa)**: `Strona główna | Programy | Zabiegi | Diagnoza skóry | Efekty | O mnie | Kontakt` · **telefon jako tekstowy link** `512 340 220` (Inter, --ink, bez tła) · **przycisk `Umów diagnozę`** (pine, jasny tekst).
- Wysokość ~72px. Sticky u góry, przy przewinięciu delikatny cień zamiast zmiany koloru.
- Mobile: logo · ikona telefonu (klikalna) · hamburger. Menu mobilne pełnoekranowe na porcelain, pozycje dużą Sorą, na dole telefon + przycisk.
- **Godziny otwarcia:** wyłącznie stopka i /kontakt. (Nie giną — przestają wisieć nad każdą stroną.)

## 1B.2 DOLNY PASEK DIAGNOZY (zastępuje OBA pływające przyciski)

- **Usuń pływającą pigułkę „Umów diagnozę" i pływający przycisk „Strona główna".** („Strona główna" zostaje jako pierwsza pozycja menu — potrzeba nawigacyjna jest pokryta.)
- Zamiast nich: **przyklejony dolny pasek** (`position: fixed; bottom: 0`), pojawiający się po przewinięciu za hero (~80vh), wysuwany z dołu (transform, 300ms).
- Wygląd: cienka listwa — 56px desktop / 60px mobile — tło `--pine`, tekst jasny.
- Treść desktop: `Diagnoza skóry · 40 min · 200 zł — w całości odliczane` + przycisk `Umów` (jasny, pine tekst). Mobile: `Diagnoza skóry · 200 zł` + przycisk `Umów` (krócej, jedna linia).
- Klik → `/kontakt` (formularz i tak domyślnie zaznacza diagnozę).
- Ukryty na `/kontakt`. `padding-bottom` body powiększony o wysokość paska, żeby nie zasłaniał stopki ani treści. `prefers-reduced-motion`: pojawia się bez animacji.
- To jest stały nośnik produktu wejściowego — konkret z ceną zamiast ogólnego „umów wizytę".

## 1B.3 REDAKCYJNY RYTM SEKCJI (zamiast naprzemiennych pasów tła)

- **Usuń wzorzec naprzemiennych pełnoszerokich pasów** (porcelain/mist na zmianę). Całość strony na jednym tle `--porcelain`.
- Sekcje oddzielone **cienką poziomą linią** (1px, pine ~12%) na szerokość kontenera + oddechem 96–128px.
- **Desktop (≥1024px) — siatka redakcyjna:** kontener 12 kolumn. Każda numerowana sekcja:
  - **Lewa kolumna (3 kol., `position: sticky; top: ~96px`):** numer sekcji w pierścieniu (Ring, duży) + tytuł sekcji (Sora) + 1 zdanie opisu (`--ink-soft`). Zostaje na ekranie, gdy treść obok się przewija.
  - **Prawa kolumna (9 kol.):** właściwa treść sekcji (karty, siatki, oś czasu).
- **Mobile:** lewa kolumna składa się nad treść (numer+tytuł jako nagłówek bloku), bez sticky.
- Kolory `--mist` i `--pine` używane **wyłącznie w blokach**: karty programów (mist), blok szczerości (obrys sage), CTA końcowe (jedyny pełnoszeroki pas pine na stronie — celowy mocny finał).
- Boczna nawigacja punktowa (prawa krawędź, desktop) zostaje — współgra z tym układem.
- Pas zaufania (sekcja 02): nie pas tła, lecz **jedna linia danych** rozciągnięta na szerokość treści, pozycje oddzielone pierścieniami-kropkami, nad i pod hairline. Dyskretnie, jak stopka raportu.

## 1B.4 CO SIĘ NIE ZMIENIA

Paleta, typografia (Sora/Inter), Ring, treści, ścieżka diagnoza→program, struktura stron, popup demo, wymogi wydajności i kontrastów. Zmienia się wyłącznie RAMA: nagłówek, dolny pasek, rytm sekcji.

## 1B.5 ETAP

**ETAP 1B:** przebuduj Header.astro wg 1B.1 (jednorzędowy, bez górnego paska), zastąp FloatingButtons.astro dolnym paskiem diagnozy wg 1B.2 (usuń oba pływające przyciski), przygotuj w global.css/Base wzorzec siatki redakcyjnej i hairline'ów wg 1B.3 (komponent `SectionShell.astro`: sticky numer+tytuł po lewej, treść po prawej, wariant mobilny) — Etap 2 zbuduje stronę główną już w tym wzorcu. Sprawdź kontrasty jasnego tekstu na pine w pasku. Build, podsumuj, STOP.

---

*Etap 1B — własna rama HALICKIEJ. Trzy dema, trzy ramy: Aurelia (klasyczna z górnym paskiem), ELARA (ruchoma z nicią), HALICKA (redakcyjna z dolnym paskiem diagnozy).*






# 15. KARTA TWOJEJ SKÓRY — system pozyskiwania klientek HALICKIEJ

> **Czym jest:** bezpłatna analiza wstępna zakończona **raportem** (nie wynikiem quizu). Odpowiednik „Dobierz zabieg" z Aurelii i cennika-filtra z ELARY — ale zbudowany pod filozofię HALICKIEJ: od stanu skóry → do programu → do diagnozy.
>
> **Co robi biznesowo (trzy rzeczy naraz):** (1) przyciąga — daje realną wartość za darmo, (2) kwalifikuje — kto przeszedł analizę, ten jest zainteresowany, (3) zbiera lead z pełnym kontekstem — gabinet dzwoni wiedząc, jaką skórę ma klientka i jaki program jej pasuje.
>
> **Ścieżka:** `/karta-skory` → 7 pytań wizualnych → Karta na ekranie → „Wyślij mi na maila" (lead) + „Umów diagnozę" (konwersja).

---

## 15.1 ZASADY PROJEKTOWE

- **Wizualnie, nie tekstowo.** Klientka klika w obrazki i suwaki, nie czyta ścian tekstu. Cała analiza ≤ 90 sekund.
- **Jeden ekran = jedno pytanie.** Pasek postępu (pierścienie 1–7, sygnatura marki). Możliwość cofnięcia.
- **Nic nie jest zablokowane za mailem.** Karta wyświetla się w całości od razu. Mail jest opcją („wyślij mi to"), nie bramką. To buduje zaufanie i pasuje do premium.
- **Uczciwość jako pozycjonowanie.** Karta wprost mówi, że to analiza wstępna, nie diagnoza. To wzmacnia, a nie osłabia — bo pokazuje, że prawdziwa wartość jest w gabinecie.
- **Zero medycznych obietnic.** Język kosmetologiczny: „kondycja skóry", „nawodnienie", „bariera hydrolipidowa" — nigdy „leczenie", „choroba", „wyleczy".
- Wejścia: menu główne (pozycja `Karta skóry`), sekcja na stronie głównej, CTA na stronach programów („nie wiesz, który program? zacznij od Karty"), dolny pasek diagnozy jako alternatywa.

---

## 15.2 SIEDEM PYTAŃ (dane w `src/data/skinQuiz.ts`)

Każde pytanie: nagłówek, ewentualny podtytuł, opcje wizualne (kafelki ze zdjęciem/ikoną + krótki podpis). Odpowiedzi zapisywane w stanie, obliczenia lokalnie w JS (bez wysyłki danych).

**P1 — Która skóra jest najbliższa Twojej?** *(kafelki ze zdjęciami makro skóry — placeholdery do czasu Higgsfield)*
Opcje: `Świeci się na czole i nosie, policzki normalne` · `Świeci się na całej twarzy` · `Ściąga, bywa szorstka` · `Reaguje zaczerwienieniem na wszystko` · `Trudno powiedzieć`

**P2 — Co niepokoi Cię najbardziej?** *(wybór do 2 — klik w obszary na uproszczonej sylwetce twarzy + lista)*
Opcje: `Niedoskonałości i zaskórniki` · `Przebarwienia, nierówny koloryt` · `Utrata jędrności, owal` · `Zmarszczki` · `Szara, zmęczona cera` · `Rozszerzone pory` · `Zaczerwienienia, naczynka` · `Odwodnienie, ściąganie`

**P3 — Jak Twoja skóra zachowuje się 2 godziny po umyciu?** *(suwak, 5 pozycji)*
Od `Bardzo ściąga` przez `W porządku` do `Wyraźnie się świeci`

**P4 — Ile masz lat?** *(kafelki)* `do 25` · `26–35` · `36–45` · `46–55` · `56+`
*(uzasadnienie w interfejsie: „wiek zmienia priorytety pielęgnacji — nie oceniamy, dobieramy")*

**P5 — Jak dbasz o skórę dzisiaj?** *(kafelki)*
`Woda i krem, bez systemu` · `Mam kosmetyki, ale bez planu` · `Mam ustaloną pielęgnację` · `Byłam już na zabiegach w gabinecie`

**P6 — Czy używasz filtra SPF na co dzień?** *(kafelki)*
`Codziennie, cały rok` · `Tylko latem` · `Rzadko lub wcale`
*(to pytanie ma największą wagę w rekomendacji dot. przebarwień i kwasów — uzasadnić w Karcie)*

**P7 — Ile czasu realnie możesz poświęcić?** *(kafelki)*
`Chcę systematycznie, mogę co 2–3 tygodnie` · `Raz w miesiącu` · `Rzadziej, ale chcę efekt` · `Nie wiem, potrzebuję rady`

---

## 15.3 LOGIKA DOPASOWANIA (prosta, przejrzysta, w `skinQuiz.ts`)

**Krok 1 — typ skóry** z P1 + P3: `mieszana` / `tłusta` / `sucha` / `wrażliwa` / `normalna`
**Krok 2 — stan dodatkowy** z P2 + P3 + P6: `odwodniona` (dominujące) / `z tendencją do przebarwień` / `z osłabioną barierą` / `dojrzała`
**Krok 3 — profil** = złożenie: np. `skóra mieszana, odwodniona, z tendencją do przebarwień`

**Krok 4 — dopasowanie programu** (punktacja, wygrywa najwyższy wynik):
- P2 zawiera `Niedoskonałości` / `Rozszerzone pory` → **Skóra pod kontrolą**
- P2 zawiera `Odwodnienie` / `Szara cera` lub P3 skrajnie „ściąga" → **Odbudowa**
- P2 zawiera `Przebarwienia` (waga ×2 jeśli P6 = rzadko/wcale) → **Równy koloryt**
- P2 zawiera `Utrata jędrności` / `Zmarszczki`, lub P4 ≥ 46 → **Napięcie i kontur**
- Konflikt (2 różne priorytety o zbliżonej punktacji) lub P7 = `Nie wiem` → **Protokół Halicka** (indywidualny) z wyjaśnieniem: „Twoje potrzeby idą w dwóch kierunkach naraz — tu trzeba ułożyć plan indywidualnie."

**Krok 5 — trzy priorytety w kolejności** (co pierwsze, co drugie, czego jeszcze nie ruszać). Reguła stała i uczciwa: nawodnienie i bariera ZAWSZE przed kwasami i przebarwieniami; przy P6 = rzadko/wcale — SPF jest priorytetem nr 1 i warunkiem sensu dalszych zabiegów.

---

## 15.4 KARTA — układ raportu (to jest produkt)

Wygląda jak dokument gabinetu, nie jak wynik quizu. Tło porcelain, ramka hairline, nagłówek z pierścieniem, typografia Sora/Inter, u dołu podpis `mgr Nina Halicka`.

1. **Nagłówek:** `Karta Twojej Skóry` + data + (jeśli podane) imię
2. **PROFIL SKÓRY** — duża nazwa profilu (Sora), pod spodem 2 zdania wyjaśnienia w ludzkim języku
3. **TRZY PRIORYTETY** — ponumerowane w pierścieniach: `01 Nawodnienie i odbudowa bariery` · `02 Wyrównanie kolorytu` · `03 Praca nad jędrnością — dopiero po 01 i 02`. Każdy z jednym zdaniem uzasadnienia.
4. **CZEGO JESZCZE NIE ROBIĆ** — 1–2 punkty (np. „nie zaczynaj od mocnych kwasów przy osłabionej barierze — pogorszysz stan"). To buduje autorytet mocniej niż lista zaleceń.
5. **REKOMENDOWANY PROGRAM** — nazwa, dla kogo, liczba wizyt, czas trwania, orientacyjna cena pakietu, link do strony programu
6. **CO MOŻESZ ZROBIĆ OD JUTRA (bez wydawania złotówki)** — 3 konkretne rzeczy dopasowane do profilu (np. „myj twarz letnią, nie gorącą wodą", „nakładaj krem na wilgotną skórę", „SPF 30+ codziennie, także zimą"). **Bez polecania produktów i marek** — to ma być czysta wartość, nie sprzedaż.
7. **WŁAŚCIWY MOMENT** — jedno zdanie o sezonowości dobrane do rekomendacji (np. przy kwasach/laserach: „jesień i zima to najlepszy okres — mniej słońca, mniejsze ryzyko przebarwień")
8. **ZAMKNIĘCIE UCZCIWOŚCIOWE** (wyróżnione, obrys sage): `To analiza wstępna na podstawie Twoich odpowiedzi. Prawdziwą diagnozę wykonuję osobiście, w gabinecie, z analizą aparatem — dopiero wtedy układamy plan. Jeśli okaże się, że Twoja skóra potrzebuje dermatologa, powiem to wprost.`
9. **DWA DZIAŁANIA:** przycisk główny `Umów diagnozę — 200 zł, odliczane od programu` → `/kontakt?cel=diagnoza&profil=[kod]&program=[slug]` · przycisk drugi `Wyślij mi tę Kartę na maila`
10. **NABÓR (uczciwa rzadkość):** `Zabiegi wykonuję wyłącznie osobiście, dlatego przyjmuję maksymalnie 12 nowych klientek kwartalnie. Wolne miejsca w tym kwartale: 3.` — liczba w `src/data/intake.ts` (jedna zmienna do podmiany; **nie licznik odliczający, nie sztuczna presja** — to prawda o gabinecie jednoosobowym)
11. **Drobne:** `Karta ma charakter informacyjny i nie stanowi porady medycznej.`

---

## 15.5 PRZECHWYCENIE LEADA

- Przycisk `Wyślij mi tę Kartę na maila` → rozwija mini-formularz: `Imię` · `E-mail` · zgoda RODO (checkbox z treścią o celu i możliwości wycofania) · `Wyślij`
- Web3Forms (`TODO_WEB3FORMS_KEY`), ukryte pola przekazują: profil skóry, wybrane odpowiedzi, rekomendowany program, priorytety.
- **Gabinet dostaje zgłoszenie z pełnym kontekstem** — nie „ktoś zapytał", tylko: `Anna, skóra mieszana odwodniona z tendencją do przebarwień, priorytet: nawodnienie, rekomendacja: Odbudowa, SPF: rzadko`.
- Komunikat sukcesu: `Wysłane. Karta powinna dotrzeć w ciągu minuty — sprawdź też folder ofert.`
- Jeśli klientka nie zostawia maila — **nic nie traci**, Karta zostaje na ekranie, można ją wydrukować (`@media print` — czysty layout bez nawigacji).

---

## 15.6 SEKCJA NA STRONIE GŁÓWNEJ (nowa, wchodzi jako 03; pozostałe numery +1)

- Overline `03 · ZACZNIJ TUTAJ` · H2 `Nie wiesz, czego potrzebuje Twoja skóra?`
- Lead: `Odpowiedz na 7 pytań — w minutę dostaniesz Kartę Twojej Skóry: profil, trzy priorytety w kolejności i to, co możesz zrobić w domu od jutra. Bezpłatnie, bez zapisów.`
- Po prawej: podgląd Karty (statyczna makieta fragmentu — buduje ciekawość)
- Przycisk `Wypełnij Kartę Skóry →`

---

## 15.7 WYMOGI TECHNICZNE

- Cała logika lokalnie w przeglądarce (bez backendu). Stan w pamięci; **bez localStorage** (nie jest potrzebny, a upraszcza zgodność).
- Nawigacja klawiaturą, `aria-live` przy zmianie pytania, focus na nowym pytaniu, pasek postępu z `aria-valuenow`.
- `prefers-reduced-motion`: przejścia między pytaniami bez animacji.
- Mobile-first: kafelki min. 44px wysokości dotykowej, jedno pytanie na ekran, przyciski `Wstecz`/`Dalej` w zasięgu kciuka.
- Karta w pełni czytelna i drukowalna; zero poziomego przewijania.
- Lighthouse: Performance ≥90 mobile, Accessibility 100.

---

## 15.8 WPIĘCIE W STRONĘ SYSTEMU `/jak-pozyskujemy-klientki`

Nowa warstwa (jako pierwsza, DZIAŁA): `Karta Twojej Skóry — bezpłatna analiza, która zamienia anonimowy ruch w konkretne zgłoszenie`. Tekst dla właścicielki: `Klientka wychodzi z realną wartością, nawet jeśli jeszcze się nie umówi — i zapamiętuje gabinet. A Ty dostajesz zgłoszenie z gotowym profilem skóry: wiesz, z czym dzwonisz, zanim odbierzesz telefon.` Dowód: przycisk `Zobacz, jak działa →` do `/karta-skory`.

---

## 15.9 ETAP

**ETAP 11 — Karta Twojej Skóry:** zbuduj `skinQuiz.ts` (7 pytań wg 15.2, logika dopasowania wg 15.3, teksty priorytetów i zaleceń domowych dla każdego profilu), stronę `/karta-skory` (kreator jeden-ekran-jedno-pytanie z paskiem pierścieni, cofanie, generowanie Karty wg 15.4), formularz wysyłki Karty wg 15.5, `intake.ts` z liczbą wolnych miejsc, sekcję na stronie głównej wg 15.6, pozycję `Karta skóry` w menu, wpięcie w stronę systemu wg 15.8, styl druku. Wymogi z 15.7. Build, Lighthouse mobile, podsumuj. STOP.

---

*Sekcja 15 — Karta Twojej Skóry. Daje wartość, zanim weźmie pieniądze; zbiera lead z kontekstem; prowadzi do płatnej diagnozy. System HALICKIEJ.*






# 16. POPRAWKI WYKOŃCZENIOWE (reguły trwałe)

> Zapisane jako **reguły systemu**, nie jednorazowe naprawy — obowiązują w każdym nowym elemencie strony i przy każdej przyszłej zmianie. Wynikają z testów na prawdziwym telefonie po Etapie 10.

---

## 16.1 ZASADA: żadnych natywnych pól wyboru w formularzach

**Reguła:** pola wyboru (`<select>`) nie są używane w widocznej warstwie formularzy. Na telefonie otwierają systemowy bębenek, który wygląda obco względem strony i psuje wrażenie premium.

**Zamiast tego:** własna lista rozwijana w palecie i typografii strony.

**Wymagania dla własnej listy (obowiązkowe, bez wyjątków):**
- Przycisk pokazujący aktualnie wybraną opcję + rozwijany panel z listą
- Wygląd: tło `--porcelain`, obramowanie hairline (pine/12%), aktywna opcja `--pine`, Sora dla grup / Inter dla pozycji
- Grupowanie zachowane (np. Diagnoza · Programy · Zabiegi wg kategorii)
- **Dostępność (twardy wymóg, Accessibility musi zostać 100):** `role="listbox"` / `role="option"`, `aria-expanded`, `aria-selected`, obsługa klawiatury (strzałki góra/dół, Enter, Escape, Home/End), widoczny focus, zamykanie klikiem poza panelem
- **Fallback:** bez JavaScriptu ma zostać działający natywny `<select>` — funkcja formularza nie może zależeć od skryptu
- Wybrana wartość trafia do ukrytego pola formularza (Web3Forms) i nie psuje prewypełniania z parametrów URL (`?program=`, `?zabieg=`)

**Zastosowanie natychmiastowe:** pole „Czego dotyczy" na `/kontakt`.

---

## 16.2 MENU MOBILNE — wzorzec panelu

Ikona (trzy kreski) pozostaje bez zmian. Zmienia się **rozwinięty panel**:

- Pełny ekran, tło `--porcelain` (jasne, nie ciemne)
- Pozycje jedna pod drugą, **duża czcionka Sora**, wyraźny oddech pionowy
- Każda pozycja oddzielona **hairline'em** (pine/12%)
- Przed każdą pozycją **mały pierścień z numerem** (01, 02, 03…) — sygnatura marki podchwycona w nawigacji
- Stan aktywny / dotknięty: podświetlenie `--pine`
- Na dole panelu: **telefon klikalny** + przycisk `Umów diagnozę`
- Zamknięcie: krzyżyk w prawym górnym rogu + Escape
- Blokada przewijania tła gdy panel otwarty, focus trap wewnątrz panelu

---

## 16.3 NAZWA W NAGŁÓWKU

- Zamiast samego `HALICKA` → **`HALICKA Kosmetologia`**
- Musi mieścić się na 360px bez łamania — w razie potrzeby drugi człon mniejszym stopniem lub z separatorem (`HALICKA · Kosmetologia`)
- W stopce i pełnej nazwie marki pozostaje `HALICKA Kosmetologia Estetyczna`

---

## 16.4 ZASADA: pierścień na ciemnym tle jest jasny

**Reguła systemu wizualnego:** sygnaturowy pierścień (`Ring.astro`) dostosowuje kolor do tła.

- Na tłach jasnych (`--porcelain`, `--mist`) → pierścień w `--pine` (bez zmian)
- Na tłach ciemnych (`--pine`) → **pierścień jasny/biały**, żeby był czytelny

**Obowiązuje wszędzie, gdzie pierścień występuje na ciemnym tle** — obecnie: stopka (na każdej podstronie), końcowe CTA `Zacznijmy od diagnozy`. Przy dodawaniu nowych ciemnych sekcji w przyszłości reguła obowiązuje automatycznie.

Realizacja: wariant komponentu (np. `tone="light"`) albo dziedziczenie `currentColor` — byle nie ręczne nadpisywanie w każdym miejscu osobno.

---

## 16.5 ETAP

**ETAP 10B — Poprawki wykończeniowe:** wykonaj 16.1 (własna lista rozwijana na `/kontakt` z pełną dostępnością i fallbackiem), 16.2 (przeprojektowany panel menu mobilnego — ikona bez zmian), 16.3 (nazwa `HALICKA Kosmetologia` w nagłówku), 16.4 (jasny pierścień na wszystkich ciemnych tłach). Nie ruszaj struktury stron ani logiki. Build, sprawdź kontrast jasnego pierścienia na `--pine`, Lighthouse mobile (Accessibility musi pozostać 100 — własna lista i menu to elementy ryzykowne dla dostępności). Podsumuj. STOP.

---

*Sekcja 16 — reguły wykończeniowe. Zapisane w specyfikacji, nie w prompcie, bo obowiązują trwale i przy każdej przyszłej zmianie.*