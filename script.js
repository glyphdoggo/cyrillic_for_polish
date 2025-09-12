const EXCEPTION_RULES_RU = [
  // diesel: "дизэль", // дизель?
  // murzasichle: "мурзасихле",
  // erzac: "эрзац",
  // tarzan: "тарзан",

  // mafia/magia/mania → irregular vowel treatment
  { regex: /^mafi(.*)$/, replace: (m) => "мафи" + transliterateEnding(m[1]) },
  { regex: /^magi(.*)$/, replace: (m) => "маги" + transliterateEnding(m[1]) },
  { regex: /^mani(.*)$/, replace: (m) => "мани" + transliterateEnding(m[1]) },

  // diabeł
  { regex: /^diab(.*)$/, replace: (m) => "диаб" + transliterateEnding(m[1]) },

  // mierzić
  { regex: /^mierzi(.*)$/, replace: (m) => "мерзи" + transliterateEnding(m[1]) },

  // podzamcz-
  { regex: /^podzamcz(.*)$/, replace: (m) => "подзамч" + transliterateEnding(m[1]) },

  // podzbior-
  { regex: /^podzbior(.*)$/, replace: (m) => "подзбёр" + transliterateEnding(m[1]) },

  // podzespoł-
  { regex: /^podzespo(ł.*)$/, replace: (m) => "подзэспол" + transliterateEnding(m[1]) },

  // podziem-
  { regex: /^podziem(.*)$/, replace: (m) => "подзем" + transliterateEnding(m[1]) },

  // podzwrotnikow-
  { regex: /^podzwrotnikow(.*)$/, replace: (m) => "подзвротников" + transliterateEnding(m[1]) },

  // podziérzgn-
  { regex: /^podziérzgn(.*)$/, replace: (m) => "поддерьгн" + transliterateEnding(m[1]) },

  // podzyg-
  { regex: /^podzyg(.*)$/, replace: (m) => "подзыг" + transliterateEnding(m[1]) },
];

