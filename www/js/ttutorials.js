/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('ttutorials', [])

.service('Ttutorials', [function(){
    
    var ttutorials_list = [
       
      { key: '	tau	', termine: '	ת	', senza: '	ת	', traslitterazione: '	ṯ	', significato: '	tàu	', grammatica: '		', altro: '		', id: '	1	'},
      { key: '	torah	', termine: '	תּוֹרָה	', senza: '	תורה	', traslitterazione: '	tôrāh	', significato: '	istruzione, direzione, legge, tôrāh	', grammatica: '	n. f.	', altro: '	cstr. תּוֹרַת - pl. ass. תּוֹרוֹת	', id: '	2	'},
      { key: '	tamak	', termine: '	תָּמַךְ	', senza: '	תמך	', traslitterazione: '	tāmaḵ	', significato: '	afferrare, supportare, sostenere, raggiungere	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, sostenne. A volte è seguito dalla preposizione   ב che regge il complemento oggetto o l’oggetto diretto 	', id: '	3	'}      
      
      ];
      
      var ttutorials_keys = {};

      for (var i=0;i<ttutorials_list.length;i++){
        ttutorials_keys[ttutorials_list[i].key] = ttutorials_list[i];
      }

    return {
        list: ttutorials_list,
        keys: ttutorials_keys
    }

}]);