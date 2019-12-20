jQuery(document).ready(function(){
    alert("Loading")
    axios.get('http://csc225.mockable.io/movies')
        .then(function(response){
            console.log(response.data);
            var booksHTML = response.data.map(function(book){
            return '<p class="movie" data-movie="'+book.id+'">' + 
                book.title + '</p>' ;
            });
    
            $('#movie').html(booksHTML);


        });

        $('body').on('click', '.movie', function(){
            var id = $(this).data('movie');
            var url = 'http://csc225.mockable.io/movies/' + id;
            
            axios.get(url).then(function(response){
                var book = response.data;
                var bookHTML = '<p>' +"Title: "+ book.title + '</p>';
                bookHTML += '<p>' +"Director: "+ book.director + '</p>';
                bookHTML += '<p>' +"Year: "+ book.release + '</p>';
                bookHTML += '<p>' + book.poster + '</p>';
                $('#current-movie').html(bookHTML);
               
            })
            $('#current-movie').html('<img src="https://placehold.it/600/600">');

            
        });
    });
