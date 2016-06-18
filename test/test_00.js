/**
 * General Tests
 */
var expect = require("chai").expect;
var assert = require("chai").assert;
var translitbg = require("../src/translitbg.js");

describe("General", function() {

  it("creates default instance", function() {
    var translit = translitbg.create();
    assert.isDefined(translit);
  });

});
