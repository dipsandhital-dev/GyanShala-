import React from "react";
import BookCard from "./BookCard";
import bookData from "../../bookData.json"; 

const OtherBooks = () => {
  return (
    <BookCard books={bookData} headline="Other Books " />
  );
};

export default OtherBooks;