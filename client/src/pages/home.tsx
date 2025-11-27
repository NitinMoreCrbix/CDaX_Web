import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="min-h-screen pb-24 px-6 pt-12 max-w-md mx-auto w-full bg-brand-bg overflow-x-hidden">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center mb-8"
      >
        <h1 className="font-serif text-3xl text-brand-text font-bold flex items-center gap-2">
          Welcome, Rohit <span className="text-2xl">👏</span>
        </h1>
        <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white overflow-hidden shadow-sm">
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rohit&backgroundColor=b6e3f4" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </motion.header>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {/* Top Cards Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Card 1: Web Development */}
          <motion.div 
            variants={itemVariants}
            className="bg-brand-dark rounded-2xl p-5 text-white aspect-[4/5] flex flex-col justify-between relative overflow-hidden shadow-lg shadow-blue-900/20 group cursor-pointer"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-2xl" />
            
            {/* 3D Cube Icon Placeholder */}
            <div className="w-16 h-16 mb-4 relative transform group-hover:scale-110 transition-transform duration-500">
               <div className="absolute inset-0 bg-blue-400/30 blur-xl rounded-full"></div>
               <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-blue-200 drop-shadow-lg" stroke="currentColor" strokeWidth="1">
                 <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" fill="currentColor" fillOpacity="0.5" />
                 <path d="M3.27 6.96L12 12.01l8.73-5.05" stroke="white" strokeWidth="2" strokeLinecap="round" />
                 <path d="M12 22.08V12" stroke="white" strokeWidth="2" strokeLinecap="round" />
               </svg>
            </div>

            <div>
              <h3 className="font-medium text-lg leading-tight mb-4">Web Development</h3>
              <div className="flex items-center gap-2">
                <div className="h-1.5 flex-1 bg-blue-900/50 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="h-full bg-white rounded-full" 
                  />
                </div>
                <span className="text-xs font-medium opacity-80">75 %</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Intro to HTML */}
          <motion.div 
            variants={itemVariants}
            className="bg-brand-light rounded-2xl p-5 text-brand-text aspect-[4/5] flex flex-col justify-end relative overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow"
          >
            <h3 className="font-medium text-lg leading-tight mb-4 text-center">Intro to HTML</h3>
            <div className="flex items-center gap-2">
              <div className="h-1.5 flex-1 bg-white/50 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "55%" }}
                  transition={{ delay: 0.7, duration: 1 }}
                  className="h-full bg-brand-dark rounded-full" 
                />
              </div>
              <span className="text-xs font-medium text-brand-dark">55 %</span>
            </div>
          </motion.div>
        </div>

        {/* Wide Card: Web Development Module 1 */}
        <motion.div 
          variants={itemVariants}
          className="bg-brand-medium rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center gap-4">
             <div className="w-14 h-14 relative flex-shrink-0">
               <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-white drop-shadow-md" stroke="currentColor" strokeWidth="1">
                 <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" fill="currentColor" fillOpacity="0.8" />
                 <path d="M3.27 6.96L12 12.01l8.73-5.05" stroke="rgba(0,0,0,0.1)" strokeWidth="2" strokeLinecap="round" />
                 <path d="M12 22.08V12" stroke="rgba(0,0,0,0.1)" strokeWidth="2" strokeLinecap="round" />
               </svg>
            </div>
            <h3 className="font-medium text-lg text-brand-text/80">Web Development<br/><span className="text-brand-text">Module 1</span></h3>
          </div>
          
          <div className="flex items-center gap-3 mt-2">
            <div className="h-2 flex-1 bg-white/40 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "65%" }}
                transition={{ delay: 0.9, duration: 1 }}
                className="h-full bg-brand-dark rounded-full" 
              />
            </div>
            <span className="text-sm font-bold text-white">65 %</span>
          </div>
        </motion.div>

        {/* Suggestive Learning Section */}
        <motion.div variants={itemVariants} className="pt-4">
          <h2 className="text-xl font-bold mb-4 text-black">Suggestive Learning</h2>
          
          <div className="bg-brand-light/50 rounded-2xl p-4 flex gap-4 items-start hover:bg-brand-light/70 transition-colors cursor-pointer">
            <div className="w-24 h-20 bg-brand-light border-2 border-brand-text/10 rounded-xl flex-shrink-0 overflow-hidden relative">
               {/* Placeholder for course image */}
               <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200" />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-brand-text text-sm mb-1">Flutter Development Course</h3>
              <div className="flex items-center gap-1 mb-2">
                 <div className="flex text-yellow-400">
                   {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                 </div>
                 <span className="text-[10px] font-medium text-gray-500">5.0 (3587)</span>
              </div>
              <p className="text-[10px] text-gray-600 leading-relaxed line-clamp-3">
                Create native iOS, Android, and web apps from a single codebase using Flutter and Dart, covering widgets, state management, and deployment.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
