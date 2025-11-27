import { motion } from "framer-motion";
import { Star, PlayCircle, Clock, MoreVertical } from "lucide-react";
import Navbar from "@/components/ui/navbar";

export default function HomePage() {
  const courses = [
    { id: 1, title: "Flutter Development Course", author: "Dr. Angela Yu", rating: 4.8, reviews: "3,587", price: "$12.99", oldPrice: "$84.99", image: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?w=500&q=80", tag: "Bestseller" },
    { id: 2, title: "The Complete 2024 Web Development Bootcamp", author: "Colt Steele", rating: 4.9, reviews: "12,400", price: "$14.99", oldPrice: "$99.99", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80", tag: "Bestseller" },
    { id: 3, title: "Machine Learning A-Z™: AI, Python & R", author: "Kirill Eremenko", rating: 4.5, reviews: "8,900", price: "$11.99", oldPrice: "$79.99", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&q=80", tag: "" },
    { id: 4, title: "React - The Complete Guide 2024", author: "Maximilian Schwarzmüller", rating: 4.7, reviews: "5,200", price: "$13.99", oldPrice: "$89.99", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&q=80", tag: "New" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-brand-text">
      <Navbar />
      
      {/* Hero Section - Udemy Style */}
      <section className="relative h-[300px] md:h-[400px] bg-brand-bg overflow-hidden flex items-center justify-center">
        {/* Abstract Shapes/Background using the brand colors */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.8)_0%,transparent_60%)]" />
          <div className="absolute -right-20 -bottom-40 w-96 h-96 bg-brand-medium/20 rounded-full blur-3xl" />
          <div className="absolute left-20 top-20 w-64 h-64 bg-brand-light/40 rounded-full blur-2xl" />
        </div>

        {/* Hero Content Box - Floating Card Style */}
        <div className="container mx-auto px-6 relative z-10 flex justify-start">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-md">
             <h1 className="text-3xl font-serif font-bold mb-3 text-brand-text">Learning that gets you</h1>
             <p className="text-gray-600 mb-6">Skills for your present (and your future). Get started with us.</p>
             <div className="flex gap-3">
                <button className="bg-brand-dark text-white px-6 py-3 rounded-md font-bold hover:bg-blue-900 transition-colors">Explore Courses</button>
             </div>
          </div>
        </div>
      </section>

      {/* Welcome Back / Progress Section - Using the Screenshot Colors */}
      <section className="bg-brand-bg/30 py-12 border-b border-brand-light/30">
        <div className="container mx-auto px-6">
          <div className="flex items-end gap-3 mb-6">
             <h2 className="text-2xl font-bold font-serif text-brand-text">Let's start learning, Rohit</h2>
             <span className="text-2xl pb-1">👋</span>
             <a href="#" className="ml-auto text-brand-dark font-bold text-sm hover:underline">My learning</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Progress Card 1 - Web Development */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 flex gap-4 hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden group">
              <div className="w-32 h-24 bg-brand-dark rounded-lg flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                 <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-white opacity-80" stroke="currentColor" strokeWidth="1.5">
                   <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                   <path d="M3.27 6.96L12 12.01l8.73-5.05" />
                   <path d="M12 22.08V12" />
                 </svg>
                 <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
                    <div className="h-full bg-blue-400 w-[75%]" />
                 </div>
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="font-bold text-brand-text mb-1 group-hover:text-brand-dark transition-colors">Web Development</h3>
                <p className="text-xs text-gray-500 mb-3">Lecture 42 • 5m left</p>
                <div>
                   <div className="flex justify-between text-xs font-bold mb-1">
                      <span className="text-gray-600">75% Complete</span>
                   </div>
                   <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                     <div className="h-full bg-brand-dark w-[75%]" />
                   </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                 <PlayCircle className="w-8 h-8 text-brand-dark fill-white" />
              </div>
            </div>

            {/* Progress Card 2 - Intro to HTML */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 flex gap-4 hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden group">
              <div className="w-32 h-24 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                 <div className="font-bold text-brand-dark text-xl">HTML</div>
                 <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/50">
                    <div className="h-full bg-brand-dark w-[55%]" />
                 </div>
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="font-bold text-brand-text mb-1 group-hover:text-brand-dark transition-colors">Intro to HTML</h3>
                <p className="text-xs text-gray-500 mb-3">Lecture 12 • 15m left</p>
                <div>
                   <div className="flex justify-between text-xs font-bold mb-1">
                      <span className="text-gray-600">55% Complete</span>
                   </div>
                   <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                     <div className="h-full bg-brand-dark w-[55%]" />
                   </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                 <PlayCircle className="w-8 h-8 text-brand-dark fill-white" />
              </div>
            </div>

            {/* Progress Card 3 - Module 1 */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 flex gap-4 hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden group">
              <div className="w-32 h-24 bg-brand-medium rounded-lg flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/20 to-transparent" />
                 <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/50">
                    <div className="h-full bg-brand-dark w-[65%]" />
                 </div>
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="font-bold text-brand-text mb-1 group-hover:text-brand-dark transition-colors">Web Development Module 1</h3>
                <p className="text-xs text-gray-500 mb-3">Lecture 8 • 32m left</p>
                <div>
                   <div className="flex justify-between text-xs font-bold mb-1">
                      <span className="text-gray-600">65% Complete</span>
                   </div>
                   <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                     <div className="h-full bg-brand-dark w-[65%]" />
                   </div>
                </div>
              </div>
               <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                 <PlayCircle className="w-8 h-8 text-brand-dark fill-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Course Grid */}
      <section className="py-12 container mx-auto px-6">
        <h2 className="text-2xl font-bold font-serif text-brand-text mb-2">What to learn next</h2>
        <h3 className="text-xl font-bold text-brand-text mb-6">Recommended for you</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="group flex flex-col h-full cursor-pointer">
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-lg mb-3">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full aspect-video object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <h4 className="font-bold text-brand-text leading-tight mb-1 line-clamp-2 group-hover:text-brand-dark transition-colors">
                  {course.title}
                </h4>
                <p className="text-xs text-gray-500 mb-1">{course.author}</p>
                
                <div className="flex items-center gap-1 mb-1">
                  <span className="font-bold text-sm text-brand-dark">{course.rating}</span>
                  <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className={`w-3 h-3 ${i <= Math.round(course.rating) ? 'fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="text-xs text-gray-400">({course.reviews})</span>
                </div>

                <div className="flex items-center gap-2 mt-auto">
                  <span className="font-bold text-lg text-gray-900">{course.price}</span>
                  <span className="text-sm text-gray-400 line-through">{course.oldPrice}</span>
                </div>

                {course.tag && (
                  <div className="mt-2">
                    <span className="bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded-sm uppercase">
                      {course.tag}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      
       {/* Categories Section */}
       <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6">
           <h2 className="text-xl font-bold font-serif text-brand-text mb-6">Top Categories</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Design", "Development", "Marketing", "IT and Software", "Personal Development", "Business", "Photography", "Music"].map((cat) => (
                 <div key={cat} className="bg-white p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer font-medium text-brand-text text-center">
                    {cat}
                 </div>
              ))}
           </div>
        </div>
       </section>
    </div>
  );
}
