angular.module("play", ["ui.router","oc.lazyLoad"])
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