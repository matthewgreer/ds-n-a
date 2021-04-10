// 1. Available books

/* 
  Create a Book class with getter
    title
    author
    isbn
    numCopies 
    getAvailability() => 0: "Out of Stock", < 10: "Low Stock", "In Stock"
    sellBook() default 1
    restock() default 5
*/

// class Book {
//   constructor(title, author, isbn, copies) {
//     this.title = title;
//     this.author = author;
//     this.isbn = isbn;
//     this.numCopies = copies;
//   }
  
//   get availability() {
//     return this.getAvailability;
//   }

//   getAvailability() {
//     if (this.numCopies === 0) {
//       return "Out of Stock";
//     } else if (this.numCopies < 10) {
//       return "Low Stock"
//     }
//     return "In Stock"
//   };

//   sellBook = (numSold = 1) => this.numCopies -= numSold;

//   restock = (numRestocked = 5) => this.numCopies += numRestocked;

// };

// const HungerGames = new Book("The Hunger Games", "Suzanne Collins", 123919, 5);
// console.log(HungerGames.getAvailability());
// HungerGames.restock();
// console.log(HungerGames.getAvailability());
// HungerGames.sellBook(10);
// console.log(HungerGames.getAvailability());

// 2. Movie Object

/* 
  Create Movie object (using class or function syntax) that takes 5 arguments: 
    title
    director
    genre
    releaseYear
    rating

    Movie prototype should have a function called getOverview() which should log:
      "{movie}, a {genre} film directed by {director}, was released in 
      {releaseYear}. It received a rating of {rating}."
*/

class Movie {
  constructor(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }

  getOverview = () => {
    return (
      `${this.title}, a ${this.genre} film directed by ${this.director}, was 
      released in ${this.releaseYear}. It received a rating of ${this.rating}.`
    )
  } 
}

const StarWars = new Movie("Star Wars", "George Lucas", "Sci-Fi", "1977", "5 Stars");
const Empire = new Movie("Empire", "Irvin Kershner", "Sci-Fi", "1980", "5 Stars");
const Phantom = new Movie("The Phantom Menace", "George Lucas", "Sci-Fi", "1999", "1 Star");

console.log(StarWars.getOverview());
console.log(Empire.getOverview());
console.log(Phantom.getOverview());
