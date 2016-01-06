foodbook.factory('recipeService', function($firebaseArray){
    var firebaseRef = new Firebase("https://essenbuch.firebaseio.com/");
    var recipes = $firebaseArray(firebaseRef);
    var recipeService = {
        all: recipes,
        get: function(recipeId) {
            return recipes.$getRecord(recipeId);
        }
    };
    return recipeService;
});