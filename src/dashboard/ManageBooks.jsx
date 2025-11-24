// src/pages/ManageBooks.jsx
import React, { useMemo, useState, useEffect } from "react";
import { Button, TextInput, Spinner } from "flowbite-react";
import {
  Search,
  BookOpen,
  Tag,
  DollarSign,
  Pencil,
  Trash2
} from "lucide-react";
import { useNavigate } from "react-router-dom"; // 👈 Added for SPA navigation

const ManageBooks = () => {
  const navigate = useNavigate(); // 👈 Initialize navigate

  const baseInput =
    "w-full rounded-xl border-gray-300 bg-gray-50 text-gray-900 " +
    "placeholder:text-gray-400 focus:border-teal-500 focus:ring-2 " +
    "focus:ring-teal-500 focus:bg-white transition-all duration-200";

  // State for books data - will load from JSON/API
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Load books data (replace with your actual JSON data loading)
  useEffect(() => {
    const loadBooksData = async () => {
      try {
        const dummyData = [
          {
            id: 1,
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            category: "Fiction",
            price: 12.99,
          },
          {
            id: 2,
            title: "Atomic Habits",
            author: "James Clear",
            category: "Self-Help",
            price: 18.5,
          },
          {
            id: 3,
            title: "A Brief History of Time",
            author: "Stephen Hawking",
            category: "Science",
            price: 15.0,
          },
          {
            id: 4,
            title: "The Art of War",
            author: "Sun Tzu",
            category: "History",
            price: 10.0,
          },
        ];
        
        await new Promise(resolve => setTimeout(resolve, 800));
        setBooks(dummyData);
        setLoading(false);
      } catch (error) {
        console.error("Error loading books:", error);
        setLoading(false);
      }
    };

    loadBooksData();
  }, []);

  const filteredBooks = useMemo(() => {
    if (!books || books.length === 0) return [];
    
    const term = searchTerm.toLowerCase().trim();
    if (!term) return books;
    
    return books.filter(
      (book) =>
        book.title.toLowerCase().includes(term) ||
        book.author.toLowerCase().includes(term) ||
        book.category.toLowerCase().includes(term)
    );
  }, [books, searchTerm]);

  const handleDelete = async (book) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${book.title}"? This action cannot be undone.`
    );
    if (confirmDelete) {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 500));
        
        setBooks(prevBooks => prevBooks.filter(b => b.id !== book.id));
        alert(`Book "${book.title}" has been deleted successfully.`);
      } catch (error) {
        console.error("Error deleting book:", error);
        alert("Failed to delete book. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  if (loading && books.length === 0) {
    return (
      <div className="w-full px-4 md:px-8 lg:px-14 py-8 flex justify-center items-center min-h-[50vh]">
        <div className="text-center">
          <Spinner size="xl" className="mb-4" />
          <p className="text-gray-600">Loading books...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-4 md:px-8 lg:px-14 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header + Search */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center">
            <BookOpen className="mr-3 h-8 w-8 text-teal-600" />
            Manage Books
          </h1>

          <div className="relative w-full md:w-96 group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
              <Search className="h-5 w-5" />
            </div>
            <TextInput
              id="searchBooks"
              type="text"
              placeholder="Search books by title, author or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              shadow={false}
              className="w-full rounded-xl border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 
                       focus:border-teal-500 focus:ring-4 focus:ring-teal-100 focus:bg-white 
                       transition-all duration-300 pl-12 pr-4 py-3 shadow-sm hover:shadow-md"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-teal-500 to-transparent transform origin-left scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300"></div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm uppercase tracking-wide">Total Books</p>
                <p className="text-3xl font-bold mt-1">{books.length}</p>
              </div>
              <div className="bg-blue-400 bg-opacity-30 p-3 rounded-full">
                <BookOpen className="w-8 h-8" />
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm uppercase tracking-wide">Categories</p>
                <p className="text-3xl font-bold mt-1">
                  {new Set(books.map(book => book.category)).size}
                </p>
              </div>
              <div className="bg-green-400 bg-opacity-30 p-3 rounded-full">
                <Tag className="w-8 h-8" />
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm uppercase tracking-wide">Total Value</p>
                <p className="text-3xl font-bold mt-1">
                  ${books.reduce((sum, book) => sum + book.price, 0).toFixed(2)}
                </p>
              </div>
              <div className="bg-purple-400 bg-opacity-30 p-3 rounded-full">
                <DollarSign className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white rounded-2xl shadow-xl border border-gray-200">
          <div className="p-6 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Books List ({filteredBooks.length} found)
            </h2>
            {searchTerm && (
              <div className="flex items-center bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm">
                <Search className="h-4 w-4 mr-2" />
                Searching for: <span className="font-medium ml-1">"{searchTerm}"</span>
                <button
                  onClick={() => setSearchTerm("")}
                  className="ml-2 hover:bg-teal-100 p-1 rounded-full transition-colors"
                >
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm text-gray-700">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100 text-xs uppercase tracking-wide text-gray-600">
                <tr>
                  <th scope="col" className="px-8 py-4 font-semibold">#</th>
                  <th scope="col" className="px-8 py-4 font-semibold">Book Title</th>
                  <th scope="col" className="px-8 py-4 font-semibold">Author</th>
                  <th scope="col" className="px-8 py-4 font-semibold">Category</th>
                  <th scope="col" className="px-8 py-4 font-semibold">Price</th>
                  <th scope="col" className="px-8 py-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredBooks.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-8 py-12 text-center">
                      <div className="flex flex-col items-center justify-center">
                        <BookOpen className="w-16 h-16 text-gray-300 mb-4" />
                        <p className="text-xl font-medium text-gray-500 mb-2">No books found</p>
                        <p className="text-gray-400">Try adjusting your search criteria</p>
                        {searchTerm && (
                          <Button
                            color="gray"
                            size="sm"
                            className="mt-4"
                            onClick={() => setSearchTerm("")}
                          >
                            Clear Search
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredBooks.map((book, index) => (
                    <tr key={book.id} className="hover:bg-gray-50 transition-colors duration-150 hover:shadow-sm">
                      <td className="px-8 py-5 whitespace-nowrap font-medium text-gray-600">
                        {index + 1}
                      </td>
                      <td className="px-8 py-5 font-medium text-gray-900 hover:text-teal-600 transition-colors">
                        {book.title}
                      </td>
                      <td className="px-8 py-5 text-gray-700">{book.author}</td>
                      <td className="px-8 py-5">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors">
                          {book.category}
                        </span>
                      </td>
                      <td className="px-8 py-5 font-semibold text-green-600">
                        ${book.price.toFixed(2)}
                      </td>
                      <td className="px-8 py-5">
                        <div className="flex items-center justify-end gap-3">
                          <Button
                            size="sm"
                            color="gray"
                            className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg px-4 py-2 transition-all duration-200 hover:scale-105"
                            onClick={() => {
                              navigate(`/admin/edit_book/${book.id}`); // ✅ FIXED: Correct SPA route
                            }}
                          >
                            <Pencil className="mr-1 h-4 w-4" />
                            Edit
                          </Button>
                          <Button
                            size="sm"
                            className="bg-red-100 hover:bg-red-200 text-red-700 font-medium rounded-lg px-4 py-2 transition-all duration-200 hover:scale-105"
                            onClick={() => handleDelete(book)}
                          >
                            <Trash2 className="mr-1 h-4 w-4" />
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          
          {filteredBooks.length > 0 && (
            <div className="p-4 bg-gray-50 border-t border-gray-200 rounded-b-2xl">
              <p className="text-sm text-gray-600">
                Showing {filteredBooks.length} of {books.length} total books
                {searchTerm && ` matching "${searchTerm}"`}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageBooks;