angular.module('encore.ui.rxSpinner', [])
/**
* @ngdoc directive
* @name encore.ui.rxSpinner:rxSpinner
* @restrict A
*
* @description
* Renders a spinner animation on the provided element given the 'toggle' attribute is truthy

* @scope
* @param {String} size - Controls the size of the spinner.  The options are default (no size specified),
* mini, small, large and extra-large
* @param {Boolean} toggle - When true, the spinner will display
*/
.directive('rxSpinner', function () {
    return {
        restrict: 'A',
        scope: {
            toggle: '=',
            size: '@'
        },
        link: function (scope, element) {
            scope.$watch('toggle', function (value) {
                var size = scope.size ? scope.size : '';

                if (value) {
                    element.prepend('<div class="rx-spinner ' + size + '"></div> ');
                } else {
                    element.find('div').remove();
                }
            });
        }
    };
});
