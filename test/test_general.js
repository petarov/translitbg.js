/**
 * General tests
 */
var expect = require("chai").expect;
var assert = require("chai").assert;
var translitbg = require("../src/translitbg.js")();

describe("General", function() {

  it("invalid create arguments", function() {
    var translit = translitbg.create();
    assert.isDefined(translit);
  });

});
