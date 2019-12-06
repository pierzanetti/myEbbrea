/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('mtutorials', [])

.service('Mtutorials', [function(){
    
    var mtutorials_list = [

        { key: '	m	', termine: '	מ	', senza: '	מ	', traslitterazione: '	m	', significato: '	mem	', grammatica: '		', altro: '		', id: '	1	'},
        { key: '	maas	', termine: '	מָאַס	', senza: '	מאס	', traslitterazione: '	mā’as	', significato: '	rifiutare, rigettare	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, rigettò	', id: '	2	'},
        { key: '	mut	', termine: '	מוּת	', senza: '	מות	', traslitterazione: '	mûṯ	', significato: '		', grammatica: '	v.	', altro: '	מֵת: Qal, qatal, 3 ms, morì;	', id: '	3	'},
        { key: '	mayim	', termine: '	מַ֫יִם	', senza: '	מים	', traslitterazione: '	máyim	', significato: '	acqua	', grammatica: '	n .m.	', altro: '	(solo plurale) - pl. cstr. מֵי o מֵימֵי	', id: '	4	'},
        { key: '	malak	', termine: '	מַלְאָךְ	', senza: '	מלאך	', traslitterazione: '	mal’āḵ	', significato: '	messaggero, angelo	', grammatica: '	n. m.	', altro: '	cstr. מַלְאַךְ - pl. מַלְאָכִים	', id: '	5	'},
        { key: '	milhamah	', termine: '	מִלְחָמָה	', senza: '	מלחמה	', traslitterazione: '	milḥāmāh	', significato: '	guerra, battaglia	', grammatica: '	n. f.	', altro: '	cstr. מִלְחֶ֫מֶת	', id: '	6	'},
        { key: '	melek	', termine: '	מֶ֫לֶךְ	', senza: '	מלך	', traslitterazione: '	méleḵ	', significato: '	re, sovrano	', grammatica: '	n. m. 	', altro: '	pl. מְלָכִים - pl. cstr. מָלְכֵי	', id: '	7	'},
        { key: '	miqdas	', termine: '	מִקְדָּשׁ	', senza: '	מקדש	', traslitterazione: '	miqdāš	', significato: '	santuario, luogo sacro	', grammatica: '	n. m.	', altro: '	cstr. מִקְדַּשׁ - pl. מִקְדָּשִׁים	', id: '	8	'},
        { key: '	masah	', termine: '	מָשַׁח	', senza: '	משח	', traslitterazione: '	māšaḥ	', significato: '	ungere, spalmare, consacrare	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, unse, spalmò, consacrò (ossia ungere con l’uso di olio versato sulla testa. È mettere solennemente a parte, scegliere una persona per un ufficio particolare); מָשׁ֫וּחַ Qal, part. pass. ass. m. s., essere unto	', id: '	9	'},
        { key: '	masiyah	', termine: '	מַשִׁיחַ	', senza: '	משיח	', traslitterazione: '	mašîaḥ	', significato: '	unto, consacrato, messia	', grammatica: '	n. m.	', altro: '	cstr. מְשִׁיחַ	', id: '	10	'},
        { key: '	mispat	', termine: '	מִשְׁפָּט	', senza: '	משפט	', traslitterazione: '	mišpāṭ	', significato: '	giudizio (l’atto di; un verdetto giudiziale), giustizia, rettitudine	', grammatica: '	n. m. 	', altro: '	cstr. מִשְׁפַּט - pl. מִשְׁפָּטִים	', id: '	11	'}
        

    ];
      
      var mtutorials_keys = {};

      for (var i=0;i<mtutorials_list.length;i++){
        mtutorials_keys[mtutorials_list[i].key] = mtutorials_list[i];
      }

    return {
        list: mtutorials_list,
        keys: mtutorials_keys
    }

}]);