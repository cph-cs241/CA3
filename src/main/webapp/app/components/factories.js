'use strict';
/* Place your global Factory-service in this file */

angular.module('myApp.factories', []).
        factory('InfoFactory', function () {
            var info = "Hello World from a Factory";
            var getInfo = function getInfo() {
                return info;
            };
            return {
                getInfo: getInfo
            };
        })
        .factory('selectedShopFac', function () {
            var selectedShop = {};
            return {
                getSelectedShop: function () {
                    return selectedShop;
                },
                setSelectedShop: function (shop) {
                    selectedShop = shop;
                    return selectedShop;
                }

            };
        })
        .factory('googleFactory', function ($http, selectedShopFac) {

            //console.log(shop);
            var gObject = {};
            gObject.getOpeningHours = function () {
                var shop = selectedShopFac.getSelectedShop();
                var placeId = shop.placeId;
                    console.log(placeId);
                    return $http({
                        url: 'api/shop/get/rating/' + placeId,
                        skipAuthorization: true,
                        method: 'GET'
                    });
            };
            return gObject;
        });



