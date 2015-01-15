angular.module("play", ["ui.router","oc.lazyLoad","restangular"])
    .config(function($stateProvider){
	$stateProvider.state('/',{
		templateUrl: "home.html",
		controller: "HomeCtrl as home",
		resolve:{
			store:function($ocLazyLoad){
				return $ocLazyLoad.load(
				{
					name:"home",
					files:["home.js"]
				})
			}
		}
	})
	
	$stateProvider.state('/about',{
		templateUrl: "about.html",
		controller:  "AboutCtrl as about",
		resolve:{
			store:function($ocLazyLoad){
				return $ocLazyLoad.load({
					name: "about",
					files:["about.js"]
				})
			}
		}
	})

        $stateProvider.state('/contact',{
                templateUrl: "contact.html",
                controller:  "ContactCtrl as contact",
                resolve:{
                        store:function($ocLazyLoad){
                                return $ocLazyLoad.load({
                                        name: "contact",
                                        files:["contact.js"]
                                })
                        }
                }
        })
    
    })
    .controller("HomeCtrl", function ($injector, $ocLazyLoad, $state) {
        var home = this;
	//we can load it when controller is initialized
	$state.go("/");
        home.click = function () {
		$state.go("/");
            $ocLazyLoad.load({
                name: "store",
                files: [
                    "store.js","style.css"
                ]
            }).then(function () {
                console.log($injector.get("cart"));
            })

        }
    })

    .controller("AboutCtrl",function($injector, $ocLazyLoad, $state){
	var about = this;
	about.click = function(){
		$state.go("/about");
	}
    })

    .controller("ContactCtrl",function($injector, $ocLazyLoad, $state){
        var contact = this;
        contact.click = function(){
                $state.go("/contact");
        }
    })

