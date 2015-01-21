angular.module("homeService", [])
    .service("listHome", function () {
	this.title = "Home";
        this.lead = ["This", "is", "the","Home","page!"];
	this.body = "This is the body of the Home!";
    })