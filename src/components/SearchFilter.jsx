import React, { useState } from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';

function SearchFilter({ onSearch, onFilter, filterOptions }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState({
    category: 'all',
    level: 'all',
    duration: 'all',
    price: 'all'
  });
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...activeFilters, [filterType]: value };
    setActiveFilters(newFilters);
    onFilter(newFilters);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <form onSubmit={handleSearch} className="flex mb-4">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            className="input-field pl-10"
            placeholder="Search courses by name, instructor, or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="ml-2 btn-primary cursor-pointer"
        >
          Search
        </button>
        <button
          type="button"
          className="ml-2 btn-secondary flex items-center cursor-pointer"
          onClick={() => setShowFilters(!showFilters)}
        >
          <FaFilter className="mr-2" />
          Filters
        </button>
      </form>

      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              className="input-field"
              value={activeFilters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
            >
              <option value="all">All Categories</option>
              {filterOptions.categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Level</label>
            <select
              className="input-field"
              value={activeFilters.level}
              onChange={(e) => handleFilterChange('level', e.target.value)}
            >
              <option value="all">All Levels</option>
              {filterOptions.levels.map((level) => (
                <option key={level.value} value={level.value}>
                  {level.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
            <select
              className="input-field"
              value={activeFilters.duration}
              onChange={(e) => handleFilterChange('duration', e.target.value)}
            >
              <option value="all">Any Duration</option>
              {filterOptions.durations.map((duration) => (
                <option key={duration.value} value={duration.value}>
                  {duration.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
            <select
              className="input-field"
              value={activeFilters.price}
              onChange={(e) => handleFilterChange('price', e.target.value)}
            >
              <option value="all">Any Price</option>
              {filterOptions.prices.map((price) => (
                <option key={price.value} value={price.value}>
                  {price.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchFilter;