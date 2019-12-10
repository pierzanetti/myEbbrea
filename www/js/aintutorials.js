/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('aintutorials', [])

.service('Aintutorials', [function(){
    
    var aintutorials_list = [
      
      { key: '	ain	', termine: '	ע	', senza: '	ע	', traslitterazione: '	‛	', significato: '		', grammatica: '		', altro: '		', id: '	1	'},
      { key: '	‛ebed	', termine: '	עֶ֫בֶד	', senza: '	עבד	', traslitterazione: '	‛éḇeḏ	', significato: '	servo, schiavo	', grammatica: '	n. m.	', altro: '	cstr. עֶ֫בֶד - pl. ass. עֲבָדִים - cstr. עַבְדֵי	', id: '	2	'},
      { key: '	‛abodah	', termine: '	עֲבוֹדָה	', senza: '	עבודה	', traslitterazione: '	‛aḇôḏāh	', significato: '	lavoro, servizio di servo, compito, schiavitù	', grammatica: '	n. f.	', altro: '	cstr. עֲבוֹדַת	', id: '	3	'},
      { key: '	‛od	', termine: '	עוֹד	', senza: '	עוד	', traslitterazione: '	‛ôḏ	', significato: '	ancora, anche, un altro	', grammatica: '	avv.	', altro: '	oppure עֹד	', id: '	4	'},
      { key: '	‛azab	', termine: '	עָזַב	', senza: '	עזב	', traslitterazione: '	‛āzaḇ	', significato: '	lasciare, abbandonare, perdere	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, lasciò. (È il verbo utilizzato per indicare la deportazione in esilio)	', id: '	5	'},
      { key: '	‛al	', termine: '	עַל	', senza: '	על	', traslitterazione: '	‛al	', significato: '	su, sopra	', grammatica: '	prep.	', altro: '	con maqqef עַל־; (locativo) su, (direzione) sopra, contro, (vicinanza) accanto, alla presenza di, riguardo a, a causa di; 	', id: '	6	'},
      { key: '	‛alah	', termine: '	עָלָה	', senza: '	עלה	', traslitterazione: '	‛ālāh	', significato: '	salire, ascendere, scalare	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, salì; impv. ms עֲלֵה	', id: '	8	'},
      { key: '	‛almah	', termine: '	עַלְמָה	', senza: '	עלמה	', traslitterazione: '	‛almāh	', significato: '	giovane donna, vergine	', grammatica: '	n. f. 	', altro: '	giovane donna (matura sessualmente; domestica o appena sposata)	', id: '	9	'},
      { key: '	‛im	', termine: '	עִם	', senza: '	עם	', traslitterazione: '	‛im	', significato: '	con, in compagnia di, insieme 	', grammatica: '	prep.	', altro: '		', id: '	10	'},
      { key: '	‛am	', termine: '	עַם	', senza: '	עם	', traslitterazione: '	‛am	', significato: '	popolo, nazione	', grammatica: '	n. m.	', altro: '	oppure עָם; con art. הָעָם - cstr. עַם - pl. ass. עַמִּים - cstr. עַמֵּי 	', id: '	11	'},
      { key: '	‛anah	', termine: '	עָנָה	', senza: '	ענה	', traslitterazione: '	‛ānāh	', significato: '	rispondere	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, rispose;	', id: '	12	'},
      { key: '	anan	', termine: '	עָנַן	', senza: '	ענן	', traslitterazione: '	‛ānan	', significato: '	essere indovino, praticare la stregoneria 	', grammatica: '	v.	', altro: '	עֹנְנִים Poel part. pl. m. ass. - (i divinatori interpretavano il ronzio degli insetti, il sussurro delle foglie, il movimento delle nuvole, ecc)	', id: '	13	'},
      { key: '	‛es	', termine: '	עֵץ	', senza: '	עץ	', traslitterazione: '	‛ēṣ	', significato: '	albero, legno	', grammatica: '	n. m.	', altro: '	pl. ass. עֵצִים - cstr. עֲצֵי	', id: '	14	'},
      { key: '	‛esah	', termine: '	עֵצָה	', senza: '	עצה	', traslitterazione: '	‛ēṣāh	', significato: '	consiglio, avvertimento, decisione, trama	', grammatica: '	n. f.	', altro: '	cstr. עֲצַת - pl. ass. עֵצוֹת	', id: '	15	'},
      { key: '	‛asiyr	', termine: '	עָשִׁיר	', senza: '	עשיר	', traslitterazione: '	‛āšîr	', significato: '	ricco	', grammatica: '	agg. o n. m.	', altro: '	pl. ass. עֲשִׁירִים - pl. cstr. עֲשִׁירֵי	', id: '	16	'}
      
      ];
      
      var aintutorials_keys = {};

      for (var i=0;i<aintutorials_list.length;i++){
        aintutorials_keys[aintutorials_list[i].key] = aintutorials_list[i];
      }

    return {
        list: aintutorials_list,
        keys: aintutorials_keys
    }

}]);