(function() {
    angular.module('app', ['datatables', 'datatables.buttons'])

        .controller('IndexCtrl', function($http, DTOptionsBuilder, DTColumnBuilder) {
            var vm = this;

             vm.dtOptions = DTOptionsBuilder.fromFnPromise(function() {
                 return $http
                     .get('http://jsonplaceholder.typicode.com/users')
                     .then(function(response) {
                         return response.data;
                     });
             }).withButtons([
                 'copy',
                 {
                     text: 'Shoot Spidey Web',
                     key: '1',
                     action: function () {
                         alert('Spidey Web Shot');
                     }
                 }
             ]);

             vm.dtColumns = [
                 DTColumnBuilder.newColumn('name').withTitle('name'),
                 DTColumnBuilder.newColumn('email').withTitle('E-Mail Address')
             ];
        });

})();
