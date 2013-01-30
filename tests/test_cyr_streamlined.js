module( "cyr2lat" );

/* 
 * Test 01 - Alphabet
 */
QUnit.test( "STREAMLINED_01", function() {
  var translit = translitJS.create(TranslitMode.cyr2lat);
  var input = "абвгдежзийклмнопрстуфхцчшщъьюя";
  var result = translit.transliterate(input);

  QUnit.assert.equal( result, "abvgdezhziyklmnoprstufhtschshshtayyuya", 
    "Cyr2Lat_STREAMLINED - Result/Expected" );
});

/* 
 * Test 02 - Paragraph
 */
QUnit.test( "STREAMLINED_02", function() {
  var translit = translitJS.create(TranslitMode.cyr2lat);
  
  var input = "Всички хора се раждат свободни и равни по достойнство и права." 
    + "Те са надарени с разум и съвест и следва да се отнасят помежду си в дух на братство.";
  var expected = "Vsichki hora se razhdat svobodni i ravni po dostoynstvo i prava." + 
    "Te sa nadareni s razum i savest i sledva da se otnasyat pomezhdu si v duh na bratstvo.";
    
  var result = translit.transliterate(input);
  
  QUnit.assert.equal( result, expected, 
    "Cyr2Lat_STREAMLINED - Result/Expected" );
});


/* 
 * Test 03 - Имена
 */
QUnit.test( "STREAMLINED_02", function() {
  var translit = translitJS.create(TranslitMode.cyr2lat);
  
  QUnit.assert.equal( translit.transliterate('Стара планина'), 'Stara planina', 
    "Cyr2Lat_STREAMLINED - Result/Expected" );
    
  QUnit.assert.equal( translit.transliterate('Атанасовско езеро'), 'Atanasovsko ezero', 
    "Cyr2Lat_STREAMLINED - Result/Expected" );
    
  QUnit.assert.equal( translit.transliterate('Централен Балкан'), 'Tsentralen Balkan', 
    "Cyr2Lat_STREAMLINED - Result/Expected" ); 
    
  QUnit.assert.equal( translit.transliterate('София-юг'), 'Sofia-yug', 
    "Cyr2Lat_STREAMLINED - Result/Expected" );  
    
  QUnit.assert.equal( translit.transliterate('Перник-север'), 'Pernik-sever', 
    "Cyr2Lat_STREAMLINED - Result/Expected" );  
    
  QUnit.assert.equal( translit.transliterate('Златни пясъци'), 'Zlatni рyasatsi', 
    "Cyr2Lat_STREAMLINED - Result/Expected" );  
    
  QUnit.assert.equal( translit.transliterate('Горна Оряховица'), 'Gorna Oryahovitsa', 
    "Cyr2Lat_STREAMLINED - Result/Expected" );  
});
