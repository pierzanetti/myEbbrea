angular.module('app.controllers', [])
  
.controller('dizionarioCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('sintassiCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('lectioCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('alephListaNomiCtrl', ['$scope', '$stateParams', 'Tutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Tutorials) {
  
    $scope.narrowed_tutorials = Tutorials.list;
    $scope.data = {
        search: ''
    }
    
    $scope.search = function(){
        
        var s = $scope.data.search.toLowerCase();
        
        if (s == ''){
            $scope.narrowed_tutorials = Tutorials.list;
            return;
        }
        
        $scope.narrowed_tutorials = Tutorials.list.filter(function(tutorial){
          if (tutorial.key.toLowerCase().indexOf(s) > -1 || tutorial.termine.toLowerCase().indexOf(s) > -1 || tutorial.senza.toLowerCase().indexOf(s) > -1 || tutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
              return true;
          } 
          return false;
        });
    }
  
}])

.controller('bethListaNomiCtrl', ['$scope', '$stateParams', 'Btutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Btutorials) {
  
    $scope.narrowed_btutorials = Btutorials.list;
    $scope.data = {
        search: ''
    }
    
    $scope.search = function(){
        
        var s = $scope.data.search.toLowerCase();
        
        if (s == ''){
            $scope.narrowed_btutorials = Btutorials.list;
            return;
        }
        
        $scope.narrowed_btutorials = Btutorials.list.filter(function(btutorial){
            if (btutorial.key.toLowerCase().indexOf(s) > -1 || btutorial.termine.toLowerCase().indexOf(s) > -1 || btutorial.senza.toLowerCase().indexOf(s) > -1 || btutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
                return true;
            } 
            return false;
          });

    }
  
}])

.controller('ghimelListaNomiCtrl', ['$scope', '$stateParams', 'Gtutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Gtutorials) {
  
    $scope.narrowed_gtutorials = Gtutorials.list;
    $scope.data = {
        search: ''
    }
    
    $scope.search = function(){
        
        var s = $scope.data.search.toLowerCase();
        
        if (s == ''){
            $scope.narrowed_gtutorials = Gtutorials.list;
            return;
        }
        
        $scope.narrowed_gtutorials = Gtutorials.list.filter(function(gtutorial){
            if (gtutorial.key.toLowerCase().indexOf(s) > -1 || gtutorial.termine.toLowerCase().indexOf(s) > -1 || gtutorial.senza.toLowerCase().indexOf(s) > -1 || gtutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
                return true;
            } 
            return false;
          });
    }
  
}])

.controller('dalethListaNomiCtrl', ['$scope', '$stateParams', 'Dtutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Dtutorials) {
  
    $scope.narrowed_dtutorials = Dtutorials.list;
    $scope.data = {
        search: ''
    }
    
    $scope.search = function(){
        
        var s = $scope.data.search.toLowerCase();
        
        if (s == ''){
            $scope.narrowed_dtutorials = Dtutorials.list;
            return;
        }
        
        $scope.narrowed_dtutorials = Dtutorials.list.filter(function(dtutorial){
            if (dtutorial.key.toLowerCase().indexOf(s) > -1 || dtutorial.termine.toLowerCase().indexOf(s) > -1 || dtutorial.senza.toLowerCase().indexOf(s) > -1 || dtutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
                return true;
            } 
            return false;
          });
    }
  
}])

.controller('heListaNomiCtrl', ['$scope', '$stateParams', 'Hetutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Hetutorials) {
  
    $scope.narrowed_hetutorials = Hetutorials.list;
    $scope.data = {
        search: ''
    }
    
    $scope.search = function(){
        
        var s = $scope.data.search.toLowerCase();
        
        if (s == ''){
            $scope.narrowed_hetutorials = Hetutorials.list;
            return;
        }
        
        $scope.narrowed_hetutorials = Hetutorials.list.filter(function(hetutorial){
            if (hetutorial.key.toLowerCase().indexOf(s) > -1 || hetutorial.termine.toLowerCase().indexOf(s) > -1 || hetutorial.senza.toLowerCase().indexOf(s) > -1 || hetutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
                return true;
            } 
            return false;
          });
    }
  
}])

