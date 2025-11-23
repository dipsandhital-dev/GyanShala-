// src/pages/UploadBook.jsx
import React, { useState } from "react";
import { Button, Label, TextInput, Textarea, Select } from "flowbite-react";

const UploadBook = () => {
  const baseInput =
    "w-full rounded-xl border-gray-300 bg-gray-50 text-gray-900 " +
    "placeholder:text-gray-400 focus:border-teal-500 focus:ring-2 " +
    "focus:ring-teal-500 focus:bg-white transition-all duration-200";

  const textAreaClass =
    "w-full rounded-xl border-gray-300 bg-gray-50 text-gray-900 " +
    "placeholder:text-gray-400 focus:border-teal-500 focus:ring-2 " +
    "focus:ring-teal-500 focus:bg-white transition-all duration-200 " +
    "resize-none min-h-[160px]";

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

  const [selectedBookCategory, setSelectedBookCategory] = useState("");

  const handleChangeSelectValue = (e) => {
    setSelectedBookCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // stop page reload

    const data = new FormData(e.target);

    const newBook = {
      title: data.get("bookTitle"),
      author: data.get("authorName"),
      imageUrl: data.get("bookImageUrl"),
      category: data.get("bookCategory"),
      description: data.get("bookDescription"),
      pdfUrl: data.get("bookPdfUrl"),
    };

    // For now just log & show a message
    console.log("Book ready to send to backend:", newBook);
    alert(`Book "${newBook.title}" captured (not yet saved to a backend).`);

    // Clear form
    e.target.reset();
    setSelectedBookCategory("");
  };

  return (
    <div className="w-full px-4 md:px-8 lg:px-14 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center md:text-left">
          Upload A Book
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
                name="bookTitle"
                type="text"
                placeholder="Enter book title"
                required
                shadow={false}
                sizing="lg"
                className={baseInput}
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
                name="authorName"
                type="text"
                placeholder="Enter author name"
                required
                shadow={false}
                sizing="lg"
                className={baseInput}
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
                name="bookImageUrl"
                type="url"
                placeholder="https://example.com/image.jpg"
                required
                shadow={false}
                sizing="lg"
                className={baseInput}
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
                name="bookCategory"
                required
                sizing="lg"
                className={baseInput}
                value={selectedBookCategory}
                onChange={handleChangeSelectValue}
              >
                <option value="" disabled>
                  Select category
                </option>
                {bookCategories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
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
              name="bookDescription"
              rows={5}
              placeholder="Write a compelling description of your book..."
              required
              className={textAreaClass}
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
              name="bookPdfUrl"
              type="url"
              placeholder="https://example.com/book.pdf"
              required
              shadow={false}
              sizing="lg"
              className={baseInput}
            />
          </div>

          {/* Submit Button */}
          <div className="pt-3">
            <Button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3.5 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Upload Book
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadBook;