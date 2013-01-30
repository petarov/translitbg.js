/*
 * The MIT License
 * 
 * Copyright (c) 2013 Petar Petrov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
 
var TranslitBGModes = {
    
    STREAMLINED : {     // Streamlined System
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
            'Ж' : 'ZH',
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
            'Ц' : 'TS', 
            'Ч' : 'CH', 
            'Ш' : 'SH', 
            'Щ' : 'SHT', 
            'Ъ' : 'A', 
            'Ь' : 'Y', 
            'Ю' : 'YU', 
            'Я' : 'YA'
            },
        lat2cyr: {
         
            },
        },
        
    BDS_ISO9_2001 : {}, // БДС ISO 9:2001
    
    DANCHEV : {},        // система „Данчев-Холмън-Димова-Савова“
}

function translitBG(type) {
    this.mode = TranslitBGModes.STREAMLINED;
}

translitBG.prototype.transliterate = function(text) {
    
    var result = new StringBuffer();
    
    var array = text.split('');
    for (var i = 0; i < array.length; i++) {
        var char = array[i];
        
        if (this.mode.cyr2lat[char] != null) {
            result.append(this.mode.cyr2lat[char]);
        } else {
            result.append(char);
        }
    }
    
    return result.toString();
}



