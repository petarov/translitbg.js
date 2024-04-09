var expect = require("chai").expect;
var assert = require("chai").assert;
var translitbg = require("../src/translitbg.js");

describe("All tests", function () {

  it("test азбука", function () {
    var result = translitbg.go("абвгдежзийклмнопрстуфхцчшщъьюяѝ");
    assert.equal(result, "abvgdezhziyklmnoprstufhtschshshtayyuyai");
  });

  it("test изречения, нови редове", function () {
    var input = "Всички хора се раждат свободни и равни по достойнство и права."
      + "Те са надарени с разум и съвест и следва да се отнасят помежду си в дух на братство.";
    var expected = "Vsichki hora se razhdat svobodni i ravni po dostoynstvo i prava." +
      "Te sa nadareni s razum i savest i sledva da se otnasyat pomezhdu si v duh na bratstvo.";
    assert.equal(translitbg.go(input), expected);

    input = "Всички хора \nсе раждат свободни\n и равни по достойнство\n и права.";
    expected = "Vsichki hora \nse razhdat svobodni\n i ravni po dostoynstvo\n i prava.";
    assert.equal(translitbg.go(input), expected);

    input = "Ѝ може да бъде намерен и в други езици \nкато руския език и украинския език.";
    expected = "I mozhe da bade nameren i v drugi ezitsi \nkato ruskia ezik i ukrainskia ezik.";
    assert.equal(translitbg.go(input), expected);
  });

  it("test човешки имена", function () {
    assert.equal(translitbg.go('Самуил'), 'Samuil');
    assert.equal(translitbg.go('Синтия'), 'Sintia');
    assert.equal(translitbg.go('Марияна ИваноВа'), 'Mariana IvanoVa');
    assert.equal(translitbg.go('Явор'), 'Yavor');
  });

  it("test други имена", function () {
    assert.equal(translitbg.go('Стара планина'), 'Stara planina');
    assert.equal(translitbg.go('Атанасовско езеро'), 'Atanasovsko ezero');
    assert.equal(translitbg.go('Централен Балкан'), 'Tsentralen Balkan');
    assert.equal(translitbg.go('София-юг'), 'Sofia-yug');
    assert.equal(translitbg.go('СофИя-юг'), 'SofIa-yug');
    assert.equal(translitbg.go('СофиЯ-юг'), 'SofiA-yug');
    assert.equal(translitbg.go('СофИЯ-ЮГ'), 'SofIA-YuG');
    assert.equal(translitbg.go('гр. София, ул. Тракия.'), 'gr. Sofia, ul. Trakia.');
    assert.equal(translitbg.go('гр. СофИЯ, ул. ТракИя.'), 'gr. SofIA, ul. TrakIa.');
    assert.equal(translitbg.go('Перник-север'), 'Pernik-sever');
    assert.equal(translitbg.go('Златни пясъци'), 'Zlatni pyasatsi');
    assert.equal(translitbg.go('Горна Оряховица'), 'Gorna Oryahovitsa');
  });

  it("test 100 най-използвани думи", function () {
    assert.equal(translitbg.go('Здравей'), 'Zdravey');
    assert.equal(translitbg.go('Благодаря'), 'Blagodarya');
    assert.equal(translitbg.go('Моля'), 'Molya');
    assert.equal(translitbg.go('Добре'), 'Dobre');
    assert.equal(translitbg.go('Ден'), 'Den');
    assert.equal(translitbg.go('Нощ'), 'Nosht');
    assert.equal(translitbg.go('Човек'), 'Chovek');
    assert.equal(translitbg.go('Град'), 'Grad');
    assert.equal(translitbg.go('Страна'), 'Strana');
    assert.equal(translitbg.go('Живот'), 'Zhivot');
    assert.equal(translitbg.go('Любов'), 'Lyubov');
    assert.equal(translitbg.go('Семейство'), 'Semeystvo');
    assert.equal(translitbg.go('Вода'), 'Voda');
    assert.equal(translitbg.go('Храна'), 'Hrana');
    assert.equal(translitbg.go('Къща'), 'Kashta');
    assert.equal(translitbg.go('Работа'), 'Rabota');
    assert.equal(translitbg.go('Училище'), 'Uchilishte');
    assert.equal(translitbg.go('Университет'), 'Universitet');
    assert.equal(translitbg.go('Книга'), 'Kniga');
    assert.equal(translitbg.go('Музика'), 'Muzika');
    assert.equal(translitbg.go('Изкуство'), 'Izkustvo');
    assert.equal(translitbg.go('История'), 'Istoria');
    assert.equal(translitbg.go('Време'), 'Vreme');
    assert.equal(translitbg.go('Новина'), 'Novina');
    assert.equal(translitbg.go('Път'), 'Pat');
    assert.equal(translitbg.go('Автомобил'), 'Avtomobil');
    assert.equal(translitbg.go('Телефон'), 'Telefon');
    assert.equal(translitbg.go('Ресторант'), 'Restorant');
    assert.equal(translitbg.go('Летище'), 'Letishte');
    assert.equal(translitbg.go('Парк'), 'Park');
    assert.equal(translitbg.go('Животно'), 'Zhivotno');
    assert.equal(translitbg.go('Риба'), 'Riba');
    assert.equal(translitbg.go('Птица'), 'Ptitsa');
    assert.equal(translitbg.go('Цвете'), 'Tsvete');
    assert.equal(translitbg.go('Дърво'), 'Darvo');
    assert.equal(translitbg.go('Планина'), 'Planina');
    assert.equal(translitbg.go('Река'), 'Reka');
    assert.equal(translitbg.go('Слънце'), 'Slantse');
    assert.equal(translitbg.go('Луна'), 'Luna');
    assert.equal(translitbg.go('Звезда'), 'Zvezda');
    assert.equal(translitbg.go('Цвят'), 'Tsvyat');
    assert.equal(translitbg.go('Денс'), 'Dens');
    assert.equal(translitbg.go('Пеене'), 'Peene');
    assert.equal(translitbg.go('Гледам'), 'Gledam');
    assert.equal(translitbg.go('Слушам'), 'Slusham');
    assert.equal(translitbg.go('Говоря'), 'Govorya');
    assert.equal(translitbg.go('Спорт'), 'Sport');
    assert.equal(translitbg.go('Игра'), 'Igra');
    assert.equal(translitbg.go('Смях'), 'Smyah');
    assert.equal(translitbg.go('Природа'), 'Priroda');
    assert.equal(translitbg.go('Обичам'), 'Obicham');
    assert.equal(translitbg.go('Сърце'), 'Sartse');
    assert.equal(translitbg.go('Тяло'), 'Tyalo');
    assert.equal(translitbg.go('Ръка'), 'Raka');
    assert.equal(translitbg.go('Крак'), 'Krak');
    assert.equal(translitbg.go('Очи'), 'Ochi');
    assert.equal(translitbg.go('Уста'), 'Usta');
    assert.equal(translitbg.go('Коса'), 'Kosa');
    assert.equal(translitbg.go('Нос'), 'Nos');
    assert.equal(translitbg.go('Ухо'), 'Uho');
    assert.equal(translitbg.go('Език'), 'Ezik');
    assert.equal(translitbg.go('Зъб'), 'Zab');
    assert.equal(translitbg.go('Глава'), 'Glava');
    assert.equal(translitbg.go('Кожа'), 'Kozha');
    assert.equal(translitbg.go('Нокът'), 'Nokat');
    assert.equal(translitbg.go('Кръв'), 'Krav');
    assert.equal(translitbg.go('Въздух'), 'Vazduh');
    assert.equal(translitbg.go('Огън'), 'Ogan');
    assert.equal(translitbg.go('Земя'), 'Zemya');
    assert.equal(translitbg.go('Вода'), 'Voda');
    assert.equal(translitbg.go('Мъгла'), 'Magla');
    assert.equal(translitbg.go('Вятър'), 'Vyatar');
    assert.equal(translitbg.go('Сняг'), 'Snyag');
    assert.equal(translitbg.go('Дъжд'), 'Dazhd');
    assert.equal(translitbg.go('Топло'), 'Toplo');
    assert.equal(translitbg.go('Студено'), 'Studeno');
    assert.equal(translitbg.go('Храна'), 'Hrana');
    assert.equal(translitbg.go('Питие'), 'Pitie');
    assert.equal(translitbg.go('Спане'), 'Spane');
    assert.equal(translitbg.go('Бързо'), 'Barzo');
    assert.equal(translitbg.go('Бавно'), 'Bavno');
    assert.equal(translitbg.go('Силно'), 'Silno');
    assert.equal(translitbg.go('Слабо'), 'Slabo');
    assert.equal(translitbg.go('Голям'), 'Golyam');
    assert.equal(translitbg.go('Малък'), 'Malak');
    assert.equal(translitbg.go('Дълъг'), 'Dalag');
    assert.equal(translitbg.go('Кратък'), 'Kratak');
    assert.equal(translitbg.go('Тежък'), 'Tezhak');
    assert.equal(translitbg.go('Лек'), 'Lek');
    assert.equal(translitbg.go('Стар'), 'Star');
    assert.equal(translitbg.go('Млад'), 'Mlad');
    assert.equal(translitbg.go('Нов'), 'Nov');
    assert.equal(translitbg.go('Стар'), 'Star');
    assert.equal(translitbg.go('Добър'), 'Dobar');
    assert.equal(translitbg.go('Лош'), 'Losh');
    assert.equal(translitbg.go('Горещ'), 'Goresht');
    assert.equal(translitbg.go('Студен'), 'Studen');
    assert.equal(translitbg.go('Богат'), 'Bogat');
    assert.equal(translitbg.go('Беден'), 'Beden');
    assert.equal(translitbg.go('Висок'), 'Visok');
    assert.equal(translitbg.go('Нисък'), 'Nisak');
    assert.equal(translitbg.go('Дълбок'), 'Dalbok');
    assert.equal(translitbg.go('Плитък'), 'Plitak');
  });

  it("test 30 имена на областни градове", function () {
    assert.equal(translitbg.go('София'), 'Sofia');
    assert.equal(translitbg.go('Пловдив'), 'Plovdiv');
    assert.equal(translitbg.go('Варна'), 'Varna');
    assert.equal(translitbg.go('Бургас'), 'Burgas');
    assert.equal(translitbg.go('Русе'), 'Ruse');
    assert.equal(translitbg.go('Стара Загора'), 'Stara Zagora');
    assert.equal(translitbg.go('Плевен'), 'Pleven');
    assert.equal(translitbg.go('Сливен'), 'Sliven');
    assert.equal(translitbg.go('Добрич'), 'Dobrich');
    assert.equal(translitbg.go('Шумен'), 'Shumen');
    assert.equal(translitbg.go('Хасково'), 'Haskovo');
    assert.equal(translitbg.go('Перник'), 'Pernik');
    assert.equal(translitbg.go('Ямбол'), 'Yambol');
    assert.equal(translitbg.go('Благоевград'), 'Blagoevgrad');
    assert.equal(translitbg.go('Велико Търново'), 'Veliko Tarnovo');
    assert.equal(translitbg.go('Враца'), 'Vratsa');
    assert.equal(translitbg.go('Габрово'), 'Gabrovo');
    assert.equal(translitbg.go('Видин'), 'Vidin');
    assert.equal(translitbg.go('Монтана'), 'Montana');
    assert.equal(translitbg.go('Ловеч'), 'Lovech');
    assert.equal(translitbg.go('Разград'), 'Razgrad');
    assert.equal(translitbg.go('Силистра'), 'Silistra');
    assert.equal(translitbg.go('Търговище'), 'Targovishte');
    assert.equal(translitbg.go('Кюстендил'), 'Kyustendil');
    assert.equal(translitbg.go('Пазарджик'), 'Pazardzhik');
    assert.equal(translitbg.go('Смолян'), 'Smolyan');
    assert.equal(translitbg.go('Кърджали'), 'Kardzhali');
    assert.equal(translitbg.go('Велинград'), 'Velingrad');
    assert.equal(translitbg.go('Дупница'), 'Dupnitsa');
    assert.equal(translitbg.go('Петрич'), 'Petrich');
  });
  
});
