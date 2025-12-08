import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/navbar";

export default function ProfilePage() {
    const user = {
        name: "Rohan Sharma",
        email: "rohan@example.com",
        role: "Student",
        joined: "January 2025",
        avatar:
            "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
                <div className="max-w-md sm:max-w-lg md:max-w-xl mx-auto bg-white rounded-xl shadow-md p-6 sm:p-8 border border-gray-200">

                    {/* Avatar Section */}
                    <div className="flex flex-col items-center text-center">
                        <img
                            src={user.avatar}
                            alt={`${user.name} Avatar`}
                            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mb-4 shadow"
                        />
                        <h2 className="text-xl sm:text-2xl font-bold text-brand-text">
                            {user.name}
                        </h2>
                        <p className="text-gray-600 text-sm sm:text-base">{user.role}</p>
                    </div>

                    <hr className="my-6" />

                    {/* Info Section */}
                    <div className="space-y-4">
                        <div>
                            <label className="text-gray-700 font-medium">Name</label>
                            <p className="p-3 bg-gray-100 rounded-md border mt-1 text-sm sm:text-base">
                                {user.name}
                            </p>
                        </div>

                        <div>
                            <label className="text-gray-700 font-medium">Email</label>
                            <p className="p-3 bg-gray-100 rounded-md border mt-1 text-sm sm:text-base">
                                {user.email}
                            </p>
                        </div>

                        <div>
                            <label className="text-gray-700 font-medium">Joined</label>
                            <p className="p-3 bg-gray-100 rounded-md border mt-1 text-sm sm:text-base">
                                {user.joined}
                            </p>
                        </div>

                        <div>
                            <label className="text-gray-700 font-medium">Role</label>
                            <p className="p-3 bg-gray-100 rounded-md border mt-1 text-sm sm:text-base">
                                {user.role}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    );
}
