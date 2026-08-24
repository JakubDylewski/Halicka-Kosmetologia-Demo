export interface Program {
  slug: string;
  name: string;
  forWhom: string;
  /** Liczba wizyt w programie. `null` = program indywidualny (Protokół Halicka). */
  visits: number | null;
  durationMonths: number | null;
  /** Cena pakietu. `null` = wyceniane indywidualnie po diagnozie. */
  packagePrice: number | null;
  /** Suma cen pojedynczych zabiegów wchodzących w skład programu (do przekreślenia). */
  singlePrice: number | null;
}

export const programs: Program[] = [
  {
    slug: "skora-pod-kontrola",
    name: "Skóra pod kontrolą",
    forWhom: "Niedoskonałości i zaskórniki",
    visits: 6,
    durationMonths: 3,
    packagePrice: 1890,
    singlePrice: 2340,
  },
  {
    slug: "odbudowa",
    name: "Odbudowa",
    forWhom: "Skóra odwodniona, zmęczona",
    visits: 4,
    durationMonths: 2,
    packagePrice: 1490,
    singlePrice: 1760,
  },
  {
    slug: "rowny-koloryt",
    name: "Równy koloryt",
    forWhom: "Przebarwienia, poszarzenie",
    visits: 5,
    durationMonths: 3,
    packagePrice: 2190,
    singlePrice: 2590,
  },
  {
    slug: "napiecie-i-kontur",
    name: "Napięcie i kontur",
    forWhom: "Utrata jędrności, owal twarzy",
    visits: 6,
    durationMonths: 4,
    packagePrice: 3490,
    singlePrice: 4080,
  },
  {
    slug: "protokol-halicka",
    name: "Protokół Halicka",
    forWhom: "Autorski program łączony, po diagnozie",
    visits: null,
    durationMonths: null,
    packagePrice: null,
    singlePrice: null,
  },
];

export function formatPrice(value: number): string {
  return `${value.toLocaleString("pl-PL")} zł`;
}
