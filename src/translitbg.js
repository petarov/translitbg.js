"use strict";

(function() {
  var root = this;
  var previous = root.translitbg;

  var translitbg = {
    /**
     * Transliteration modes
     */
    mode: {
      cyr2lat: 1,
      lat2cyr: 2,
    },

    /**
     * Create new transliteration object
     * @param  {Integer} mode Mode of operation
     */
    create: function(mode) {
      var m = mode || this.mode.cyr2lat;

      switch(m) {
        case this.mode.lat2cyr:
          throw 'Unsupported mode!';
        break;
        case this.mode.cyr2lat:
        default:
          return new translitBG();
        break;
      }
    },

    noConflict: function() {
      root.translitbg = previous;
      return self;
    }

  };

  /**
   * StringBuffer - uses an array to address some speed issues under IE
   */
  function StringBuffer() {
    this.buffer = [];
  }
  StringBuffer.prototype = {
    append: function append(string) {
      this.buffer.push(string);
      return this;
    },
    toString: function toString() {
      return this.buffer.join('');
    },
    toArray: function() {
      return this.buffer;
    }
  };

  var TranslitBGModes = {
    // Обтекаема система - http://bit.ly/14spk2M
    // Обратимост: Възстановяването на оригиналната дума не е водещ принцип!
    STREAMLINED : {
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
        'Ш' : 'SH',
        'Щ' : 'Sht',
        'Ъ' : 'A',
        'Ь' : 'Y',
        'Ю' : 'Yu',
        'Я' : 'Ya'
      },
      lat2cyr: {
        // TODO:
      },
    },

    // TODO: БДС ISO 9:2001
    BDS_ISO9_2001 : {},

    // TODO: система „Данчев-Холмън-Димова-Савова“
    DANCHEV : {},
  };

  function translitBG() {
    this.setForward(TranslitBGModes.STREAMLINED);
  }
  translitBG.prototype = {

    setForward: function(type) {
      this.mode = type;
    },

    setReverse: function(type) {
      throw 'Not implemented!';
    },
    /*
     * Transliterate Cyrillic to Latin characters
     */
    transliterate: function(text) {
      var result = new StringBuffer();
      var array = text.split('');
      // var prev = null;

      for (var i = 0; i < array.length; i++) {
        var cur = array[i];
        var next = array[i + 1];

        if (typeof next !== 'undefined') {
          var curToken = cur + next;

          if (this.mode.tokens.ia[curToken]) {
            var nextNext = array[i + 2];
            if (typeof nextNext === 'undefined' || /^[-\s]$/.test(nextNext)) {
              result.append(this.mode.tokens.ia[curToken]);
              i++;
              continue;
            }
          }
        }

        if (this.mode.cyr2lat[cur]) {
          result.append(this.mode.cyr2lat[cur]);
        } else {
          result.append(cur);
        }

        // prev = cur;
      }

      return result.toString();
    },
    /*
     * Reverse-transliteration: Latin to Cyrillic characters
     */
    reverse: function(text) {
      throw 'Not implemented!';
    }
  };

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
