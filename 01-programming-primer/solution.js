// book list
var books = [
    "A Song of Ice and Fire",
    "The Great Gatsby",
    "Crime & Punishment",
    "Great Expectations",
    "You Don't Know JS"
];

// favorite books list
var favoriteBooks = [];

// TODO: define addFavoriteBook(..) function
const addFavoriteBook = () => {
    books.map( book => !book.includes('Great') ? favoriteBooks.push( book ) : '' );
};

// TODO: define printFavoriteBooks() function
const printFavoriteBooks = () => {
    console.log( `Favorite Books: ${favoriteBooks.length}\n\n${[...favoriteBooks].join('\n')}` );
};

// TODO: print out favorite books
addFavoriteBook();
printFavoriteBooks();
