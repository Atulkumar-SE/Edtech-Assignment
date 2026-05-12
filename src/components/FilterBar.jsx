import { Search, SlidersHorizontal, ArrowDownAZ } from 'lucide-react';

export default function FilterBar({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedInstructor,
  setSelectedInstructor,
  sortByRating,
  setSortByRating,
  categories,
  instructors,
}) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-8 flex flex-col lg:flex-row gap-4 items-center">
      {/* Search Input */}
      <div className="relative flex-1 w-full">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search courses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="block w-full pl-11 pr-4 py-3 bg-gray-50 border-none rounded-xl text-gray-900 focus:ring-2 focus:ring-primary-500 focus:bg-white transition-colors outline-none"
        />
      </div>

      <div className="flex flex-wrap sm:flex-nowrap gap-3 w-full lg:w-auto">
        {/* Category Filter */}
        <div className="flex-1 sm:flex-none relative min-w-[160px]">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SlidersHorizontal className="h-4 w-4 text-gray-400" />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="block w-full pl-10 pr-8 py-3 bg-gray-50 border-none rounded-xl text-gray-700 focus:ring-2 focus:ring-primary-500 focus:bg-white appearance-none cursor-pointer transition-colors outline-none font-medium"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Instructor Filter */}
        <div className="flex-1 sm:flex-none relative min-w-[160px]">
          <select
            value={selectedInstructor}
            onChange={(e) => setSelectedInstructor(e.target.value)}
            className="block w-full px-4 py-3 bg-gray-50 border-none rounded-xl text-gray-700 focus:ring-2 focus:ring-primary-500 focus:bg-white appearance-none cursor-pointer transition-colors outline-none font-medium"
          >
            <option value="">All Instructors</option>
            {instructors.map((inst) => (
              <option key={inst} value={inst}>{inst}</option>
            ))}
          </select>
        </div>

        {/* Sort */}
        <div className="flex-1 sm:flex-none relative min-w-[160px]">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <ArrowDownAZ className="h-4 w-4 text-gray-400" />
          </div>
          <select
            value={sortByRating}
            onChange={(e) => setSortByRating(e.target.value)}
            className="block w-full pl-10 pr-8 py-3 bg-gray-50 border-none rounded-xl text-gray-700 focus:ring-2 focus:ring-primary-500 focus:bg-white appearance-none cursor-pointer transition-colors outline-none font-medium"
          >
            <option value="none">Sort by Rating</option>
            <option value="desc">Highest First</option>
            <option value="asc">Lowest First</option>
          </select>
        </div>
      </div>
    </div>
  );
}
