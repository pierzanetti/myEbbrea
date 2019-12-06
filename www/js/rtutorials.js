/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('rtutorials', [])

.service('Rtutorials', [function(){
    
    var rtutorials_list = [

        { key: '	r	', termine: '	ר	', senza: '	ר	', traslitterazione: '	r	', significato: '	resh	', grammatica: '		', altro: '		', id: '	1	'},
        { key: '	ros	', termine: '	רֹאשׁ	', senza: '	ראש	', traslitterazione: '	rō’š	', significato: '	testa, cima, capelli della testa; capo, capitale	', grammatica: '	n. m.	', altro: '	cstr. רֹאשׁ - pl. רָאשִׁים - cstr. רָאשֵׁי	', id: '	2	'},
        { key: '	resiyt	', termine: '	רֵאשִׁית	', senza: '	ראשׁית	', traslitterazione: '	rē’šît	', significato: '	principio, primo, inizio	', grammatica: '	n. f.	', altro: '	cstr. רֵאשִׁית o רֵשִׁית	', id: '	3	'},
        { key: '	rab	', termine: '	רַב	', senza: '	רב	', traslitterazione: '	raḇ	', significato: '	molto, molti, grandi	', grammatica: '	agg. m. s.	', altro: '	cstr. רַב - s. f. רַבָּה - cstr. רַבַּת - pl. m. רַבִּים - pl. f. רַבּוֹת	', id: '	4	'},
        { key: '	rabah	', termine: '	רָבָה	', senza: '	רבה	', traslitterazione: '	rāḇāh	', significato: '	essere o diventare molto, moltiplicare	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, moltiplicò, divenne numeroso	', id: '	5	'},
        { key: '	rak	', termine: '	רַךְ	', senza: '	רך	', traslitterazione: '	raḵ	', significato: '	tenero, delicato, morbido, debole	', grammatica: '	agg. m.s.	', altro: '	cstr. רַךְ - f. s. רַכָּה - pl. m. רַכִּים- pl. f. רַכּוֹת	', id: '	6	'},
        { key: '	ra‘	', termine: '	רַע	', senza: '	רע	', traslitterazione: '	ra‘	', significato: '	cattivo, malvagio, maligno, spiacevole	', grammatica: '	agg. m. s.	', altro: '	pl. ass. רָעִים - cstr. רָעֵי - s. f. רָעָה - pl. ass. רָעוֹת - 	', id: '	7	'},
        { key: '	raah	', termine: '	רָעָה	', senza: '	רעה	', traslitterazione: '	rā‘āh	', significato: '	male, miseria, angoscia, ferite	', grammatica: '	n. f.	', altro: '	cstr. רָעַת - pl. ass.  רָעוֹת oppure רָעֹת 	', id: '	8	'},
        { key: '	raq	', termine: '	רַק	', senza: '	רק	', traslitterazione: '	raq	', significato: '	solamente	', grammatica: '	avv.	', altro: '	con forza restrittiva: solamente, assolutamente, sicuramente	', id: '	9	'},
        { key: '	rasas	', termine: '	רָצַץ	', senza: '	רצץ	', traslitterazione: '	rāṣaṣ	', significato: '	schiacciare, incrinare, opprimere	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, schiacciò; רָצוּץ part. pass. m. s. ass.	', id: '	10	'}

      ];
      
      var rtutorials_keys = {};

      for (var i=0;i<rtutorials_list.length;i++){
        rtutorials_keys[rtutorials_list[i].key] = rtutorials_list[i];
      }

    return {
        list: rtutorials_list,
        keys: rtutorials_keys
    }

}]);