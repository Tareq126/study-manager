import React from "react";
import "./Book.css";

const Book = ({ book, handleAddToList }) => {
  const { image, subject, time } = book;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl mt-2 mx-2">
        <figure className="">
          <img src={image} className="rounded-xl h-60 w-96" />
        </figure>
        <div className="card-body items-center text-center">
          <h6 className="card-title">{subject}</h6>
          <p>{time}H</p>
          <div className="card-actions">
            <button
              onClick={() => handleAddToList(book.time)}
              className="btn btn-success w-60"
            >
              Add To List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
