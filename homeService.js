angular.module("homeService", [])
    .service("list", function () {
        this.items = ["This", "is", "the","Home","page!"];
    })