export interface ProgramVisit {
  number: number;
  title: string;
  note: string;
}

export interface ProgramFaq {
  question: string;
  answer: string;
}

export interface Program {
  slug: string;
  name: string;
  /** Krótki opis na kartę (strona główna, /programy). */
  forWhom: string;
  /** 2 zdania na stronie programu. */
  intro: string;
  /** Liczba wizyt w programie. `null` = program indywidualny (Protokół Halicka). */
  visits: number | null;
  durationMonths: number | null;
  /** Cena pakietu. `null` = wyceniane indywidualnie po diagnozie. */
  packagePrice: number | null;
  /** Suma cen pojedynczych zabiegów wchodzących w skład programu (płatność za wizytę). */
  singlePrice: number | null;
  /** Krótki opis tego, co pokazuje para przed/po. */
  effectLabel: string;
  /** Oś czasu wizyt. Puste dla programu indywidualnego. */
  visitPlan: ProgramVisit[];
  forWhoYes: string[];
  forWhoNo: string[];
  faq: ProgramFaq[];
}

export const programs: Program[] = [
  {
    slug: "skora-pod-kontrola",
    name: "Skóra pod kontrolą",
    forWhom: "Niedoskonałości i zaskórniki",
    intro:
      "Ten program jest dla Ciebie, jeśli zmagasz się z nawracającymi niedoskonałościami, zaskórnikami i nierówną teksturą skóry. Prowadzę Cię przez serię zabiegów regulujących pracę gruczołów łojowych i oczyszczających pory w głębi.",
    visits: 6,
    durationMonths: 3,
    packagePrice: 1890,
    singlePrice: 2340,
    effectLabel: "Redukcja niedoskonałości i zaskórników",
    visitPlan: [
      { number: 1, title: "Diagnoza kontrolna + oczyszczanie wodorowe", note: "Dokładna analiza skóry aparatem i pierwsze głębokie oczyszczenie porów. Skóra może być lekko zaróżowiona przez kilka godzin." },
      { number: 2, title: "Peeling kawitacyjny + ekstrakcje", note: "Usuwamy zaskórniki i złogi z porów. Możliwe drobne zaczerwienienie do 24h, bez łuszczenia." },
      { number: 3, title: "Mezoterapia mikroigłowa (kwas migdałowy)", note: "Pierwsze widoczne wygładzenie tekstury. Skóra może być wrażliwa 1–2 dni, zalecany SPF." },
      { number: 4, title: "Peeling chemiczny (kwas azelainowy)", note: "Redukcja stanu zapalnego i przebarwień potrądzikowych. Możliwe delikatne złuszczanie przez 2–3 dni." },
      { number: 5, title: "Oczyszczanie wodorowe + LED", note: "Utrwalenie efektu, uspokojenie skóry. Zabieg bez okresu rekonwalescencji." },
      { number: 6, title: "Kontrola efektów + plan pielęgnacji domowej", note: "Podsumowujemy program i ustalamy pielęgnację podtrzymującą na kolejne miesiące." },
    ],
    forWhoYes: [
      "Zmagasz się z nawracającymi zaskórnikami i niedoskonałościami.",
      "Masz skórę mieszaną lub tłustą z rozszerzonymi porami.",
      "Szukasz systematycznego planu, nie jednorazowego zabiegu.",
    ],
    forWhoNo: [
      "Masz czynny, rozległy trądzik zapalny wymagający leczenia dermatologicznego.",
      "Jesteś obecnie w trakcie leczenia izotretynoiną.",
      "Oczekujesz widocznego efektu już po jednej wizycie.",
    ],
    faq: [
      {
        question: "Czy zabiegi bolą?",
        answer: "Peelingi i mezoterapia mikroigłowa mogą dawać uczucie lekkiego szczypania, ale zabiegi są dobrze tolerowane. Przed każdym z nich omawiam odczucia i mogę dostosować intensywność.",
      },
      {
        question: "Jak długo utrzymuje się efekt?",
        answer: "Przy regularnej pielęgnacji domowej efekt utrzymuje się od kilku miesięcy do roku. Część klientek wraca na wizyty kontrolne co 2–3 miesiące.",
      },
      {
        question: "Co jeśli po kilku wizytach zobaczę, że potrzebuję czegoś innego?",
        answer: "Plan modyfikujemy na bieżąco — jeśli skóra zareaguje inaczej niż zakładałam, dostosuję kolejne wizyty.",
      },
    ],
  },
  {
    slug: "odbudowa",
    name: "Odbudowa",
    forWhom: "Skóra odwodniona, zmęczona",
    intro:
      "Ten program jest dla Ciebie, jeśli Twoja skóra jest odwodniona, matowa i pozbawiona blasku mimo starannej pielęgnacji domowej. Cztery wizyty przywracają nawilżenie i widoczne odżywienie skóry.",
    visits: 4,
    durationMonths: 2,
    packagePrice: 1490,
    singlePrice: 1760,
    effectLabel: "Głębokie nawilżenie i regeneracja",
    visitPlan: [
      { number: 1, title: "Diagnoza + oczyszczanie wodorowe", note: "Analiza nawilżenia skóry i delikatne oczyszczenie bez naruszania bariery hydrolipidowej." },
      { number: 2, title: "Mezoterapia mikroigłowa (kwas hialuronowy)", note: "Głębokie nawodnienie skóry. Możliwe drobne zaczerwienienie utrzymujące się kilka godzin." },
      { number: 3, title: "Zabieg bankietowy + maska biocelulozowa", note: "Natychmiastowy efekt „glow”. Bez okresu rekonwalescencji — idealny przed ważnym wydarzeniem." },
      { number: 4, title: "Kontrola + biostymulacja LED", note: "Sprawdzamy poziom nawilżenia i utrwalamy efekt światłem LED." },
    ],
    forWhoYes: [
      "Twoja skóra jest odwodniona, matowa i pozbawiona blasku.",
      "Czujesz ściągnięcie i szorstkość mimo pielęgnacji domowej.",
      "Potrzebujesz szybkiej regeneracji przed ważnym wydarzeniem.",
    ],
    forWhoNo: [
      "Masz aktywne zmiany zapalne wymagające innego podejścia.",
      "Szukasz redukcji zmarszczek lub przebarwień — to inne programy.",
    ],
    faq: [
      {
        question: "Czy 4 wizyty wystarczą przy mocno odwodnionej skórze?",
        answer: "Dla większości klientek tak — program jest zaprojektowany progresywnie. Jeśli potrzeba więcej, zaproponuję kontynuację po diagnozie kontrolnej.",
      },
      {
        question: "Czy mogę zrobić program przed ślubem lub innym ważnym wydarzeniem?",
        answer: "Tak, to jeden z częstszych powodów wyboru tego programu — ostatnia wizyta daje natychmiastowy, widoczny efekt.",
      },
      {
        question: "Czy zabiegi mają okres rekonwalescencji?",
        answer: "Nie, wszystkie zabiegi w tym programie pozwalają wrócić do codziennych aktywności od razu.",
      },
    ],
  },
  {
    slug: "rowny-koloryt",
    name: "Równy koloryt",
    forWhom: "Przebarwienia, poszarzenie",
    intro:
      "Ten program jest dla Ciebie, jeśli zmagasz się z przebarwieniami posłonecznymi lub potrądzikowymi oraz poszarzeniem skóry. Pięć wizyt stopniowo wyrównuje koloryt i przywraca blask.",
    visits: 5,
    durationMonths: 3,
    packagePrice: 2190,
    singlePrice: 2590,
    effectLabel: "Wyrównanie kolorytu skóry",
    visitPlan: [
      { number: 1, title: "Diagnoza + analiza przebarwień lampą Wooda", note: "Mapujemy przebarwienia i dobieramy stężenia kwasów do typu skóry." },
      { number: 2, title: "Peeling migdałowy", note: "Pierwsze rozjaśnienie skóry. Możliwe delikatne złuszczanie przez 2–3 dni." },
      { number: 3, title: "Peeling azelainowo-witaminowy", note: "Wyrównanie kolorytu. Możliwe zaczerwienienie utrzymujące się do 24h." },
      { number: 4, title: "Mezoterapia mikroigłowa z kwasem traneksamowym", note: "Celowana redukcja przebarwień. Skóra wrażliwa 1–2 dni, obowiązkowy SPF 50." },
      { number: 5, title: "Kontrola efektów + zabieg rozświetlający", note: "Oceniamy postęp i utrwalamy efekt zabiegiem rozświetlającym." },
    ],
    forWhoYes: [
      "Masz przebarwienia posłoneczne lub potrądzikowe.",
      "Twoja skóra jest poszarzała i traci blask.",
      "Jesteś gotowa na rygorystyczną ochronę SPF w trakcie programu.",
    ],
    forWhoNo: [
      "Jesteś w ciąży lub karmisz piersią — część kwasów jest przeciwwskazana.",
      "Nie możesz zagwarantować codziennego SPF 50 przez czas trwania programu.",
    ],
    faq: [
      {
        question: "Po jakim czasie widać rozjaśnienie przebarwień?",
        answer: "Pierwsze efekty zwykle po 2.–3. wizycie, pełny efekt po zakończeniu programu i miesiącu pielęgnacji podtrzymującej.",
      },
      {
        question: "Czy muszę używać kremu z SPF codziennie?",
        answer: "Tak, to warunek konieczny — bez ochrony przeciwsłonecznej przebarwienia mogą wrócić lub się pogłębić.",
      },
      {
        question: "Czy program jest bezpieczny przy skórze wrażliwej?",
        answer: "Stężenia kwasów dobieram indywidualnie po diagnozie; przy bardzo wrażliwej skórze zaczynamy łagodniej.",
      },
    ],
  },
  {
    slug: "napiecie-i-kontur",
    name: "Napięcie i kontur",
    forWhom: "Utrata jędrności, owal twarzy",
    intro:
      "Ten program jest dla Ciebie, jeśli zauważasz utratę jędrności skóry i zmianę owalu twarzy. Sześć wizyt łączy RF mikroigłową i HIFU, dając efekt liftingujący bez ingerencji chirurgicznej.",
    visits: 6,
    durationMonths: 4,
    packagePrice: 3490,
    singlePrice: 4080,
    effectLabel: "Poprawa napięcia i owalu twarzy",
    visitPlan: [
      { number: 1, title: "Diagnoza + analiza gęstości skóry", note: "Ocena elastyczności skóry i planowanie stref zabiegowych." },
      { number: 2, title: "RF mikroigłowa — seria 1", note: "Stymulacja produkcji kolagenu. Możliwe zaczerwienienie i lekki obrzęk do 48h." },
      { number: 3, title: "HIFU — dolna strefa twarzy", note: "Modelowanie owalu. Skóra może być wrażliwa na dotyk przez 2–3 dni." },
      { number: 4, title: "RF mikroigłowa — seria 2", note: "Kontynuacja stymulacji kolagenowej, efekt narasta stopniowo." },
      { number: 5, title: "Mezoterapia mikroigłowa z peptydami", note: "Wzmocnienie napięcia skóry, minimalny okres rekonwalescencji." },
      { number: 6, title: "Kontrola efektów + HIFU — strefa środkowa", note: "Domykamy program i oceniamy poprawę owalu twarzy." },
    ],
    forWhoYes: [
      "Zauważasz utratę jędrności i zmianę owalu twarzy.",
      "Szukasz efektu liftingującego bez ingerencji chirurgicznej.",
      "Jesteś gotowa na program rozłożony na kilka miesięcy.",
    ],
    forWhoNo: [
      "Masz metalowe implanty w strefie zabiegowej lub rozrusznik serca.",
      "Oczekujesz efektu porównywalnego z chirurgicznym liftingiem.",
    ],
    faq: [
      {
        question: "Kiedy widać pierwsze efekty liftingujące?",
        answer: "Kolagen buduje się stopniowo — pierwsze efekty po 4–6 tygodniach od zabiegów RF/HIFU, pełny efekt pod koniec programu.",
      },
      {
        question: "Czy zabiegi HIFU i RF można łączyć?",
        answer: "Tak, program celowo je łączy — RF przygotowuje skórę i wspiera efekt HIFU, dlatego trwa dłużej niż pozostałe programy.",
      },
      {
        question: "Jak często trzeba powtarzać program?",
        answer: "Efekt utrzymuje się zwykle 12–18 miesięcy, potem można rozważyć pojedynczą wizytę przypominającą.",
      },
    ],
  },
  {
    slug: "protokol-halicka",
    name: "Protokół Halicka",
    forWhom: "Autorski program łączony, po diagnozie",
    intro:
      "Ten program jest dla Ciebie, jeśli Twoja skóra wymaga połączenia kilku podejść z różnych programów. Plan wizyt i wycenę ustalam indywidualnie, dopiero po diagnozie.",
    visits: null,
    durationMonths: null,
    packagePrice: null,
    singlePrice: null,
    effectLabel: "Efekt indywidualny — zależny od dobranych zabiegów",
    visitPlan: [],
    forWhoYes: [
      "Twoja skóra wymaga połączenia kilku podejść z różnych programów.",
      "Miałaś już diagnozę i chcesz zabieg dopasowany na miarę.",
    ],
    forWhoNo: [
      "Dopiero zaczynasz i nie miałaś jeszcze diagnozy — zacznij od niej.",
    ],
    faq: [
      {
        question: "Skąd wiadomo, ile będzie kosztować mój protokół?",
        answer: "Wycenę i plan wizyt otrzymujesz po diagnozie — dopiero wtedy znam Twoją skórę na tyle, by zaproponować konkretne zabiegi.",
      },
      {
        question: "Czy mogę zacząć od razu od Protokołu Halicka, bez diagnozy?",
        answer: "Nie — to jedyny sposób, żeby program rzeczywiście odpowiadał Twojej skórze, a nie był zgadywanką.",
      },
      {
        question: "Czym różni się to od zwykłego programu?",
        answer: "Łączę elementy różnych programów w jeden, dopasowany plan, zamiast trzymać się jednego gotowego schematu.",
      },
    ],
  },
];

export function formatPrice(value: number): string {
  return `${value.toLocaleString("pl-PL")} zł`;
}
