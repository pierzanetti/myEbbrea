/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('ntutorials', [])

.service('Ntutorials', [function(){
    
    var ntutorials_list = [

      { key: '	n	', termine: '	נ	', senza: '	נ	', traslitterazione: '	n	', significato: '	nun	', grammatica: '		', altro: '		', id: '	1	'},
      { key: '	naba’	', termine: '	נָבָא	', senza: '	נבא	', traslitterazione: '	nāḇā’	', significato: '	profetizzare	', grammatica: '	v.	', altro: '	יִתְנַבֵּא Hithpael, yiqtol, 3 ms, profetizzerà (nelle forme più antiche, estasi religiosa con o senza canto e musica; in seguito, istruzione essenzialmente religiosa, con previsione occasionale);	', id: '	2	'},
      { key: '	nabi’	', termine: '	נָבִיא	', senza: '	נביא	', traslitterazione: '	nāḇî’	', significato: '	profeta, uomo ispirato, portavoce, relatore	', grammatica: '	n. m.	', altro: '	pl. נְבִיאִים oppure נְבִאִים	', id: '	3	'},
      { key: '	nebiyah	', termine: '	נְבִיאָה	', senza: '	נביאה	', traslitterazione: '	neḇî’āh	', significato: '	profetessa	', grammatica: '	n. f.	', altro: '		', id: '	4	'},
      { key: '	neged	', termine: '	נֶגֶד	', senza: '	נגד	', traslitterazione: '	neg̱eḏ	', significato: '	di fronte a	', grammatica: '	particella preposizionale	', altro: '		', id: '	5	'},
      { key: '	nagad	', termine: '	נָגַד	', senza: '	נגד	', traslitterazione: '	nāg̱aḏ	', significato: '	dichiarare, dire	', grammatica: '	v.	', altro: '	Hiphil, qatal, 3 ms, annunciò	', id: '	6	'},
      { key: '	nagah	', termine: '	נָגַהּ	', senza: '	נגה	', traslitterazione: '	nāg̱ah	', significato: '	splendere, brillare, rifulgere	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, brillò, splendette	', id: '	7	'},
      { key: '	nahar1	', termine: '	נָהַר	', senza: '	נהר	', traslitterazione: '	nāhar	', significato: '	scorrere, affluire	', grammatica: '	v.	', altro: '	נָהֲרוּ Qal, qatal 3plc, affluirono	', id: '	8	'},
      { key: '	nahar	', termine: '	נָהָר	', senza: '	נהר	', traslitterazione: '	nāhār	', significato: '	fiume, ruscello, corso d’acqua	', grammatica: '	n. m.	', altro: '	cstr. נְהַר - pl. m. נְהָרִים  (ma anche נְהָר(וֹ)ת) - pl. cstr. נַהֲרֵי (ma anche  נַהֲרוֹת)	', id: '	9	'},
      { key: '	nua‘	', termine: '	נוּעַ	', senza: '	נוע	', traslitterazione: '	nûa‘	', significato: '	tremare, agitare, vacillare,	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, tremò	', id: '	10	'},
      { key: '	natas	', termine: '	נָטַשׁ	', senza: '	נטש	', traslitterazione: '	nāṭaš	', significato: '	abbandonare, rigettare, lasciare, permettere	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, abbandonò, rigettò	', id: '	11	'},
      { key: '	naar	', termine: '	נַ֫עַר	', senza: '	נער	', traslitterazione: '	ná‛ar	', significato: '	giovane, ragazzo, giovinetto; usato anche nel senso di domestico, servitore	', grammatica: '	n. m.	', altro: '	pl. ass. נְעָרִים - cstr. נַעֲרֵי	', id: '	12	'},
      { key: '	naarah	', termine: '	נַעֲרָה	', senza: '	נערה	', traslitterazione: '	na‛arāh	', significato: '	giovane, ragazza, giovinetta,; usata anche nel senso di domestica, servitora	', grammatica: '	n. f. 	', altro: '	pl. ass. נְעָרוֹת - cstr. נַעֲרוֹת	', id: '	13	'},
      { key: '	nasa’	', termine: '	נָשָׂא	', senza: '	נשא	', traslitterazione: '	nāśā’	', significato: '	sollevare, prendere, portare	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, sollevò	', id: '	14	'}      

    ];
      
      var ntutorials_keys = {};

      for (var i=0;i<ntutorials_list.length;i++){
        ntutorials_keys[ntutorials_list[i].key] = ntutorials_list[i];
      }

    return {
        list: ntutorials_list,
        keys: ntutorials_keys
    }

}]);