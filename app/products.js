var app = angular.module('store-directives', []);

app.directive("descriptions", function () {
    return {
        restrict: "E",
        templateUrl: "descriptions.html"
    };
});

app.directive("reviews", function () {
    return {
        restrict: "E",
        templateUrl: "reviews.html",
        controller: function ($scope, $http) {
            this.$onInit = function () {
                $http.get('http://localhost:8080/comments/' + encodeURIComponent($scope.product.name))
                    .then(function (success) {
                        $scope.product.reviews = success.data;
                    }, function (fail) {
                        alert("Failed to fetch comments!")
                    });
            }
        }
    };
});

app.directive("info", function () {
    return {
        restrict: "E",
        templateUrl: "info.html"
    };
});

app.directive("productTabs", function () {
    return {
        restrict: "E",

        templateUrl: "product-tabs.html",
        controller: function () {
            this.tab = 1;

            this.isSet = function (checkTab) {
                return this.tab === checkTab;
            };

            this.setTab = function (activeTab) {
                this.tab = activeTab;
            };
        },
        controllerAs: "tab"
    };
});
