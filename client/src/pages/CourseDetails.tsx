import React, { useEffect, useState } from "react";
import { useRoute } from "wouter";
import Navbar from "@/components/ui/navbar";
import Hero from "../../assets/Hero.png";
import { PlayCircle, Lock, Star } from "lucide-react";

/* ---------------------- COURSE DATA ---------------------- */
const COURSE_DATA: any = {
  1: {
    title: "Flutetr Basics",
    subtitle: "Learn to build websites and applications",
    duration: "3 Months • Self-paced",
    price: "₹299",
    image:
      "https://images.unsplash.com/photo-1617042375876-a13e36732a04?w=500&q=80",
    videos: [
      { id: 1, title: "Introduction", url: "/videos/video1.mp4", free: true },
      { id: 2, title: "Setup Environment", url: "/videos/video2.mp4", free: true },
      { id: 3, title: "Basic Project", url: "/videos/video3.mp4", free: true },
      { id: 4, title: "Advanced Concepts", url: "/videos/video4.mp4", free: false },
      { id: 5, title: "Final Project", url: "/videos/video5.mp4", free: false },
    ],
  },

  2: {
    title: "Flutter App Development",
    subtitle: "Build apps for Android and iOS",
    duration: "4 Months • Self-paced",
    price: "₹299",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80",
    videos: [
      { id: 1, title: "Intro to Mobile Apps", url: "/videos/python.mp4", free: true },
      { id: 2, title: "App Setup", url: "/videos/python.mp4", free: true },
      { id: 3, title: "UI Components", url: "/videos/python.mp4", free: true },
      { id: 4, title: "State Management", url: "/videos/python.mp4", free: false },
      { id: 5, title: "Publishing App", url: "/videos/python.mp4", free: false },
    ],
  },
  3: {
    title: "Flutter Advanced",
    subtitle: "Learn basic data analysis and visualization",
    duration: "5 Months • Live",
    price: "₹299",
    image:
      "https://images.unsplash.com/photo-1555929963-aa79dcee981c?w=500&q=80",
    videos: [
      { id: 1, title: "Introduction", url: "/videos/python.mp4", free: true },
      { id: 2, title: "Data Setup", url: "/videos/python.mp4", free: true },
      { id: 3, title: "Basic Analysis", url: "/videos/python.mp4", free: true },
      { id: 4, title: "Visualization Techniques", url: "/videos/python.mp4", free: false },
      { id: 5, title: "Projects", url: "/videos/python.mp4", free: false },
    ],
  },

  4: {
    title: "Flutter App Hosting",
    subtitle: "Learn React step by step",
    duration: "4 Months • Self-paced",
    price: "₹299",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&q=80",
    videos: [
      { id: 1, title: "Introduction", url: "/videos/video1.mp4", free: true },
      { id: 2, title: "React Setup", url: "/videos/video2.mp4", free: true },
      { id: 3, title: "Components", url: "/videos/video3.mp4", free: true },
      { id: 4, title: "State & Props", url: "/videos/video4.mp4", free: false },
      { id: 5, title: "Projects", url: "/videos/video5.mp4", free: false },
    ],
  },
};

/* ---------------------- REVIEWS ---------------------- */
const REVIEWS = [
  {
    name: "Alex Smith",
    role: "Software Developer",
    rating: 5,
    comment: "Very helpful and easy to follow!",
    img: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Jamie Lee",
    role: "Frontend Developer",
    rating: 4,
    comment: "Good explanations and practical examples.",
    img: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Taylor Jordan",
    role: "Data Analyst",
    rating: 5,
    comment: "Learned a lot from the hands-on exercises!",
    img: "https://i.pravatar.cc/150?img=3",
  },
];

