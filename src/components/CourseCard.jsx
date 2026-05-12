import { Star, Clock, User } from 'lucide-react';

export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer text-left">
      <div className="relative h-52 overflow-hidden bg-gray-100">
        <img 
          src={course.image} 
          alt={course.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/95 backdrop-blur-sm text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm tracking-wide uppercase">
            {course.category}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-amber-500 bg-amber-50 px-2 py-1 rounded-md">
            <Star className="w-4 h-4 fill-current mr-1" />
            <span className="text-sm font-bold">{course.rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm font-semibold">
            <Clock className="w-4 h-4 mr-1.5 text-primary-500" />
            {course.duration}
          </div>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-primary-600 transition-colors line-clamp-2">
          {course.name}
        </h3>
        <div className="mt-auto pt-4 flex items-center text-gray-600 border-t border-gray-100">
          <div className="bg-gray-50 p-2 rounded-full mr-3 group-hover:bg-primary-50 transition-colors">
            <User className="w-4 h-4 text-gray-500 group-hover:text-primary-500 transition-colors" />
          </div>
          <span className="text-sm font-medium">{course.instructor}</span>
        </div>
      </div>
    </div>
  );
}
