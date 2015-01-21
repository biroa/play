angular.module("about", [{
    name: "aboutService",
    files: ["aboutService.js"]
}])
    .controller("AboutCtrl", ["listAbout",function (listAbout) {
        var aboutStorage = this;
        aboutStorage.title = listAbout.title;
	aboutStorage.lead  = listAbout.lead; 
	aboutStorage.body  = listAbout.body;
	aboutStorage.created = listAbout.created;
	console.log(aboutStorage.title);
    }])