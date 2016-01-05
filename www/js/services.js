foodbook.factory('recipeService', function ($firebaseArray) {
    var firebaseRef = Firebase("https://essenbuch.firebasio.com");
    var recipes = $firebaseArray(firebaseRef);
    var recipeService = {
        all: recipes,
        get: function(recipeId) {
            return recipes.$getRecord(recipeId);
        }
    };
    return recipeService;
});