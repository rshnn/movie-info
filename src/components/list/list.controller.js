class ListController {

    constructor($scope, $http){
        var model = this;
        model.$http = $http;

        model.movies = 'temp movies blehg';
        model.message = 'Hello from list controller';

        // model.fetchMovies();
    }



    $onInit(){
        var model = this;

        model.fetchMovies().then(function(movies){
            model.movies = movies;
        });

    }

    fetchMovies(){
        var model = this;

        console.log('Fetching movies');

        return model.$http.get('./movies.json')
        .then(function(response){
            return response.data;
        });
    }


    setRating(movie, newRating){

        movie.rating = newRating;

    }

    changeMessage(){
        var model = this;

        model.message = 'Peaches and astronaut stuff';
    }


    upRating(movie){
        if(movie.rating < 5){
            movie.rating += 1;
        }
    }

    downRating(movie){
        if(movie.rating > 1){
            movie.rating -= 1;
        }
    }

}


export default ListController;