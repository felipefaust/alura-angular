angular.module('alurapic').controller('FotosController', function($scope, $http) {

    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';

    $http.get('/v1/fotos')
    .success(function(retorno) {
        $scope.fotos = retorno;
    })
    .error(function(erro) {
        console.log(erro)
    });

    $scope.remover = function(foto) {
         
        $http.delete('/v1/fotos/' + foto._id)
        .success(function() {
        	var indiceDaFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceDaFoto, 1);
			$scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso!';

        })
        .error(function(erro) {
       		$scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso!';
        });
    };

});