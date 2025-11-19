import React, { useEffect, useState } from 'react';
import bookData from "../../bookData.json"; 
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(bookData);
  }, []);

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center mb-12'>All Books Are Here</h2>

      {books.length === 0 ? (
        <p className="text-center text-xl text-gray-500">Loading books...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {books.map((book) => (
            <Link to={`/single_book/${book._id}`} key={book._id} className="block h-full">
              <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                <div className="flex-shrink-0 relative">
                  <img
                    src={book.imageURL}
                    alt={book.title || "Book cover"}
                    className="w-full h-64 object-cover rounded-md"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/300x400?text=No+Image";
                    }}
                  />

                  <div className="absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded-full cursor-pointer transition-colors duration-200">
                    <ShoppingCart size={20} className="text-white" />
                  </div>
                </div>

                <div className="mt-4 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 min-h-[3rem]">
                      {book.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      by <span className="font-medium">{book.authorName}</span>
                    </p>
                  </div>

                  <div className="mt-4">
                    <p className="text-lg font-bold text-green-600">
                      ${book.price?.toFixed(2) || 'N/A'}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;