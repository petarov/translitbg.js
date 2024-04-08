(function() {
  "use strict";
  var root = this;
  var previous = root.translitbg;

  var translitbg = {
    go: function(text) {
      return transliterate(text, TranslitBGModes.STREAMLINED);
    },
    noConflict: function() {
      root.translitbg = previous;
      return this;
    }
  };

  var TranslitBGModes = {
    STREAMLINED : { // Възстановяването на оригиналната дума не е водещ принцип!
      tokens : {
        // 'дж' : 'dzh',
        // 'дз' : 'dz',
        // 'ьо' : 'yo',
        // 'йо' : 'yo',
        // Буквеното съчетание „ия“, когато е в края на думата, се изписва и предава чрез „ia“.
        ia : {
          'ия' : 'ia',
          'Ия' : 'Ia',
          'иЯ' : 'iA',
          'ИЯ' : 'IA',
        }
      },
      cyr2lat: {
        // lower case
        'а' : 'a',
        'б' : 'b',
        'в' : 'v',
        'г' : 'g',
        'д' : 'd',
        'е' : 'e',
        'ж' : 'zh',
        'з' : 'z',
        'и' : 'i',
        'ѝ' : 'i',
        'й' : 'y',
        'к' : 'k',
        'л' : 'l',
        'м' : 'm',
        'н' : 'n',
        'о' : 'o',
        'п' : 'p',
        'р' : 'r',
        'с' : 's',
        'т' : 't',
        'у' : 'u',
        'ф' : 'f',
        'х' : 'h',
        'ц' : 'ts',
        'ч' : 'ch',
        'ш' : 'sh',
        'щ' : 'sht',
        'ъ' : 'a',
        'ь' : 'y',
        'ю' : 'yu',
        'я' : 'ya',
        // upper case
        'А' : 'A',
        'Б' : 'B',
        'В' : 'V',
        'Г' : 'G',
        'Д' : 'D',
        'Е' : 'E',
        'Ж' : 'Zh',
        'З' : 'Z',
        'И' : 'I',
        'Ѝ' : 'I',
        'Й' : 'Y',
        'К' : 'K',
        'Л' : 'L',
        'М' : 'M',
        'Н' : 'N',
        'О' : 'O',
        'П' : 'P',
        'Р' : 'R',
        'С' : 'S',
        'Т' : 'T',
        'У' : 'U',
        'Ф' : 'F',
        'Х' : 'H',
        'Ц' : 'Ts',
        'Ч' : 'Ch',
        'Ш' : 'Sh',
        'Щ' : 'Sht',
        'Ъ' : 'A',
        'Ь' : 'Y',
        'Ю' : 'Yu',
        'Я' : 'Ya'
      }
    },
    // // TODO: БДС ISO 9:2001
    // BDS_ISO9_2001 : {},
    // // TODO: система „Данчев-Холмън-Димова-Савова“
    // DANCHEV : {},
  };

  function transliterate(text, mode) {
    var result = [];
    var chars = text.split('');

    for (var i = 0; i < chars.length; i++) {
      var cur = chars[i];
      var next = chars[i + 1];

      if (next) {
        var curToken = cur + next;

        if (mode.tokens.ia[curToken]) {
          var nextNext = chars[i + 2];
          if (!nextNext || !/^\w+$/.test(nextNext)) {
            result.push(mode.tokens.ia[curToken]);
            i++;
            continue;
          }
        }
      }

      if (mode.cyr2lat[cur]) {
        result.push(mode.cyr2lat[cur]);
      } else {
        result.push(cur);
      }
    }

    return result.join('');
  }

  /**
   * Exports
   */
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = translitbg;
    }
    exports.translitbg = translitbg;
  } else {
    root.translitbg = translitbg;
  }

}).call(this);
