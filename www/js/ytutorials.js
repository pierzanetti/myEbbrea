/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('ytutorials', [])

.service('Ytutorials', [function(){
    
    var ytutorials_list = [
        
        { key: '	y	', termine: '	י	', senza: '	י	', traslitterazione: '	y	', significato: '		', grammatica: '		', altro: '		', id: '	1	'},
        { key: '	yad	', termine: '	יָד	', senza: '	יד	', traslitterazione: '	yāḏ	', significato: '	mano	', grammatica: '	n. f.	', altro: '	cstr. יַד	', id: '	2	'},
        { key: '	yehudah	', termine: '	יְהוּדָה	', senza: '	יהודה	', traslitterazione: '	yehûḏāh	', significato: '	Giuda	', grammatica: '	nome proprio	', altro: '	di persona, di territorio, di tribù, di nazione	', id: '	3	'},
        { key: '	yehosappat	', termine: '	יְהוֹשָׁפָט	', senza: '	יהושפט	', traslitterazione: '	yehôšāp̱āṭ	', significato: '	Giòsafat	', grammatica: '	n. proprio di persona	', altro: '	Giòsafat, re di Giuda	', id: '	4	'},
        { key: '	yom	', termine: '	יוֹם	', senza: '	יום	', traslitterazione: '	yôm	', significato: '	giorno	', grammatica: '	n. m.	', altro: '	cstr. יוֹם - pl. יָמִים - cstr. יְמֵי	', id: '	5	'},
        { key: '	yakol	', termine: '	יָכֹל	', senza: '	יכל	', traslitterazione: '	yāḵōl	', significato: '	essere in grado	', grammatica: '	v.	', altro: '	oppure יָכוֹל - Qal, qatal, 3 ms, fu in grado, riuscì	', id: '	6	'},
        { key: '	yalad	', termine: '	יָלַד	', senza: '	ילד	', traslitterazione: '	yālaḏ	', significato: '	generare, partorire	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, generò	', id: '	7	'},
        { key: '	yam	', termine: '	יָם	', senza: '	ים	', traslitterazione: '	yām	', significato: '	mare, ovest	', grammatica: '	n. m.	', altro: '	cstr. יָם - pl. ass. יַמִּים	', id: '	8	'},
        { key: '	yaar	', termine: '	יַ֫עַר	', senza: '	יער	', traslitterazione: '	yá‘ar	', significato: '	foresta, bosco	', grammatica: '	n. m.	', altro: '	cstr. יַ֫עַר - pl. יְעָרִים - anche  יְעָרוֹת	', id: '	9	'},
        { key: '	yapeh	', termine: '	יָפֶה	', senza: '	יפה	', traslitterazione: '	yāp̱eh	', significato: '	bello, attraente	', grammatica: '	agg. m. s.	', altro: '	cstr. יְפֵה - f. s. יָפָה - cstr. יְפַת - pl. f. יָפוֹת - cstr. יְפוֹת	', id: '	10	'},
        { key: '	yasa	', termine: '	יָצָא	', senza: '	יצא	', traslitterazione: '	yāṣā’	', significato: '	uscire, venir fuori	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, uscì	', id: '	11	'},
        { key: '	yaqar	', termine: '	יָקָר	', senza: '	יקר	', traslitterazione: '	yāqār	', significato: '	prezioso, raro, splendido, pesante	', grammatica: '	agg. m. s.	', altro: '	cstr. יְקַר - s. f. יְקָרָה - cstr. יִקְרַת - pl. m. יְקָרִים - pl. f. יְקָרוֹת	', id: '	12	'},
        { key: '	yarad	', termine: '	יָרַד	', senza: '	ירד	', traslitterazione: '	yāraḏ	', significato: '	scendere, discendere	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, discese; ptc. att. יֹרֵד	', id: '	13	'},
        { key: '	yes	', termine: '	יֵשׁ	', senza: '	ישׁ	', traslitterazione: '	yēš	', significato: '	c’è, ci sono, esiste	', grammatica: '	particella avverbiale	', altro: '		', id: '	14	'},
        { key: '	yasar	', termine: '	יָשָׁר	', senza: '	ישר	', traslitterazione: '	yāšār	', significato: '	(in senso morale) integro, retto	', grammatica: '	agg.	', altro: '	cstr. יְשַׁר -  s. f. יְשָׁרָה - pl. m. יְשָׁרִים - pl. f. יְשָׁרוֹת	', id: '	15	'},
        { key: '	yisrael	', termine: '	יִשְׂרָאֵל	', senza: '	ישראל	', traslitterazione: '	yiśrā’ēl	', significato: '	Israele	', grammatica: '	nome proprio	', altro: '	di persona o di popolo	', id: '	16	'}
        
      ];
      
      var ytutorials_keys = {};

      for (var i=0;i<ytutorials_list.length;i++){
        ytutorials_keys[ytutorials_list[i].key] = ytutorials_list[i];
      }

    return {
        list: ytutorials_list,
        keys: ytutorials_keys
    }

}]);