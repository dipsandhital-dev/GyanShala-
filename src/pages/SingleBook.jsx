import React from "react";
import { useParams } from "react-router-dom";
import bookData from "../../bookData.json";

const SingleBook = () => {
  const { id } = useParams();
  const book = bookData.find((b) => b._id === id);

  if (!book) {
    return <div>Book not found!</div>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <p>Author: {book.authorName}</p>
      <p>Genre: {book.genre || "N/A"}</p>
      <p>Price: ${book.price?.toFixed(2)}</p>
      <p>{book.description || "No description available."}</p>
      <button>Add to Cart</button>
      <button>Buy Now</button>
    </div>
  );
};

export default SingleBook;