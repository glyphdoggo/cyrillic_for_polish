const EXCEPTION_STEMS_RU = {
  radi: "ради",
  mafi: "мафи",
  magi: "маги",
  mani: "мани",
  chemi: "хэми",
  tarzan: "тарзан",
  erzac: "эрзац",
  murzasich: "мурзасих",
  dies: "диз",
  diab: "диаб",
  // diab: "дъяб",
  zamarza: "замарза",
  mierzi: "мерзи",
  podzamcz: "подзамч",
  podzb: "подзб",
  podzesp: "подзэсп",
  podziem: "подзем",
  podzwrot: "подзврот",
  podziérzgn: "поддерьгн",
  podzyg: "подзыг",
  ludzk: "людск",
};

const EXCEPTIONS_RU = Object.entries(EXCEPTION_STEMS_RU).map(([latin, cyrillic]) => ({
  regex: new RegExp("^" + latin + "(.*)$"),
  replace: (m, cfg) => cyrillic + (m[1] ? transliterateWord(m[1], cfg) : "")
}));

const EXCEPTION_STEMS_UA = {
  radi: "раді",
  mafi: "мафі",
  magi: "магі",
  mani: "мані",
  chemi: "хемі",
  tarzan: "тарзан",
  erzac: "ерзац",
  murzasich: "мурзасіх",
  dies: "диз",
  // diab: "діаб",
  zamarza: "замарза",
  mierzi: "мєрзі",
  podzamcz: "подзамч",
  podzb: "подзб",
  podzesp: "подзесп",
  podziem: "подзєм",
  podzwrot: "подзврот",
  podziérzgn: "поддєрьґн",
  podzyg: "подзиґ",
  ludzk: "людск",
};

const EXCEPTIONS_UA = Object.entries(EXCEPTION_STEMS_UA).map(([latin, cyrillic]) => ({
  regex: new RegExp("^" + latin + "(.*)$"),
  replace: (m, cfg) => cyrillic + (m[1] ? transliterateWord(m[1], cfg) : "")
}));

const vowelMappingsHardRussian = {a:"а", e:"э", i:"и", y:"ы", o:"о", ó:"у", // ó:"у́", ó:"у̊",
                                  u:"у", ą:"ѫ", ę:"ѧ"
};
const vowelMappingsSoftRussian = {a:"я", e:"е", i:"и", y:"и", o:"ё", ó:"ю", // ó:"ю́", ó:"ю̊",
                                  u:"ю", ą:"ѭ", ę:"ѩ"
};

const vowelMappingsHardUkrainian = {a:"а", ą:"ѫ", e:"е", ę:"ѧ", i:"і", y:"и", o:"о", ó:"у", // ó:"ӧ", ó:"о́",
                                    u:"у"
};
const vowelMappingsSoftUkrainian = {a:"я", ą:"ѭ", e:"є", ę:"ѩ", i:"і", y:"і", o:"ьо", ó:"ю", // ó:"ьӧ", ó:"ьо́",
                                    u:"ю"
};

const consonantMappingsRussian = {
  b:"б", c:"ц", ć:"т", d:"д", f:"ф", g:"г", h:"х", j:"й", k:"к", l:"л", ł:"л", m:"м", n:"н", ń:"н", p:"п", q:"к", r:"р", s:"с", ś:"с", t:"т", v:"в", w:"в", x:"кс", z:"з", ź:"з", ż:"ж",
  ch:"х", cz:"ч", dz:"ѕ", dź:"д", rz:"р", sz:"ш",
  śr:"ср", źr:"зр",
  ph:"ф",
  szcz:"щ",
  czcz:"тщ",
  ia:"я", ią:"ѭ", ie:"е", ię:"ѩ", io:"ё", iu:"ю", ió:"ю", // ió:"ю́", ió:"ю̊",
  ja:"я", ją:"ѭ", je:"е", ję:"ѩ", ji:"и", jo:"ё", ju:"ю", jó:"ю", // jó:"ю́", jó:"ю̊",
};

const consonantMappingsUkrainian = {
  b:"б", c:"ц", ć:"т", d:"д", f:"ф", g:"ґ", h:"г", j:"й", k:"к", l:"л", ł:"л", m:"м", n:"н", ń:"н", p:"п", q:"к", r:"р", s:"с", ś:"с", t:"т", v:"в", w:"в", x:"кс", z:"з", ź:"з", ż:"ж",
  ch:"х", cz:"ч", dz:"ѕ", dź:"д", rz:"р", sz:"ш",
  śr:"ср", źr:"зр",
  ph:"ф",
  szcz:"щ",
  czcz:"тщ",
  ia:"я", ią:"ѭ", ie:"є", ię:"ѩ", ii:"ї", io:"ьо", iu:"ю", ió:"ю", // ió:"ьо́", ió:"ьӧ",
  ja:"я", ją:"ѭ", je:"є", ję:"ѩ", ji:"і", jo:"ьо", ju:"ю", jó:"ю", // jó:"ьо́", jó:"ьӧ",
};

const palatalizingConsonants = ["dź","l","rz","ć","ń","ś","ź","śr","źr"];

const softVowels = ["ia","ią","ie","ię","io","ió","iu"];

const specialPrevConsonants = ["c", "cz", "dz", "sz", "szcz", "ż", "czcz"];

// List of dictionary forms that require a final ь
const addSoftSignWords = new Set([
  "brew", "brzoskiew", "bukiew", "cerkiew", "chorągiew", "cietrzew", "czerw", "jątrew", "kotew", "krew", "marchew", "mątew", "nów", "rzodkiew", "wiećw", "wrocław", "zełw", "żełw", "żółw",
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

function applyExceptions(wordLower, cfg, rules) {
  // 1) regex rules (ordered)
  for (const rule of rules) {
    const match = wordLower.match(rule.regex);
    if (match) {
      // rule.replace can be a function that returns a mapped string
      return rule.replace(match, cfg);
    }
  }

  return null; // no exception
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

      const cfg = {
        vowelMappingsHard,
        vowelMappingsSoft,
        consonantMappings,
        palatalizingConsonants,
        nonSoftSignFollowers,
        isRussian,
        specialPrevConsonants
      };

      const exceptionResult = applyExceptions(lower, cfg, EXCEPTIONS);
      if (exceptionResult) {
        out += matchWordCase(tok, exceptionResult);
      } else {
        out += transliterateWord(tok, cfg);
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

        if (["ł","n","s","z"].includes(chunk) && nextChar === "j") {
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
