/*
 * translitbg - Bulgarian to Latin characters transliteration.
 *
 * @version v1.2.0
 * @link https://github.com/petarov/translitbg.js#readme
 * @license MIT License
 * @author github.com/petarov
 */
(function(){"use strict";var t=this,n=t.translitbg,i={go:function(t){return function(t,n){for(var i=[],s=t.split(""),r=0;r<s.length;r++){var e=s[r],o=s[r+1];if(o){var a=e+o;if(n.tokens.ia[a]){var u=s[r+2];if(!u||/^[-\s]$/.test(u)){i.push(n.tokens.ia[a]),r++;continue}}}n.cyr2lat[e]?i.push(n.cyr2lat[e]):i.push(e)}return i.join("")}(t,s.STREAMLINED)},noConflict:function(){return t.translitbg=n,this}},s={STREAMLINED:{tokens:{ia:{"ия":"ia","Ия":"Ia","иЯ":"iA","ИЯ":"IA"}},cyr2lat:{"а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","ѝ":"i","й":"y","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"ts","ч":"ch","ш":"sh","щ":"sht","ъ":"a","ь":"y","ю":"yu","я":"ya","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Ѝ":"I","Й":"Y","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"Ts","Ч":"Ch","Ш":"SH","Щ":"Sht","Ъ":"A","Ь":"Y","Ю":"Yu","Я":"Ya"}}};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=i),exports.translitbg=i):t.translitbg=i}).call(this);