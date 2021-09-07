// book list
/* var books = [
    "A Song of Ice and Fire",
    "The Great Gatsby",
    "Crime & Punishment",
    "Great Expectations",
    "You Don't Know JS"
]; */

// favorite books list
var favoriteBooks = [];

// TODO: define addFavoriteBook(..) function
const addFavoriteBook = ( bookName ) => {
    //  books.map( book => !book.includes('Great') ? favoriteBooks.push( book ) : '' );
    !bookName.includes('Great') ? favoriteBooks.push( bookName ) : '';
};

// TODO: define printFavoriteBooks() function
const printFavoriteBooks = () => {
    console.log( `Favorite Books: ${favoriteBooks.length}\n\n${[...favoriteBooks].join('\n')}` );
};

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");
// TODO: print out favorite books
printFavoriteBooks();
