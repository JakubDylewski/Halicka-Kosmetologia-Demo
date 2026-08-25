// Karta Twojej Skóry — dane pytań i logika dopasowania (sekcja 15 specyfikacji).
// Cała logika działa lokalnie w przeglądarce (bez backendu, bez localStorage —
// stan tylko w pamięci JS na czas sesji strony).

export type QuestionType = "single" | "multi" | "slider";

export interface QuizOption {
  value: string;
  label: string;
}

export interface QuizQuestion {
  id: "p1" | "p2" | "p3" | "p4" | "p5" | "p6" | "p7";
  number: number;
  question: string;
  subtitle?: string;
  type: QuestionType;
  /** Tylko dla type "multi". */
  maxSelections?: number;
  options: QuizOption[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "p1",
    number: 1,
    type: "single",
    question: "Która skóra jest najbliższa Twojej?",
    options: [
      { value: "t-strefa", label: "Świeci się na czole i nosie, policzki normalne" },
      { value: "cala-twarz", label: "Świeci się na całej twarzy" },
      { value: "sciaga", label: "Ściąga, bywa szorstka" },
      { value: "reaguje", label: "Reaguje zaczerwienieniem na wszystko" },
      { value: "trudno-powiedziec", label: "Trudno powiedzieć" },
    ],
  },
  {
    id: "p2",
    number: 2,
    type: "multi",
    maxSelections: 2,
    question: "Co niepokoi Cię najbardziej?",
    subtitle: "Wybierz maksymalnie 2 odpowiedzi.",
    options: [
      { value: "niedoskonalosci", label: "Niedoskonałości i zaskórniki" },
      { value: "przebarwienia", label: "Przebarwienia, nierówny koloryt" },
      { value: "jedrnosc", label: "Utrata jędrności, owal" },
      { value: "zmarszczki", label: "Zmarszczki" },
      { value: "szara-cera", label: "Szara, zmęczona cera" },
      { value: "pory", label: "Rozszerzone pory" },
      { value: "naczynka", label: "Zaczerwienienia, naczynka" },
      { value: "odwodnienie", label: "Odwodnienie, ściąganie" },
    ],
  },
  {
    id: "p3",
    number: 3,
    type: "slider",
    question: "Jak Twoja skóra zachowuje się 2 godziny po umyciu?",
    options: [
      { value: "bardzo-sciaga", label: "Bardzo ściąga" },
      { value: "lekko-sciaga", label: "Lekko ściąga" },
      { value: "w-porzadku", label: "W porządku" },
      { value: "lekko-swieci", label: "Lekko się świeci" },
      { value: "wyraznie-swieci", label: "Wyraźnie się świeci" },
    ],
  },
  {
    id: "p4",
    number: 4,
    type: "single",
    question: "Ile masz lat?",
    subtitle: "Wiek zmienia priorytety pielęgnacji — nie oceniamy, dobieramy.",
    options: [
      { value: "do-25", label: "do 25" },
      { value: "26-35", label: "26–35" },
      { value: "36-45", label: "36–45" },
      { value: "46-55", label: "46–55" },
      { value: "56-plus", label: "56+" },
    ],
  },
  {
    id: "p5",
    number: 5,
    type: "single",
    question: "Jak dbasz o skórę dzisiaj?",
    options: [
      { value: "bez-systemu", label: "Woda i krem, bez systemu" },
      { value: "bez-planu", label: "Mam kosmetyki, ale bez planu" },
      { value: "ustalona", label: "Mam ustaloną pielęgnację" },
      { value: "zabiegi", label: "Byłam już na zabiegach w gabinecie" },
    ],
  },
  {
    id: "p6",
    number: 6,
    type: "single",
    question: "Czy używasz filtra SPF na co dzień?",
    options: [
      { value: "codziennie", label: "Codziennie, cały rok" },
      { value: "tylko-latem", label: "Tylko latem" },
      { value: "rzadko", label: "Rzadko lub wcale" },
    ],
  },
  {
    id: "p7",
    number: 7,
    type: "single",
    question: "Ile czasu realnie możesz poświęcić?",
    options: [
      { value: "systematycznie", label: "Chcę systematycznie, mogę co 2–3 tygodnie" },
      { value: "raz-w-miesiacu", label: "Raz w miesiącu" },
      { value: "rzadziej", label: "Rzadziej, ale chcę efekt" },
      { value: "nie-wiem", label: "Nie wiem, potrzebuję rady" },
    ],
  },
];

export interface QuizAnswers {
  p1?: string;
  p2: string[];
  p3?: number;
  p4?: string;
  p5?: string;
  p6?: string;
  p7?: string;
}

