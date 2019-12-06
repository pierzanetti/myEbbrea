/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('hetutorials', [])

.service('Hetutorials', [function(){
    
    var hetutorials_list = [
        
      { key: '	h	', termine: '	ה	', senza: '	ה	', traslitterazione: '	h	', significato: '		', grammatica: '		', altro: '		', id: '	1	'},
      { key: '	ha	', termine: '	הַ ּ 	', senza: '	ה 	', traslitterazione: '	ha	', significato: '	il, lo, la, i, gli, le	', grammatica: '	art. det.	', altro: '	oppure הַ ּ, הַ, הָ, הֶ	', id: '	2	'},
      { key: '  hayah	', termine: '	הָיָה	', senza: '	היה	', traslitterazione: '	hāyāh	', significato: '	essere, diventare	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, fu	', id: '	3	'},
      { key: '	har	', termine: '	הַר	', senza: '	הר	', traslitterazione: '	har	', significato: '	monte, montagna, collina, regione collinare	', grammatica: '	n. m.	', altro: '	con articolo הָהָר - cstr. הַר -  pl. ass. הָרִים - con articolo הֶהָרִים - cstr. הָרֵי	', id: '	4	'},
      { key: '	harah	', termine: '	הרה	', senza: '	הרה	', traslitterazione: '	hārāh	', significato: '	concepire, essere incinta	', grammatica: '	v.	', altro: '		', id: '	5	'},
      { key: '	harah	', termine: '	הָרָה	', senza: '	הרה	', traslitterazione: '	hārāh	', significato: '	incinta, gravida	', grammatica: '	agg. f. s.	', altro: '	cstr. הֲרַת - pl. cstr. הָרוֹת	', id: '	6	'}
  
      ];
      
      var hetutorials_keys = {};

      for (var i=0;i<hetutorials_list.length;i++){
        hetutorials_keys[hetutorials_list[i].key] = hetutorials_list[i];
      }

    return {
        list: hetutorials_list,
        keys: hetutorials_keys
    }

}]);