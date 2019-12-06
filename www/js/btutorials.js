/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('btutorials', [])

.service('Btutorials', [function(){
    
    var btutorials_list = [
        
        { key: '	b	', termine: '	ב	', senza: '	ב	', traslitterazione: '	ḇ	', significato: '	beth	', grammatica: '		', altro: '		', id: '	1	'},
        { key: '	beged	', termine: '	בֶּ֫גֶד	', senza: '	בגד	', traslitterazione: '	beḡeḏ	', significato: '	indumento, mantello	', grammatica: '	n. m.	', altro: '	pl. בְּגָדִים - cstr. בִּגְדֵי	', id: '	2	'},
        { key: '	boa	', termine: '	בּוֹא	', senza: '	בוא	', traslitterazione: '	bô’	', significato: '	venire, entrare, andare	', grammatica: '	v.	', altro: '	בָּא Qal, qatal, 3 ms, entrò, venne, andò	', id: '	3	'},
        { key: '	bahar	', termine: '	בָּחַר	', senza: '	בחר	', traslitterazione: '	bāḥar	', significato: '	scegliere	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, scelse, ha scelto	', id: '	4	'},
        { key: '	bayin	', termine: '	בַּ֫יִן	', senza: '	בין	', traslitterazione: '	báyin	', significato: '	distanza, spazio tra, intervallo, tra	', grammatica: '	sostantivo o prep.	', altro: '	cstr. בֵּין	', id: '	5	'},
        { key: '	bayit	', termine: '	בַּ֫יִת	', senza: '	בית	', traslitterazione: '	báyit	', significato: '	casa, abitazione	', grammatica: '	n. m.	', altro: '	cstr. בֵּית - pl. בָּֽתִּים - cstr. בָּתֵּי	', id: '	6	'},
        { key: '	ben	', termine: '	בֵּן	', senza: '	בן	', traslitterazione: '	bēn	', significato: '	figlio	', grammatica: '	n. m.	', altro: '	cstr. בֵּן - pl. בָּנִים - cstr. בְּנֵי	', id: '	7	'},
        { key: '	barah	', termine: '	בָּרַח	', senza: '	ברח	', traslitterazione: '	bāraḥ	', significato: '	fuggire, scappare	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, fuggì, scappò; 	', id: '	8	'},
        { key: '	betulah	', termine: '	בְּתוּלָה	', senza: '	בתולה	', traslitterazione: '	beṯûlāh	', significato: '	vergine	', grammatica: '	n. f.	', altro: '	cstr. בְּתוּלַת - pl. f. בְּתוּלוֹת	', id: '	9	'}

      ];
      
      var btutorials_keys = {};

      for (var i=0;i<btutorials_list.length;i++){
        btutorials_keys[btutorials_list[i].key] = btutorials_list[i];
      }

    return {
        list: btutorials_list,
        keys: btutorials_keys
    }

}]);