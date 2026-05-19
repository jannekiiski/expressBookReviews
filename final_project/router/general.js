const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;

const axios = require('axios');

const public_users = express.Router();

// Register user
public_users.post("/register", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: "Username and password are required"
    });
  }

  if (users.find(user => user.username === username)) {
    return res.status(400).json({
      message: "User already exists"
    });
  }

  users.push({ username, password });

  return res.status(200).json({
    message: "User registered successfully"
  });
});


//GET ALL BOOKS (ASYNC / PROMISE VERSION)
public_users.get('/', async function (req, res) {
  try {
    const booksData = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(books);
      }, 1000);
    });

    return res.status(200).json(booksData);
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching books"
    });
  }
});


// Get book by ISBN
public_users.get('/isbn/:isbn', async function (req, res) {
  try {
    const isbn = req.params.isbn;

    const bookData = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(books[isbn]);
      }, 1000);
    });

    if (!bookData) {
      return res.status(404).json({ message: "Book not found" });
    }

    return res.status(200).json(bookData);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching book details" });
  }
});


// Get book by author
public_users.get('/author/:author', async function (req, res) {
  try {
    const authorName = req.params.author;

    const result = await new Promise((resolve) => {
      setTimeout(() => {
        const bookKeys = Object.keys(books);
        let output = {};

        for (let i = 0; i < bookKeys.length; i++) {
          let isbn = bookKeys[i];

          if (books[isbn].author === authorName) {
            output[isbn] = books[isbn];
          }
        }

        resolve(output);
      }, 1000);
    });

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching books by author" });
  }
});


// Get book by title
public_users.get('/title/:title', function (req, res) {
  const titleName = req.params.title;
  const bookKeys = Object.keys(books);

  let result = {};

  for (let i = 0; i < bookKeys.length; i++) {
    let isbn = bookKeys[i];

    if (books[isbn].title === titleName) {
      result[isbn] = books[isbn];
    }
  }

  return res.status(200).json(result);
});


// Get reviews
public_users.get('/review/:isbn', function (req, res) {
  const isbn = req.params.isbn;
  return res.status(200).json(books[isbn].reviews);
});


module.exports.general = public_users;