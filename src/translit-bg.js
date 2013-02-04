/*
 *
 * translit-bg JavaScript Transliteration Library v0.0.1
 * https://github.com/petarov/translit-bg.js
 *
 * Copyright 2013 Petar Petrov and other contributors
 * Released under the MIT license
 * https://github.com/petarov/translit-bg.js/blob/master/LICENSE
 */
 
var TranslitBGModes = {
    
    // Обтекаема система - http://bit.ly/14spk2M
    // Обратимост: Възстановяването на оригиналната дума не е водещ принцип!
    STREAMLINED : {     
        tokens : {      
//            'дж' : 'dzh',
//            'дз' : 'dz',
//            'ьо' : 'yo',
//            'йо' : 'yo',
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
            'Ц' : 'Ts',  // TODO: upper or lower case ?
            'Ч' : 'Ch', 
            'Ш' : 'SH', 
            'Щ' : 'Sht', 
            'Ъ' : 'A', 
            'Ь' : 'Y', 
            'Ю' : 'Yu', 
            'Я' : 'Ya'
            },
        lat2cyr: {
         
            },
        },
        
    // TODO: БДС ISO 9:2001 
    BDS_ISO9_2001 : {}, 
    
    // TODO: система „Данчев-Холмън-Димова-Савова“
    DANCHEV : {},        
}

function translitBG() {
    this.setForward(TranslitBGModes.STREAMLINED);
}

translitBG.prototype.setForward = function(type) {
    this.mode = type;
}

translitBG.prototype.setReverse = function(type) {
    throw "Not supported!"; 
}

/*
 * Transliterate Cyrillic to Latin characters 
 */
translitBG.prototype.transliterate = function(text) {
    var result = new StringBuffer();
    var array = text.split('');
//    var prev = null;
    
    for (var i = 0; i < array.length; i++) {
        var cur = array[i];
        var next = array[i + 1];
        
        if (next !== undefined) {
            var curToken = cur + next;
            
            if (this.mode.tokens.ia[curToken] !== undefined) {
                var nextNext = array[i + 2];
                if (nextNext === undefined || /^[-\s]$/.test(nextNext)) {
                    result.append(this.mode.tokens.ia[curToken]);
                    i++;
                    continue;
                }
            }
        }
        
        if (this.mode.cyr2lat[cur] !== undefined) {
            result.append(this.mode.cyr2lat[cur]);
        } else {
            result.append(cur);
        }
        
//        prev = cur;
    }
    
    return result.toString();
}

/*
 * Reverse-transliteration: Latin to Cyrillic characters 
 */
translitBG.prototype.reverse = function(text) {
    throw "Not supported!"; 
}

