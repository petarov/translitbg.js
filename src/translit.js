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
 
var TranslitMode = {
    none : 0,
    cyr2lat : 1,
    lat2cyr : 2,
};

var translitJS = {
    
    create: function (mode) {
        switch(mode) {
            case TranslitMode.cyr2lat:
                return new translitBG();
                break;
            case TranslitMode.lat2cyr:
                return new translitBG();
                break;
            // invalid
            case TranslitMode.none:
            default:
                break;
        }
        
        throw "Invalid (" + mode + ") transliteration mode!";
    }
} 

// Addresses some speed issues with IE 
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

StringBuffer.prototype.toArray = function() {
    return this.buffer;
}
