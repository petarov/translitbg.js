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
 
// addresses some speed issues with IE 
function StringBuffer() {
    this.buffer = [];
}
 
StringBuffer.prototype.append = function append(string) {
    this.buffer.push(string);
    return this;
};
 
StringBuffer.prototype.toString = function toString() {
    return this.buffer.join("");
}; 
 
var TranslitBGModes = {
    STREAMLINED : {     // Streamlined System
        cyr: ['а', 'б', 'в', 'г', 'д', 'е', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 
        'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 
        'ь', 'ю', 'я'],
        lat: ['a', 'b', 'v', 'g', 'd', 'e', 'zh', 'z', 'i', 'y', 'k', 'l', 'm', 
        'n', 'o', 'p', 'r', 's', 't', 'u', 'f', 'h', 'ts', 'ch', 'sh', 'sht', 
        'a', 'y', 'yu', 'ya']
        },
    BDS_ISO9_2001 : 1,  // БДС ISO 9:2001
    DANCHEV : 2         // система „Данчев-Холмън-Димова-Савова“
    };

function translitBG(type) {
    this.mode = TranslitBGModes.STREAMLINED;
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
            }
        }
        
        if (!found) {
            result.append(char);
        }
    }
    
    return result.toString();
}



