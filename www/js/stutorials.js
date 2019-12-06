/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('stutorials', [])

.service('Stutorials', [function(){
    
    var stutorials_list = [

      { key: '	samek	', termine: '	ס	', senza: '	ס	', traslitterazione: '	s	', significato: '	samek	', grammatica: '		', altro: '		', id: '	1	'},
      { key: '	sus	', termine: '	סוּס	', senza: '	סוס	', traslitterazione: '	sûs	', significato: '	cavallo	', grammatica: '	n. m.	', altro: '	cstr. סוּס - pl. ass. סוּסִים - pl. cstr. סוּסֵי	', id: '	2	'},
      { key: '	susah	', termine: '	סוּסָה	', senza: '	סוסה	', traslitterazione: '	sûsāh	', significato: '	cavalla	', grammatica: '	n. f.	', altro: '	pl. ass. סוּסוֹת	', id: '	3	'},
      { key: '	seper	', termine: '	סֵ֫פֶר	', senza: '	ספר	', traslitterazione: '	sḗp̱er	', significato: '	libro, documento, missiva, scrittura	', grammatica: '	n. m.	', altro: '	pl. סְפָרִים	', id: '	4	'},
      { key: '	sariys	', termine: '	סָרִיס	', senza: '	סריס	', traslitterazione: '	sārîs	', significato: '	eunuco, capo, ufficiale	', grammatica: '	n. m.	', altro: '	cstr. סְרִיס - pl. ass. סָרִיסִים - pl. cstr.סְרִיסֵי	', id: '	5	'}
      
      ];
      
      var stutorials_keys = {};

      for (var i=0;i<stutorials_list.length;i++){
        stutorials_keys[stutorials_list[i].key] = stutorials_list[i];
      }

    return {
        list: stutorials_list,
        keys: stutorials_keys
    }

}]);