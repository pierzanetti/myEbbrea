/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('xtutorials', [])

.service('Xtutorials', [function(){
    
    var xtutorials_list = [
      { key: '	s	', termine: '	צ	', senza: '	צ	', traslitterazione: '	ṣ	', significato: '		', grammatica: '		', altro: '		', id: '	1	'},
      { key: '	son	', termine: '	צֹאן	', senza: '	צאן	', traslitterazione: '	ṣō’n	', significato: '	pecore, capre	', grammatica: '	n. coll. f. 	', altro: '	(senza pl.) termine collettivo per bestiame piccolo (pecore, capre)	', id: '	2	'},
      { key: '	saddiq	', termine: '	צַדִּיק	', senza: '	צדיק	', traslitterazione: '	ṣadîq	', significato: '	giusto	', grammatica: '	agg.	', altro: '	pl. ass. צַדִּיקִים	', id: '	3	'},
      { key: '	sedeq	', termine: '	צֶ֫דֶק	', senza: '	צדק	', traslitterazione: '	ṣéḏeq	', significato: '	il diritto, la giustizia, l’equità	', grammatica: '	n. m.	', altro: '	giustizia, giustezza: il diritto (naturale, morale o legale); anche (astrattamente) equità o (figurativamente) prosperità	', id: '	4	'},
      { key: '	sedaqah	', termine: '	צְדָקָה	', senza: '	צדקה	', traslitterazione: '	ṣeḏāqāh	', significato: '	giustizia (oggettiva), rettitudine (soggettiva)	', grammatica: '	n. f.	', altro: '	cstr. צִדְקַת - pl. ass. צְדָקוֹת - pl. cstr. צִדְקוֹת	', id: '	5	'},
      { key: '	same’	', termine: '	צָמֵא	', senza: '	צמא	', traslitterazione: '	ṣāmē’	', significato: '	assetato	', grammatica: '	agg.	', altro: '	s. f. צְמֵאָה - pl. m. צְמֵאִים - pl. f. צְמֵאוֹת	', id: '	6	'},
      { key: '	saaq	', termine: '	צָעַק	', senza: '	צעק	', traslitterazione: '	ṣā‛aq	', significato: '	gridare, urlare	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, gridò (nell’angoscia), chiamò ad alta voce; ptc. att. s. m. צׂעֵק - ptc. att. pl. m. צֹעֲקִים - 	', id: '	7	'},
      { key: '	salmawet	', termine: '	צַלְמָ֫וֶת	', senza: '	צלמות	', traslitterazione: '	ṣalmāweṯ	', significato: '	ombra di morte, profonda tenebra, tenebra angosciante	', grammatica: '	n. m.	', altro: '		', id: '	8	'}
        
      ];
      
      var xtutorials_keys = {};

      for (var i=0;i<xtutorials_list.length;i++){
        xtutorials_keys[xtutorials_list[i].key] = xtutorials_list[i];
      }

    return {
        list: xtutorials_list,
        keys: xtutorials_keys
    }

}]);