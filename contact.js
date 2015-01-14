angular.module("contact", [{
    name: "contactService",
    files: ["contactService.js"]
}])
    .controller("ContactCtrl", ["listContact",function (listContact) {
        var store = this;
        store.message = listContact.items
	console.log(store.message);
    }])