.controller('wListaNomiCtrl', ['$scope', '$stateParams', 'Wtutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Wtutorials) {
    
    $scope.narrowed_wtutorials = Wtutorials.list;
    $scope.data = {
          search: ''
      }
      
      $scope.search = function(){
          
          var s = $scope.data.search.toLowerCase();
          
          if (s == ''){
              $scope.narrowed_wtutorials = Wtutorials.list;
              return;
          }
        
          $scope.narrowed_wtutorials = Wtutorials.list.filter(function(wtutorial){
            if (wtutorial.key.toLowerCase().indexOf(s) > -1 || wtutorial.termine.toLowerCase().indexOf(s) > -1 || wtutorial.senza.toLowerCase().indexOf(s) > -1 || wtutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
                return true;
            } 
            return false;
          });

      }
    
}])

.controller('zListaNomiCtrl', ['$scope', '$stateParams', 'Ztutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, Ztutorials) {
          
    $scope.narrowed_ztutorials = Ztutorials.list;
    $scope.data = {
        search: ''
    }
            
    $scope.search = function(){
                
            var s = $scope.data.search.toLowerCase();
                
            if (s == ''){
                $scope.narrowed_ztutorials = Ztutorials.list;
                return;
            }
                
            $scope.narrowed_ztutorials = Ztutorials.list.filter(function(ztutorial){
            if (ztutorial.key.toLowerCase().indexOf(s) > -1 || ztutorial.termine.toLowerCase().indexOf(s) > -1 || ztutorial.senza.toLowerCase().indexOf(s) > -1 || ztutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
                return true;
                } 
                  return false;
        });
    }
          
}])


