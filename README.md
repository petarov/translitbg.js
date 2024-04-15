translitbg
=================

[![CircleCI][cci-image]][cci-url] [![npm version][npm-image]][npm-url]

[cci-url]: https://circleci.com/gh/petarov/translitbg.js
[cci-image]: https://circleci.com/gh/petarov/translitbg.js.svg?style=svg
[npm-url]: https://www.npmjs.com/package/translitbg
[npm-image]: https://img.shields.io/npm/v/translitbg.svg

Transliterates Bulgarian to Latin characters.

Транслитерация на българските букви с латински, наречена още латинска транслитерация или латинизация/романизация на българския език.

# Install

    npm install translitbg

or

    yarn add translitbg

# Usage

In node.js:

```javascript
const translitbg = require('translitbg');
translitbg.go('абвгдежзийклмнопрстуфхцчшщъьюя'); 
// abvgdezhziyklmnoprstufhtschshshtayyuya
```

In a web page:

```html
<script src="https://cdn.jsdelivr.net/npm/translitbg@1.3.1/build/translitbg.js"></script>
<script>
  translitbg.go('абвгдежзийклмнопрстуфхцчшщъьюя'); 
  // abvgdezhziyklmnoprstufhtschshshtayyuya
</script>
```

# Development

Run `yarn install` to install dependencies.

Run `yarn test` to run tests.

Run `yarn build` to create build.

# References

* [Закон за транслитерацията](http://bg.wikisource.org/wiki/%D0%97%D0%B0%D0%BA%D0%BE%D0%BD_%D0%B7%D0%B0_%D1%82%D1%80%D0%B0%D0%BD%D1%81%D0%BB%D0%B8%D1%82%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F%D1%82%D0%B0)
* [Транслитерация на българските букви с латински](http://bg.wikipedia.org/wiki/%D0%A2%D1%80%D0%B0%D0%BD%D1%81%D0%BB%D0%B8%D1%82%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_%D0%BD%D0%B0_%D0%B1%D1%8A%D0%BB%D0%B3%D0%B0%D1%80%D1%81%D0%BA%D0%B8%D1%82%D0%B5_%D0%B1%D1%83%D0%BA%D0%B2%D0%B8_%D1%81_%D0%BB%D0%B0%D1%82%D0%B8%D0%BD%D1%81%D0%BA%D0%B8)

# License

[MIT](LICENSE)
