angular.module('autenticacao').service('CadastroLoginService', [
    '$http',
    function CadastroLoginService($http) {

        CadastroLoginService.recuperaDadosServidor = function () {
            var URL_BASE = "http://localhost:8088";
            $http({
                method: 'GET',
                url: URL_BASE + '/cadastro/food',
                contentType: 'application/json; charset=utf-8'

            }).then(function success(response) {
                return response.data;
            }, function error(response) {
                console.log(response);
            });
        };
        
        
        CadastroLoginService.salvarUsuario = function (usuario) {
            var URL_BASE = "http://localhost:8088";
            $http({
                method: 'POST',
                url: URL_BASE + '/autenticacao/cadastro/usuario',
                contentType: 'application/json; charset=utf-8',
                data: {
                     usuario: usuario
                }
            }).then(function success(response) {
                return response.data;
            }, function error(response) {
                console.log(response);
            });
        };
         return CadastroLoginService;
    }]);