.controller('yListaNomiCtrl', ['$scope', '$stateParams', 'Ytutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Ytutorials) {
    
    $scope.narrowed_ytutorials = Ytutorials.list;
    $scope.data = {
        search: ''
    }
      
    $scope.search = function(){
          
        var s = $scope.data.search.toLowerCase();
          
        if (s == ''){
              $scope.narrowed_ytutorials = Ytutorials.list;
              return;
        }
        
        $scope.narrowed_ytutorials = Ytutorials.list.filter(function(ytutorial){
            if (ytutorial.key.toLowerCase().indexOf(s) > -1 || ytutorial.termine.toLowerCase().indexOf(s) > -1 || ytutorial.senza.toLowerCase().indexOf(s) > -1 || ytutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
                return true;
            } 
            return false;
        });
      }
    
    }])

  .controller('tListaNomiCtrl', ['$scope', '$stateParams', 'Ttutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
  // You can include any angular dependencies as parameters for this function
  // TIP: Access Route Parameters for your page via $stateParams.parameterName
  function ($scope, $stateParams, Ttutorials) {
    
      $scope.narrowed_ttutorials = Ttutorials.list;
      $scope.data = {
          search: ''
      }
      
      $scope.search = function(){
          
          var s = $scope.data.search.toLowerCase();
          
          if (s == ''){
              $scope.narrowed_ttutorials = Ttutorials.list;
              return;
          }
          
          $scope.narrowed_ttutorials = Ttutorials.list.filter(function(ttutorial){
            if (ttutorial.key.toLowerCase().indexOf(s) > -1 || ttutorial.termine.toLowerCase().indexOf(s) > -1 || ttutorial.senza.toLowerCase().indexOf(s) > -1 || ttutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
                return true;
            } 
            return false;
          });
      }
    
    }])


      .controller('g1ListaNomiCtrl', ['$scope', '$stateParams', 'G1tutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
      // You can include any angular dependencies as parameters for this function
      // TIP: Access Route Parameters for your page via $stateParams.parameterName
      function ($scope, $stateParams, G1tutorials) {
        
          $scope.narrowed_g1tutorials = G1tutorials.list;
          $scope.data = {
              search: ''
          }
          
          $scope.search = function(){
              
              var s = $scope.data.search.toLowerCase();
              
              if (s == ''){
                  $scope.narrowed_g1tutorials = G1tutorials.list;
                  return;
              }
              
              $scope.narrowed_gtutorials = G1tutorials.list.filter(function(gtutorial){
                if (g1tutorial.termine.toLowerCase().indexOf(s) > -1 || g1tutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
                    return true;
                } 
                return false;
              });
          }
        
        }])

        .controller('hethListaNomiCtrl', ['$scope', '$stateParams', 'Hethtutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
      // You can include any angular dependencies as parameters for this function
      // TIP: Access Route Parameters for your page via $stateParams.parameterName
      function ($scope, $stateParams, Hethtutorials) {
        
          $scope.narrowed_hethtutorials = Hethtutorials.list;
          $scope.data = {
              search: ''
          }
          
          $scope.search = function(){
              
              var s = $scope.data.search.toLowerCase();
              
              if (s == ''){
                  $scope.narrowed_hethtutorials = Hethtutorials.list;
                  return;
              }
              
              $scope.narrowed_hethtutorials = Hethtutorials.list.filter(function(hethtutorial){
                if (hethtutorial.key.toLowerCase().indexOf(s) > -1 || hethtutorial.termine.toLowerCase().indexOf(s) > -1 || hethtutorial.senza.toLowerCase().indexOf(s) > -1 || hethtutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
                    return true;
                } 
                return false;
              });

          }
        
        }])

        .controller('tethListaNomiCtrl', ['$scope', '$stateParams', 'Tethtutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, Tethtutorials) {
          
        $scope.narrowed_tethtutorials = Tethtutorials.list;
        $scope.data = {
            search: ''
            }
            
            $scope.search = function(){
                
                var s = $scope.data.search.toLowerCase();
                
                if (s == ''){
                    $scope.narrowed_tethtutorials = Tethtutorials.list;
                    return;
                }
                
                $scope.narrowed_tethtutorials = Tethtutorials.list.filter(function(tethtutorial){
                    if (tethtutorial.key.toLowerCase().indexOf(s) > -1 || tethtutorial.termine.toLowerCase().indexOf(s) > -1 || tethtutorial.senza.toLowerCase().indexOf(s) > -1 || tethtutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
                        return true;
                  } 
                  return false;
                });
            }
          
          }])

        .controller('iListaNomiCtrl', ['$scope', '$stateParams', 'Itutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, Itutorials) {
          
            $scope.narrowed_itutorials = Itutorials.list;
            $scope.data = {
                search: ''
            }
            
            $scope.search = function(){
                
                var s = $scope.data.search.toLowerCase();
                
                if (s == ''){
                    $scope.narrowed_itutorials = Itutorials.list;
                    return;
                }
                
                $scope.narrowed_itutorials = Itutorials.list.filter(function(itutorial){
                  if (itutorial.termine.toLowerCase().indexOf(s) > -1 || itutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
                      return true;
                  } 
                  return false;
                });
            }
          
          }])

          .controller('kListaNomiCtrl', ['$scope', '$stateParams', 'Ktutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
          // You can include any angular dependencies as parameters for this function
          // TIP: Access Route Parameters for your page via $stateParams.parameterName
          function ($scope, $stateParams, Ktutorials) {
            
              $scope.narrowed_ktutorials = Ktutorials.list;
              $scope.data = {
                  search: ''
              }
              
              $scope.search = function(){
                  
                  var s = $scope.data.search.toLowerCase();
                  
                  if (s == ''){
                      $scope.narrowed_ktutorials = Ktutorials.list;
                      return;
                  }
                  
                  $scope.narrowed_ktutorials = Ktutorials.list.filter(function(ktutorial){
                    if (ktutorial.key.toLowerCase().indexOf(s) > -1 || ktutorial.termine.toLowerCase().indexOf(s) > -1 || ktutorial.senza.toLowerCase().indexOf(s) > -1 || ktutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
                        return true;
                    } 
                    return false;
                  });
              }
            
            }])
  
          .controller('lListaNomiCtrl', ['$scope', '$stateParams', 'Ltutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
          // You can include any angular dependencies as parameters for this function
          // TIP: Access Route Parameters for your page via $stateParams.parameterName
          function ($scope, $stateParams, Ltutorials) {
            
              $scope.narrowed_ltutorials = Ltutorials.list;
              $scope.data = {
                  search: ''
              }
              
              $scope.search = function(){
                  
                  var s = $scope.data.search.toLowerCase();
                  
                  if (s == ''){
                      $scope.narrowed_ltutorials = Ltutorials.list;
                      return;
                  }
                  
                  $scope.narrowed_ltutorials = Ltutorials.list.filter(function(ltutorial){
                    if (ltutorial.key.toLowerCase().indexOf(s) > -1 || ltutorial.termine.toLowerCase().indexOf(s) > -1 || ltutorial.senza.toLowerCase().indexOf(s) > -1 || ltutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
                        return true;
                    } 
                    return false;
                  });
              }
            
            }])

    
          .controller('mListaNomiCtrl', ['$scope', '$stateParams', 'Mtutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
          // You can include any angular dependencies as parameters for this function
          // TIP: Access Route Parameters for your page via $stateParams.parameterName
          function ($scope, $stateParams, Mtutorials) {
            
              $scope.narrowed_mtutorials = Mtutorials.list;
              $scope.data = {
                  search: ''
              }
              
              $scope.search = function(){
                  
                  var s = $scope.data.search.toLowerCase();
                  
                  if (s == ''){
                      $scope.narrowed_mtutorials = Mtutorials.list;
                      return;
                  }
                  
                  $scope.narrowed_mtutorials = Mtutorials.list.filter(function(mtutorial){
                    if (mtutorial.key.toLowerCase().indexOf(s) > -1 || mtutorial.termine.toLowerCase().indexOf(s) > -1 || mtutorial.senza.toLowerCase().indexOf(s) > -1 || mtutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
                        return true;
                    } 
                    return false;
                  });
              }
            
            }])

            .controller('nListaNomiCtrl', ['$scope', '$stateParams', 'Ntutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
            // You can include any angular dependencies as parameters for this function
            // TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams, Ntutorials) {
              
                $scope.narrowed_ntutorials = Ntutorials.list;
                $scope.data = {
                    search: ''
                }
                
                $scope.search = function(){
                    
                    var s = $scope.data.search.toLowerCase();
                    
                    if (s == ''){
                        $scope.narrowed_ntutorials = Ntutorials.list;
                        return;
                    }
                    
                    $scope.narrowed_ntutorials = Ntutorials.list.filter(function(ntutorial){
                        if (ntutorial.key.toLowerCase().indexOf(s) > -1 || ntutorial.termine.toLowerCase().indexOf(s) > -1 || ntutorial.senza.toLowerCase().indexOf(s) > -1 || ntutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
                            return true;
                      } 
                      return false;
                    });
                }
              
              }])

              .controller('sListaNomiCtrl', ['$scope', '$stateParams', 'Stutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
          // You can include any angular dependencies as parameters for this function
          // TIP: Access Route Parameters for your page via $stateParams.parameterName
          function ($scope, $stateParams, Stutorials) {
            
              $scope.narrowed_stutorials = Stutorials.list;
              $scope.data = {
                  search: ''
              }
              
              $scope.search = function(){
                  
                  var s = $scope.data.search.toLowerCase();
                  
                  if (s == ''){
                      $scope.narrowed_stutorials = Stutorials.list;
                      return;
                  }
                  
                  $scope.narrowed_stutorials = Stutorials.list.filter(function(stutorial){
                    if (stutorial.key.toLowerCase().indexOf(s) > -1 || stutorial.termine.toLowerCase().indexOf(s) > -1 || stutorial.senza.toLowerCase().indexOf(s) > -1 || stutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
                        return true;
                    } 
                    return false;
                  });
              }
            
            }])

              .controller('ainListaNomiCtrl', ['$scope', '$stateParams', 'Aintutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
              // You can include any angular dependencies as parameters for this function
              // TIP: Access Route Parameters for your page via $stateParams.parameterName
              function ($scope, $stateParams, Aintutorials) {
                
                  $scope.narrowed_aintutorials = Aintutorials.list;
                  $scope.data = {
                      search: ''
                  }
                  
                  $scope.search = function(){
                      
                      var s = $scope.data.search.toLowerCase();
                      
                      if (s == ''){
                          $scope.narrowed_aintutorials = Aintutorials.list;
                          return;
                      }
                      
                      $scope.narrowed_aintutorials = Aintutorials.list.filter(function(aintutorial){
                        if (aintutorial.key.toLowerCase().indexOf(s) > -1 || aintutorial.termine.toLowerCase().indexOf(s) > -1 || aintutorial.senza.toLowerCase().indexOf(s) > -1 || aintutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
                            return true;
                        } 
                        return false;
                      });
                  }
                
                }])

        .controller('pListaNomiCtrl', ['$scope', '$stateParams', 'Ptutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, Ptutorials) {
          
            $scope.narrowed_ptutorials = Ptutorials.list;
            $scope.data = {
                search: ''
            }
            
            $scope.search = function(){
                
                var s = $scope.data.search.toLowerCase();
                
                if (s == ''){
                    $scope.narrowed_ptutorials = Ptutorials.list;
                    return;
                }
                
                $scope.narrowed_ptutorials = Ptutorials.list.filter(function(ptutorial){
                    if (ptutorial.key.toLowerCase().indexOf(s) > -1 || ptutorial.termine.toLowerCase().indexOf(s) > -1 || ptutorial.senza.toLowerCase().indexOf(s) > -1 || ptutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
                        return true;
                  } 
                  return false;
                });
            }
          
          }])
          .controller('xListaNomiCtrl', ['$scope', '$stateParams', 'Xtutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
          // You can include any angular dependencies as parameters for this function
          // TIP: Access Route Parameters for your page via $stateParams.parameterName
          function ($scope, $stateParams, Xtutorials) {
            
              $scope.narrowed_xtutorials = Xtutorials.list;
              $scope.data = {
                  search: ''
              }
              
              $scope.search = function(){
                  
                  var s = $scope.data.search.toLowerCase();
                  
                  if (s == ''){
                      $scope.narrowed_xtutorials = Xtutorials.list;
                      return;
                  }
                  
                  $scope.narrowed_xtutorials = Xtutorials.list.filter(function(xtutorial){
                    if (xtutorial.key.toLowerCase().indexOf(s) > -1 || xtutorial.termine.toLowerCase().indexOf(s) > -1 || xtutorial.senza.toLowerCase().indexOf(s) > -1 || xtutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
                        return true;
                    } 
                    return false;
                  });
              }
            
            }])

            .controller('qListaNomiCtrl', ['$scope', '$stateParams', 'Qtutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
            // You can include any angular dependencies as parameters for this function
            // TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams, Qtutorials) {
              
                $scope.narrowed_qtutorials = Qtutorials.list;
                $scope.data = {
                    search: ''
                }
                
                $scope.search = function(){
                    
                    var s = $scope.data.search.toLowerCase();
                    
                    if (s == ''){
                        $scope.narrowed_qtutorials = Qtutorials.list;
                        return;
                    }
                    
                    $scope.narrowed_qtutorials = Qtutorials.list.filter(function(qtutorial){
                      if (qtutorial.key.toLowerCase().indexOf(s) > -1 || qtutorial.termine.toLowerCase().indexOf(s) > -1 || qtutorial.senza.toLowerCase().indexOf(s) > -1 || qtutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
                          return true;
                      } 
                      return false;
                    });
                }
              
              }])

            .controller('rListaNomiCtrl', ['$scope', '$stateParams', 'Rtutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
            // You can include any angular dependencies as parameters for this function
            // TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams, Rtutorials) {
              
                $scope.narrowed_rtutorials = Rtutorials.list;
                $scope.data = {
                    search: ''
                }
                
                $scope.search = function(){
                    
                    var s = $scope.data.search.toLowerCase();
                    
                    if (s == ''){
                        $scope.narrowed_rtutorials = Rtutorials.list;
                        return;
                    }
                    
                    $scope.narrowed_rtutorials = Rtutorials.list.filter(function(rtutorial){
                        if (rtutorial.key.toLowerCase().indexOf(s) > -1 || rtutorial.termine.toLowerCase().indexOf(s) > -1 || rtutorial.senza.toLowerCase().indexOf(s) > -1 || rtutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
                            return true;
                      } 
                      return false;
                    });
                }
              
              }])
  
            .controller('sinListaNomiCtrl', ['$scope', '$stateParams', 'Sintutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
            // You can include any angular dependencies as parameters for this function
            // TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams, Sintutorials) {
              
                $scope.narrowed_sintutorials = Sintutorials.list;
                $scope.data = {
                    search: ''
                }
                
                $scope.search = function(){
                    
                    var s = $scope.data.search.toLowerCase();
                    
                    if (s == ''){
                        $scope.narrowed_sintutorials = Sintutorials.list;
                        return;
                    }
                    
                    $scope.narrowed_sintutorials = Sintutorials.list.filter(function(sintutorial){
                        if (sintutorial.key.toLowerCase().indexOf(s) > -1 || sintutorial.termine.toLowerCase().indexOf(s) > -1 || sintutorial.senza.toLowerCase().indexOf(s) > -1 || sintutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
                            return true;
                      } 
                      return false;
                    });
                }
              
              }])

              .controller('shinListaNomiCtrl', ['$scope', '$stateParams', 'Shintutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
              // You can include any angular dependencies as parameters for this function
              // TIP: Access Route Parameters for your page via $stateParams.parameterName
              function ($scope, $stateParams, Shintutorials) {
                
                  $scope.narrowed_shintutorials = Shintutorials.list;
                  $scope.data = {
                      search: ''
                  }
                  
                  $scope.search = function(){
                      
                      var s = $scope.data.search.toLowerCase();
                      
                      if (s == ''){
                          $scope.narrowed_shintutorials = Shintutorials.list;
                          return;
                      }
                      
                      $scope.narrowed_shintutorials = Shintutorials.list.filter(function(shintutorial){
                        if (shintutorial.key.toLowerCase().indexOf(s) > -1 || shintutorial.termine.toLowerCase().indexOf(s) > -1 || shintutorial.senza.toLowerCase().indexOf(s) > -1 || shintutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
                            return true;
                        } 
                        return false;
                      });
                  }
                
                }])


        

        






