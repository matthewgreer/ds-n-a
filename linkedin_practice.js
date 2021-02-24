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

class Book {
  constructor(title, author, isbn, copies) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.numCopies = copies;
  }
  
  get availability() {
    return this.getAvailability;
  }

  getAvailability() {
    if (this.numCopies === 0) {
      return "Out of Stock";
    } else if (this.numCopies < 10) {
      return "Low Stock"
    }
    return "In Stock"
  };

  sellBook = (numSold = 1) => this.numCopies -= numSold;

  restock = (numRestocked = 5) => this.numCopies += numRestocked;

};

const HungerGames = new Book("The Hunger Games", "Suzanne Collins", 123919, 5);
console.log(HungerGames.getAvailability());
HungerGames.restock();
console.log(HungerGames.getAvailability());
HungerGames.sellBook(10);
console.log(HungerGames.getAvailability());
