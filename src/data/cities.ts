export interface City {
  slug: string;
  /** Mianownik — H1, breadcrumb, linki. */
  name: string;
  /** Dopełniacz — "klientki z {genitive} dojeżdżają...". */
  genitive: string;
  /** Miejscownik — do użycia w leadach, gdyby był potrzebny. */
  locative: string;
  /** Orientacyjny czas dojazdu do gabinetu w Gdańsku-Wrzeszczu. */
  minutes: number;
  /** Unikalny lead (2–3 zdania) z realnym środkiem dojazdu. */
  intro: string;
}

export const cities: City[] = [
  {
    slug: "gdansk-wrzeszcz",
    name: "Gdańsk-Wrzeszcz",
    genitive: "Gdańska-Wrzeszcza",
    locative: "Gdańsku-Wrzeszczu",
    minutes: 5,
    intro:
      "Wrzeszcz to dzielnica, w której na co dzień pracuję — gabinet znajdziesz przy al. Grunwaldzkiej, głównej arterii dzielnicy, kilka minut spacerem od stacji PKP/SKM Gdańsk Wrzeszcz. Jeśli mieszkasz lub pracujesz w Gdańsku-Wrzeszczu, masz do mnie najbliżej ze wszystkich lokalizacji.",
  },
  {
    slug: "gdansk-oliwa",
    name: "Gdańsk-Oliwa",
    genitive: "Gdańska-Oliwy",
    locative: "Gdańsku-Oliwie",
    minutes: 12,
    intro:
      "Z Gdańska-Oliwy do gabinetu przy al. Grunwaldzkiej dojedziesz SKM-ką lub tramwajem w kilkanaście minut — to jedna z bliższych dzielnic względem Wrzeszcza. Sporo klientek z Oliwy umawia wizyty przed pracą, korzystając z porannego połączenia SKM.",
  },
  {
    slug: "gdansk-przymorze",
    name: "Gdańsk-Przymorze",
    genitive: "Gdańska-Przymorza",
    locative: "Gdańsku-Przymorzu",
    minutes: 15,
    intro:
      "Z Przymorza do al. Grunwaldzkiej najwygodniej dojechać tramwajem — trasa zajmuje około kwadransa, bez przesiadek. Gabinet leży blisko przystanku, więc po wyjściu z tramwaju nie trzeba dużo chodzić.",
  },
  {
    slug: "gdansk-zaspa",
    name: "Gdańsk-Zaspa",
    genitive: "Gdańska-Zaspy",
    locative: "Gdańsku-Zaspie",
    minutes: 12,
    intro:
      "Zaspa sąsiaduje z Wrzeszczem, więc dojazd tramwajem lub SKM do gabinetu przy al. Grunwaldzkiej zajmuje zwykle kilkanaście minut. To jedna z najbliższych lokalizacji względem gabinetu.",
  },
  {
    slug: "gdansk-srodmiescie",
    name: "Gdańsk-Śródmieście",
    genitive: "Gdańska-Śródmieścia",
    locative: "Gdańsku-Śródmieściu",
    minutes: 15,
    intro:
      "Ze Śródmieścia do Wrzeszcza jedzie się SKM-ką zaledwie kilka przystanków — z dworca Gdańsk Główny to około kwadransa razem z dojściem. Gabinet przy al. Grunwaldzkiej znajdziesz kilka minut od stacji Gdańsk Wrzeszcz.",
  },
  {
    slug: "gdansk-morena",
    name: "Gdańsk-Morena",
    genitive: "Gdańska-Moreny",
    locative: "Gdańsku-Morenie",
    minutes: 20,
    intro:
      "Z Moreny do al. Grunwaldzkiej dojedziesz tramwajem lub autobusem, zwykle z jedną przesiadką — licz się z około dwudziestoma minutami w jedną stronę. To nieco dalsza dzielnica, ale część klientek z Moreny łączy wizytę z innymi sprawami w centrum Wrzeszcza.",
  },
  {
    slug: "sopot",
    name: "Sopot",
    genitive: "Sopotu",
    locative: "Sopocie",
    minutes: 15,
    intro:
      "Z Sopotu do Wrzeszcza jedzie się SKM-ką zaledwie kilkanaście minut — to jedno z bliższych połączeń spoza Gdańska. Gabinet przy al. Grunwaldzkiej znajduje się blisko stacji, więc dojście zajmuje chwilę.",
  },
  {
    slug: "gdynia",
    name: "Gdynia",
    genitive: "Gdyni",
    locative: "Gdyni",
    minutes: 30,
    intro:
      "Z Gdyni do gabinetu w Gdańsku-Wrzeszczu najwygodniej dojechać SKM-ką — podróż zajmuje około pół godziny, bez przesiadek. Część klientek z Gdyni łączy wizytę z innymi sprawami w Trójmieście.",
  },
  {
    slug: "pruszcz-gdanski",
    name: "Pruszcz Gdański",
    genitive: "Pruszcza Gdańskiego",
    locative: "Pruszczu Gdańskim",
    minutes: 20,
    intro:
      "Z Pruszcza Gdańskiego do Wrzeszcza dojedziesz pociągiem lub samochodem — drogą S7 albo dalej al. Grunwaldzką — w około dwadzieścia minut. Gabinet znajduje się blisko głównej arterii, więc dojazd autem jest wygodny.",
  },
  {
    slug: "rumia",
    name: "Rumia",
    genitive: "Rumi",
    locative: "Rumi",
    minutes: 35,
    intro:
      "Z Rumi do Wrzeszcza jedzie się SKM-ką w kierunku Gdańska — podróż zajmuje około 35 minut, bez przesiadek. To jedna z dalszych lokalizacji na trasie SKM, ale bezpośrednie połączenie ułatwia planowanie wizyty.",
  },
  {
    slug: "reda",
    name: "Reda",
    genitive: "Redy",
    locative: "Redzie",
    minutes: 38,
    intro:
      "Z Redy do gabinetu przy al. Grunwaldzkiej najwygodniej dojechać SKM-ką — jazda w stronę Wrzeszcza zajmuje około 38 minut. To kawałek drogi, ale bezpośrednie połączenie bez przesiadek pozwala spokojnie zaplanować wizytę.",
  },
  {
    slug: "wejherowo",
    name: "Wejherowo",
    genitive: "Wejherowa",
    locative: "Wejherowie",
    minutes: 40,
    intro:
      "Z Wejherowa do Wrzeszcza jedzie się SKM-ką najdłużej spośród wszystkich obsługiwanych lokalizacji — licz się z około 40 minutami jazdy, bez przesiadek. Mimo odległości część klientek z Wejherowa umawia wizyty co kilka tygodni, traktując dojazd jako stały rytuał.",
  },
  {
    slug: "zukowo",
    name: "Żukowo",
    genitive: "Żukowa",
    locative: "Żukowie",
    minutes: 28,
    intro:
      "Żukowo leży na zachód od Trójmiasta, więc najwygodniejszy dojazd do gabinetu to samochód lub autobus — trasa zajmuje około 25–30 minut, w zależności od pory dnia. Bezpośredniego połączenia SKM z Żukowa nie ma, warto więc zaplanować czas na dojazd z zapasem.",
  },
  {
    slug: "gdansk-osowa",
    name: "Gdańsk-Osowa",
    genitive: "Gdańska-Osowej",
    locative: "Gdańsku-Osowej",
    minutes: 20,
    intro:
      "Z Osowy do Wrzeszcza dojedziesz Pomorską Koleją Metropolitalną lub samochodem — trasa zajmuje około 20 minut. To jedna z dalszych dzielnic Gdańska, ale dobre połączenie kolejowe skraca dojazd.",
  },
  {
    slug: "gdansk-glowne-miasto",
    name: "Gdańsk-Główne Miasto",
    genitive: "Gdańska-Głównego Miasta",
    locative: "Gdańsku-Głównym Mieście",
    minutes: 15,
    intro:
      "Z Głównego Miasta do Wrzeszcza jedzie się SKM-ką z dworca Gdańsk Główny — to zaledwie kilka przystanków, około kwadransa razem z dojściem. Gabinet przy al. Grunwaldzkiej znajdziesz kilka minut od stacji Gdańsk Wrzeszcz.",
  },
];
