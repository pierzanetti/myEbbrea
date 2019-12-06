/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('ltutorials', [])

.service('Ltutorials', [function(){
    
    var ltutorials_list = [
       
        { key: '	lamed	', termine: '	ל	', senza: '	ל	', traslitterazione: '	l	', significato: '	làmed	', grammatica: '		', altro: '		', id: '	1	'},
        { key: '	labas	', termine: '	לָבַשׁ	', senza: '	לבשׁ	', traslitterazione: '	lāḇaš	', significato: '	indossare, vestire	', grammatica: '	v.	', altro: '	oppure לָבֵשׁ Qal, qatal, 3 ms, vestì, indossò	', id: '	2	'},
        { key: '	lehem	', termine: '	לֶ֫חֶם	', senza: '	לחם	', traslitterazione: '	léḥem	', significato: '	pane, cibo	', grammatica: '	n. m.	', altro: '	(senza pl.) cstr. לֶחֶם	', id: '	3	'},
        { key: '	laham	', termine: '	לָחַם	', senza: '	לחם	', traslitterazione: '	lāḥam	', significato: '	combattere, attaccare	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, combatté, attaccò	', id: '	4	'},
        { key: '	lahas	', termine: '	לָחַץ	', senza: '	לחץ	', traslitterazione: '	lāḥaṣ	', significato: '	premere, pressare, opprimere	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, pressò, oppresse;	', id: '	5	'},
        { key: '	lamad	', termine: '	לָמַד	', senza: '	למד	', traslitterazione: '	lāmaḏ	', significato: '	imparare, insegnare, esercitarsi in	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, imparò	', id: '	6	'},
        { key: '	laqah	', termine: '	לָקַח	', senza: '	לקח	', traslitterazione: '	lāqaḥ	', significato: '	prendere, afferrare, conquistare	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, prese	', id: '	7	'}        

    ];
      
      var ltutorials_keys = {};

      for (var i=0;i<ltutorials_list.length;i++){
        ltutorials_keys[ltutorials_list[i].key] = ltutorials_list[i];
      }

    return {
        list: ltutorials_list,
        keys: ltutorials_keys
    }

}]);