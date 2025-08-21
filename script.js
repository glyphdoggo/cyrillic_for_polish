const EXCEPTIONS_RU = {
  wrocław: "вроцлавь",
  tiara: "тиара",
  radio: "радио",
  dieta: "диета",
  diesel: "дизэль", // дизель?
  ariel: "ариэль",
  diament: "диамент",
  dialekt: "диалект",
  diametr: "диаметр",
  diaspora: "диаспора",
  zamarzać: "замарзать",
  mierzić: "мерзить",
  murzasichle: "мурзасихле",
  erzac: "эрзац",
  tarzan: "тарзан",

  mafia: "мафия", // мафиа, мафйа
  mafie: "мафие", // мафиэ, мафйэ
  mafiom: "мафиём",   // мафиом, мафйом
  mafię: "мафиѩ", // мафиѧ, мафйѧ
  mafią: "мафиѭ", // мафиѫ, мафйѫ
  mafiami: "мафиями", // мафиами, мафйами
  mafiach: "мафиях",  // мафиах, мафйах
  mafio: "мафиё", // мафио, мафйо

  magia: "магия", // магиа, магйа
  magie: "магие", // магиэ, магйэ
  magiom: "магиём",   // магиом, магйом
  magię: "магиѩ", // магиѧ, магйѧ
  magią: "магиѭ", // магиѫ, магйѫ
  magiami: "магиями", // магиами, магйами
  magiach: "магиях",  // магиах, магйах
  magio: "магиё", // магио, магйо

  mania: "мания", // маниа, манйа
  manie: "мание", // маниэ, манйэ
  maniom: "маниём",   // маниом, манйом
  manię: "маниѩ", // маниѧ, манйѧ
  manią: "маниѭ", // маниѫ, манйѫ
  maniami: "маниями", // маниами, манйами
  maniach: "маниях",  // маниах, манйах
  manio: "маниё", // манио, манйо

  diabeł: "диабэл",
  diabły: "диаблы",
  diabli: "диабли",
  diabła: "диабла",
  diabłów: "диаблу̊в",
  diabłu: "диаблу",
  diabłom: "диаблом",
  diabłem: "диаблэм",
  diabłami: "диаблами",
  diable: "диабле",
  diabłach: "диаблах",
};

const EXCEPTIONS_UA = {
  wrocław: "вроцлавь",
  tiara: "тіара",
  radio: "радіо",
  dieta: "дієта",
  diesel: "дизель",
  ariel: "аріель",
  diament: "діамент",
  dialekt: "діалєкт",
  diametr: "діаметр",
  diaspora: "діаспора",
  zamarzać: "замарзать",
  mierzić: "мєрзіть",
  murzasichle: "мурзасіхлє",
  erzac: "ерзац",
  tarzan: "тарзан",

  // mafia: "мафія", // мафіа, мафйа
  // mafii: "мафії", // мафіи, мафйи
  // mafij: "мафій",
  // mafie: "мафіє", // мафіе, мафйе
  // mafiom: "мафіом",   // мафіом, мафйом
  // mafię: "мафіѩ", // мафіѧ, мафйѧ
  // mafią: "мафіѭ", // мафіѫ, мафйѫ
  // mafiami: "мафіямі", // мафіамі, мафйамі
  // mafiach: "мафіях",  // мафіах, мафйах
  // mafio: "мафіо", // мафіо, мафйо
  
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
};

const vowelMappingsHardRussian = {a:"а", e:"э", i:"и", y:"ы", o:"о", ó:"у̊", u:"у", ą:"ѫ", ę:"ѧ"
};
const vowelMappingsSoftRussian = {a:"я", e:"е", i:"и", y:"и", o:"ё", ó:"ю̊", u:"ю", ą:"ѭ", ę:"ѩ"
};

const vowelMappingsHardUkrainian = {a:"а", e:"е", i:"і", y:"и", o:"о", ó:"ӧ", u:"у", ą:"ѫ", ę:"ѧ"
};
const vowelMappingsSoftUkrainian = {a:"я", e:"є", i:"і", y:"і", o:"ьо", ó:"ьӧ", u:"ю", ą:"ѭ", ę:"ѩ"
};

const consonantMappingsRussian = {
  b:"б", c:"ц", ć:"т", d:"д", f:"ф", g:"г", h:"х", j:"й", k:"к", l:"л", ł:"л", m:"м", n:"н", ń:"н", p:"п", q:"к", r:"р", s:"с", ś:"с", t:"т", v:"в", w:"в", x:"кс", z:"з", ź:"з", ż:"ж",
  ch:"х", cz:"ч", dz:"ѕ", dź:"д", rz:"р", sz:"ш",
  śl:"сл", śm:"см", śn:"сн", śr:"ср", św:"св", źdź:"зд", źr:"зр",
  szcz:"щ",
  ia:"я", ią:"ѭ", ie:"е", ię:"ѩ", io:"ё", ió:"ю̊", iu:"ю",
  ja:"я", ją:"ѭ", je:"е", ję:"ѩ", ji:"и", jo:"ё", jó:"ю̊", ju:"ю"
};

const consonantMappingsUkrainian = {
  b:"б", c:"ц", ć:"т", d:"д", f:"ф", g:"ґ", h:"г", j:"й", k:"к", l:"л", ł:"л", m:"м", n:"н", ń:"н", p:"п", q:"к", r:"р", s:"с", ś:"с", t:"т", v:"в", w:"в", x:"кс", z:"з", ź:"з", ż:"ж",
  ch:"х", cz:"ч", dz:"ѕ", dź:"д", rz:"р", sz:"ш",
  śl:"сл", śm:"см", śn:"сн", śr:"ср", św:"св", źdź:"зд", źr:"зр",
  szcz:"щ",
  ia:"я", ią:"ѭ", ie:"є", ię:"ѩ", ii:"ї", io:"ьо", ió:"ю̊", iu:"ю",
  ja:"я", ją:"ѭ", je:"є", ję:"ѩ", ji:"і", jo:"ьо", jó:"ю̊", ju:"ю"
};

const palatalizingConsonants = ["dź","l","rz","ć","ń","ś","śl","śm","śn","śr","św","ź","źdź","źr"];

const softVowels = ["ia","ią","ie","ię","io","ió","iu"];

function getSelectedOrthography() {
  const el = document.querySelector('input[name="orthography"]:checked');
  return el ? el.value : "russian";
}

function transcribe() {
  const orth = getSelectedOrthography();

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
          nonSoftSignFollowers
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
    nonSoftSignFollowers
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
        // } else if (chunk === "d" && softVowels.includes(nextTwo)) {
        //   mapped = (orth === "russian") ? "ди" : "ді";
        // } else if (chunk === "t" && softVowels.includes(nextTwo)) {
        //   mapped = (orth === "russian") ? "ти" : "ті";
        // } else if (chunk === "r" && softVowels.includes(nextTwo)) {
        //   mapped = (orth === "russian") ? "ри" : "рі";
        } else if (chunk === "dź" && nextTwo === "ci") {
          mapped = "дь";
        } else if (chunk === "rz" && nextTwo === "ci") {
          mapped = "рь";
        } else {
          mapped = consonantMappings[chunk];
        }

        if (palatalizingConsonants.includes(chunk)) {
          if (!nonSoftSignFollowers.has(nextChar) && nextTwo !== "ci" && nextThree !== "dzi") {
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
        ["e", "i", "y"].includes(current) &&
        ["c", "cz", "dz", "sz", "szcz", "ż"].includes(prevCons)
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

  return result;
}
document.querySelectorAll('input[name="orthography"]').forEach(r => {
  .addEventListener('change', transcribe);
});
