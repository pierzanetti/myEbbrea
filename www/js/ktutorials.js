/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('ktutorials', [])

.service('Ktutorials', [function(){
    
    var ktutorials_list = [
        
        { key: '	kaf	', termine: '	כ	', senza: '	כ	', traslitterazione: '	ḵ	', significato: '		', grammatica: '		', altro: '		', id: '	1	'},
        { key: '	kul	', termine: '	כּוּל	', senza: '	כול	', traslitterazione: '	kûl	', significato: '	comprendere, contenere	', grammatica: '	v.	', altro: '	oppure כּוֹל; cstr. כֹּל; con maqqef כָל־ 	', id: '	2	'},
        { key: '	kol	', termine: '	כֹּל	', senza: '	כל	', traslitterazione: '	kōl	', significato: '	tutto, ogni, intero	', grammatica: '	n. m. 	', altro: '		', id: '	3	'},
        { key: '	ken	', termine: '	כֵּן	', senza: '	כן	', traslitterazione: '	kēn	', significato: '	così	', grammatica: '	avv.	', altro: '	cstr. כִּסֵּא	', id: '	4	'},
        { key: '	kisse’	', termine: '	כִּסֵּא	', senza: '	כסא	', traslitterazione: '	kissē’	', significato: '	trono, posto d’onore	', grammatica: '	n. m.	', altro: '		', id: '	5	'},
        { key: '	kesep	', termine: '	כֶּ֫סֶף	', senza: '	כסף	', traslitterazione: '	késep̱	', significato: '	argento, denaro	', grammatica: '	n. m.	', altro: '	cstr. כֶּ֫רֶם - pl. ass. כְּרָמִים - cstr. כַּרְמֵי	', id: '	6	'},
        { key: '	kerem	', termine: '	כֶּ֫רֶם	', senza: '	כרם	', traslitterazione: '	kérem	', significato: '	vigna	', grammatica: '	n. m.	', altro: '	Qal, qatal, 3 ms, scrisse; ptc. att. כֹּתֵב	', id: '	7	'},
        { key: '	katab	', termine: '	כָּתַב	', senza: '	כתב	', traslitterazione: '	kāṯaḇ	', significato: '	scrivere	', grammatica: '	v. 	', altro: '		', id: '	8	'}

    ];
      
      var ktutorials_keys = {};

      for (var i=0;i<ktutorials_list.length;i++){
        ktutorials_keys[ktutorials_list[i].key] = ktutorials_list[i];
      }

    return {
        list: ktutorials_list,
        keys: ktutorials_keys
    }

}]);