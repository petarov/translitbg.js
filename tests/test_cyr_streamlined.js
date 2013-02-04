module( "cyr2lat STREAMLINED" );

/* 
 * Test 01 - Alphabet
 */
QUnit.test( "01 Alphabet", function() {
    var translit = translitJS.create(TranslitMode.cyr2lat);
    var input = "абвгдежзийклмнопрстуфхцчшщъьюя";
    var expected = "abvgdezhziyklmnoprstufhtschshshtayyuya";
    var result = translit.transliterate(input);
    
    QUnit.assert.equal( result, expected, 
        "Result/Expected - " + result + " / " + expected );
});

/* 
 * Test 02 - Paragraph
 */
QUnit.test( "02 Paragraph", function() {
    var translit = translitJS.create(TranslitMode.cyr2lat);
    
    var input = "Всички хора се раждат свободни и равни по достойнство и права." 
        + "Те са надарени с разум и съвест и следва да се отнасят помежду си в дух на братство.";
    var expected = "Vsichki hora se razhdat svobodni i ravni po dostoynstvo i prava." + 
        "Te sa nadareni s razum i savest i sledva da se otnasyat pomezhdu si v duh na bratstvo.";
    
    var result = translit.transliterate(input);
    
    QUnit.assert.equal( result, expected, 
        "Result/Expected - " + result + " / " + expected );
});


/* 
 * Test 03 - Имена
 */
QUnit.test( "03 Names", function() {
    var translit = translitJS.create(TranslitMode.cyr2lat);
    
    QUnit.assert.equal( translit.transliterate('Стара планина'), 'Stara planina', 
        "Result/Expected" );
    
    QUnit.assert.equal( translit.transliterate('Атанасовско езеро'), 'Atanasovsko ezero', 
        "Result/Expected" );
    
    QUnit.assert.equal( translit.transliterate('Централен Балкан'), 'Tsentralen Balkan', 
        "Result/Expected" );
    
    QUnit.assert.equal( translit.transliterate('София-юг'), 'Sofia-yug', 
        "Result/Expected" );
    
    QUnit.assert.equal( translit.transliterate('СофИя-юг'), 'SofIa-yug', 
        "Result/Expected" );
    
    QUnit.assert.equal( translit.transliterate('СофиЯ-юг'), 'SofiA-yug', 
        "Result/Expected" );
    
    QUnit.assert.equal( translit.transliterate('СофИЯ-ЮГ'), 'SofIA-YuG', 
        "Result/Expected" );
    
    QUnit.assert.equal( translit.transliterate('Перник-север'), 'Pernik-sever', 
        "Result/Expected" );
    
    QUnit.assert.equal( translit.transliterate('Златни пясъци'), 'Zlatni pyasatsi', 
        "Result/Expected" );
    
    QUnit.assert.equal( translit.transliterate('Горна Оряховица'), 'Gorna Oryahovitsa', 
        "Result/Expected" );
});

/* 
 * Test 04 - Човешки Имена
 */
QUnit.test( "04 Personal Names", function() {
    var translit = translitJS.create(TranslitMode.cyr2lat);
  
    QUnit.assert.equal( translit.transliterate('Самуил'), 'Samuil', 
        "Result/Expected" );
    
    QUnit.assert.equal( translit.transliterate('Синтия'), 'Sintia', 
        "Result/Expected" );
    
    QUnit.assert.equal( translit.transliterate('Марияна ИваноВа'), 'Mariyana IvanoVa', 
        "Result/Expected" );
    
    QUnit.assert.equal( translit.transliterate('Явор'), 'Yavor', 
        "Result/Expected" );
    
});
