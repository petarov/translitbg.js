translit-bg.js
=================

Javascript lib that transliterates Bulgarian to Latin characters or vice versa. 

Javascript транслитерация на българските букви с латински (наречена още латинска транслитерация или латинизация/романизация на българския език).

# Usage

```javascript

<head>
    <script type="text/javascript" src="src/translit.js"></script>
    <script type="text/javascript" src="src/translit-bg.js"></script>

</head>
<body>

<script>
    // forward - Cyrillic to Latin transliteration
    var translit = translitJS.create(TranslitMode.cyr2lat);
    var input = "абвгдежзийклмнопрстуфхцчшщъьюя";
    var expected = "abvgdezhziyklmnoprstufhtschshshtayyuya";
    var result = translit.transliterate(input);
    
</script>

```
# Running Tests

Use the *run-tests.html* to test the behavior of the script. Make sure the following files are available in the *tests* folder:
* qunit-1.11.0.css
* qunit-1.11.0.js

# References

* [Bulgarian Transliteration law](http://bg.wikisource.org/wiki/%D0%97%D0%B0%D0%BA%D0%BE%D0%BD_%D0%B7%D0%B0_%D1%82%D1%80%D0%B0%D0%BD%D1%81%D0%BB%D0%B8%D1%82%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F%D1%82%D0%B0)
* [Additional information](http://bg.wikipedia.org/wiki/%D0%A2%D1%80%D0%B0%D0%BD%D1%81%D0%BB%D0%B8%D1%82%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_%D0%BD%D0%B0_%D0%B1%D1%8A%D0%BB%D0%B3%D0%B0%D1%80%D1%81%D0%BA%D0%B8%D1%82%D0%B5_%D0%B1%D1%83%D0%BA%D0%B2%D0%B8_%D1%81_%D0%BB%D0%B0%D1%82%D0%B8%D0%BD%D1%81%D0%BA%D0%B8) 