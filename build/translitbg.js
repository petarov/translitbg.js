/*
 * translitbg - Bulgarian to Latin characters transliteration.
 *
 * @version v1.3.1
 * @link https://github.com/petarov/translitbg.js#readme
 * @license MIT License
 * @author github.com/petarov
 */
!function(){"use strict";var t=this,n=t.translitbg,i={go:function(t){return function(t,n){for(var i=[],s=t.split(""),e=0;e<s.length;e++){var r=s[e],o=s[e+1];if(o){var a=r+o;if(n.tokens.ia[a]){o=s[e+2];if(!o||!/^\w+$/.test(o)){i.push(n.tokens.ia[a]),e++;continue}}}n.cyr2lat[r]?i.push(n.cyr2lat[r]):i.push(r)}return i.join("")}(t,s.STREAMLINED)},noConflict:function(){return t.translitbg=n,this}},s={STREAMLINED:{tokens:{ia:{"ия":"ia","Ия":"Ia","иЯ":"iA","ИЯ":"IA"}},cyr2lat:{"а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","ѝ":"i","й":"y","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"ts","ч":"ch","ш":"sh","щ":"sht","ъ":"a","ь":"y","ю":"yu","я":"ya","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Ѝ":"I","Й":"Y","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"Ts","Ч":"Ch","Ш":"Sh","Щ":"Sht","Ъ":"A","Ь":"Y","Ю":"Yu","Я":"Ya"}}};"undefined"!=typeof exports?(exports="undefined"!=typeof module&&module.exports?module.exports=i:exports).translitbg=i:t.translitbg=i}.call(this);