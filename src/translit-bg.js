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
        cyr: ['а', 'б', 'в', 'г', 'д', 'е', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 
        'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 
        'ь', 'ю', 'я'],
        
        cyrBig: [],
        
        lat: ['a', 'b', 'v', 'g', 'd', 'e', 'zh', 'z', 'i', 'y', 'k', 'l', 'm', 
        'n', 'o', 'p', 'r', 's', 't', 'u', 'f', 'h', 'ts', 'ch', 'sh', 'sht', 
        'a', 'y', 'yu', 'ya'],
        
        latBig: [],
        },
        
    BDS_ISO9_2001 : {},  // БДС ISO 9:2001
    DANCHEV : {}         // система „Данчев-Холмън-Димова-Савова“
    };

function translitBG(type) {
    this.mode = TranslitBGModes.STREAMLINED;
    
    var upperCaseCyr = new StringBuffer();
    var upperCaseLat = new StringBuffer();
    
    for (var i = 0; i < this.mode.cyr.length; i++) {
        upperCaseCyr.append(this.mode.cyr[i].toUpperCase());
        upperCaseLat.append(this.mode.lat[i].toUpperCase());
    }
    
    this.mode.cyrBig = upperCaseCyr.toArray();
    this.mode.latBig = upperCaseLat.toArray();
}

translitBG.prototype.transliterate = function(text) {
    
    var result = new StringBuffer();
    var found = false;
    
    var array = text.split('');
    for (var i = 0; i < array.length; i++) {
        var char = array[i];
        found = false;
        
        for (var k = 0; k < this.mode.cyr.length; k++) {
            if (char == this.mode.cyr[k]) {
               // console.log("%s is %s - %s", char, this.mode.cyr[k], this.mode.lat[k]);
                result.append(this.mode.lat[k]);
                found = true;
                break;
            } else if (char == this.mode.cyrBig[k]) {
                result.append(this.mode.latBig[k]);
                found = true;
                break;
            }
        }
        
        if (!found) {
            result.append(char);
        }
    }
    
    return result.toString();
}