export type SkinType = "mieszana" | "tłusta" | "sucha" | "wrażliwa" | "normalna";
export type SkinCondition = "odwodniona" | "z tendencją do przebarwień" | "z osłabioną barierą" | "dojrzała";

export type ProgramSlug =
  | "skora-pod-kontrola"
  | "odbudowa"
  | "rowny-koloryt"
  | "napiecie-i-kontur"
  | "protokol-halicka";

export interface Priority {
  title: string;
  reason: string;
}

export interface QuizResult {
  skinType: SkinType;
  condition: SkinCondition;
  profileLabel: string;
  profileExplanation: string;
  priorities: [Priority, Priority, Priority];
  avoid: string[];
  programSlug: ProgramSlug;
  programExplanation?: string;
  homeCare: [string, string, string];
  seasonality: string;
}

// --- Krok 1: typ skóry (P1 + P3) ---------------------------------------

function determineSkinType(answers: QuizAnswers): SkinType {
  switch (answers.p1) {
    case "t-strefa":
      return "mieszana";
    case "cala-twarz":
      return "tłusta";
    case "sciaga":
      return "sucha";
    case "reaguje":
      return "wrażliwa";
    default: {
      // "trudno-powiedziec" albo brak odpowiedzi — doprecyzuj suwakiem (P3).
      const p3 = answers.p3 ?? 2;
      if (p3 <= 1) return "sucha";
      if (p3 >= 3) return "tłusta";
      return "normalna";
    }
  }
}

// --- Krok 2: stan dodatkowy (P2 + P3 + P6) ------------------------------

function determineCondition(answers: QuizAnswers): SkinCondition {
  const p2 = answers.p2;
  // Odwodniona jest stanem dominującym — sprawdzana jako pierwsza.
  if (p2.includes("odwodnienie") || (answers.p3 ?? 2) <= 1) return "odwodniona";
  if (p2.includes("przebarwienia")) return "z tendencją do przebarwień";
  if (p2.includes("naczynka") || answers.p1 === "reaguje") return "z osłabioną barierą";
  if (p2.includes("jedrnosc") || p2.includes("zmarszczki") || answers.p4 === "46-55" || answers.p4 === "56-plus") {
    return "dojrzała";
  }
  // Fallback zgodny ze spec: odwodnienie jako stan domyślny/dominujący.
  return "odwodniona";
}

const skinTypeSentence: Record<SkinType, string> = {
  mieszana: "Twoja skóra jest mieszana — świeci się w strefie T, a policzki zwykle zostają w normie.",
  tłusta: "Twoja skóra jest tłusta — produkuje więcej sebum niż przeciętna, dlatego świeci się na całej twarzy.",
  sucha: "Twoja skóra jest sucha — ściąga i bywa szorstka, bo brakuje jej naturalnej warstwy lipidowej.",
  wrażliwa: "Twoja skóra jest wrażliwa — reaguje zaczerwienieniem na bodźce, które inne typy skóry ignorują.",
  normalna: "Twoja skóra jest zrównoważona — bez jednego dominującego problemu, ale wciąż warto ją regularnie obserwować.",
};

const conditionSentence: Record<SkinCondition, string> = {
  odwodniona: "Do tego brakuje jej wody — stąd uczucie ściągania i matowy wygląd mimo pielęgnacji.",
  "z tendencją do przebarwień": "Do tego widać już pierwsze przebarwienia lub nierówny koloryt skóry.",
  "z osłabioną barierą": "Do tego bariera hydrolipidowa jest osłabiona, więc łatwiej o podrażnienia.",
  dojrzała: "Do tego traci jędrność — to naturalny etap, na który warto zareagować teraz.",
};

// --- Krok 4: dopasowanie programu (punktacja) ---------------------------

function scoreProgram(answers: QuizAnswers): { slug: ProgramSlug; conflict: boolean } {
  const p2 = answers.p2;
  const scores: Record<Exclude<ProgramSlug, "protokol-halicka">, number> = {
    "skora-pod-kontrola": 0,
    odbudowa: 0,
    "rowny-koloryt": 0,
    "napiecie-i-kontur": 0,
  };

  if (p2.includes("niedoskonalosci")) scores["skora-pod-kontrola"] += 2;
  if (p2.includes("pory")) scores["skora-pod-kontrola"] += 1;

  if (p2.includes("odwodnienie")) scores["odbudowa"] += 2;
  if (p2.includes("szara-cera")) scores["odbudowa"] += 1;
  if ((answers.p3 ?? 2) === 0) scores["odbudowa"] += 2;

  if (p2.includes("przebarwienia")) scores["rowny-koloryt"] += answers.p6 === "rzadko" ? 4 : 2;

  if (p2.includes("jedrnosc")) scores["napiecie-i-kontur"] += 2;
  if (p2.includes("zmarszczki")) scores["napiecie-i-kontur"] += 1;
  if (answers.p4 === "46-55" || answers.p4 === "56-plus") scores["napiecie-i-kontur"] += 1;

  const entries = Object.entries(scores) as [Exclude<ProgramSlug, "protokol-halicka">, number][];
  entries.sort((a, b) => b[1] - a[1]);
  const [topSlug, topScore] = entries[0];
  const [, secondScore] = entries[1];

  const conflict = answers.p7 === "nie-wiem" || (topScore > 0 && secondScore > 0 && topScore - secondScore <= 1);

  if (topScore === 0 || conflict) {
    return { slug: "protokol-halicka", conflict: topScore > 0 && conflict };
  }

  return { slug: topSlug, conflict: false };
}

