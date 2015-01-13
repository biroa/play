angular.module("home", [{
    name: "homeService",
    files: ["homeService.js"]
}])
    .controller("HomeCtrl", ["listHome",function (listHome) {
        var store = this;
        store.message = listHome.items
	console.log(store.message);
    }])