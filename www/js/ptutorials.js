/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('ptutorials', [])

.service('Ptutorials', [function(){
    
    var ptutorials_list = [
        
        { key: '	pe	', termine: '	פ	', senza: '	פ	', traslitterazione: '	p̱	', significato: '		', grammatica: '		', altro: '		', id: '	1	'},
        { key: '	peh	', termine: '	פֶּה	', senza: '	פה	', traslitterazione: '	peh	', significato: '	bocca	', grammatica: '	n. m.	', altro: '	cstr. פִּי - pl. פִּיּוֹת	', id: '	2	'},
        { key: '	poh	', termine: '	פֹּה	', senza: '	פה	', traslitterazione: '	pōh	', significato: '	qui	', grammatica: '	avv.	', altro: '	oppure פּוֹ, פֹּא	', id: '	3	'},
        { key: '	paneh	', termine: '	פָּנֶה	', senza: '	פנה	', traslitterazione: '	pāneh	', significato: '	viso, faccia; davanti, di fronte	', grammatica: '	n. m. o f. o avv.	', altro: '	viso, faccia;  oppure come  avv. di fronte; pl. פָּנִים - cstr. פְּנֵי	', id: '	4	'}
        
      ];
      
      var ptutorials_keys = {};

      for (var i=0;i<ptutorials_list.length;i++){
        ptutorials_keys[ptutorials_list[i].key] = ptutorials_list[i];
      }

    return {
        list: ptutorials_list,
        keys: ptutorials_keys
    }

}]);