angular.module("home", [{
    name: "homeService",
    files: ["homeService.js"]
}])
    .controller("HomeCtrl", ["listHome",function (listHome) {
        var homeStorage = this;
	homeStorage.title = listHome.title;
        homeStorage.lead = listHome.lead;
	homeStorage.body = listHome.body;
	console.log(homeStorage.message);
    }])