/** controller ***tutorialCtrl*/

.controller('tutorialCtrl', ['$scope', '$stateParams', 'Tutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Tutorials) {

    $scope.video = Tutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });


}])

.controller('btutorialCtrl', ['$scope', '$stateParams', 'Btutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Btutorials) {

    $scope.video = Btutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });


}])


.controller('gtutorialCtrl', ['$scope', '$stateParams', 'Gtutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Gtutorials) {

    $scope.video = Gtutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });


}])

.controller('dtutorialCtrl', ['$scope', '$stateParams', 'Dtutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Dtutorials) {

    $scope.video = Dtutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });


}])

.controller('hetutorialCtrl', ['$scope', '$stateParams', 'Hetutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Hetutorials) {

    $scope.video = Hetutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });


}])

.controller('wtutorialCtrl', ['$scope', '$stateParams', 'Wtutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Wtutorials) {

    $scope.video = Wtutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });

}])

.controller('ztutorialCtrl', ['$scope', '$stateParams', 'Ztutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Ztutorials) {

    $scope.video = Ztutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });

}])

.controller('hethtutorialCtrl', ['$scope', '$stateParams', 'Hethtutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Hethtutorials) {

    $scope.video = Hethtutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });


}])

.controller('tethtutorialCtrl', ['$scope', '$stateParams', 'Tethtutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Tethtutorials) {

    $scope.video = Tethtutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });

}])

