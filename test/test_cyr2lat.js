/**
 * Cyrillic to Latin Tests
 */
var expect = require("chai").expect;
var assert = require("chai").assert;
var translitbg = require("../src/translitbg.js");

describe("Cyr2Lat", function() {

  /*
   * Test 01 - Alphabet
   */
  it("tests alphabet", function() {
    var translit = translitbg.create();
    var input = "абвгдежзийклмнопрстуфхцчшщъьюя";
    var expected = "abvgdezhziyklmnoprstufhtschshshtayyuya";
    var result = translit.in(input).go();
    assert.equal(result, expected);
  });

  /*
   * Test 02 - Paragraph
   */
  it("tests paragraphs", function() {
    var translit = translitbg.create();
    var input = "Всички хора се раждат свободни и равни по достойнство и права."
        + "Те са надарени с разум и съвест и следва да се отнасят помежду си в дух на братство.";
    var expected = "Vsichki hora se razhdat svobodni i ravni po dostoynstvo i prava." +
        "Te sa nadareni s razum i savest i sledva da se otnasyat pomezhdu si v duh na bratstvo.";
    var result = translit.in(input).go();
    assert.equal(result, expected);
  });

  /*
   * Test 03 - Човешки Имена
   */
  it("tests people names", function() {
    var translit = translitbg.create();
    assert.equal(translit.in('Самуил').go(), 'Samuil');
    assert.equal(translit.in('Синтия').go(), 'Sintia');
    assert.equal(translit.in('Марияна ИваноВа').go(), 'Mariyana IvanoVa');
    assert.equal(translit.in('Явор').go(), 'Yavor');
  });

  /*
   * Test 04 - Имена
   */
  it("tests things names", function() {
    var translit = translitbg.create();
    assert.equal(translit.in('Стара планина').go(), 'Stara planina');
    assert.equal(translit.in('Атанасовско езеро').go(), 'Atanasovsko ezero');
    assert.equal(translit.in('Централен Балкан').go(), 'Tsentralen Balkan');
    assert.equal(translit.in('София-юг').go(), 'Sofia-yug');
    assert.equal(translit.in('СофИя-юг').go(), 'SofIa-yug');
    assert.equal(translit.in('СофиЯ-юг').go(), 'SofiA-yug');
    assert.equal(translit.in('СофИЯ-ЮГ').go(), 'SofIA-YuG');
    assert.equal(translit.in('Перник-север').go(), 'Pernik-sever');
    assert.equal(translit.in('Златни пясъци').go(), 'Zlatni pyasatsi');
    assert.equal(translit.in('Горна Оряховица').go(), 'Gorna Oryahovitsa');
  });

});
