/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('hethtutorials', [])

.service('Hethtutorials', [function(){
    
    var hethtutorials_list = [
        
        { key: '	h	', termine: '	ח	', senza: '	ח	', traslitterazione: '	ḥ	', significato: '		', grammatica: '		', altro: '		', id: '	1	'},
        { key: '	hadal	', termine: '	חָדַל	', senza: '	חדל	', traslitterazione: '	ḥāḏal	', significato: '	astenersi, smettere, cessare	', grammatica: '	v. 	', altro: '	Qal, qatal, 3 ms, cessò	', id: '	2	'},
        { key: '	hozeh	', termine: '	חֹזֶה	', senza: '	חזה	', traslitterazione: '	ḥōzeh	', significato: '	veggente, visionario, profeta (sinonimo di נָבִיא)	', grammatica: '	n. m.	', altro: '	cstr. חֹזֵה - pl. ass. חֹזִים	', id: '	3	'},
        { key: '	hayil	', termine: '	חַ֫יִל	', senza: '	חיל	', traslitterazione: '	ḥayil	', significato: '	forza, ricchezza, esercito, efficienza	', grammatica: '	n. m.	', altro: '	cstr. חֵיל - pl. ass. חֲיָלִים	', id: '	4	'},
        { key: '	hocmah	', termine: '	חָכְמָה	', senza: '	חכמה	', traslitterazione: '	ḥocmāh	', significato: '	sapienza	', grammatica: '	n. f.	', altro: '	cstr. חָכְמַת - pl. ass. חָכְמוֹת	', id: '	5	'},
        { key: '	hemah	', termine: '	חֶמְאָה	', senza: '	חמאה	', traslitterazione: '	ḥem’āh	', significato: '	cagliata, panna, ricotta	', grammatica: '	n. f.	', altro: '	cstr. חֶמְאַת	', id: '	6	'},
        { key: '	hereb	', termine: '	חֶ֫רֶב	', senza: '	חרב	', traslitterazione: '	ḥéreḇ	', significato: '	spada	', grammatica: '	n. f.	', altro: '	cstr. חֶ֫רֶב - pl. ass. חֲרָבוֹת - cstr. חַרְבוֹת	', id: '	7	'},
        { key: '	hasah	', termine: '	חָשָׁה	', senza: '	חשׁה	', traslitterazione: '	ḥāšāh	', significato: '	essere silenzioso, inattivo, immobile	', grammatica: '	v.	', altro: '	Hifil, ptc. s. m. מַחְשֶׁה - pl. m. מַחְשִׁים	', id: '	8	'},
        { key: '	hag	', termine: '	חַג	', senza: '	חג	', traslitterazione: '	ḥag̱	', significato: '	festa, festa del pellegrinaggio	', grammatica: '	n. m.	', altro: '	con articolo הֶחָג - cstr. חַג - pl. חַגִּים	', id: '	9	'}

      ];
      
      var hethtutorials_keys = {};

      for (var i=0;i<hethtutorials_list.length;i++){
        hethtutorials_keys[hethtutorials_list[i].key] = hethtutorials_list[i];
      }

    return {
        list: hethtutorials_list,
        keys: hethtutorials_keys
    }

}]);