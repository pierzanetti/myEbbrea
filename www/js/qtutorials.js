/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('qtutorials', [])

.service('Qtutorials', [function(){
    
    var qtutorials_list = [

        { key: '	qof	', termine: '	ק	', senza: '	ק	', traslitterazione: '	q	', significato: '	qof	', grammatica: '		', altro: '		', id: '	1	'},
        { key: '	qabas	', termine: '	קָבַץ	', senza: '	קבץ	', traslitterazione: '	qāḇaṣ	', significato: '	radunare, convocare	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, radunò	', id: '	2	'},
        { key: '	qados	', termine: '	קָדוֹשׁ	', senza: '	קדוש	', traslitterazione: '	qāḏôš	', significato: '	sacro, santo	', grammatica: '	agg.	', altro: '	cstr. קְדוֹשׁ - s. f. קְדוֹשָׁה - pl. m. קְדוֹשִׁים - pl. f. קְדוֹשׁוֹת	', id: '	3	'},
        { key: '	qol	', termine: '	קוֹל	', senza: '	קול	', traslitterazione: '	qôl	', significato: '	voce, suono	', grammatica: '	n. m.	', altro: '	cstr. קוֹל - pl. ass. קֹלוֹת	', id: '	4	'},
        { key: '	qum	', termine: '	קוּם	', senza: '	קום	', traslitterazione: '	qûm	', significato: '	alzarsi, sorgere, levarsi, stare in piedi	', grammatica: '	v.	', altro: '	קָם Qal, qatal, 3 ms, si alzò 	', id: '	5	'},
        { key: '	qus	', termine: '	קוּץ	', senza: '	קוץ	', traslitterazione: '	qûṣ	', significato: '	provare odio, orrore, disgusto	', grammatica: '	v.	', altro: '	קָץ Qal, participio, ms, che tu odii	', id: '	6	'},
        { key: '	qaton	', termine: '	קָטֹן	', senza: '	קטן	', traslitterazione: '	qāṭōn	', significato: '	piccolo, giovane, poco importante, insignificante	', grammatica: '	agg. m. s.	', altro: '	s. f. קְטַנָּה - pl. m. קְטַנִּים - pl. f. קְטַנּוֹת	', id: '	7	'},
        { key: '	qara’	', termine: '	קָרָא	', senza: '	קרא	', traslitterazione: '	qārā’	', significato: '	chiamare, proclamare, leggere	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, chiamò, proclamò, lesse;	', id: '	8	'},
        { key: '	qiryah	', termine: '	קִרְיָה	', senza: '	קריה	', traslitterazione: '	qiryāh	', significato: '	città, villaggio	', grammatica: '	n. f. 	', altro: '	cstr. קִרְיַת	', id: '	9	'},
        { key: '	qaseh	', termine: '	קָשֶׁה	', senza: '	קשה	', traslitterazione: '	qāšeh	', significato: '	duro, difficile, severo	', grammatica: '	agg.	', altro: '	s. f. קָשָׁה - cstr. קְשַׁת - pl. m. קָשִׁים - cstr. קְשֵׁי - pl. f. קָשׁוֹת	', id: '	10	'},
        { key: '	qasar	', termine: '	קָשַׁר	', senza: '	קשר	', traslitterazione: '	qāšar	', significato: '	legare, cospirare	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, legò, cospirò;	', id: '	11	'},
        { key: '	qasyr	', termine: '	קָצִיר	', senza: '	קציר	', traslitterazione: '	qāṣîr	', significato: '	mietitura, raccolto	', grammatica: '	n. m.	', altro: '	cstr. קְצִיר 	', id: '	12	'},
        { key: '	qaneh	', termine: '	קָנֶה	', senza: '	קנה	', traslitterazione: '	qāneh	', significato: '	canna, stelo, gambo	', grammatica: '	n. m.	', altro: '	cstr. קְנֵה - pl. m. קָנִים - cstr. קְנֵי	', id: '	13	'}        

      ];
      
      var qtutorials_keys = {};

      for (var i=0;i<qtutorials_list.length;i++){
        qtutorials_keys[qtutorials_list[i].key] = qtutorials_list[i];
      }

    return {
        list: qtutorials_list,
        keys: qtutorials_keys
    }

}]);