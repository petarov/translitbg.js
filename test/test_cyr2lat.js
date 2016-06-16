/**
 * Cyrillic to Latin Tests
 */
var expect = require("chai").expect;
var assert = require("chai").assert;
var translitbg = require("../src/translitbg.js")();

describe("Cyr2Lat", function() {

  /*
   * Test 01 - Alphabet
   */
  it("01 Alphabet", function() {
    var translit = translitbg.create(translitbg.mode.cyr2lat);
    var input = "абвгдежзийклмнопрстуфхцчшщъьюя";
    var expected = "abvgdezhziyklmnoprstufhtschshshtayyuya";
    var result = translit.transliterate(input);
    assert.equal(result, expected);
  });

  /*
   * Test 02 - Paragraph
   */
  it("02 Paragraph", function() {
    var translit = translitbg.create(translitbg.mode.cyr2lat);

    var input = "Всички хора се раждат свободни и равни по достойнство и права."
        + "Те са надарени с разум и съвест и следва да се отнасят помежду си в дух на братство.";
    var expected = "Vsichki hora se razhdat svobodni i ravni po dostoynstvo i prava." +
        "Te sa nadareni s razum i savest i sledva da se otnasyat pomezhdu si v duh na bratstvo.";

    var result = translit.transliterate(input);

    assert.equal(result, expected);
  });

});
