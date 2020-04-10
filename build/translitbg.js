/*
 * translitbg - Bulgarian to Latin characters transliteration.
 *
 * @version v1.1.0
 * @link https://github.com/petarov/translitbg.js#readme
 * @license MIT License
 * @author github.com/petarov
 */
(function(){"use strict";var t=this,n=t.translitbg,s={go:function(t){return function(t,n){for(var s=[],i=t.split(""),r=0;r<i.length;r++){var e=i[r],o=i[r+1];if(o){var a=e+o;if(n.tokens.ia[a]){var u=i[r+2];if(!u||/^[-\s]$/.test(u)){s.push(n.tokens.ia[a]),r++;continue}}}n.cyr2lat[e]?s.push(n.cyr2lat[e]):s.push(e)}return s.join("")}(t,i.STREAMLINED)},noConflict:function(){return t.translitbg=n,this}},i={STREAMLINED:{tokens:{ia:{"ия":"ia","Ия":"Ia","иЯ":"iA","ИЯ":"IA"}},cyr2lat:{"а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"y","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"ts","ч":"ch","ш":"sh","щ":"sht","ъ":"a","ь":"y","ю":"yu","я":"ya","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"Y","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"Ts","Ч":"Ch","Ш":"SH","Щ":"Sht","Ъ":"A","Ь":"Y","Ю":"Yu","Я":"Ya"}}};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=s),exports.translitbg=s):t.translitbg=s}).call(this);