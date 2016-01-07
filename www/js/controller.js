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

foodbook.controller('recipeListController', function ($scope, recipeService) {
    $scope.recipes = recipeService.all;
});

foodbook.controller('recipeDetailController', function ($scope, recipeService, $stateParams, $state) {
    $scope.recipe = recipeService.get($stateParams.id);
    $scope.ingredientsList = $scope.recipe.recipeIngredients.split(';');
    $scope.preparationList = $scope.recipe.recipeDirections.split(';');
});

foodbook.controller('deleteRecipeController', function($scope, recipeService, $state, $ionicActionSheet) {
    $scope.recipes = recipeService.all;
    
    $scope.deleteRecipe = function(id) {
        $ionicActionSheet.show({
            destructiveText: 'Delete',
            titleText: 'Sure you want to delete',
            cancelText: 'Cancel',
            destructiveButtonClicked: function () {
                var item = $scope.recipes.$getRecord(id);
                $scope.recipes.$remove(item);
                console.log("removing item");
                return true;
            }
        });
    };
});

foodbook.controller('editRecipeListController', function ($scope, recipeService) {
    $scope.recipes = recipeService.all;
});

foodbook.controller('editRecipeController', function ($scope, recipeService, $stateParams, $state) {
    $scope.recipe = recipeService.get($stateParams.id);
    $scope.saveRecipe = function() {
        $scope.recipe.$save();
        $state.go('editRecipeList');
    }
});