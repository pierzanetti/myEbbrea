/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('g1tutorials', [])

.service('G1tutorials', [function(){
    
    var g1tutorials_list = [
        {
            key: 'Gòng róng',
            termine: '共融',
            traslitterazione: 'Gòng róng',
            significato: 'Communion',
            grammatica: '求你藉這共融聖事',
            altro: '',
            id: '1'
        },
          
        {
            key: 'Guānwàng',
            termine: '觀望',
            traslitterazione: 'Guānwàng',
            significato: 'Fermarsi a osservare',
            grammatica: '民眾站著觀望;',
            altro: '',
            id: '2'
        },
       
        {
          key: 'Guīyú',
          termine: '歸於',
          traslitterazione: 'Guīyú',
          significato: 'Attribution',
          grammatica: '歸於自己權下',
          altro: '',
          id: '3'
        }
        
       
        
      ];
      
      var g1tutorials_keys = {};

      for (var i=0;i<g1tutorials_list.length;i++){
        g1tutorials_keys[g1tutorials_list[i].key] = g1tutorials_list[i];
      }

    return {
        list: g1tutorials_list,
        keys: g1tutorials_keys
    }

}]);