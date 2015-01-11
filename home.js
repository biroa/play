angular.module("home", [{
    name: "homeService",
    files: ["homeService.js"]
}])
    .controller("HomeCtrl", ["list",function (list) {
        var store = this;
        store.message = list.items
	console.log(store.message);
    }])