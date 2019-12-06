/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('ztutorials', [])

.service('Ztutorials', [function(){
    
    var ztutorials_list = [
        
        { key: '	zain	', termine: '	ז	', senza: '	ז	', traslitterazione: '	zain	', significato: '		', grammatica: '		', altro: '		', id: '	1	'},
        { key: '	zahab	', termine: '	זָהָב	', senza: '	זהב	', traslitterazione: '	zāhāḇ	', significato: '	oro	', grammatica: '	n. m.	', altro: '	cstr. זְהַב	', id: '	2	'},
        { key: '	zakar	', termine: '	זָכַר	', senza: '	זכר	', traslitterazione: '	zāḵar	', significato: '	ricordare	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, ricordò, custodì, riportò alla mente, richiamò un’esperienza o un sogno;	', id: '	3	'},
        { key: '	zanah	', termine: '	זָנָה	', senza: '	זנה	', traslitterazione: '	zānāh	', significato: '	prostituirsi, fornicare	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, si prostituì, fornicò;	', id: '	4	'},
        { key: '	zenunym	', termine: '	זְנוּנִים	', senza: '	זנונים	', traslitterazione: '	zenûnîm	', significato: '	(pl. astratto) fornicazione	', grammatica: '	n. m.	', altro: '	cstr. זְנוּנֵי	', id: '	5	'},
        { key: '	zaqen	', termine: '	זָקֵן	', senza: '	זקן	', traslitterazione: '	zāqēn	', significato: '	vecchio/a, anziano/a (di una città) 	', grammatica: '	agg. (usato come sost.)	', altro: '	cstr. זְקַן -  pl. m. זְקֵנִים - pl. f. זְקֵנוֹת - pl. m. cstr. זִקְנֵי	', id: '	6	'},
        { key: '	zera	', termine: '	זֶ֫רַע	', senza: '	זרע	', traslitterazione: '	zéra‛	', significato: '	semina, seme, prole, discendenza	', grammatica: '	n. m. 	', altro: '	cstr. זֶרַע - 	', id: '	7	'}
        
      ];
      
      var ztutorials_keys = {};

      for (var i=0;i<ztutorials_list.length;i++){
        ztutorials_keys[ztutorials_list[i].key] = ztutorials_list[i];
      }

    return {
        list: ztutorials_list,
        keys: ztutorials_keys
    }

}]);