angular.module("about", [{
    name: "aboutService",
    files: ["aboutService.js"]
}])
    .controller("AboutCtrl", ["listAbout",function (listAbout) {
        var store = this;
        store.message = listAbout.items
	console.log(store.message);
    }])