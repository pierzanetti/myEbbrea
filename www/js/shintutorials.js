/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('shintutorials', [])

.service('Shintutorials', [function(){
    
    var shintutorials_list = [

        { key: '	shin	', termine: '	שׁ	', senza: '	ש	', traslitterazione: '	š	', significato: '	šin	', grammatica: '		', altro: '		', id: '	1	'},
        { key: '	sabar	', termine: '	שָׁבַר	', senza: '	שבר	', traslitterazione: '	šāḇar	', significato: '	spezzare, rompere	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, spezzò	', id: '	2	'},
        { key: '	sub	', termine: '	שׁוּב	', senza: '	שוב	', traslitterazione: '	šûḇ	', significato: '	tornare, ritornare	', grammatica: '	v.	', altro: '	שָׁב Qal, qatal, 3 ms, tornò, ritornò	', id: '	3	'},
        { key: '	sir	', termine: '	שִׁיר	', senza: '	שיר	', traslitterazione: '	šîr	', significato: '	canto, canzone	', grammatica: '	n. m.	', altro: '	pl. ass. שִׁירִים	', id: '	4	'},
        { key: '	salom	', termine: '	שָׁלוֹם	', senza: '	שלום	', traslitterazione: '	šālôm	', significato: '	pace, armonia, completezza, solidità, benessere	', grammatica: '	n. m.	', altro: '	cstr. שְׁלוֹם- pl. ass. שְׁלוֹמִים	', id: '	5	'},
        { key: '	sulhan	', termine: '	שֻׁלְחָן	', senza: '	שלחן	', traslitterazione: '	šulḥān	', significato: '	tavolo	', grammatica: '	n. m.	', altro: '	cstr. שֻׁלְחַן - pl. שֻׁלְחָנוֹת	', id: '	6	'},
        { key: '	selisi	', termine: '	שְׁלִישִׁי	', senza: '	שלישי	', traslitterazione: '	šelîšî	', significato: '	terzo	', grammatica: '	agg. numerale ordinario m.	', altro: '	f. שְׁלִישִׁית 	', id: '	7	'},
        { key: '	salem	', termine: '	שָׁלֵם	', senza: '	שלם	', traslitterazione: '	šālēm	', significato: '	integro, sano	', grammatica: '	agg. m.s.	', altro: '	s. f. שְׁלֵמָה - pl. m. שְׁלֵמִים - pl. f. שְׁלֵמוֹת	', id: '	8	'},
        { key: '	salem	', termine: '	שָׁלֵם	', senza: '	שלם	', traslitterazione: '	šālēm	', significato: '	essere completo, illeso, sano; fare pace; essere terminato, pagare, rimborsare	', grammatica: '	v.	', altro: '	שִׁלַּם Piel, qatal, 3 ms, è stato completato	', id: '	9	'},
        { key: '	sam	', termine: '	שָׁם	', senza: '	שם	', traslitterazione: '	šām	', significato: '	lì, in quel posto, là	', grammatica: '	avv. di luogo	', altro: '		', id: '	10	'},
        { key: '	semen	', termine: '	שֶׁ֫מֶן	', senza: '	שמן	', traslitterazione: '	šémen	', significato: '	grasso, olio	', grammatica: '	n. m. 	', altro: '	pl. שְׁמָנִים	', id: '	11	'},
        { key: '	sama‘	', termine: '	שָׁמַע	', senza: '	שמע	', traslitterazione: '	šāma‘	', significato: '	ascoltare (con attenzione)	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, ascoltò	', id: '	12	'},
        { key: '	samar	', termine: '	שָׁמַר	', senza: '	שמר	', traslitterazione: '	šāmar	', significato: '	vigilare, custodire, tenere, guardare, preservare	', grammatica: '	v. 	', altro: '	Qal, qatal, 3 ms, custodì	', id: '	13	'},
        { key: '	semes	', termine: '	שֶׁ֫מֶשׁ	', senza: '	שמש	', traslitterazione: '	šémeš	', significato: '	sole	', grammatica: '	n. f. o m.	', altro: '		', id: '	14	'},
        { key: '	sanah	', termine: '	שָׁנָה	', senza: '	שנה	', traslitterazione: '	šānāh	', significato: '	anno	', grammatica: '	n. f.	', altro: '	cstr. שְׁנַת - duale ass. שְׁנָתַיִם - pl. ass. שָׁנִים - cstr. שְׁנֵי	', id: '	15	'},
        { key: '	sapat	', termine: '	שָׁפַט	', senza: '	שפט	', traslitterazione: '	šāp̱aṭ	', significato: '	giudicare, governare	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, giudicò; שֹׁפֵט part. ms	', id: '	16	'},
        { key: '	sopet	', termine: '	שֹׁפֵט	', senza: '	שפט	', traslitterazione: '	šōp̱ēṭ	', significato: '	giudice	', grammatica: '	n. m. 	', altro: '	ptc. att. sostantivato di שָׁפַט - pl. שֹׁפְטִים	', id: '	17	'},
        { key: '	sopar	', termine: '	שֹׁפָר	', senza: '	שפר	', traslitterazione: '	šōp̱ār	', significato: '	corno (per soffiare)	', grammatica: '	n. m.	', altro: '	oppure שׁוֹפָר; pl. ass. שׁוֹפָרוֹת - cstr. שׁוֹפְרוֹת	', id: '	18	'},
        { key: '	saqat	', termine: '	שָׁקַט	', senza: '	שקט	', traslitterazione: '	šāqaṭ	', significato: '	essere quieto, tranquillo, calmo, indisturbato	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, fu calmo	', id: '	19	'},
        { key: '	sem	', termine: '	שֵׁם	', senza: '	שם	', traslitterazione: '	šēm	', significato: '	nome	', grammatica: '	n. m.	', altro: '	cstr. שֵׁם - pl. שֵׁמוֹת - cstr. שֵׁמוֹת	', id: '	20	'},
        { key: '	salal	', termine: '	שָׁלָל	', senza: '	שלל	', traslitterazione: '	šālāl	', significato: '	bottino, preda	', grammatica: '	n. m.	', altro: '	cstr. שְׁלַל	', id: '	21	'},
    ];
          var shintutorials_keys = {};

      for (var i=0;i<shintutorials_list.length;i++){
        shintutorials_keys[shintutorials_list[i].key] = shintutorials_list[i];
      }

    return {
        list: shintutorials_list,
        keys: shintutorials_keys
    }

}]);