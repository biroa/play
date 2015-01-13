angular.module("about", [{
    name: "aboutService",
    files: ["aboutService.js"]
}])
    .controller("AboutCtrl", ["list",function (list) {
        var store = this;
        store.message = list.items
	console.log(store.message);
    }])