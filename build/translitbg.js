/*
 * translitbg - Bulgarian to Latin characters transliteration.
 *
 * @version v1.0.3
 * @link https://github.com/petarov/translitbg.js#readme
 * @license MIT License
 * @author github.com/petarov
 */
(function(){"use strict";var t=this,i=t.translitbg,s={from:function(t){return new o(t).go()},noConflict:function(){return t.translitbg=i,this}},e={STREAMLINED:{tokens:{ia:{"ия":"ia","Ия":"Ia","иЯ":"iA","ИЯ":"IA"}},cyr2lat:{"а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"y","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"ts","ч":"ch","ш":"sh","щ":"sht","ъ":"a","ь":"y","ю":"yu","я":"ya","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"Y","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"Ts","Ч":"Ch","Ш":"SH","Щ":"Sht","Ъ":"A","Ь":"Y","Ю":"Yu","Я":"Ya"}}};function o(t){this._text=t,this._mode=e.STREAMLINED}o.prototype={go:function(){for(var t=[],i=this._text.split(""),s=0;s<i.length;s++){var e=i[s],o=i[s+1];if(o){var n=e+o;if(this._mode.tokens.ia[n]){var r=i[s+2];if(!r||/^[-\s]$/.test(r)){t.push(this._mode.tokens.ia[n]),s++;continue}}}this._mode.cyr2lat[e]?t.push(this._mode.cyr2lat[e]):t.push(e)}return t.join("")}},"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=s),exports.translitbg=s):t.translitbg=s}).call(this);