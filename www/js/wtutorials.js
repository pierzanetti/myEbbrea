/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('wtutorials', [])

.service('Wtutorials', [function(){
    
    var wtutorials_list = [

        { key: '	waw	', termine: '	ו	', senza: '	ו	', traslitterazione: '	w	', significato: '		', grammatica: '		', altro: '		', id: '	1	'},
        { key: '	we	', termine: '	וְ	', senza: '	ו	', traslitterazione: '	we	', significato: '	e [viene prefisso direttamente alla parola seguente]	', grammatica: '	cong.	', altro: '	può assumere la forma וּ û oppure וָ wā	', id: '	2	'}
        
      ];
      
      var wtutorials_keys = {};

      for (var i=0;i<wtutorials_list.length;i++){
        wtutorials_keys[wtutorials_list[i].key] = wtutorials_list[i];
      }

    return {
        list: wtutorials_list,
        keys: wtutorials_keys
    }

}]);