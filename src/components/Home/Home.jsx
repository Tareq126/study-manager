import React, { useEffect, useState } from "react";
import "./Home.css";
import Activity from "../Activity/Activity";
import Book from "../Book/Book";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [time, setTime] = useState(0);
  useEffect(() => {
    fetch("study-manager.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const handleAddToList = (book) => {
    const totalTime = time + book;
    setTime(totalTime);
  };
  return (
    <div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {books.map((book) => (
              <Book
                key={book.id}
                book={book}
                handleAddToList={handleAddToList}
              ></Book>
            ))}
          </div>
        </div>
        <div>
          <Activity time={time}></Activity>
        </div>
      </div>
    </div>
  );
};

export default Home;
