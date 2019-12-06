angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

 .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.dizionario', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/dizionario.html',
        controller: 'dizionarioCtrl'
      }
    }
  })

  .state('tabsController.sintassi', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/sintassi.html',
        controller: 'sintassiCtrl'
      }
    }
  })

  .state('tabsController.lectio', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/lectio.html',
        controller: 'lectioCtrl'
      }
    }
  })

  .state('tabsController.alephListaNomi', {
    url: '/page5',
    views: {
      'tab1': {
        templateUrl: 'templates/alephListaNomi.html',
        controller: 'alephListaNomiCtrl'
      }
    }
  })

  .state('tabsController.bethListaNomi', {
    url: '/page7',
    views: {
      'tab1': {
        templateUrl: 'templates/bethListaNomi.html',
        controller: 'bethListaNomiCtrl'
      }
    }
  })

  .state('tabsController.ghimelListaNomi', {
    url: '/page9',
    views: {
      'tab1': {
        templateUrl: 'templates/ghimelListaNomi.html',
        controller: 'ghimelListaNomiCtrl'
      }
    }
  })

  .state('tabsController.dalethListaNomi', {
    url: '/page11',
    views: {
      'tab1': {
        templateUrl: 'templates/dalethListaNomi.html',
        controller: 'dalethListaNomiCtrl'
      }
    }
  })

  .state('tabsController.heListaNomi', {
    url: '/page13',
    views: {
      'tab1': {
        templateUrl: 'templates/heListaNomi.html',
        controller: 'heListaNomiCtrl'
      }
    }
  })

  .state('tabsController.wListaNomi', {
    url: '/page17',
    views: {
      'tab1': {
        templateUrl: 'templates/wListaNomi.html',
        controller: 'wListaNomiCtrl'
      }
    }
  })  

  .state('tabsController.zListaNomi', {
    url: '/page21',
    views: {
      'tab1': {
        templateUrl: 'templates/zListaNomi.html',
        controller: 'zListaNomiCtrl'
      }
    }
  })

  .state('tabsController.hethListaNomi', {
    url: '/page243',
    views: {
      'tab1': {
        templateUrl: 'templates/hethListaNomi.html',
        controller: 'hethListaNomiCtrl'
      }
    }
  })

  .state('tabsController.tethListaNomi', {
    url: '/page15',
    views: {
      'tab1': {
        templateUrl: 'templates/tethListaNomi.html',
        controller: 'tethListaNomiCtrl'
      }
    }
  })

  .state('tabsController.yListaNomi', {
    url: '/page25',
    views: {
      'tab1': {
        templateUrl: 'templates/yListaNomi.html',
        controller: 'yListaNomiCtrl'
      }
    }
  })

  .state('tabsController.kListaNomi', {
    url: '/page27',
    views: {
      'tab1': {
        templateUrl: 'templates/kListaNomi.html',
        controller: 'kListaNomiCtrl'
      }
    }
  })

  .state('tabsController.lListaNomi', {
    url: '/page249',
    views: {
      'tab1': {
        templateUrl: 'templates/lListaNomi.html',
        controller: 'lListaNomiCtrl'
      }
    }
  })

  .state('tabsController.mListaNomi', {
    url: '/page237',
    views: {
      'tab1': {
        templateUrl: 'templates/mListaNomi.html',
        controller: 'mListaNomiCtrl'
      }
    }
  })

  .state('tabsController.nListaNomi', {
    url: '/page245',
    views: {
      'tab1': {
        templateUrl: 'templates/nListaNomi.html',
        controller: 'nListaNomiCtrl'
      }
    }
  })

  .state('tabsController.sListaNomi', {
    url: '/page29',
    views: {
      'tab1': {
        templateUrl: 'templates/sListaNomi.html',
        controller: 'sListaNomiCtrl'
      }
    }
  })

  .state('tabsController.ainListaNomi', {
    url: '/page251',
    views: {
      'tab1': {
        templateUrl: 'templates/ainListaNomi.html',
        controller: 'ainListaNomiCtrl'
      }
    }
  })

  .state('tabsController.pListaNomi', {
    url: '/page23',
    views: {
      'tab1': {
        templateUrl: 'templates/pListaNomi.html',
        controller: 'pListaNomiCtrl'
      }
    }
  })

  .state('tabsController.xListaNomi', {
    url: '/page235',
    views: {
      'tab1': {
        templateUrl: 'templates/xListaNomi.html',
        controller: 'xListaNomiCtrl'
      }
    }
  })

  .state('tabsController.qListaNomi', {
    url: '/page231',
    views: {
      'tab1': {
        templateUrl: 'templates/qListaNomi.html',
        controller: 'qListaNomiCtrl'
      }
    }
  })

  .state('tabsController.rListaNomi', {
    url: '/page233',
    views: {
      'tab1': {
        templateUrl: 'templates/rListaNomi.html',
        controller: 'rListaNomiCtrl'
      }
    }
  })

  .state('tabsController.sinListaNomi', {
    url: '/page51',
    views: {
      'tab1': {
        templateUrl: 'templates/sinListaNomi.html',
        controller: 'sinListaNomiCtrl'
      }
    }
  })

  .state('tabsController.shinListaNomi', {
    url: '/page53',
    views: {
      'tab1': {
        templateUrl: 'templates/shinListaNomi.html',
        controller: 'shinListaNomiCtrl'
      }
    }
  })

  .state('tabsController.tListaNomi', {
    url: '/page55',
    views: {
      'tab1': {
        templateUrl: 'templates/tListaNomi.html',
        controller: 'tListaNomiCtrl'
      }
    }
  })

  .state('tabsController.g1ListaNomi', {
    url: '/page19',
    views: {
      'tab1': {
        templateUrl: 'templates/g1ListaNomi.html',
        controller: 'g1ListaNomiCtrl'
      }
    }
  })

  .state('tabsController.iListaNomi', {
    url: '/page247',
    views: {
      'tab1': {
        templateUrl: 'templates/iListaNomi.html',
        controller: 'iListaNomiCtrl'
      }
    }
  })


  
