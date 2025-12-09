import { useEffect, useState } from "react";
import { Play, CheckCircle, Clock, Award, BookOpen, TrendingUp, Calendar, Star } from "lucide-react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/Footer";

const ENROLLED_COURSES = [
  {
    id: 1,
    title: "Flutter Development Course",
    instructor: "Dr. Sarah Johnson",
    progress: 75,
    totalLessons: 24,
    completedLessons: 18,
    duration: "3 Months",
    image: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?w=500&q=80",
    lastAccessed: "2 hours ago",
    nextLesson: "Building Authentication Systems",
    estimatedTime: "45 min",
    category: "Mobile Development",
    rating: 4.8,
    certificate: true,
  },
  {
    id: 2,
    title: "The Complete 2026 Web Development",
    instructor: "Prof. Michael Chen",
    progress: 45,
    totalLessons: 48,
    completedLessons: 22,
    duration: "6 Months",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80",
    lastAccessed: "1 day ago",
    nextLesson: "React Hooks Deep Dive",
    estimatedTime: "1 hr 20 min",
    category: "Web Development",
    rating: 4.9,
    certificate: false,
  },
  {
    id: 3,
    title: "Machine Learning A-Z™: AI, Python & R",
    instructor: "Dr. Emma Rodriguez",
    progress: 100,
    totalLessons: 36,
    completedLessons: 36,
    duration: "5 Months",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&q=80",
    lastAccessed: "1 week ago",
    nextLesson: "Course Completed",
    estimatedTime: "0 min",
    category: "Data Science",
    rating: 4.7,
    certificate: true,
  },
];

const ACHIEVEMENTS = [
  { id: 1, title: "First Course Completed", icon: "🎓", date: "Nov 2024" },
  { id: 2, title: "7-Day Streak", icon: "🔥", date: "Dec 2024" },
  { id: 3, title: "ML Specialist", icon: "🤖", date: "Dec 2024" },
  { id: 4, title: "Fast Learner", icon: "⚡", date: "Dec 2024" },
];

const LEARNING_STATS = {
  totalHours: 127,
  coursesCompleted: 1,
  coursesInProgress: 2,
  certificates: 1,
  currentStreak: 12,
  longestStreak: 28,
};

export default function MyLearning() {
  const [activeTab, setActiveTab] = useState("all");
  const [filteredCourses, setFilteredCourses] = useState(ENROLLED_COURSES);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    switch (activeTab) {
      case "completed":
        setFilteredCourses(ENROLLED_COURSES.filter(course => course.progress === 100));
        break;
      case "inProgress":
        setFilteredCourses(ENROLLED_COURSES.filter(course => course.progress > 0 && course.progress < 100));
        break;
      case "certificates":
        setFilteredCourses(ENROLLED_COURSES.filter(course => course.certificate));
        break;
      default:
        setFilteredCourses(ENROLLED_COURSES);
    }
  }, [activeTab]);

  const getProgressColor = (progress: number) => {
    if (progress === 100) return "bg-green-500";
    if (progress >= 50) return "bg-blue-500";
    return "bg-yellow-500";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            My Learning Dashboard
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Track your progress, continue learning, and unlock achievements on your educational journey.
          </p>
        </div>

        {/* Learning Stats Overview */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <Clock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">{LEARNING_STATS.totalHours}</p>
            <p className="text-sm text-gray-600">Total Hours</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">{LEARNING_STATS.coursesCompleted}</p>
            <p className="text-sm text-gray-600">Completed</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <BookOpen className="w-8 h-8 text-orange-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">{LEARNING_STATS.coursesInProgress}</p>
            <p className="text-sm text-gray-600">In Progress</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <Award className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">{LEARNING_STATS.certificates}</p>
            <p className="text-sm text-gray-600">Certificates</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <TrendingUp className="w-8 h-8 text-red-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">{LEARNING_STATS.currentStreak}</p>
            <p className="text-sm text-gray-600">Day Streak</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <Calendar className="w-8 h-8 text-indigo-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">{LEARNING_STATS.longestStreak}</p>
            <p className="text-sm text-gray-600">Best Streak</p>
          </div>
        </div>

        {/* Tabs for filtering courses */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 sm:gap-4 p-1 bg-gray-100 rounded-lg w-fit">
            {[
              { key: "all", label: "All Courses" },
              { key: "inProgress", label: "In Progress" },
              { key: "completed", label: "Completed" },
              { key: "certificates", label: "Certificates" },
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === tab.key
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - Courses */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {filteredCourses.map(course => (
                <div key={course.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Course Image */}
                    <div className="w-full sm:w-48 h-32 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                    </div>
                    
                    {/* Course Details */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">{course.title}</h3>
                          <p className="text-gray-600 text-sm mb-2">by {course.instructor}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                            <span className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              {course.rating}
                            </span>
                            <span>{course.category}</span>
                            <span>Last accessed {course.lastAccessed}</span>
                          </div>
                        </div>
                        
                        {course.certificate && (
                          <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                            <Award className="w-4 h-4" />
                            Certificate
                          </div>
                        )}
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>{course.completedLessons}/{course.totalLessons} lessons completed</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(course.progress)}`}
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Next Lesson Info */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div className="text-sm">
                          <p className="text-gray-600">
                            {course.progress === 100 ? "✅ Course Completed" : `Next: ${course.nextLesson}`}
                          </p>
                          {course.progress < 100 && (
                            <p className="text-gray-500">Estimated time: {course.estimatedTime}</p>
                          )}
                        </div>
                        
                        {course.progress < 100 ? (
                          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-fit">
                            <Play className="w-4 h-4" />
                            Continue Learning
                          </button>
                        ) : (
                          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors w-fit">
                            <Award className="w-4 h-4" />
                            View Certificate
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar - Achievements & Quick Actions */}
          <div className="space-y-6">
            {/* Recent Achievements */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Achievements</h3>
              <div className="space-y-3">
                {ACHIEVEMENTS.map(achievement => (
                  <div key={achievement.id} className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                    <div className="text-2xl">{achievement.icon}</div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{achievement.title}</p>
                      <p className="text-xs text-gray-500">{achievement.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    <span className="font-medium text-gray-900">Browse New Courses</span>
                  </div>
                </button>
                
                <button className="w-full text-left p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-green-600" />
                    <span className="font-medium text-gray-900">View All Certificates</span>
                  </div>
                </button>
                
                <button className="w-full text-left p-3 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-purple-600" />
                    <span className="font-medium text-gray-900">Learning Analytics</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Study Streak */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl shadow-sm border border-orange-100 p-6">
              <div className="text-center">
                <div className="text-4xl mb-2">🔥</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{LEARNING_STATS.currentStreak} Day Streak</h3>
                <p className="text-sm text-gray-600 mb-4">Keep learning to maintain your streak!</p>
                <button className="w-full px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                  Study Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}