/* ----------------------- HERO CAROUSEL ----------------------- */
function HeroCarousel() {
  const [translateX, setTranslateX] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const slides = [
    Hero,
    "https://www.rushu.rush.edu/sites/default/files/legacy/images/news-articles/online-class-note-taking-news.jpg",
    "https://img.freepik.com/free-photo/books-laptop-assortment_23-2149765831.jpg",
  ];

  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];
  const slideWidth = 100;

  useEffect(() => setTranslateX(-slideWidth), []);

  useEffect(() => {
    const interval = setInterval(
      () => setTranslateX((prev) => prev - slideWidth),
      3500
    );
    return () => clearInterval(interval);
  }, []);

  const handleTransitionEnd = () => {
    if (translateX <= -slideWidth * (slides.length + 1)) {
      setIsTransitioning(false);
      setTranslateX(-slideWidth);
    } else if (translateX >= 0) {
      setIsTransitioning(false);
      setTranslateX(-slideWidth * slides.length);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const t = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(t);
    }
  }, [isTransitioning]);

  return (
    <div className="w-full h-full relative overflow-hidden">
      <div
        className={`flex h-full ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
        style={{ transform: `translateX(${translateX}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedSlides.map((src, i) => (
          <img
            key={i}
            src={src}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}

/* ---------------------- VIDEO PLAYER MODAL ---------------------- */
function VideoPlayerModal({
  video,
  onClose,
}: {
  video: any;
  onClose: () => void;
}) {
  if (!video) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-4xl rounded-xl overflow-hidden shadow-lg">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">{video.title}</h2>
          <button className="text-red-600 text-xl font-bold" onClick={onClose}>
            ✕
          </button>
        </div>

        <video
          src={video.url}
          controls
          autoPlay
          className="w-full h-[280px] sm:h-[480px] bg-black"
        />
      </div>
    </div>
  );
}

/* ---------------------- PAYMENT MODAL ---------------------- */
function PaymentModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
        <h2 className="text-2xl font-bold mb-4">Unlock Full Course</h2>
        <p className="text-gray-600 mb-4">
          Get access to all premium videos and resources.
        </p>

        <div className="border p-4 rounded-xl bg-gray-50 mb-4">
          <p className="text-lg font-semibold">Price: ₹299</p>
          <p className="text-sm text-gray-500">One-time payment</p>
        </div>

        <button className="w-full bg-purple-600 text-white py-3 rounded-xl text-lg font-semibold mb-3">
          Proceed to Pay
        </button>

        <button
          className="w-full py-2 text-gray-500 font-medium"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

/* ---------------------- MAIN PAGE ---------------------- */
export default function CourseDetails() {
  useEffect(() => window.scrollTo(0, 0), []);

  const [, params] = useRoute("/course/:id");
  const id = params?.id;

  const course = COURSE_DATA[id || ""];
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  if (!course)
    return (
      <div className="p-10 text-center text-xl font-bold">Course Not Found</div>
    );

  return (
    <div className="min-h-screen bg-[#f7f7fb] text-brand-text">
      <Navbar />

      <section className="max-w-[1200px] mx-auto mt-5 bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="w-full h-[220px] sm:h-[300px] md:h-[360px] lg:h-[420px]">
          <HeroCarousel />
        </div>

        <div className="p-5 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold text-gray-900">{course.title}</h1>
            <p className="text-gray-600 mt-2">{course.subtitle}</p>

            {/* Play first video */}
            {course.videos && (
              <button
                className="mt-5 px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition"
                onClick={() => setSelectedVideo(course.videos[0])}
              >
                ▶ Play
              </button>
            )}

            {/* VIDEO LIST */}
            {course.videos && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-3">Course Videos</h3>
                <div className="space-y-3">
                  {course.videos.map((v: any) => (
                    <div
                      key={v.id}
                      className={`flex items-center justify-between p-3 border rounded-lg ${
                        v.free ? "bg-green-50" : "bg-gray-100"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {v.free ? (
                          <PlayCircle className="text-purple-600" />
                        ) : (
                          <Lock className="text-gray-500" />
                        )}
                        <span className="font-medium">{v.title}</span>
                      </div>

                      {v.free ? (
                        <button
                          onClick={() => setSelectedVideo(v)}
                          className="text-purple-600 font-semibold"
                        >
                          ▶ Play
                        </button>
                      ) : (
                        <button
                          className="text-gray-700 font-semibold hover:text-purple-600 transition"
                          onClick={() => setShowPaymentModal(true)}
                        >
                          Locked
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* REVIEWS */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4">Student Reviews</h3>
              <div className="flex gap-5 overflow-x-auto pb-3">
                {REVIEWS.map((rev, i) => (
                  <div
                    key={i}
                    className="min-w-[260px] bg-gradient-to-br from-blue-50 to-purple-50 p-5 rounded-xl border"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src={rev.img}
                        className="w-12 h-12 rounded-full"
                        alt={rev.name}
                      />
                      <div>
                        <p className="font-semibold">{rev.name}</p>
                        <p className="text-gray-600 text-sm">{rev.role}</p>
                      </div>
                    </div>

                    <div className="flex text-yellow-500 mb-2">
                      {Array.from({ length: rev.rating }).map((_, idx) => (
                        <Star key={idx} size={16} fill="currentColor" />
                      ))}
                    </div>

                    <p className="text-gray-700 text-sm">{rev.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="bg-gray-50 p-6 rounded-xl shadow h-fit sticky top-24">
            <img
              src={course.image}
              className="rounded-lg w-full h-56 object-cover"
              alt={course.title}
            />

            <button className="mt-4 w-full py-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800">
              Enroll Now
            </button>

            <div className="mt-4">
              <h3 className="font-semibold mb-3">This Course Includes</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Lifetime access</li>
                <li>• Certificate of Completion</li>
                <li>• Downloadable Resources</li>
                <li>• Access on Mobile & Web</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      <VideoPlayerModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

      {/* PAYMENT MODAL */}
      {showPaymentModal && <PaymentModal onClose={() => setShowPaymentModal(false)} />}
    </div>
  );
}