// --- Krok 5: trzy priorytety — nawodnienie/bariera ZAWSZE przed kwasami --

const priorityTemplates: Record<ProgramSlug, [Priority, Priority, Priority]> = {
  "skora-pod-kontrola": [
    {
      title: "Nawodnienie i odbudowa bariery",
      reason: "Zanim zaczniemy regulować pracę gruczołów łojowych, skóra musi mieć stabilną barierę — inaczej zabiegi ją podrażnią.",
    },
    {
      title: "Redukcja niedoskonałości i zaskórników",
      reason: "Systematyczne oczyszczanie i mezoterapia regulują pracę porów bez przesuszania skóry.",
    },
    {
      title: "Wyrównanie tekstury — dopiero po 01 i 02",
      reason: "Peelingi o wyższym stężeniu mają sens, gdy bariera nie jest już podrażniona.",
    },
  ],
  odbudowa: [
    {
      title: "Nawodnienie i odbudowa bariery hydrolipidowej",
      reason: "To główny cel tego programu — bez tego kroku żaden kolejny zabieg nie da trwałego efektu.",
    },
    {
      title: "Regeneracja i ujędrnienie",
      reason: "Gdy skóra jest już nawodniona, można wspierać jej odnowę i elastyczność.",
    },
    {
      title: "Praca nad blaskiem — dopiero po 01 i 02",
      reason: "Zabiegi rozświetlające mają sens, gdy skóra przestała być odwodniona.",
    },
  ],
  "rowny-koloryt": [
    {
      title: "Nawodnienie i odbudowa bariery",
      reason: "Osłabiona bariera reaguje przebarwieniami na kwasy — najpierw ją stabilizujemy.",
    },
    {
      title: "Wyrównanie kolorytu",
      reason: "Redukcja przebarwień kwasami dobranymi do Twojej skóry, stopniowo, bez podrażnień.",
    },
    {
      title: "Praca nad jędrnością — dopiero po 01 i 02",
      reason: "Zabiegi liftingujące odkładamy, aż koloryt się ustabilizuje.",
    },
  ],
  "napiecie-i-kontur": [
    {
      title: "Nawodnienie i odbudowa bariery",
      reason: "Skóra dobrze nawodniona lepiej reaguje na stymulację kolagenu.",
    },
    {
      title: "Stymulacja jędrności i owalu",
      reason: "RF mikroigłowa i HIFU dają trwalszy efekt na wcześniej przygotowanej skórze.",
    },
    {
      title: "Praca nad kolorytem — dopiero po 01 i 02",
      reason: "Rozjaśnianie odkładamy, aż napięcie skóry się poprawi.",
    },
  ],
  "protokol-halicka": [
    {
      title: "Nawodnienie i odbudowa bariery",
      reason: "To zawsze pierwszy krok, niezależnie od tego, w którą stronę pójdzie dalszy plan.",
    },
    {
      title: "Diagnoza kierunku programu",
      reason: "Twoje potrzeby idą w kilku kierunkach naraz — dopiero diagnoza pozwoli ułożyć kolejność zabiegów.",
    },
    {
      title: "Plan indywidualny — po pierwszej wizycie",
      reason: "Reszta priorytetów ustali się wspólnie z Niną, po analizie skóry aparatem.",
    },
  ],
};

function buildPriorities(programSlug: ProgramSlug, answers: QuizAnswers): [Priority, Priority, Priority] {
  const template = priorityTemplates[programSlug];
  if (answers.p6 === "rzadko") {
    // Reguła stała: przy SPF = rzadko/wcale, ochrona przeciwsłoneczna jest
    // priorytetem nr 1 i warunkiem sensu dalszych zabiegów.
    return [
      {
        title: "Ochrona SPF",
        reason: "Bez codziennego filtra dalsze kroki nie mają sensu — przebarwienia i podrażnienia będą wracać.",
      },
      template[0],
      template[1],
    ];
  }
  return template;
}

