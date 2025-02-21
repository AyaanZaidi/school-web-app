import React, { useState, useEffect } from "react";
import {
    HomeIcon, Users2, Video, BarChart2Icon, Book, Bell, Settings2, LogOut, Edit, Trash2, UserPlus,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import LiveClasses from "./LiveClasses";
import RecordedLectures from "./RecordedLectures";

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState("dashboard");
    const [users, setUsers] = useState([]);
    const [stats, setStats] = useState({ users: 0, sessions: 0, revenue: 0 });

    useEffect(() => {
        setUsers([
            { id: 1, name: "Ali Ahmed", role: "Student", email: "ali@example.com" },
            { id: 2, name: "Fatima Noor", role: "Teacher", email: "fatima@example.com" },
            { id: 3, name: "Zain Malik", role: "Admin", email: "zain@example.com" },
        ]);
        setStats({ users: 1250, sessions: 300, revenue: 12500 });
    }, []);

    const menuItems = [
        { id: "dashboard", name: "Dashboard Overview", icon: <HomeIcon size={20} /> },
        { id: "users", name: "Manage Users", icon: <Users2 size={20} /> },
        { id: "live", name: "Live Classes", icon: <Video size={20} /> },
        { id: "lectures", name: "Recorded Lectures", icon: <Book size={20} /> },
    ];

    const handleEdit = (id) => {
        alert(`Edit user with ID: ${id}`);
    };

    const handleDelete = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <motion.aside initial={{ x: -200 }} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 100 }} className="w-64 bg-white shadow-lg p-5 flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-red-600">Admin Dashboard</h2>
                    <nav className="mt-10">
                        <ul className="space-y-4">
                            {menuItems.map((item) => (
                                <li key={item.id} className={`flex items-center gap-3 p-2 text-gray-700 rounded-md cursor-pointer ${activeTab === item.id ? "text-red-300" : "hover:bg-red-100"}`} onClick={() => setActiveTab(item.id)}>
                                    {item.icon} {item.name}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <button className="w-full flex items-center gap-3 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600" onClick={() => alert("Logging out...")}> <LogOut size={20} /> Logout </button>
            </motion.aside>

            <main className="flex-1 p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Admin Panel</h1>
                {activeTab === "dashboard" ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <motion.div className="p-5 bg-white shadow-md rounded-lg" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                            <h3 className="text-xl font-semibold text-gray-700">Total Users</h3>
                            <p className="text-2xl font-bold text-purple-500">{stats.users}</p>
                        </motion.div>
                        <motion.div className="p-5 bg-white shadow-md rounded-lg" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                            <h3 className="text-xl font-semibold text-gray-700">Active Sessions</h3>
                            <p className="text-2xl font-bold text-green-500">{stats.sessions}</p>
                        </motion.div>
                        <motion.div className="p-5 bg-white shadow-md rounded-lg" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                            <h3 className="text-xl font-semibold text-gray-700">Revenue</h3>
                            <p className="text-2xl font-bold text-blue-500">${stats.revenue}</p>
                        </motion.div>
                    </div>
                ) : activeTab === "users" ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white shadow-lg rounded-lg p-6"
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Manage Users</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
                                <thead className="bg-gray-200">
                                    <tr>
                                        <th className="p-3 text-left text-gray-700">Name</th>
                                        <th className="p-3 text-left text-gray-700">Email</th>
                                        <th className="p-3 text-left text-gray-700">Role</th>
                                        <th className="p-3 text-center text-gray-700">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <AnimatePresence>
                                        {users.map((user) => (
                                            <motion.tr
                                                key={user.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                transition={{ duration: 0.3 }}
                                                className="border-b hover:bg-gray-100 transition duration-200"
                                            >
                                                <td className="p-3">{user.name}</td>
                                                <td className="p-3">{user.email}</td>
                                                <td className="p-3">{user.role}</td>
                                                <td className="p-3 flex justify-center gap-3">
                                                    <button
                                                        onClick={() => handleEdit(user.id)}
                                                        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
                                                    >
                                                        <Edit size={18} />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(user.id)}
                                                        className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                </td>
                                            </motion.tr>
                                        ))}
                                    </AnimatePresence>
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                ) : activeTab === "live" ? (
                    <LiveClasses />
                ) : activeTab === "lectures" ? (
                    <RecordedLectures />
                ) : (
                    <h2 className="text-2xl font-semibold">Coming Soon...</h2>
                )}
            </main>
        </div>
    );
};

export default Dashboard;
