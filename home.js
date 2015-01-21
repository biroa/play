angular.module("home", [{
    name: "homeService",
    files: ["homeService.js"]
}])
    .controller("HomeCtrl", ["listHome",function (listHome) {
        var store = this;
	store.title = listHome.title;
        store.lead = listHome.lead;
	store.body = listHome.body;
	console.log(store.message);
    }])