// --- Czego jeszcze nie robić ---------------------------------------------

const avoidTemplates: Record<ProgramSlug, string> = {
  "skora-pod-kontrola": "Nie sięgaj po mocne peelingi domowe — mogą nasilić stan zapalny zamiast go uspokoić.",
  odbudowa: "Nie zaczynaj od mocnych kwasów przy osłabionej barierze — pogorszysz stan zamiast go poprawić.",
  "rowny-koloryt": "Nie łącz w domu kilku aktywnych kwasów naraz — zwiększysz ryzyko podrażnienia i nowych przebarwień.",
  "napiecie-i-kontur": "Nie oczekuj efektu po jednym zabiegu — kolagen buduje się tygodniami, nie dniami.",
  "protokol-halicka": "Nie zaczynaj samodzielnie mocnych zabiegów domowych, zanim nie ustalimy wspólnego kierunku.",
};

// --- Co możesz zrobić od jutra (wg stanu dodatkowego) ---------------------

const homeCareTemplates: Record<SkinCondition, [string, string, string]> = {
  odwodniona: [
    "Myj twarz letnią, nie gorącą wodą — gorąca dodatkowo wysusza barierę.",
    "Nakładaj krem na wilgotną skórę, żeby zamknąć w niej wodę.",
    "Pij regularnie wodę w ciągu dnia — to najprostszy, darmowy nawyk.",
  ],
  "z tendencją do przebarwień": [
    "SPF 30+ codziennie, także zimą i w pochmurne dni.",
    "Unikaj słońca w największym natężeniu (11:00–15:00), jeśli to możliwe.",
    "Nie dotykaj i nie drap przebarwień — to je utrwala.",
  ],
  "z osłabioną barierą": [
    "Ogranicz liczbę kosmetyków do niezbędnego minimum na kilka tygodni.",
    "Wybieraj produkty bez alkoholu i intensywnych zapachów.",
    "Unikaj gorącej wody i intensywnego pocierania ręcznikiem.",
  ],
  dojrzała: [
    "Śpij na czystej poszewce i zmieniaj ją co kilka dni.",
    "Rób regularnie delikatny masaż twarzy — poprawia mikrokrążenie.",
    "Nie zapominaj o szyi i dekolcie w codziennej pielęgnacji.",
  ],
};

// --- Właściwy moment (sezonowość wg programu) -----------------------------

const seasonalityTemplates: Record<ProgramSlug, string> = {
  "skora-pod-kontrola": "Ten program możesz zacząć w każdej porze roku — regularność ma tu większe znaczenie niż sezon.",
  odbudowa:
    "Nawilżenie sprawdza się przez cały rok, ale jesień i zima, gdy skóra jest bardziej przesuszona, to naturalny moment na start.",
  "rowny-koloryt":
    "Jesień i zima to najlepszy moment na start — mniej słońca oznacza mniejsze ryzyko nowych przebarwień w trakcie programu.",
  "napiecie-i-kontur": "Ten program możesz zacząć w dowolnym momencie — efekt buduje się tygodniami niezależnie od pory roku.",
  "protokol-halicka": "Moment startu ustalimy wspólnie na diagnozie, dopasowany do zabiegów, które wejdą w Twój plan.",
};

export const HONESTY_CLOSING =
  "To analiza wstępna na podstawie Twoich odpowiedzi. Prawdziwą diagnozę wykonuję osobiście, w gabinecie, z analizą aparatem — dopiero wtedy układamy plan. Jeśli okaże się, że Twoja skóra potrzebuje dermatologa, powiem to wprost.";

export function computeResult(answers: QuizAnswers): QuizResult {
  const skinType = determineSkinType(answers);
  const condition = determineCondition(answers);
  const { slug: programSlug, conflict } = scoreProgram(answers);

  const avoid = [avoidTemplates[programSlug]];
  if (answers.p6 === "rzadko" && programSlug !== "protokol-halicka") {
    avoid.push("Nie zaczynaj zabiegów rozjaśniających czy złuszczających bez codziennego SPF — efekt szybko zniknie.");
  }

  return {
    skinType,
    condition,
    profileLabel: `Skóra ${skinType}, ${condition}`,
    profileExplanation: `${skinTypeSentence[skinType]} ${conditionSentence[condition]}`,
    priorities: buildPriorities(programSlug, answers),
    avoid,
    programSlug,
    programExplanation: conflict
      ? "Twoje potrzeby idą w dwóch kierunkach naraz — tu trzeba ułożyć plan indywidualnie."
      : undefined,
    homeCare: homeCareTemplates[condition],
    seasonality: seasonalityTemplates[programSlug],
  };
}
