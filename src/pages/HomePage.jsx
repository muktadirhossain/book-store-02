import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import { ALL_BOOKS, ALL_CATEGORIES } from '../constants/Api';
import { useEffect, useState } from 'react';
import BookCard from '../components/card/BookCard';

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const fetchCategories = async () => {
    try {
      const res = await axios(ALL_CATEGORIES);
      setCategories(res?.data?.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchBooks = async () => {
    try {
      const res = await axios(ALL_BOOKS);
      setBooks(res?.data?.data);
      setFilteredBooks(res?.data?.data); // Initialize filteredBooks with all books
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchBooks();
  }, []);

  // Filter books based on search term and selected category
  useEffect(() => {
    let updatedBooks = books;

    if (selectedCategory !== 'All') {
      updatedBooks = updatedBooks.filter(
        (book) => book?.category_id?.name === selectedCategory
      );
    }

    if (searchTerm) {
      updatedBooks = updatedBooks.filter((book) =>
        book?.title?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredBooks(updatedBooks);
  }, [searchTerm, selectedCategory, books]);

  return (
    <section className="min-h-screen">
      <div className="max-w-xl mx-auto my-4">
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Search books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
          />
          <MagnifyingGlassIcon className="size-6 text-black" />
        </label>
      </div>

      {/* Category Area:: */}
      <div>
        <div className="text-center">
          <button
            className={`btn btn-sm rounded-md mx-1.5 ${
              selectedCategory === 'All' ? 'btn-primary' : ''
            }`}
            onClick={() => setSelectedCategory('All')}
          >
            All
          </button>
          {categories?.map((category) => (
            <button
              key={category?._id}
              className={`btn btn-sm rounded-md mx-1.5 ${
                selectedCategory === category?.name ? 'btn-primary' : ''
              }`}
              onClick={() => setSelectedCategory(category?.name)}
            >
              {category?.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Catalogues area */}
      <section className="grid container mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 my-12">
        {filteredBooks?.map((book) => (
          <BookCard key={book?._id} book={book} />
        ))}
      </section>
      {
        filteredBooks?.length === 0 && <p className='text-center text-xl'>😔 Ooops, No Book Found !</p>
      }
    </section>
  );
};

export default HomePage;