const EXCEPTIONS_UA = {
  radio: "радіо",
  diesel: "дизель",
  murzasichle: "мурзасіхлє",
  erzac: "ерзац",
  tarzan: "тарзан",

  diabeł: "диябел", // діа-
  diabły: "диябли", // діа-
  diabli: "дияблі", // діа-
  diabła: "диябла", // діа-
  diabłów: "дияблӧв", // діа-
  diabłu: "дияблу", // діа-
  diabłom: "дияблом", // діа-
  diabłem: "дияблем", // діа-
  diabłami: "диябламі", // діа-
  diable: "дияблє", // діа-
  diabłach: "дияблах", // діа-

  zamarzać: "замарзать",
  zamarzam: "замарзам",
  zamarzamy: "замарзами",
  zamarzasz: "замарзаш",
  zamarzacie: "замарзатє",
  zamarza: "замарза",
  zamarzają: "замарзаѭ",
  zamarzałem: "замарзалем",
  zamarzał: "замарзал",
  zamarzałam: "замарзалам",
  zamarzała: "замарзала",
  zamarzałom: "замарзалом",
  zamarzało: "замарзало",
  zamarzaliśmy: "замарзалісьми",
  zamarzali: "замарзалі",
  zamarzałyśmy: "замарзалисьми",
  zamarzały: "замарзали",
  zamarzałeś: "замарзалесь",
  zamarzałaś: "замарзалась",
  zamarzałoś: "замарзалось",
  zamarzaliście: "замарзалістє",
  zamarzałyście: "замарзалистє",
  zamarzano: "замарзано",
  zamarzałbym: "замарзалбим",
  zamarzałabym: "замарзалабим",
  zamarzałobym: "замарзалобим",
  zamarzalibyśmy: "замарзалібисьми",
  zamarzałybyśmy: "замарзалибисьми",
  zamarzałbyś: "замарзалбись",
  zamarzałabyś: "замарзалабись",
  zamarzałobyś: "замарзалобись",
  zamarzalibyście: "замарзалібистє",
  zamarzałybyście: "замарзалибистє",
  zamarzałby: "замарзалби",
  zamarzałaby: "замарзалаби",
  zamarzałoby: "замарзалоби",
  zamarzaliby: "замарзаліби",
  zamarzałyby: "замарзалиби",
  zamarzajmy: "замарзайми",
  zamarzaj: "замарзай",
  zamarzajcie: "замарзайтє",
  zamarzający: "замарзаѭци",
  zamarzająca: "замарзаѭца",
  zamarzające: "замарзаѭце",
  zamarzając: "замарзаѭц",
  zamarzanie: "замарзанє",

  mierzić: "мєрзіть",
  mierziły: "мєрзіли",
  mierzili: "мєрзілі",
  mierziło: "мєрзіло",
  mierziła: "мєрзіла",
  mierziłam: "мєрзілам",
  mierził: "мєрзіл",
  mierziłem: "мєрзілем",
  mierzi: "мєрзі",
  mierzimy: "мєрзіми",
  mierzisz: "мєрзіш",
  mierzicie: "мєрзітє",
  mierziłom: "мєрзілом",
  mierziliśmy: "мєрзілісьми",
  mierziłyśmy: "мєрзілисьми",
  mierziłeś: "мєрзілесь",
  mierziłaś: "мєрзілась",
  mierziłoś: "мєрзілось",
  mierziliście: "мєрзілістє",
  mierziłyście: "мєрзілистє",
  mierziłbym: "мєрзілбим",
  mierziłabym: "мєрзілабим",
  mierziłobym: "мєрзілобим",
  mierzilibyśmy: "мєрзілібисьми",
  mierziłybyśmy: "мєрзілибисьми",
  mierziłbyś: "мєрзілбись",
  mierziłabyś: "мєрзілабись",
  mierziłobyś: "мєрзілобись",
  mierzilibyście: "мєрзілібистє",
  mierziłybyście: "мєрзілибистє",
  mierziłby: "мєрзілби",
  mierziłaby: "мєрзілаби",
  mierziłoby: "мєрзілоби",
  mierziliby: "мєрзіліби",
  mierziłyby: "мєрзілиби",

  podzamcze: "подзамче",
  podzamcza: "подзамча",
  podzamczy: "подзамчи",
  podzamczu: "подзамчу",
  podzamczom: "подзамчом",
  podzamczem: "подзамчем",
  podzamczami: "подзамчамі",
  podzamczach: "подзамчах",

  podzbiór: "подзбьӧр",
  podzbiory: "подзбьори",
  podzbioru: "подзбьору",
  podzbiorów: "подзбьорӧв",
  podzbiorowi: "подзбьорові",
  podzbiorom: "подзбьором",
  podzbiorem: "подзбьорем",
  podzbiorami: "подзбьорамі",
  podzbiorze: "подзбьорє",
  podzbiorach: "подзбьорах",

  podzespół: "подзеспӧл",
  podzespoły: "подзесполи",
  podzespołu: "подзесполу",
  podzespołów: "подзесполӧв",
  podzespołowi: "подзесполові",
  podzespołom: "подзесполом",
  podzespołem: "подзесполем",
  podzespołami: "подзесполамі",
  podzespole: "подзесполє",
  podzespołach: "подзесполах",

  podziemie: "подзємє",
  podziemia: "подзємя",
  podziemi: "подзємі",
  podziemiu: "подзємю",
  podziemiom: "подзємьом",
  podziemiem: "подзємєм",
  podziemiami: "подзємямі",
  podziemiach: "подзємях",

  podziemny: "подзємни",
  podziemna: "подзємна",
  podziemne: "подзємне",
  podziemni: "подзємні",
  podziemnego: "подзємнеґо",
  podziemnej: "подзємней",
  podziemnych: "подзємних",
  podziemnemu: "подзємнему",
  podziemnym: "подзємним",
  podziemną: "подзємнѫ",
  podziemnymi: "подзємнимі",

  podzwrotnikowy: "подзвротнікови",
  podzwrotnikowa: "подзвротнікова",
  podzwrotnikowe: "подзвротнікове",
  podzwrotnikowi: "подзвротнікові",
  podzwrotnikowego: "подзвротніковеґо",
  podzwrotnikowej: "подзвротніковей",
  podzwrotnikowych: "подзвротнікових",
  podzwrotnikowemu: "подзвротніковему",
  podzwrotnikowym: "подзвротніковим",
  podzwrotnikową: "подзвротніковѫ",
  podzwrotnikowymi: "подзвротніковимі",

  podziérzgnąć: "поддєрьґнѫть",
  podziérzgnę: "поддєрьґнѧ",
  podziérzgniemy: "поддєрьґнєми",
  podziérzgniesz: "поддєрьґнєш",
  podziérzgniecie: "поддєрьґнєтє",
  podziérzgnie: "поддєрьґнє",
  podziérzgną: "поддєрьґнѫ",
  podziérzgnąłem: "поддєрьґнѫлем",
  podziérzgnął: "поддєрьґнѫл",
  podziérzgnęłam: "поддєрьґнѧлам",
  podziérzgnęła: "поддєрьґнѧла",
  podziérzgnęłom: "поддєрьґнѧлом",
  podziérzgnęło: "поддєрьґнѧло",
  podziérzgnęliśmy: "поддєрьґнѧлісьми",
  podziérzgnęli: "поддєрьґнѧлі",
  podziérzgnęłyśmy: "поддєрьґнѧлисьми",
  podziérzgnęły: "поддєрьґнѧли",
  podziérzgnąłeś: "поддєрьґнѫлесь",
  podziérzgnęłaś: "поддєрьґнѧлась",
  podziérzgnęłoś: "поддєрьґнѧлось",
  podziérzgnęliście: "поддєрьґнѧлістє",
  podziérzgnęłyście: "поддєрьґнѧлистє",
  podziérzgnięto: "поддєрьґнѩто",
  podziérzgnąłbym: "поддєрьґнѫлбим",
  podziérzgnęłabym: "поддєрьґнѧлабим",
  podziérzgnęłobym: "поддєрьґнѧлобим",
  podziérzgnęlibyśmy: "поддєрьґнѧлібисьми",
  podziérzgnęłybyśmy: "поддєрьґнѧлибисьми",
  podziérzgnąłbyś: "поддєрьґнѫлбись",
  podziérzgnęłabyś: "поддєрьґнѧлабись",
  podziérzgnęłobyś: "поддєрьґнѧлобись",
  podziérzgnęlibyście: "поддєрьґнѧлібистє",
  podziérzgnęłybyście: "поддєрьґнѧлибистє",
  podziérzgnąłby: "поддєрьґнѫлби",
  podziérzgnęłaby: "поддєрьґнѧлаби",
  podziérzgnęłoby: "поддєрьґнѧлоби",
  podziérzgnęliby: "поддєрьґнѧліби",
  podziérzgnęłyby: "поддєрьґнѧлиби",
  podziérzgnijmy: "поддєрьґнійми",
  podziérzgnij: "поддєрьґній",
  podziérzgnijcie: "поддєрьґнійтє",
  podziérzgnąwszy: "поддєрьґнѫвши",
  podziérzgnięcie: "поддєрьґнѩтє",

  podzygować: "подзиґовать",
  podzyguję: "подзиґуѩ",
  podzygujemy: "подзиґуєми",
  podzygujesz: "подзиґуєш",
  podzygujecie: "подзиґуєтє",
  podzyguje: "подзиґує",
  podzygują: "подзиґуѭ",
  podzygowałem: "подзиґовалем",
  podzygował: "подзиґовал",
  podzygowałam: "подзиґовалам",
  podzygowała: "подзиґовала",
  podzygowałom: "подзиґовалом",
  podzygowało: "подзиґовало",
  podzygowaliśmy: "подзиґовалісьми",
  podzygowali: "подзиґовалі",
  podzygowałyśmy: "подзиґовалисьми",
  podzygowały: "подзиґовали",
  podzygowałeś: "подзиґовалесь",
  podzygowałaś: "подзиґовалась",
  podzygowałoś: "подзиґовалось",
  podzygowaliście: "подзиґовалістє",
  podzygowałyście: "подзиґовалистє",
  podzygowano: "подзиґовано",
  podzygowałbym: "подзиґовалбим",
  podzygowałabym: "подзиґовалабим",
  podzygowałobym: "подзиґовалобим",
  podzygowalibyśmy: "подзиґовалібисьми",
  podzygowałybyśmy: "подзиґовалибисьми",
  podzygowałbyś: "подзиґовалбись",
  podzygowałabyś: "подзиґовалабись",
  podzygowałobyś: "подзиґовалобись",
  podzygowalibyście: "подзиґовалібистє",
  podzygowałybyście: "подзиґовалибистє",
  podzygowałby: "подзиґовалби",
  podzygowałaby: "подзиґовалаби",
  podzygowałoby: "подзиґовалоби",
  podzygowaliby: "подзиґоваліби",
  podzygowałyby: "подзиґовалиби",
  podzygujmy: "подзиґуйми",
  podzyguj: "подзиґуй",
  podzygujcie: "подзиґуйтє",
  podzygujący: "подзиґуѭци",
  podzygująca: "подзиґуѭца",
  podzygujące: "подзиґуѭце",
  podzygowany: "подзиґовани",
  podzygowana: "подзиґована",
  podzygowane: "подзиґоване",
  podzygowani: "подзиґовані",
  podzygując: "подзиґуѭц",
  podzygowanie: "подзиґованє",
};

const vowelMappingsHardRussian = {a:"а", e:"э", i:"и", y:"ы", o:"о", ó:"у́", // ó:"у̊",
                                  u:"у", ą:"ѫ", ę:"ѧ"
};
const vowelMappingsSoftRussian = {a:"я", e:"е", i:"и", y:"и", o:"ё", ó:"ю́", // ó:"ю̊",
                                  u:"ю", ą:"ѭ", ę:"ѩ"
};

const vowelMappingsHardUkrainian = {a:"а", ą:"ѫ", e:"е", ę:"ѧ", i:"і", y:"и", o:"о", ó:"о́", // ó:"ӧ",
                                    u:"у"
};
const vowelMappingsSoftUkrainian = {a:"я", ą:"ѭ", e:"є", ę:"ѩ", i:"і", y:"і", o:"ьо", ó:"ьо́", // ó:"ьӧ",
                                    u:"ю"
};

const consonantMappingsRussian = {
  b:"б", c:"ц", ć:"т", d:"д", f:"ф", g:"г", h:"х", j:"й", k:"к", l:"л", ł:"л", m:"м", n:"н", ń:"н", p:"п", q:"к", r:"р", s:"с", ś:"с", t:"т", v:"в", w:"в", x:"кс", z:"з", ź:"з", ż:"ж",
  ch:"х", cz:"ч", dz:"ѕ", dź:"д", rz:"р", sz:"ш",
  śr:"ср", źr:"зр",
  ph:"ф",
  szcz:"щ",
  czcz:"тщ",
  ia:"я", ią:"ѭ", ie:"е", ię:"ѩ", io:"ё", iu:"ю", ió:"ю́", // ió:"ю̊",
  ja:"я", ją:"ѭ", je:"е", ję:"ѩ", ji:"и", jo:"ё", ju:"ю", jó:"ю́", // jó:"ю̊",
};

const consonantMappingsUkrainian = {
  b:"б", c:"ц", ć:"т", d:"д", f:"ф", g:"ґ", h:"г", j:"й", k:"к", l:"л", ł:"л", m:"м", n:"н", ń:"н", p:"п", q:"к", r:"р", s:"с", ś:"с", t:"т", v:"в", w:"в", x:"кс", z:"з", ź:"з", ż:"ж",
  ch:"х", cz:"ч", dz:"ѕ", dź:"д", rz:"р", sz:"ш",
  śr:"ср", źr:"зр",
  ph:"ф",
  szcz:"щ",
  czcz:"тщ",
  ia:"я", ią:"ѭ", ie:"є", ię:"ѩ", ii:"ї", io:"ьо", iu:"ю", ió:"ьо́", // ió:"ьӧ",
  ja:"я", ją:"ѭ", je:"є", ję:"ѩ", ji:"і", jo:"ьо", ju:"ю", jó:"ьо́", // jó:"ьӧ",
};

const palatalizingConsonants = ["dź","l","rz","ć","ń","ś","ź","śr","źr"];

const softVowels = ["ia","ią","ie","ię","io","ió","iu"];

const specialPrevConsonants = ["c", "cz", "dz", "sz", "szcz", "ż", "czcz"];

// List of dictionary forms that require a final ь
const addSoftSignWords = new Set([
  "brew", "brzoskiew", "bukiew", "cerkiew", "chorągiew", "cietrzew", "czerw", "jątrew", "kotew", "krew", "marchew", "mątew", "nów", "nów", "rzodkiew", "wiećw", "wrocław", "zełw", "żełw", "żółw",
  "drób", "gołąb", "głąb", "kiełb", "źreb",
  "bluszcz", "dreszcz",
  "czarnoziem", "osiem", "ośm", "siedem", "ziem",
  "konop",
  "brocz", "cyc", "kokosz", "mysz", "młodzież", "plesz", "pustosz", "rozkosz", "wesz", "łeż", "łącz", // not sure about these
]);

function getSelectedOrthography() {
  const el = document.querySelector('input[name="orthography"]:checked');
  return el ? el.value : "russian";
}

function transcribe() {
  const orth = getSelectedOrthography();
  const isRussian = orth === "russian";

  const vowelMappingsHard = (orth === "russian") ? vowelMappingsHardRussian : vowelMappingsHardUkrainian;
  const vowelMappingsSoft = (orth === "russian") ? vowelMappingsSoftRussian : vowelMappingsSoftUkrainian;
  const consonantMappings = (orth === "russian") ? consonantMappingsRussian : consonantMappingsUkrainian;
  const EXCEPTIONS = (orth === "russian") ? EXCEPTIONS_RU : EXCEPTIONS_UA;

  const nonSoftSignFollowers = new Set([
    ...Object.keys(vowelMappingsHard),
    ...Object.keys(vowelMappingsSoft),
    ...palatalizingConsonants,
  ]);

  const inputEl = document.getElementById("input");
  const outputEl = document.getElementById("output");
  const text = inputEl.value;

  const tokens = text.match(/(\p{L}+|\P{L}+)/gu) || [];
  let out = "";

  for (const tok of tokens) {
    if (/^\p{L}+$/u.test(tok)) {
      const lower = tok.toLowerCase();
      if (EXCEPTIONS[lower]) {
        out += matchWordCase(tok, EXCEPTIONS[lower]);
      } else {
        out += transliterateWord(tok, {
          vowelMappingsHard,
          vowelMappingsSoft,
          consonantMappings,
          palatalizingConsonants,
          nonSoftSignFollowers,
          isRussian,
          specialPrevConsonants
        });
      }
    } else {
      out += tok;
    }
  }

  outputEl.value = out;
}

function matchWordCase(original, mapped) {
  if (original === original.toUpperCase()) return mapped.toUpperCase();
  const title = original[0].toUpperCase() + original.slice(1).toLowerCase();
  if (original === title) return mapped[0].toUpperCase() + mapped.slice(1);
  return mapped;
}

function matchCase(outputStr, originalChar) {
  return (originalChar === originalChar.toUpperCase())
    ? outputStr.toUpperCase()
    : outputStr;
}

function transliterateWord(word, cfg) {
  const {
    vowelMappingsHard,
    vowelMappingsSoft,
    consonantMappings,
    palatalizingConsonants,
    nonSoftSignFollowers,
    isRussian,
    specialPrevConsonants
  } = cfg;

  let result = "";
  let i = 0;
  let prevCons = "";

  while (i < word.length) {
    let matched = false;

    for (const length of [4,3,2,1]) {
      const chunkOrig = word.slice(i, i + length);
      const chunk = chunkOrig.toLowerCase();

      const nextChar = (i + length < word.length) ? word[i + length].toLowerCase() : "";
      const nextTwo = word.slice(i + length, i + length + 2).toLowerCase();
      const nextThree = word.slice(i + length, i + length + 3).toLowerCase();

      if (consonantMappings[chunk]) {
        let mapped;

        if (chunk === "c" && nextChar === "i") {
          mapped = "т";
        } else if (chunk === "dz" && nextChar === "i") {
          mapped = "д";

        } else if (chunk === "d" && softVowels.includes(nextTwo)) {
          mapped = (isRussian) ? "ды" : "ди"; // ди/ді?
        } else if (chunk === "t" && softVowels.includes(nextTwo)) {
          mapped = (isRussian) ? "ты" : "ти"; // ти/ті?
        } else if (chunk === "r" && softVowels.includes(nextTwo)) {
          mapped = (isRussian) ? "ры" : "ри"; // ри/рі?

        } else {
          mapped = consonantMappings[chunk];
        }

        // Palatalization logic for ś, ź in clusters... and more ь insertion
        if (chunk === "ś" || chunk === "ź") {
          if (i + length >= word.length) {
            // Word-final ś or ź → always add ь
            mapped += "ь";
          } else {
            const nextIsSoftVowel = ["i","j"].includes(nextChar);
            const nextFollowedBySoft = (nextTwo.length === 2 && ["i","j"].includes(nextTwo[1]));

            // Check for special soft clusters after ś/ź: dź, dzi, rz
            let nextClusterIsSoft = false;
            const nextCluster = word.slice(i + length, i + length + 3).toLowerCase();
            if (
              nextCluster.startsWith("dź") ||
              nextCluster.startsWith("dzi") ||
              nextCluster.startsWith("rz")
            ) {
              nextClusterIsSoft = true;
            }

            if (
              !nextIsSoftVowel &&
              !nonSoftSignFollowers.has(nextChar) &&
              !nextFollowedBySoft &&
              !nextClusterIsSoft
            ) {
              mapped += "ь";
            }
          }

          result += matchCase(mapped, chunkOrig[0]);
          prevCons = chunk;
          i += length;
          matched = true;
          break;

          if (
            nextChar && // there is a next character
            !["i","j"].includes(nextChar) && // next char is not a soft vowel
            !nonSoftSignFollowers.has(nextChar) && // and it's not in non-soft followers
            !(nextTwo.length === 2 && ["i","j"].includes(nextTwo[1])) && // next consonant followed by i/j
            !nextClusterIsSoft // not part of a soft cluster
          ) {
            mapped += "ь";
          }
        } else if (palatalizingConsonants.includes(chunk)) {
          // Normal palatalization logic
          if (!nonSoftSignFollowers.has(nextChar)) {
            mapped += "ь";
          }
        }

        if (["n","s","z"].includes(chunk) && nextChar === "j") {
          mapped += "ъ";
        }

        result += matchCase(mapped, chunkOrig[0]);
        prevCons = chunk;
        i += length;
        matched = true;
        break;
      }
    }

    if (matched) continue;

    const originalChar = word[i];
    const current = originalChar.toLowerCase();

    if (vowelMappingsHard[current]) {
      let mapped;

      if (
        prevCons &&
        palatalizingConsonants.includes(prevCons)
      ) {
        mapped = vowelMappingsSoft[current];
      } else if (
        isRussian &&  // apply this only in Russian mode
        ["e", "i", "y"].includes(current) &&
        specialPrevConsonants.includes(prevCons)
      ) {
        mapped = vowelMappingsSoft[current];
      } else {
        mapped = vowelMappingsHard[current];
      }

      result += matchCase(mapped, originalChar);
      prevCons = "";
      i += 1;
      continue;
    }

    result += originalChar;
    prevCons = "";
    i += 1;
  }

  // Add final soft sign
  if (addSoftSignWords.has(word.toLowerCase())) {
    const lastChar = word[word.length - 1];
    if (lastChar === lastChar.toUpperCase()) {
      result += "Ь";
    } else {
      result += "ь";
    }
  }

  return result;
}
document.querySelectorAll('input[name="orthography"]').forEach(r => {
  r.addEventListener('change', transcribe);
});
