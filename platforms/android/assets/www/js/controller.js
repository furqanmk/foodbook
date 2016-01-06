foodbook.controller('addRecipeController', function ($scope, $firebaseArray, $state, recipeService) {
    $scope.addRecipe = function () {
        $scope.allRecipes = recipeService.all;
        $scope.allRecipes.$add({
            recipeName: $scope.recipeName,
            recipeIngredients: $scope.recipeIngredients,
            recipeDirections: $scope.recipeDirections
        });
        $state.go('home');
    }
});
