(function () {
  "use strict";

  var root = this;
  var translitbg = {
    default: function (text) {
      return transliterate(text, S);
    }
  };

  // STREAMLINED: Обтекаема система: Възстановяването на оригиналната дума не е водещ принцип
  var S_ALPHABET_UC = {
    'А': 'A',
    'Б': 'B',
    'В': 'V',
    'Г': 'G',
    'Д': 'D',
    'Е': 'E',
    'Ж': 'Zh',
    'З': 'Z',
    'И': 'I',
    'Ѝ': 'I',
    'Й': 'Y',
    'К': 'K',
    'Л': 'L',
    'М': 'M',
    'Н': 'N',
    'О': 'O',
    'П': 'P',
    'Р': 'R',
    'С': 'S',
    'Т': 'T',
    'У': 'U',
    'Ф': 'F',
    'Х': 'H',
    'Ц': 'Ts',
    'Ч': 'Ch',
    'Ш': 'Sh',
    'Щ': 'Sht',
    'Ъ': 'A',
    'Ь': 'Y',
    'Ю': 'Yu',
    'Я': 'Ya'
  };


  var S = {
    // --- chars
    c: {
      // lower case
      'а': 'a',
      'б': 'b',
      'в': 'v',
      'г': 'g',
      'д': 'd',
      'е': 'e',
      'ж': 'zh',
      'з': 'z',
      'и': 'i',
      'ѝ': 'i',
      'й': 'y',
      'к': 'k',
      'л': 'l',
      'м': 'm',
      'н': 'n',
      'о': 'o',
      'п': 'p',
      'р': 'r',
      'с': 's',
      'т': 't',
      'у': 'u',
      'ф': 'f',
      'х': 'h',
      'ц': 'ts',
      'ч': 'ch',
      'ш': 'sh',
      'щ': 'sht',
      'ъ': 'a',
      'ь': 'y',
      'ю': 'yu',
      'я': 'ya',
      // upper case
      // see merge for-each loop below
    },
    // --- tokens
    // Буквеното съчетание „ия“, когато е в края на думата, се изписва и предава чрез „ia“
    t: {
      'ия': 'ia',
      'Ия': 'Ia',
      'иЯ': 'iA',
      'ИЯ': 'IA',
    },
    // --- uppercase combos
    // Индекс на съчетанията произхождащи само от главни букви
    ucc: {
      'Ж': 'ZH',
      'Ц': 'TS',
      'Ч': 'CH',
      'Ш': 'SH',
      'Щ': 'SHT',
      'Ю': 'YU',
      'Я': 'YA',
    }
  };

  for (var k in S_ALPHABET_UC) {
    S.c[k] = S_ALPHABET_UC[k];
  }

  function transliterate(text, mode) {
    var result = [];
    var chars = text.split('');
    var ch_1;

    for (var i = 0; i < chars.length; i++) {
      var ch = chars[i];
      var found = mode.c[ch];

      if (found) {
        var ch2 = chars[i + 1];

        if (ch2) {
          var token = mode.t[ch + ch2];
          if (token) {
            var ch3 = chars[i + 2];
            if (!ch3 || !/^\w+$/.test(ch3)) {
              result.push(token);
              i++;
              ch_1 = ch3;
              continue;
            }
          }
        }

        var ucc = mode.ucc[ch];
        if (ucc && (!ch2 || S_ALPHABET_UC[ch2] || !mode.c[ch2] || mode.c[ch_1])) {
          result.push(ucc);
        } else {
          result.push(found);
        }
      } else {
        result.push(ch);
      }

      ch_1 = ch;
    }

    return result.join('');
  }

  if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = translitbg; // CommonJS2
  } else if (typeof exports === 'object') {
    exports.translitbg = translitbg; // CommonJS
  } else {
    root.translitbg = translitbg.default; // Window
  }
}).call(this);
