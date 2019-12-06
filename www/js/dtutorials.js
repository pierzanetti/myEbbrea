/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('dtutorials', [])

.service('Dtutorials', [function(){
    
    var dtutorials_list = [
  
      { key: '	daleth	', termine: '	ד	', senza: '	ד	', traslitterazione: '	ḏ	', significato: '	dalet	', grammatica: '		', altro: '		', id: '	1	'},
      { key: '	dabar	', termine: '	דָּבַר	', senza: '	דבר	', traslitterazione: '	dāḇar	', significato: '	parlare	', grammatica: '	v.	', altro: '	דַּבֵּר Piel, infinito, parlare	', id: '	2	'},
      { key: '	dabar	', termine: '	דָּבָר	', senza: '	דבר	', traslitterazione: '	dāḇār	', significato: '	parola, discorso, fatto	', grammatica: '	n. m. 	', altro: '	cstr. דְּבַר - pl. ass. דְּבָרִים - cstr. דִּבְרֵי	', id: '	3	'},
      { key: '	debas	', termine: '	דְּבַשׁ	', senza: '	דבשׁ	', traslitterazione: '	deḇaš	', significato: '	miele	', grammatica: '	n. m.	', altro: '		', id: '	4	'},
      { key: '	dal	', termine: '	דַּל	', senza: '	דל	', traslitterazione: '	dal	', significato: '	povero, basso, debole, magro	', grammatica: '	agg.	', altro: '	f. s. דַּלָּה - pl. m. דַּלִּים - pl. f. דַּלּוֹת	', id: '	5	'},
      { key: '	derek	', termine: '	דֶּ֫רֶךְ	', senza: '	דרך	', traslitterazione: '	dérek	', significato: '	strada, via, distanza, viaggio	', grammatica: '	n. m. (o f.)	', altro: '	cstr. דֶּ֫רֶךְ - du. דְּרָכַ֫יִם - pl. ass. דְּרָכִים - cstr. דַּרְכֵי	', id: '	6	'},
      { key: '	daras	', termine: '	דָּרַשׁ	', senza: '	דרשׁ	', traslitterazione: '	dāraš	', significato: '	consulta, informarsi, cercare, ricorre a	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, consultò; impv. ms דְּרָשׁ 	', id: '	7	'}

      ];
      
      var dtutorials_keys = {};

      for (var i=0;i<dtutorials_list.length;i++){
        dtutorials_keys[dtutorials_list[i].key] = dtutorials_list[i];
      }

    return {
        list: dtutorials_list,
        keys: dtutorials_keys
    }

}]);