.controller('ytutorialCtrl', ['$scope', '$stateParams', 'Ytutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Ytutorials) {

    $scope.video = Ytutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });

}])

.controller('ktutorialCtrl', ['$scope', '$stateParams', 'Ktutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Ktutorials) {

    $scope.video = Ktutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });

}])

.controller('ltutorialCtrl', ['$scope', '$stateParams', 'Ltutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Ltutorials) {

    $scope.video = Ltutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });

}])


.controller('mtutorialCtrl', ['$scope', '$stateParams', 'Mtutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Mtutorials) {

    $scope.video = Mtutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });

}])

.controller('ntutorialCtrl', ['$scope', '$stateParams', 'Ntutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Ntutorials) {

    $scope.video = Ntutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });

}])

.controller('stutorialCtrl', ['$scope', '$stateParams', 'Stutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Stutorials) {

    $scope.video = Stutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });

}])

.controller('aintutorialCtrl', ['$scope', '$stateParams', 'Aintutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Aintutorials) {

    $scope.video = Aintutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });

}])

.controller('ptutorialCtrl', ['$scope', '$stateParams', 'Ptutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Ptutorials) {

    $scope.video = Ptutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });

}])


.controller('xtutorialCtrl', ['$scope', '$stateParams', 'Xtutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Xtutorials) {

    $scope.video = Xtutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });

}])

.controller('qtutorialCtrl', ['$scope', '$stateParams', 'Qtutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Qtutorials) {

    $scope.video = Qtutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });

}])

.controller('rtutorialCtrl', ['$scope', '$stateParams', 'Rtutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Rtutorials) {

    $scope.video = Rtutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });

}])

.controller('sintutorialCtrl', ['$scope', '$stateParams', 'Sintutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Sintutorials) {

    $scope.video = Sintutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });

}])

.controller('shintutorialCtrl', ['$scope', '$stateParams', 'Shintutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Shintutorials) {

    $scope.video = Shintutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });

}])

.controller('ttutorialCtrl', ['$scope', '$stateParams', 'Ttutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Ttutorials) {

    $scope.video = Ttutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });


}])

.controller('itutorialCtrl', ['$scope', '$stateParams', 'Itutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Itutorials) {

    $scope.video = Itutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });


}])

.controller('ctutorialCtrl', ['$scope', '$stateParams', 'Ctutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Ctutorials) {

    $scope.video = Ctutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });


}])
