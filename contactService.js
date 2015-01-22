angular.module("contactService", [])
    .service("listContact", function () {
	this.title = "Contact";
	this.lead  =  "Contact Lead";
        this.body = ["This", "is", "the","Contact","page!"];
    })