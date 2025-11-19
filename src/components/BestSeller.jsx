import React from "react";
import BookCard from "./BookCard";
import bookData from "../../bookData.json"; 

const BestSeller = () => {
  return (
    <BookCard books={bookData} headline="Best Seller Books" />
  );
};

export default BestSeller;