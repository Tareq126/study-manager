import React, { useEffect, useState } from "react";
import "./Home.css";
import Activity from "../Activity/Activity";
import Book from "../Book/Book";

const Home = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("study-manager.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <div className="home-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
          {books.map((book) => (
            <Book key={book.id} book={book}></Book>
          ))}
        </div>
        <div className="activity-container">
          <Activity></Activity>
        </div>
      </div>
    </div>
  );
};

export default Home;
