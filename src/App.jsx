import { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import CourseList from './components/CourseList';
import mockData from './mockData.json';

function App() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedInstructor, setSelectedInstructor] = useState('');
  const [sortByRating, setSortByRating] = useState('none');

  // Simulate network request for fetching data
  useEffect(() => {
    const timer = setTimeout(() => {
      setCourses(mockData);
      setIsLoading(false);
    }, 800); // 800ms loading state for UI feedback
    return () => clearTimeout(timer);
  }, []);

  // Derive categories and instructors for dropdowns
  const categories = useMemo(() => {
    return [...new Set(mockData.map((c) => c.category))];
  }, []);

  const instructors = useMemo(() => {
    return [...new Set(mockData.map((c) => c.instructor))];
  }, []);

  // Filter and sort logic
  const filteredAndSortedCourses = useMemo(() => {
    let result = courses;

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter((course) => 
        course.name.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (selectedCategory) {
      result = result.filter((course) => course.category === selectedCategory);
    }

    // Filter by instructor
    if (selectedInstructor) {
      result = result.filter((course) => course.instructor === selectedInstructor);
    }

    // Sort by rating
    if (sortByRating !== 'none') {
      result = [...result].sort((a, b) => {
        if (sortByRating === 'desc') {
          return b.rating - a.rating;
        } else {
          return a.rating - b.rating;
        }
      });
    }

    return result;
  }, [courses, searchQuery, selectedCategory, selectedInstructor, sortByRating]);

  return (
    <div className="min-h-screen bg-[#f9fafb] font-sans text-gray-900 flex flex-col">
      <Header />
      
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="mb-10 text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Explore our <span className="text-primary-600">Courses</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl">
            Discover a wide range of topics taught by expert instructors. Enhance your skills and advance your career today.
          </p>
        </div>

        <FilterBar 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedInstructor={selectedInstructor}
          setSelectedInstructor={setSelectedInstructor}
          sortByRating={sortByRating}
          setSortByRating={setSortByRating}
          categories={categories}
          instructors={instructors}
        />

        <CourseList 
          courses={filteredAndSortedCourses} 
          isLoading={isLoading} 
        />
      </main>
      
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">© 2026 Frontlines Media. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-gray-500">Terms</a>
            <a href="#" className="text-gray-400 hover:text-gray-500">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-gray-500">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
