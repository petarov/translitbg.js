var expect = require("chai").expect;
var assert = require("chai").assert;
var translitbg = require("../src/translitbg.js");

describe("All tests", function() {

  it("test азбука", function() {
    var result = translitbg.go("абвгдежзийклмнопрстуфхцчшщъьюяѝ");
    assert.equal(result, "abvgdezhziyklmnoprstufhtschshshtayyuyai");
  });

  it("test изречения, нови редове", function() {
    var input = "Всички хора се раждат свободни и равни по достойнство и права."
        + "Те са надарени с разум и съвест и следва да се отнасят помежду си в дух на братство.";
    var expected = "Vsichki hora se razhdat svobodni i ravni po dostoynstvo i prava." +
        "Te sa nadareni s razum i savest i sledva da se otnasyat pomezhdu si v duh na bratstvo.";
    assert.equal(translitbg.go(input), expected);

    input = "Всички хора \nсе раждат свободни\n и равни по достойнство\n и права.";
    expected = "Vsichki hora \nse razhdat svobodni\n i ravni po dostoynstvo\n i prava.";
    assert.equal(translitbg.go(input), expected);
    
    input = "Ѝ може да бъде намерен и в други езици \nкато руския език и украинския език.";
    expected = "I mozhe da bade nameren i v drugi ezitsi \nkato ruskiya ezik i ukrainskiya ezik.";
    assert.equal(translitbg.go(input), expected);
  });

  it("test човешки имена", function() {
    assert.equal(translitbg.go('Самуил'), 'Samuil');
    assert.equal(translitbg.go('Синтия'), 'Sintia');
    assert.equal(translitbg.go('Марияна ИваноВа'), 'Mariyana IvanoVa');
    assert.equal(translitbg.go('Явор'), 'Yavor');
  });

  it("test други имена", function() {
    assert.equal(translitbg.go('Стара планина'), 'Stara planina');
    assert.equal(translitbg.go('Атанасовско езеро'), 'Atanasovsko ezero');
    assert.equal(translitbg.go('Централен Балкан'), 'Tsentralen Balkan');
    assert.equal(translitbg.go('София-юг'), 'Sofia-yug');
    assert.equal(translitbg.go('СофИя-юг'), 'SofIa-yug');
    assert.equal(translitbg.go('СофиЯ-юг'), 'SofiA-yug');
    assert.equal(translitbg.go('СофИЯ-ЮГ'), 'SofIA-YuG');
    assert.equal(translitbg.go('Перник-север'), 'Pernik-sever');
    assert.equal(translitbg.go('Златни пясъци'), 'Zlatni pyasatsi');
    assert.equal(translitbg.go('Горна Оряховица'), 'Gorna Oryahovitsa');
  });
});
