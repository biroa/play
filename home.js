angular.module("home", [{
    name: "about_me",
    files: ["about_me.js"]
}])
    .controller("HomeCtrl", ["list",function (list) {
        var store = this;
        store.message = list.items
	console.log(store.message);
    }])