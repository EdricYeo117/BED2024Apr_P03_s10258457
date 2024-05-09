const express = require('express');
const bodyParser = require("body-parser");

// intialise express
const app = express();
const port = 3000;

// Include body-parser middleware to handle JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // For form data handling
app.get("/books", booksController.getAllBooks);
app.get("/books/:id", booksController.getBookById);
app.post("/books", validateBook, booksController.createBook);
// parse incoming JSON data in requests
app.use(express.json())
// Configure body-parser to handle URL-encoded form data
app.use(bodyParser.urlencoded({ extended: true })); // Set extended: true for nested objects

// Get Method for all books
app.get('/books', (req, res) => {
    res.json(books); // Send the array of books as JSON response
 });

 // Method for getting a single book 
 app.get('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id); // Get book ID from URL parameter
    const book = books.find(book => book.id === bookId);
  
    if (book) {
      res.json(book); // Send the book data if found
    } else {
      res.status(404).send('Book not found'); // Send error for non-existent book
    }
    });

 // Post method for books
 app.post('/books', (req, res) => {
    const newBook = req.body; // Get the new book data from the request body
    newBook.id = books.length + 1; // Assign a unique ID
    books.push(newBook); // Add the new book to the array
    res.status(201).json(newBook); // Send created book with status code 201
   });


   // Put method for updating a book
   app.put('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id); // Get book ID from URL parameter
    const updatedBook = req.body; // Get updated book data from request body
  
    const bookIndex = books.findIndex(book => book.id === bookId);
  
    if (bookIndex !== -1) {
      updatedBook.id = bookId;
      books[bookIndex] = updatedBook; // Update book data in the array
      res.json(updatedBook); // Send updated book data
    } else {
      res.status(404).send('Book not found'); // Send error for non-existent book
    }
  });

    // Delete method for deleting a book
    app.delete('/books/:id', (req, res) => {
        const bookId = parseInt(req.params.id); // Get book ID from URL parameter
      
        const bookIndex = books.findIndex(book => book.id === bookId);
      
        if (bookIndex !== -1) {
          books.splice(bookIndex, 1); // Remove book from the array
          res.status(204).send(); // Send empty response with status code 204 (No Content)
        } else {
          res.status(404).send('Book not found'); // Send error for non-existent book
        }
      });

      // Post method for creating a new user
      app.post('/users', (req, res) => {
        const newUser = req.body; // newUser will be an object containing user data
        // Process newUser data (e.g., name, email)
        res.json(newUser);
     });

     // Get method
     app.get('/products/:productId', (req, res) => {
        const productId = req.params.productId; // productId will contain the value from the URL
        // Find product by id and send details
        res.json(productDetails);
     });


      // Start server
      app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
     });

