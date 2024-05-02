var expect = require('chai').expect;
var assert = require('chai').assert;
var translitbg = require('../src/translitbg.js').default

describe('All tests', function () {

  it('test азбука', function () {
    var result = translitbg('абвгдежзийклмнопрстуфхцчшщъьюяѝ');
    assert.equal(result, 'abvgdezhziyklmnoprstufhtschshshtayyuyai');
  });

  it('test изречения, нови редове', function () {
    var input = 'Всички хора се раждат свободни и равни по достойнство и права.'
      + 'Те са надарени с разум и съвест и следва да се отнасят помежду си в дух на братство.';
    var expected = 'Vsichki hora se razhdat svobodni i ravni po dostoynstvo i prava.' +
      'Te sa nadareni s razum i savest i sledva da se otnasyat pomezhdu si v duh na bratstvo.';
    assert.equal(translitbg(input), expected);

    input = 'Всички хора \nсе раждат свободни\n и равни по достойнство\n и права.';
    expected = 'Vsichki hora \nse razhdat svobodni\n i ravni po dostoynstvo\n i prava.';
    assert.equal(translitbg(input), expected);

    input = 'Ѝ може да бъде намерен и в други езици \nкато руския език и украинския език.';
    expected = 'I mozhe da bade nameren i v drugi ezitsi \nkato ruskia ezik i ukrainskia ezik.';
    assert.equal(translitbg(input), expected);

    input = 'СанЯ е на път за ЦаревеЦ-крепост и има МАНТИЯ от Желязо и Злато, носи ЖЕзъл и корона.';
    expected = 'SanYA e na pat za TsareveTS-krepost i ima MANTIA ot Zhelyazo i Zlato, nosi ZHEzal i korona.';
    assert.equal(translitbg(input), expected);

    // --- mixed

    input = 'Seдем с едin udар';
    expected = 'Sedem s edin udar';
    assert.equal(translitbg(input), expected);

    input = 'Внезapna-smqна-на-$олаri-i-еüро';
    expected = 'Vnezapna-smqna-na-$olari-i-eüro';
    assert.equal(translitbg(input), expected);
  });

  it('test специални съчетания', function () {
    assert.equal(translitbg('ЖЕЗЪЛ'), 'ZHEZAL');
    assert.equal(translitbg('жЕЗЪЛ'), 'zhEZAL');
    assert.equal(translitbg('жезъл'), 'zhezal');
    assert.equal(translitbg('ЦАРЕВЕЦ'), 'TSAREVETS');
    assert.equal(translitbg('Царевец'), 'Tsarevets');
    assert.equal(translitbg('ЦАРевец'), 'TSARevets');
    assert.equal(translitbg('цАРЕВЕЦ'), 'tsAREVETS');
    assert.equal(translitbg('чОвек'), 'chOvek');
    assert.equal(translitbg('ЧОВек'), 'CHOVek');
    assert.equal(translitbg('ШИВАЧ'), 'SHIVACH');
    assert.equal(translitbg('шИВАч'), 'shIVAch');
    assert.equal(translitbg('ЩАСТИЕ'), 'SHTASTIE');
    assert.equal(translitbg('щАСТИЕ'), 'shtASTIE');
    assert.equal(translitbg('ЩаСТИЕ'), 'ShtaSTIE');
    assert.equal(translitbg('ЮНГА'), 'YUNGA');
    assert.equal(translitbg('юНГА'), 'yuNGA');
    assert.equal(translitbg('ЯБЪЛКИ'), 'YABALKI');
    assert.equal(translitbg('яБЪЛКИ'), 'yaBALKI');
    assert.equal(translitbg(
      'Всички ЖЕзъл, ЦаревеЦ, ЧОвек, шиваЧ, Щастие, юнга, Ябълки, месИЯ, ловеЧ'),
      'Vsichki ZHEzal, TsareveTS, CHOvek, shivaCH, Shtastie, yunga, Yabalki, mesIA, loveCH');
    assert.equal(translitbg(
      'месиЯта борЧвор маЦка маЦКите злоЩастието боЖе боЖЕ крЮгер кРЮгер крЮГер'),
      'mesiAta borCHvor maTSka maTSKite zloSHTastieto boZHe boZHE krYUger kRYUger krYUGer');
  });

  it('test места и адреси', function () {
    assert.equal(translitbg('Стара планина'), 'Stara planina');
    assert.equal(translitbg('Атанасовско езеро'), 'Atanasovsko ezero');
    assert.equal(translitbg('Централен Балкан'), 'Tsentralen Balkan');
    assert.equal(translitbg('София-юг'), 'Sofia-yug');
    assert.equal(translitbg('СофИя-юг'), 'SofIa-yug');
    assert.equal(translitbg('СофиЯ-юг'), 'SofiA-yug');
    assert.equal(translitbg('СофИЯ-ЮГ'), 'SofIA-YUG');
    assert.equal(translitbg('гр. София, ул. Тракия.'), 'gr. Sofia, ul. Trakia.');
    assert.equal(translitbg('гр. СофИЯ, ул. ТракИя.'), 'gr. SofIA, ul. TrakIa.');
    assert.equal(translitbg('Перник-север'), 'Pernik-sever');
    assert.equal(translitbg('Златни пясъци'), 'Zlatni pyasatsi');
    assert.equal(translitbg('Горна Оряховица'), 'Gorna Oryahovitsa');
  });

  it('test 100 най-използвани думи', function () {
    assert.equal(translitbg('Здравей'), 'Zdravey');
    assert.equal(translitbg('Благодаря'), 'Blagodarya');
    assert.equal(translitbg('Моля'), 'Molya');
    assert.equal(translitbg('Добре'), 'Dobre');
    assert.equal(translitbg('Ден'), 'Den');
    assert.equal(translitbg('Нощ'), 'Nosht');
    assert.equal(translitbg('Човек'), 'Chovek');
    assert.equal(translitbg('Град'), 'Grad');
    assert.equal(translitbg('Страна'), 'Strana');
    assert.equal(translitbg('Живот'), 'Zhivot');
    assert.equal(translitbg('Любов'), 'Lyubov');
    assert.equal(translitbg('Семейство'), 'Semeystvo');
    assert.equal(translitbg('Вода'), 'Voda');
    assert.equal(translitbg('Храна'), 'Hrana');
    assert.equal(translitbg('Къща'), 'Kashta');
    assert.equal(translitbg('Работа'), 'Rabota');
    assert.equal(translitbg('Училище'), 'Uchilishte');
    assert.equal(translitbg('Университет'), 'Universitet');
    assert.equal(translitbg('Книга'), 'Kniga');
    assert.equal(translitbg('Музика'), 'Muzika');
    assert.equal(translitbg('Изкуство'), 'Izkustvo');
    assert.equal(translitbg('История'), 'Istoria');
    assert.equal(translitbg('Време'), 'Vreme');
    assert.equal(translitbg('Новина'), 'Novina');
    assert.equal(translitbg('Път'), 'Pat');
    assert.equal(translitbg('Автомобил'), 'Avtomobil');
    assert.equal(translitbg('Телефон'), 'Telefon');
    assert.equal(translitbg('Ресторант'), 'Restorant');
    assert.equal(translitbg('Летище'), 'Letishte');
    assert.equal(translitbg('Парк'), 'Park');
    assert.equal(translitbg('Животно'), 'Zhivotno');
    assert.equal(translitbg('Риба'), 'Riba');
    assert.equal(translitbg('Птица'), 'Ptitsa');
    assert.equal(translitbg('Цвете'), 'Tsvete');
    assert.equal(translitbg('Дърво'), 'Darvo');
    assert.equal(translitbg('Планина'), 'Planina');
    assert.equal(translitbg('Река'), 'Reka');
    assert.equal(translitbg('Слънце'), 'Slantse');
    assert.equal(translitbg('Луна'), 'Luna');
    assert.equal(translitbg('Звезда'), 'Zvezda');
    assert.equal(translitbg('Цвят'), 'Tsvyat');
    assert.equal(translitbg('Денс'), 'Dens');
    assert.equal(translitbg('Пеене'), 'Peene');
    assert.equal(translitbg('Гледам'), 'Gledam');
    assert.equal(translitbg('Слушам'), 'Slusham');
    assert.equal(translitbg('Говоря'), 'Govorya');
    assert.equal(translitbg('Спорт'), 'Sport');
    assert.equal(translitbg('Игра'), 'Igra');
    assert.equal(translitbg('Смях'), 'Smyah');
    assert.equal(translitbg('Природа'), 'Priroda');
    assert.equal(translitbg('Обичам'), 'Obicham');
    assert.equal(translitbg('Сърце'), 'Sartse');
    assert.equal(translitbg('Тяло'), 'Tyalo');
    assert.equal(translitbg('Ръка'), 'Raka');
    assert.equal(translitbg('Крак'), 'Krak');
    assert.equal(translitbg('Очи'), 'Ochi');
    assert.equal(translitbg('Уста'), 'Usta');
    assert.equal(translitbg('Коса'), 'Kosa');
    assert.equal(translitbg('Нос'), 'Nos');
    assert.equal(translitbg('Ухо'), 'Uho');
    assert.equal(translitbg('Език'), 'Ezik');
    assert.equal(translitbg('Зъб'), 'Zab');
    assert.equal(translitbg('Глава'), 'Glava');
    assert.equal(translitbg('Кожа'), 'Kozha');
    assert.equal(translitbg('Нокът'), 'Nokat');
    assert.equal(translitbg('Кръв'), 'Krav');
    assert.equal(translitbg('Въздух'), 'Vazduh');
    assert.equal(translitbg('Огън'), 'Ogan');
    assert.equal(translitbg('Земя'), 'Zemya');
    assert.equal(translitbg('Вода'), 'Voda');
    assert.equal(translitbg('Мъгла'), 'Magla');
    assert.equal(translitbg('Вятър'), 'Vyatar');
    assert.equal(translitbg('Сняг'), 'Snyag');
    assert.equal(translitbg('Дъжд'), 'Dazhd');
    assert.equal(translitbg('Топло'), 'Toplo');
    assert.equal(translitbg('Студено'), 'Studeno');
    assert.equal(translitbg('Храна'), 'Hrana');
    assert.equal(translitbg('Питие'), 'Pitie');
    assert.equal(translitbg('Спане'), 'Spane');
    assert.equal(translitbg('Бързо'), 'Barzo');
    assert.equal(translitbg('Бавно'), 'Bavno');
    assert.equal(translitbg('Силно'), 'Silno');
    assert.equal(translitbg('Слабо'), 'Slabo');
    assert.equal(translitbg('Голям'), 'Golyam');
    assert.equal(translitbg('Малък'), 'Malak');
    assert.equal(translitbg('Дълъг'), 'Dalag');
    assert.equal(translitbg('Кратък'), 'Kratak');
    assert.equal(translitbg('Тежък'), 'Tezhak');
    assert.equal(translitbg('Лек'), 'Lek');
    assert.equal(translitbg('Стар'), 'Star');
    assert.equal(translitbg('Млад'), 'Mlad');
    assert.equal(translitbg('Нов'), 'Nov');
    assert.equal(translitbg('Стар'), 'Star');
    assert.equal(translitbg('Добър'), 'Dobar');
    assert.equal(translitbg('Лош'), 'Losh');
    assert.equal(translitbg('Горещ'), 'Goresht');
    assert.equal(translitbg('Студен'), 'Studen');
    assert.equal(translitbg('Богат'), 'Bogat');
    assert.equal(translitbg('Беден'), 'Beden');
    assert.equal(translitbg('Висок'), 'Visok');
    assert.equal(translitbg('Нисък'), 'Nisak');
    assert.equal(translitbg('Дълбок'), 'Dalbok');
    assert.equal(translitbg('Плитък'), 'Plitak');
  });

  it('test 30 имена на областни градове', function () {
    assert.equal(translitbg('София'), 'Sofia');
    assert.equal(translitbg('Пловдив'), 'Plovdiv');
    assert.equal(translitbg('Варна'), 'Varna');
    assert.equal(translitbg('Бургас'), 'Burgas');
    assert.equal(translitbg('Русе'), 'Ruse');
    assert.equal(translitbg('Стара Загора'), 'Stara Zagora');
    assert.equal(translitbg('Плевен'), 'Pleven');
    assert.equal(translitbg('Сливен'), 'Sliven');
    assert.equal(translitbg('Добрич'), 'Dobrich');
    assert.equal(translitbg('Шумен'), 'Shumen');
    assert.equal(translitbg('Хасково'), 'Haskovo');
    assert.equal(translitbg('Перник'), 'Pernik');
    assert.equal(translitbg('Ямбол'), 'Yambol');
    assert.equal(translitbg('Благоевград'), 'Blagoevgrad');
    assert.equal(translitbg('Велико Търново'), 'Veliko Tarnovo');
    assert.equal(translitbg('Враца'), 'Vratsa');
    assert.equal(translitbg('Габрово'), 'Gabrovo');
    assert.equal(translitbg('Видин'), 'Vidin');
    assert.equal(translitbg('Монтана'), 'Montana');
    assert.equal(translitbg('Ловеч'), 'Lovech');
    assert.equal(translitbg('Разград'), 'Razgrad');
    assert.equal(translitbg('Силистра'), 'Silistra');
    assert.equal(translitbg('Търговище'), 'Targovishte');
    assert.equal(translitbg('Кюстендил'), 'Kyustendil');
    assert.equal(translitbg('Пазарджик'), 'Pazardzhik');
    assert.equal(translitbg('Смолян'), 'Smolyan');
    assert.equal(translitbg('Кърджали'), 'Kardzhali');
    assert.equal(translitbg('Велинград'), 'Velingrad');
    assert.equal(translitbg('Дупница'), 'Dupnitsa');
    assert.equal(translitbg('Петрич'), 'Petrich');
  });

  it('test 50+ човешки имена', function () {
    assert.equal(translitbg('Самуил'), 'Samuil');
    assert.equal(translitbg('Синтия'), 'Sintia');
    assert.equal(translitbg('Марияна ИваноВа'), 'Mariana IvanoVa');
    assert.equal(translitbg('Явор'), 'Yavor');
    assert.equal(translitbg('Саня'), 'Sanya');
    assert.equal(translitbg('СанЯ'), 'SanYA');
    assert.equal(translitbg('САНЯ'), 'SANYA');
    // 50 random names
    assert.equal(translitbg('Иван'), 'Ivan');
    assert.equal(translitbg('Георги'), 'Georgi');
    assert.equal(translitbg('Мария'), 'Maria');
    assert.equal(translitbg('Димитър'), 'Dimitar');
    assert.equal(translitbg('Николай'), 'Nikolay');
    assert.equal(translitbg('Петър'), 'Petar');
    assert.equal(translitbg('Анна'), 'Anna');
    assert.equal(translitbg('Васил'), 'Vasil');
    assert.equal(translitbg('Стефан'), 'Stefan');
    assert.equal(translitbg('Елена'), 'Elena');
    assert.equal(translitbg('Александър'), 'Aleksandar');
    assert.equal(translitbg('Таня'), 'Tanya');
    assert.equal(translitbg('Стефания'), 'Stefania');
    assert.equal(translitbg('Виктория'), 'Viktoria');
    assert.equal(translitbg('Илия'), 'Ilia');
    assert.equal(translitbg('Даниел'), 'Daniel');
    assert.equal(translitbg('Михаил'), 'Mihail');
    assert.equal(translitbg('Радослав'), 'Radoslav');
    assert.equal(translitbg('Йордан'), 'Yordan');
    assert.equal(translitbg('Валентин'), 'Valentin');
    assert.equal(translitbg('Светлана'), 'Svetlana');
    assert.equal(translitbg('Христо'), 'Hristo');
    assert.equal(translitbg('Маргарита'), 'Margarita');
    assert.equal(translitbg('Надя'), 'Nadya');
    assert.equal(translitbg('Павел'), 'Pavel');
    assert.equal(translitbg('Виолета'), 'Violeta');
    assert.equal(translitbg('Симеон'), 'Simeon');
    assert.equal(translitbg('Румяна'), 'Rumyana');
    assert.equal(translitbg('Ивелина'), 'Ivelina');
    assert.equal(translitbg('Веселин'), 'Veselin');
    assert.equal(translitbg('Емилия'), 'Emilia');
    assert.equal(translitbg('Ангел'), 'Angel');
    assert.equal(translitbg('Стойко'), 'Stoyko');
    assert.equal(translitbg('Соня'), 'Sonya');
    assert.equal(translitbg('Любомир'), 'Lyubomir');
    assert.equal(translitbg('Магдалена'), 'Magdalena');
    assert.equal(translitbg('Анастасия'), 'Anastasia');
    assert.equal(translitbg('Красимир'), 'Krasimir');
    assert.equal(translitbg('Десислава'), 'Desislava');
    assert.equal(translitbg('Галина'), 'Galina');
    assert.equal(translitbg('Евгени'), 'Evgeni');
    assert.equal(translitbg('Росица'), 'Rositsa');
    assert.equal(translitbg('Кирил'), 'Kiril');
    assert.equal(translitbg('Дарина'), 'Darina');
    assert.equal(translitbg('Вера'), 'Vera');
    assert.equal(translitbg('Живка'), 'Zhivka');
    assert.equal(translitbg('Борис'), 'Boris');
    assert.equal(translitbg('Яна'), 'Yana');
    assert.equal(translitbg('Пламен'), 'Plamen');
    assert.equal(translitbg('Милена'), 'Milena');
  });
});
