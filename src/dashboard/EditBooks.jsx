// src/pages/EditBooks.jsx (or consider renaming to BookForm.jsx later)
import React, { useState, useEffect } from "react";
import { Button, Label, TextInput, Textarea, Select } from "flowbite-react";
import { useParams, useNavigate } from "react-router-dom"; // 👈 Added hooks

const EditBooks = () => {
  const { id } = useParams(); // 👈 Get book ID from URL
  const navigate = useNavigate();

  // Simulated book data — replace with API fetch in real app
  const dummyBooks = {
    1: { title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Fiction", imageUrl: "https://via.placeholder.com/150", description: "A classic American novel.", pdfUrl: "https://example.com/gatsby.pdf" },
    2: { title: "Atomic Habits", author: "James Clear", category: "Self-Help", imageUrl: "https://via.placeholder.com/150", description: "Build good habits, break bad ones.", pdfUrl: "https://example.com/atomic.pdf" },
    3: { title: "A Brief History of Time", author: "Stephen Hawking", category: "Science", imageUrl: "https://via.placeholder.com/150", description: "Explains cosmology for general readers.", pdfUrl: "https://example.com/hawking.pdf" },
    4: { title: "The Art of War", author: "Sun Tzu", category: "History", imageUrl: "https://via.placeholder.com/150", description: "Ancient Chinese military strategy.", pdfUrl: "https://example.com/artofwar.pdf" },
  };

  const bookCategories = [
    "Fiction",
    "Non-fiction",
    "Science",
    "History",
    "Biography",
    "Technology",
    "Self-Help",
    "Storytelling",
    "Poetry",
    "Drama",
  ];

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    imageUrl: "",
    category: "",
    description: "",
    pdfUrl: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  // Load book data if editing
  useEffect(() => {
    if (id) {
      setIsEditing(true);
      const book = dummyBooks[id];
      if (book) {
        setFormData(book);
      } else {
        alert("Book not found");
        navigate("/admin/manage_books");
      }
    }
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      // Simulate update
      console.log("Updating book:", { id, ...formData });
      alert(`Book "${formData.title}" updated successfully.`);
    } else {
      // Simulate create
      console.log("Creating new book:", formData);
      alert(`Book "${formData.title}" uploaded successfully.`);
    }

    // Redirect back to manage books
    navigate("/admin/manage_books");
  };

  const pageTitle = isEditing ? "Edit Book" : "Upload A Book";

  return (
    <div className="w-full px-4 md:px-8 lg:px-14 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center md:text-left">
          {pageTitle}
        </h1>

        <form className="space-y-7" onSubmit={handleSubmit}>
          {/* Row 1: Book Title / Author Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label
                htmlFor="bookTitle"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Book Title *
              </Label>
              <TextInput
                id="bookTitle"
                name="title"
                type="text"
                placeholder="Enter book title"
                required
                shadow={false}
                sizing="lg"
                value={formData.title}
                onChange={handleChange}
                className="w-full rounded-xl border-gray-300 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all duration-200"
              />
            </div>

            <div>
              <Label
                htmlFor="authorName"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Author Name *
              </Label>
              <TextInput
                id="authorName"
                name="author"
                type="text"
                placeholder="Enter author name"
                required
                shadow={false}
                sizing="lg"
                value={formData.author}
                onChange={handleChange}
                className="w-full rounded-xl border-gray-300 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all duration-200"
              />
            </div>
          </div>

          {/* Row 2: Book Image URL / Book Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label
                htmlFor="bookImageUrl"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Book Image URL *
              </Label>
              <TextInput
                id="bookImageUrl"
                name="imageUrl"
                type="url"
                placeholder="https://example.com/image.jpg"
                required
                shadow={false}
                sizing="lg"
                value={formData.imageUrl}
                onChange={handleChange}
                className="w-full rounded-xl border-gray-300 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all duration-200"
              />
            </div>

            <div>
              <Label
                htmlFor="bookCategory"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Book Category *
              </Label>
              <Select
                id="bookCategory"
                name="category"
                required
                sizing="lg"
                value={formData.category}
                onChange={handleChange}
                className="w-full rounded-xl border-gray-300 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all duration-200"
              >
                <option value="" disabled>Select category</option>
                {bookCategories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </Select>
            </div>
          </div>

          {/* Row 3: Book Description */}
          <div>
            <Label
              htmlFor="bookDescription"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Book Description *
            </Label>
            <Textarea
              id="bookDescription"
              name="description"
              rows={5}
              placeholder="Write a compelling description of your book..."
              required
              value={formData.description}
              onChange={handleChange}
              className="w-full rounded-xl border-gray-300 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all duration-200 resize-none min-h-[160px]"
            />
          </div>

          {/* Row 4: Book PDF URL */}
          <div>
            <Label
              htmlFor="bookPdfUrl"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Book PDF URL *
            </Label>
            <TextInput
              id="bookPdfUrl"
              name="pdfUrl"
              type="url"
              placeholder="https://example.com/book.pdf"
              required
              shadow={false}
              sizing="lg"
              value={formData.pdfUrl}
              onChange={handleChange}
              className="w-full rounded-xl border-gray-300 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all duration-200"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-3">
            <Button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3.5 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              {isEditing ? "Update Book" : "Upload Book"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBooks;