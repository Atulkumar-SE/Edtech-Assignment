import { BookOpen, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="bg-primary-600 text-white p-2.5 rounded-xl shadow-sm group-hover:bg-primary-500 transition-colors">
            <BookOpen className="w-6 h-6" />
          </div>
          <span className="text-xl font-extrabold text-gray-900 tracking-tight">Edtech <span className="text-primary-600">Course Directory</span></span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-600 hover:text-primary-600 font-semibold transition-colors">Courses</a>
          <a href="#" className="text-gray-600 hover:text-primary-600 font-semibold transition-colors">Instructors</a>
          <a href="#" className="text-gray-600 hover:text-primary-600 font-semibold transition-colors">Pricing</a>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <button className="text-gray-600 hover:text-gray-900 font-semibold transition-colors">Log in</button>
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 rounded-xl font-semibold transition-colors shadow-sm hover:shadow-md">
            Sign up
          </button>
        </div>

        <button className="md:hidden text-gray-600 hover:text-gray-900 p-2">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
