translitbg.js
=================

Transliterates Bulgarian to Latin characters.

Javascript транслитерация на българските букви с латински (наречена още латинска транслитерация или латинизация/романизация на българския език).

# Usage

Use in a **node.js** module:

```javascript
var translitbg = require('translitbg');
var trans = translitbg.create();
var result = trans.in('абвгдежзийклмнопрстуфхцчшщъьюя').go();
// result: abvgdezhziyklmnoprstufhtschshshtayyuya
```

Use in a web page:

```html
<script type="text/javascript" src="dist/translitbg.js"></script>
<script>
    var trans = translitbg.create();
    var result = trans.in('абвгдежзийклмнопрстуфхцчшщъьюя').go();
    // result: abvgdezhziyklmnoprstufhtschshshtayyuya
</script>
```

# Development

Run `npm install` to setup dependencies.

Run `npm test` to run unit tests.

# References

* [Bulgarian Transliteration law](http://bg.wikisource.org/wiki/%D0%97%D0%B0%D0%BA%D0%BE%D0%BD_%D0%B7%D0%B0_%D1%82%D1%80%D0%B0%D0%BD%D1%81%D0%BB%D0%B8%D1%82%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F%D1%82%D0%B0)
* [Additional information](http://bg.wikipedia.org/wiki/%D0%A2%D1%80%D0%B0%D0%BD%D1%81%D0%BB%D0%B8%D1%82%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_%D0%BD%D0%B0_%D0%B1%D1%8A%D0%BB%D0%B3%D0%B0%D1%80%D1%81%D0%BA%D0%B8%D1%82%D0%B5_%D0%B1%D1%83%D0%BA%D0%B2%D0%B8_%D1%81_%D0%BB%D0%B0%D1%82%D0%B8%D0%BD%D1%81%D0%BA%D0%B8)
