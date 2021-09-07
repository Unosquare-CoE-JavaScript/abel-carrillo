class Bookshelf {
  constructor() {
    this.favoriteBooks = [];
  }
  
  // TODO: define addFavoriteBook(..) function
  addFavoriteBook( bookName ) {
    !bookName.includes( 'Great' ) ? this.favoriteBooks.push( bookName ) : '';
  };

  // TODO: define printFavoriteBooks() function
  printFavoriteBooks() {
    console.log( `Favorite Books: ${String( this.favoriteBooks.length )}
    \n\n${[...this.favoriteBooks].join("\n")}` );
  };
}

function loadBooks( bookshelf ) {
	fakeAjax( BOOK_API, function apiLoad( bookNames ) {
        bookNames.map( book => bookshelf.addFavoriteBook( book ) );
		bookshelf.printFavoriteBooks();
	});
}

var BOOK_API = "https://some.url/api";
var myBooks = new Bookshelf();
loadBooks( myBooks );

// NOTE: don't modify this function at all
function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}
