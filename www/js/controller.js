foodbook.controller('addController', function ($scope, $firebaseArray, $state, recipeService) {
    $scope.allRecipes = recipeService.all;
        $scope.allRecipes.$add({
            recipeName: $scope.recipeName,
            recipeIngredients: $scope.recipeIngredients,
            recipeDirections: $scope.recipeDirections
        });
        $state.go('home');
    };
});