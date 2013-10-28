translitbg.js
=================

Transliterates Bulgarian to Latin characters. 

Javascript транслитерация на българските букви с латински (наречена още латинска транслитерация или латинизация/романизация на българския език).

# Requirements

  * jQuery 1.x
  * QUnit 1.x (only for tests)

# Usage

```html
<script type="text/javascript" src="src/translitbg.js"></script>
<script>
    // Cyrillic to Latin transliteration
    var trans = translitbg.create(translitbg.mode.cyr2lat);
    var input = "абвгдежзийклмнопрстуфхцчшщъьюя";
    var expected = "abvgdezhziyklmnoprstufhtschshshtayyuya";
    var result = trans.transliterate(input);
</script>
```
# Tests

Run `tests.html` to check for errors. 

# References

* [Bulgarian Transliteration law](http://bg.wikisource.org/wiki/%D0%97%D0%B0%D0%BA%D0%BE%D0%BD_%D0%B7%D0%B0_%D1%82%D1%80%D0%B0%D0%BD%D1%81%D0%BB%D0%B8%D1%82%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F%D1%82%D0%B0)
* [Additional information](http://bg.wikipedia.org/wiki/%D0%A2%D1%80%D0%B0%D0%BD%D1%81%D0%BB%D0%B8%D1%82%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_%D0%BD%D0%B0_%D0%B1%D1%8A%D0%BB%D0%B3%D0%B0%D1%80%D1%81%D0%BA%D0%B8%D1%82%D0%B5_%D0%B1%D1%83%D0%BA%D0%B2%D0%B8_%D1%81_%D0%BB%D0%B0%D1%82%D0%B8%D0%BD%D1%81%D0%BA%D0%B8) 
