/*
 *
 * translit-bg JavaScript Transliteration Library v0.0.1
 * https://github.com/petarov/translit-bg.js
 *
 * Copyright 2013 Petar Petrov and other contributors
 * Released under the MIT license
 * https://github.com/petarov/translit-bg.js/blob/master/LICENSE
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
