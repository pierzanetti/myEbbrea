/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('tethtutorials', [])

.service('Tethtutorials', [function(){
    
    var tethtutorials_list = [
        
        { key: '	t	', termine: '	ט	', senza: '	ט	', traslitterazione: '	ṭ	', significato: '		', grammatica: '		', altro: '		', id: '	1	'},
        { key: '	tob	', termine: '	טוֹב	', senza: '	טוב	', traslitterazione: '	ṭôḇ	', significato: '	buono, bello, piacevole	', grammatica: '	agg.	', altro: '	s. f. טוֹבָה - cstr. טוֹבַת - pl. m. טוֹבִים - cstr. טוֹבֵי - pl. f. טוֹבוֹת	', id: '	2	'}

      ];
      
      var tethtutorials_keys = {};

      for (var i=0;i<tethtutorials_list.length;i++){
        tethtutorials_keys[tethtutorials_list[i].key] = tethtutorials_list[i];
      }

    return {
        list: tethtutorials_list,
        keys: tethtutorials_keys
    }

}]);