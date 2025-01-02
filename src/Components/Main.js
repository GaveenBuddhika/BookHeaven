import React, { useState, useEffect } from "react";
import "../Styles/Main.css";
import Card from "./Card";
import axios from "axios";

const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);

  useEffect(() => {
    fetchBooks("react"); 
  }, []);

  
  const fetchBooks = (query) => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyBm6ltIBXmAYVJJj_A3XUmHCwMKcvBZRcE&maxResults=20`
      )
      .then((res) => setData(res.data.items || []))
      .catch((err) => console.log(err));
  };

  
  const searchBook = (evt) => {
    if (evt.key === "Enter" && search.trim()) {
      fetchBooks(search);
    }
  };

  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
          Book Haven: Search, Read, Repeat 
          </h1>
          <h3> Discover your next great read with Book Haven! Search millions of books effortlessly, explore detailed information, and find your perfect match. Whether you're a casual reader or a book enthusiast, our intuitive platform brings the literary world right to your fingertips.</h3>
        </div>
        <div className="row2">
          <h2>Find Your Book Here</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your Book Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
            />
            <button onClick={() => fetchBooks(search)}>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        {bookData.length > 0 ? (
          <Card book={bookData} />
        ) : (
          <p>No books found. Try searching for something else.</p>
        )}
      </div>
    </>
  );
};

export default Main;
