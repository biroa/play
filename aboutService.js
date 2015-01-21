angular.module("aboutService", [])
    .service("listAbout", function () {
	this.title = "About";
        this.lead = ["This", "is", "the","About","page!"];
	this.body = "I am the body of About";
	this.created = "2015-01-21";
    })