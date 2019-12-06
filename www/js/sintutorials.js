/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('sintutorials', [])

.service('Sintutorials', [function(){
    
    var sintutorials_list = [

      { key: '	sin	', termine: '	שׂ	', senza: '	ש	', traslitterazione: '	ś	', significato: '	śin	', grammatica: '		', altro: '		', id: '	1	'},
      { key: '	sadeh	', termine: '	שָׂדֶה	', senza: '	שדה	', traslitterazione: '	śāḏeh	', significato: '	campo, regione	', grammatica: '	n. m.	', altro: '	cstr. שְׂדֵה - pl. ass. שָׂדוֹת - cstr. שְׂדוֹת ,שְׂדֵי	', id: '	2	'},
      { key: '	sane’	', termine: '	שָׂנֵא	', senza: '	שנא	', traslitterazione: '	śānē’	', significato: '	odiare	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, odiò	', id: '	3	'}      

      ];
      
      var sintutorials_keys = {};

      for (var i=0;i<sintutorials_list.length;i++){
        sintutorials_keys[sintutorials_list[i].key] = sintutorials_list[i];
      }

    return {
        list: sintutorials_list,
        keys: sintutorials_keys
    }

}]);