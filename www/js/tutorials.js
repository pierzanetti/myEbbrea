/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('tutorials', [])

.service('Tutorials', [function(){
    
    var tutorials_list = [
        
        { key: '	a	', termine: '	א	', senza: '	א	', traslitterazione: '	’	', significato: '	’àlef	', grammatica: '		', altro: '		', id: '	1	'},
        { key: '	ab	', termine: '	אָב	', senza: '	אב	', traslitterazione: '	’āḇ	', significato: '	padre	', grammatica: '	n. m.	', altro: '	cstr. אַב - pl. m. אָבוֹת - cstr. אֲבוֹת	', id: '	2	'},
        { key: '	adamah	', termine: '	אֲדָמָה	', senza: '	אדמה	', traslitterazione: '	’aḏāmāh	', significato: '	suolo, terra (in contrasto con l’acqua), territorio, argilla	', grammatica: '	n. f.	', altro: '	cstr. אַדְמַת - pl. אֲדָמוֹת	', id: '	3	'},
        { key: '	or	', termine: '	אוֹר	', senza: '	אור	', traslitterazione: '	’ôr	', significato: '	luce	', grammatica: '	n. f.	', altro: '	cstr. אוֹר - pl. ass. אוֹרִים	', id: '	4	'},
        { key: '	ot	', termine: '	אוֹת	', senza: '	אות	', traslitterazione: '	’ôṯ	', significato: '	segno	', grammatica: '	n. m.	', altro: '	pl. ass. אוֹתוֹת	', id: '	5	'},
        { key: '	ah	', termine: '	אָח	', senza: '	אח	', traslitterazione: '	’āḥ	', significato: '	fratello	', grammatica: '	n. m.	', altro: '	cstr. אֲחִי - pl. m. אַחִים - cstr. אֲחֵי	', id: '	6	'},
        { key: '	ehad	', termine: '	אֶחָד	', senza: '	אחד	', traslitterazione: '	’eḥāḏ	', significato: '	uno	', grammatica: '	agg. numerale	', altro: '	cstr. אַחַד	', id: '	7	'},
        { key: '	eykah	', termine: '	אֵיכָה	', senza: '	איכה	', traslitterazione: '	’êḵāh	', significato: '	come? come mai?	', grammatica: '	particella interrogativa	', altro: '		', id: '	8	'},
        { key: '	eyn	', termine: '	אֵין	', senza: '	אין	', traslitterazione: '	’ên	', significato: '	non c’è, non ci sono, non esiste	', grammatica: '	particella avverbiale di negazione	', altro: '		', id: '	9	'},
        { key: '	ays	', termine: '	אִישׁ	', senza: '	אישׁ	', traslitterazione: '	’îš	', significato: '	uomo, marito, maschio	', grammatica: '	n. m.	', altro: '	cstr. אִישׁ - pl. ass. אֲנָשִׁים - cstr. אַנְשֵׁי	', id: '	10	'},
        { key: '	ak	', termine: '	אַךְ	', senza: '	אך	', traslitterazione: '	’aḵ	', significato: '	certamente, di certo, sicuramente	', grammatica: '	particella avverbiale di affermazione	', altro: '		', id: '	11	'},
        { key: '	akal	', termine: '	אָכַל	', senza: '	אכל	', traslitterazione: '	’āḵal	', significato: '	mangiare	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, mangiò; ptc. att. אֹכֵל;	', id: '	12	'},
        { key: '	ael	', termine: '	אֶל	', senza: '	אל	', traslitterazione: '	’el	', significato: '	a, verso	', grammatica: '	prep. di moto al luogo, di direzione	', altro: '		', id: '	13	'},
        { key: '	aim	', termine: '	אִם	', senza: '	אם	', traslitterazione: '	’im	', significato: '	se	', grammatica: '	cong.	', altro: '		', id: '	14	'},
        { key: '	aem	', termine: '	אֵם	', senza: '	אם	', traslitterazione: '	’ēm	', significato: '	madre	', grammatica: '	n.f.	', altro: '		', id: '	15	'},
        { key: '	amar	', termine: '	אָמַר	', senza: '	אמר	', traslitterazione: '	’āmar	', significato: '	dire, pronunciare	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, disse;	', id: '	16	'},
        { key: '	emet	', termine: '	אֱמֶת	', senza: '	אמת	', traslitterazione: '	’æmeṯ	', significato: '	verità, affidabilità, correttezza, fedeltà, costanza, fermezza	', grammatica: '	n. f.	', altro: '	cstr. אֱמֶת	', id: '	17	'},
        { key: '	aesel	', termine: '	אֵ֫צֶל	', senza: '	אצל	', traslitterazione: '	’ḗṣel	', significato: '	vicino, accanto, presso, in prossimità di	', grammatica: '	prep.	', altro: '		', id: '	18	'},
        { key: '	eres	', termine: '	אֶ֫רֶץ	', senza: '	ארץ	', traslitterazione: '	’ereṣ	', significato: '	terra, paese, suolo	', grammatica: '	n. f.	', altro: '	con articolo הָאָ֫רֶץ - pl. אֲרָצוֹת - cstr. אַרְצוֹת	', id: '	19	'},
        { key: '	aissah	', termine: '	אִשָּׁה	', senza: '	אשה	', traslitterazione: '	’iššāh	', significato: '	donna, moglie, femmina	', grammatica: '	n. f.	', altro: '	cstr. אֵשֶׁת - pl. ass. נָשִׁים - cstr. נְשֵׁי	', id: '	20	'}
        
        
      ];
      
      var tutorials_keys = {};

      for (var i=0;i<tutorials_list.length;i++){
        tutorials_keys[tutorials_list[i].key] = tutorials_list[i];
      }

    return {
        list: tutorials_list,
        keys: tutorials_keys
    }

}]);