module("General Tests");

QUnit.test( "01 Undefined", function() {
    var translit = translitbg.create();
    QUnit.assert.ok(typeof translit != "undefined", "Undefined test" );
});

QUnit.test( "02 lat2cyr exception", function() {
    
    QUnit.assert.throws(function() {
    	var translit = translitbg.create(translit.mode.lat2cyr);
    },
    "");
});