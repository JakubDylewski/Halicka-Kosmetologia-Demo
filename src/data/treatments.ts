export interface Treatment {
  name: string;
  duration: string;
  priceFrom: number;
  /** Podaj, gdy cena zależy od strefy/intensywności zabiegu. */
  priceTo?: number;
  description: string;
}

export interface TreatmentCategory {
  slug: string;
  name: string;
  treatments: Treatment[];
}

export const treatmentCategories: TreatmentCategory[] = [
  {
    slug: "oczyszczanie-i-regeneracja",
    name: "Oczyszczanie i regeneracja",
    treatments: [
      {
        name: "Oczyszczanie wodorowe",
        duration: "60 min",
        priceFrom: 260,
        description: "Głębokie oczyszczenie porów strumieniem wodorowym, bez podrażniania skóry.",
      },
      {
        name: "Peeling chemiczny (kwas migdałowy)",
        duration: "45 min",
        priceFrom: 280,
        description: "Łagodne złuszczanie dla skóry wrażliwej i naczyniowej, poprawia teksturę skóry.",
      },
      {
        name: "Peeling chemiczny łączony (TCA + azelainowy)",
        duration: "50 min",
        priceFrom: 380,
        description: "Intensywniejsze złuszczanie redukujące niedoskonałości i poszarzenie skóry.",
      },
      {
        name: "Oksybrazja",
        duration: "45 min",
        priceFrom: 240,
        description: "Natlenienie i mechaniczne oczyszczenie skóry, poprawia jej koloryt i jędrność.",
      },
      {
        name: "Mikrodermabrazja diamentowa",
        duration: "45 min",
        priceFrom: 260,
        description: "Złuszczanie naskórka mikrokryształkami, wygładza teksturę i spłyca drobne blizny.",
      },
      {
        name: "Peeling kawitacyjny",
        duration: "40 min",
        priceFrom: 220,
        description: "Delikatne oczyszczenie ultradźwiękami, przygotowuje skórę pod kolejne zabiegi.",
      },
    ],
  },
  {
    slug: "aparaturowe-anti-aging",
    name: "Aparaturowe anti-aging",
    treatments: [
      {
        name: "HIFU — strefa oczu",
        duration: "55 min",
        priceFrom: 700,
        description: "Ultradźwięki skupione punktowo w okolicy oczu, wspierają jędrność skóry powiek.",
      },
      {
        name: "HIFU — cała twarz",
        duration: "75 min",
        priceFrom: 1000,
        description: "Stymulacja produkcji kolagenu w głębszych warstwach skóry, poprawia napięcie owalu.",
      },
      {
        name: "HIFU — twarz i szyja",
        duration: "90 min",
        priceFrom: 1400,
        description: "Pełny zabieg modelujący owal twarzy i skórę szyi, efekt narasta przez kilka tygodni.",
      },
      {
        name: "RF mikroigłowa — twarz",
        duration: "60 min",
        priceFrom: 550,
        priceTo: 700,
        description: "Fale radiowe podawane mikroigłami stymulują odbudowę kolagenu i elastyny.",
      },
      {
        name: "RF mikroigłowa — twarz i szyja",
        duration: "75 min",
        priceFrom: 700,
        priceTo: 900,
        description: "Rozszerzony zabieg RF, poprawia jędrność skóry twarzy i dekoltu.",
      },
      {
        name: "Laser frakcyjny",
        duration: "60 min",
        priceFrom: 600,
        priceTo: 1100,
        description: "Odnowa naskórka i redukcja blizn potrądzikowych, cena zależy od strefy zabiegowej.",
      },
    ],
  },
  {
    slug: "mezoterapia-i-stymulacja",
    name: "Mezoterapia i stymulacja",
    treatments: [
      {
        name: "Mezoterapia mikroigłowa — kwas hialuronowy",
        duration: "45 min",
        priceFrom: 350,
        description: "Głębokie nawilżenie skóry drobnymi mikronakłuciami, poprawia jej napięcie.",
      },
      {
        name: "Mezoterapia mikroigłowa — witaminowa",
        duration: "45 min",
        priceFrom: 380,
        description: "Koktajl witamin dostarczony w głąb skóry, wspiera jej regenerację i blask.",
      },
      {
        name: "Mezoterapia mikroigłowa — peptydowa",
        duration: "50 min",
        priceFrom: 450,
        priceTo: 500,
        description: "Peptydy sygnałowe wspierające produkcję kolagenu, redukują drobne linie.",
      },
      {
        name: "Biorewitalizacja igłowa",
        duration: "50 min",
        priceFrom: 480,
        description: "Rewitalizacja skóry zmęczonej i pozbawionej blasku, efekt widoczny po kilku dniach.",
      },
      {
        name: "Mikronakłuwanie (dermapen)",
        duration: "60 min",
        priceFrom: 400,
        description: "Kontrolowana mikrouszkodzenia naskórka pobudzają naturalną odnowę skóry.",
      },
      {
        name: "Biostymulacja LED",
        duration: "30 min",
        priceFrom: 180,
        description: "Światło LED wspierające regenerację skóry, bez okresu rekonwalescencji.",
      },
    ],
  },
  {
    slug: "pielegnacja-specjalistyczna",
    name: "Pielęgnacja specjalistyczna",
    treatments: [
      {
        name: "Zabieg bankietowy",
        duration: "60 min",
        priceFrom: 320,
        description: "Natychmiastowy efekt „glow” przed ważnym wydarzeniem, bez rekonwalescencji.",
      },
      {
        name: "Terapia okolicy oczu",
        duration: "30 min",
        priceFrom: 220,
        description: "Redukcja opuchlizny i cieni, wygładza delikatną skórę wokół oczu.",
      },
      {
        name: "Zabieg na usta",
        duration: "30 min",
        priceFrom: 200,
        description: "Nawilżenie i wygładzenie skóry ust, przywraca im miękkość.",
      },
      {
        name: "Maska biocelulozowa",
        duration: "30 min",
        priceFrom: 180,
        description: "Intensywnie nawilżająca maska dopasowana do kształtu twarzy.",
      },
      {
        name: "Zabieg kojący na skórę naczyniową",
        duration: "45 min",
        priceFrom: 280,
        description: "Łagodzenie zaczerwienień i wzmacnianie naczynek, dla skóry wrażliwej.",
      },
      {
        name: "Peeling kwasowy pleców",
        duration: "60 min",
        priceFrom: 350,
        description: "Oczyszczanie i wygładzanie skóry pleców, redukuje niedoskonałości w tej strefie.",
      },
    ],
  },
];

export function formatTreatmentPrice(treatment: Treatment): string {
  if (treatment.priceTo && treatment.priceTo !== treatment.priceFrom) {
    return `${treatment.priceFrom}–${treatment.priceTo} zł`;
  }
  return `${treatment.priceFrom} zł`;
}
