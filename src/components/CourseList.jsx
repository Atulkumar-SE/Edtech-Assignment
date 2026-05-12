import CourseCard from './CourseCard';
import { BookX } from 'lucide-react';

export default function CourseList({ courses, isLoading }) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-white rounded-2xl h-[400px] border border-gray-100 p-4 animate-pulse flex flex-col">
            <div className="bg-gray-100 h-48 rounded-xl w-full mb-6"></div>
            <div className="bg-gray-100 h-6 rounded w-1/4 mb-4"></div>
            <div className="bg-gray-100 h-6 rounded w-3/4 mb-3"></div>
            <div className="bg-gray-100 h-6 rounded w-1/2 mb-auto"></div>
            <div className="bg-gray-100 h-12 rounded w-full mt-4"></div>
          </div>
        ))}
      </div>
    );
  }

  if (courses.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 px-4 text-center bg-white rounded-3xl border border-gray-100 shadow-sm">
        <div className="bg-gray-50 p-6 rounded-full mb-6">
          <BookX className="w-12 h-12 text-gray-400" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">No courses found</h3>
        <p className="text-gray-500 max-w-md text-lg">We couldn't find any courses matching your current filters. Try adjusting your search or clearing the filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
