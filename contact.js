angular.module("contact", [{
    name: "contactService",
    files: ["contactService.js"]
}])
    .controller("ContactCtrl", ["listContact",function (listContact) {
        var contactStorage = this;
        contactStorage.title = listContact.title;
	contactStorage.lead =  listContact.lead;
	contactStorage.body =  listContact.body;
	console.log(contactStorage.title);
    }])