angular.module('autenticacao').controller('CadastroLoginCtrl', function ($scope, $http, $state, CadastroLoginService) {

    $scope.user =  {};
    $scope.user.nameUser = "";
    $scope.user.emailUser = "";
    $scope.user.senhaUser = "";

    // Perform the login action when the user submits the login form
    $scope.cadastrar = function () {
        CadastroLoginService.salvarUsuario($scope.user);
        //$state.go('app.playlists');
    };

   
});


