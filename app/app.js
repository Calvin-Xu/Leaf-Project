// Code goes here

(function () {
    var app = angular.module('leafCollection', ['store-directives', 'ngSanitize']);

    app.controller('GalleryController', function () {
        this.imageIndex = 0; // What if the array is 0 length?
        this.currentImageChange = function (imageNumber) {
            console.log(imageNumber);
            this.imageIndex = imageNumber || 0;
        };
    });

    app.controller('StoreController', function () {
        this.products = leaves;
    });

    app.controller("ReviewController", function ($scope, $http) {

        this.review = {};

        this.addReview = function (product) {
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        };

        $scope.click = function(name, stars, body, author) {

            var response = $http.post(
                "http://localhost:8080/comments/add", {
                    "name": name,
                    "stars": stars,
                    "body": body,
                    "author": author
                }
            );

            response.success(function(data, status, headers, config) {

                alert("Ok.");

            });

            response.error(function(data, status, headers, config) {
                alert("Error.");
            });

        };

    });

    // change product.reviews from an array written in this js file to an array read from db-comments

    app.controller('mapCtrl', function ($scope, $sce) {
        $scope.myHTML1 = $sce.trustAsHtml("<iframe src=\"https://www.google.com/maps/embed?pb=!1m13!1m11!1m3!1d788.0725307226264!2d-72.8379642437004!3d41.775270710863836!2m2!1f0!2f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1508894585937\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>");
        $scope.myHTML2 = $sce.trustAsHtml("<iframe src=\"https://www.google.com/maps/embed?pb=!1m13!1m11!1m3!1d701.5997976874825!2d-72.84103029821898!3d41.77246384645231!2m2!1f0!2f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1508894678879\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>");
        $scope.myHTML3 = $sce.trustAsHtml("<iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1626.313057120405!2d-72.84416728618869!3d41.77730503912403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1508896407258\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>");
        $scope.myHTML4 = $sce.trustAsHtml("<iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1032.6546392389187!2d-72.82281482795534!3d41.778511136263575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1509053047834\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>");
    });


    var leaves = [{
        name: 'Northern Red Oak',
        description: "Northern red oak is an oak in the red oak group (Quercus section Lobatae). It is a native of North America, in the eastern and central United States and southeast and south-central Canada.",
        location: "Campus: Jamerson--Elephant",
        map_id: 1,
        price: 7,
        bi_name: "Quercus rubra",
        images: [
            "img/NRO-01.jpg",
            "img/NRO-02.jpg",
            "img/NRO-03.jpg"
        ],
        reviews: []
    }, {
        name: 'Yellow Poplar',
        description: "Yellow Poplar is the Western Hemisphere representative of the two-species genus Liriodendron, and the tallest eastern hardwood. It is native to eastern North America.",
        location: "XC: Rails to Trails",
        map_id: 3,
        price: 6,
        bi_name: "Liriodendron tulipifera",
        images: [
            "img/YP-01.JPG",
            "img/YP-02.JPG",
            "img/YP-03.JPG"
        ],
        reviews:[]
    }, {
        name: 'White Oak',
        description: "White oak is one of the preeminent hardwoods of eastern and central North America. It is a long-lived oak. Specimens have been documented to be over 450 years old.",
        location: "Campus: Jamerson--Elephant",
        map_id: 1,
        price: 5,
        bi_name: "Quercus alba",
        images: [
            "img/WO-01.jpg",
            "img/WO-02.jpg",
            "img/WO-03.jpg"
        ],
        reviews: []
    }, {
        name: 'Sugar Maple',
        description: "Sugar maple is a species of maple native to eastern Canada and the northern parts of the Central and Eastern United States. It is best known for its bright fall foliage and for being the primary source of maple syrup.",
        location: "Beaver Pond",
        map_id: 2,
        price: 4,
        bi_name: "Acer saccharum",
        images: [
            "img/SM-01.jpg",
            "img/SM-02.jpg",
            "img/SM-03.jpg"
        ],
        reviews: []
    }, {
        name: 'Sassafras',
        description: "Sassafras is a genus of three extant and one extinct species of deciduous trees in the family Lauraceae, native to eastern North America and eastern Asia. The genus is distinguished by its aromatic properties, which have made the tree useful to humans.",
        location: "Fisher Meadows " +
        "c Area",
        map_id: 4,
        price: 3,
        bi_name: "Sassafras albidum",
        images: [
            "img/S-01.JPG",
            "img/S-02.JPG",
            "img/S-03.JPG"
        ],
        reviews: []
    }, {
        name: 'American Beech',
        description: "Fagus grandifolia (American beech or North American beech) is the species of beech tree native to the eastern United States and extreme southeast Canada. Its leaves are dark green, simple and sparsely-toothed with small teeth that terminate each vein.",
        location: "Beaver Pond",
        map_id: 2,
        price: 2,
        bi_name: "Fagus grandifolia",
        images: [
            "img/AB-01.jpg",
            "img/AB-02.jpg",
            "img/AB-03.jpg"
        ],
        reviews: []
    }, {
        name: 'Black Birch',
        description: "Black Birch is a species of birch native to eastern North America. It is a medium-sized deciduous tree reaching 25 m tall with a trunk up to 60 cm diameter.",
        location: "Beaver Pond",
        map_id: 2,
        price: 1,
        bi_name: "Betula lenta",
        images: [
            "img/BB-01.jpg",
            "img/BB-02.jpg",
            "img/BB-03.jpg"
        ],
        reviews: []
    }];

})();