/**tutorial */


  .state('tutorial', {
    url: '/page6',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/tutorial.html',
        controller: 'tutorialCtrl'
      }
    
  )

  .state('btutorial', {
    url: '/page8',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/btutorial.html',
        controller: 'btutorialCtrl'
      }
    
  )

  .state('gtutorial', {
    url: '/page10',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/gtutorial.html',
        controller: 'gtutorialCtrl'
      }
    
  )

  .state('dtutorial', {
    url: '/page12',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/dtutorial.html',
        controller: 'dtutorialCtrl'
      }
  )

  .state('hetutorial', {
    url: '/page14',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/hetutorial.html',
        controller: 'hetutorialCtrl'
      }
  )

  .state('hethtutorial', {
    url: '/page244',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/hethtutorial.html',
        controller: 'hethtutorialCtrl'
      }
  )

  .state('tethtutorial', {
    url: '/page16',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/tethtutorial.html',
        controller: 'tethtutorialCtrl'
      }
  )

  .state('ytutorial', {
    url: '/page26',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/ytutorial.html',
        controller: 'ytutorialCtrl'
      }
  )

  .state('ktutorial', {
    url: '/page28',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/ktutorial.html',
        controller: 'ktutorialCtrl'
      }
  )

  .state('ltutorial', {
    url: '/page250',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/ltutorial.html',
        controller: 'ltutorialCtrl'
      }
  )

  .state('mtutorial', {
    url: '/page238',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/mtutorial.html',
        controller: 'mtutorialCtrl'
      }
  )

  .state('ntutorial', {
    url: '/page246',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/ntutorial.html',
        controller: 'ntutorialCtrl'
      }
  )

  .state('stutorial', {
    url: '/page30',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/stutorial.html',
        controller: 'stutorialCtrl'
      }
  )

  .state('ttutorial', {
    url: '/page56',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/ttutorial.html',
        controller: 'ttutorialCtrl'
      }
    
  )

  .state('wtutorial', {
    url: '/page18',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/wtutorial.html',
        controller: 'wtutorialCtrl'
      }
  )

  .state('g1tutorial', {
    url: '/page20',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/g1tutorial.html',
        controller: 'g1tutorialCtrl'
      }
  )

  .state('ztutorial', {
    url: '/page22',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/ztutorial.html',
        controller: 'ztutorialCtrl'
      }
  )

  .state('ptutorial', {
    url: '/page24',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/ptutorial.html',
        controller: 'ptutorialCtrl'
      }
  )

  .state('qtutorial', {
    url: '/page232',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/qtutorial.html',
        controller: 'qtutorialCtrl'
      }
  )

  .state('xtutorial', {
    url: '/page236',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/xtutorial.html',
        controller: 'xtutorialCtrl'
      }
  )

  .state('itutorial', {
    url: '/page248',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/itutorial.html',
        controller: 'itutorialCtrl'
      }
  )

  .state('aintutorial', {
    url: '/page252',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/aintutorial.html',
        controller: 'aintutorialCtrl'
      }
  )

  .state('rtutorial', {
    url: '/page234',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/rtutorial.html',
        controller: 'rtutorialCtrl'
      }
  )

  .state('sintutorial', {
    url: '/page52',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/sintutorial.html',
        controller: 'sintutorialCtrl'
      }
  )

  .state('shintutorial', {
    url: '/page54',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/shintutorial.html',
        controller: 'shintutorialCtrl'
      }
  )





$urlRouterProvider.otherwise('/page1/page2')


});