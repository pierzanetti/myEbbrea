/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('gtutorials', [])

.service('Gtutorials', [function(){
    
    var gtutorials_list = [
      
      { key: '	g	', termine: '	ג	', senza: '	ג	', traslitterazione: '	g̱	', significato: '	ghìmel	', grammatica: '		', altro: '		', id: '	1	'},
      { key: '	gadol	', termine: '	גָּדוֹל	', senza: '	גדול	', traslitterazione: '	gāḏôl	', significato: '	grande, importante	', grammatica: '	agg.	', altro: '	cstr. גְּדוֹל - s. f. גְּדוֹלָה -  pl. m. גְּדוֹלִים - pl. f. גְּדוֹלוֹת	', id: '	2	'},
      { key: '	galah	', termine: '	גָּלָה	', senza: '	גלה	', traslitterazione: '	gālāh	', significato: '	scoprire, rimuovere	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, scoprì, rimosse, dislocò, partì, andò in esilio;	', id: '	3	'},
      { key: '	gillayon	', termine: '	גִּלָּיוֹן	', senza: '	גליון	', traslitterazione: '	gillāyôn	', significato: '	tavolo, tavoletta	', grammatica: '	n. m.	', altro: '	pl. con articolo הַגִּלְיֹנִים	', id: '	4	'},
      { key: '	gamal	', termine: '	גָּמָל	', senza: '	גמל	', traslitterazione: '	gāmāl	', significato: '	cammello	', grammatica: '	n. m.	', altro: '	cstr. גְּמָל - pl. irreg. גְּמַלִּים - cstr. גְּמַלֵּי	', id: '	5	'},
      { key: '	gannab	', termine: '	גַּנָּב	', senza: '	גנב	', traslitterazione: '	gannāḇ	', significato: '	ladro	', grammatica: '	n. m.	', altro: '	pl. גַּנָּבִים	', id: '	6	'}
  
      ];
      
      var gtutorials_keys = {};

      for (var i=0;i<gtutorials_list.length;i++){
        gtutorials_keys[gtutorials_list[i].key] = gtutorials_list[i];
      }

    return {
        list: gtutorials_list,
        keys: gtutorials_keys
    }

}]);