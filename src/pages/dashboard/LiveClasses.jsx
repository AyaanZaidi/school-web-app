import React, { useState } from "react";
import { motion } from "framer-motion";
import { PlayCircle, StopCircle, Video, Link as LinkIcon, Copy } from "lucide-react";

const ChemistryLiveClass = () => {
    const [classStatus, setClassStatus] = useState("Not Started");
    const [meetLink, setMeetLink] = useState("");

    // Start Class
    const startClass = () => {
        if (!meetLink.trim()) {
            alert("Please enter a valid Google Meet link!");
            return;
        }
        setClassStatus("Live");
    };

    // End Class (Resets Everything)
    const endClass = () => {
        setClassStatus("Not Started");
        setMeetLink("");
    };

    // Copy Meet Link
    const copyLink = () => {
        navigator.clipboard.writeText(meetLink);
        alert("Meet Link Copied!");
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-white rounded-lg shadow-md max-w-lg mx-auto"
        >
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Video size={24} className="text-blue-500" /> Chemistry Live Class (Admin)
            </h2>

            {classStatus === "Not Started" && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 bg-gray-100 rounded-lg shadow-sm"
                >
                    <h3 className="text-lg font-semibold mb-2">Start Live Class</h3>
                    <input
                        type="text"
                        placeholder="Enter Google Meet Link"
                        value={meetLink}
                        onChange={(e) => setMeetLink(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    <button
                        className="mt-3 w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
                        onClick={startClass}
                    >
                        <PlayCircle size={20} className="inline-block mr-2" /> Start Class
                    </button>
                </motion.div>
            )}

            {classStatus === "Live" && (
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="p-5 bg-gray-100 rounded-lg shadow-lg mt-4"
                >
                    <h3 className="text-lg font-semibold">Chemistry Class</h3>
                    <p className="text-gray-600">Teacher: Admin</p>
                    <p className="text-green-500 font-semibold">Live</p>

                    <div className="flex items-center gap-2 mt-3">
                        <a
                            href={meetLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline flex items-center gap-1"
                        >
                            <LinkIcon size={16} /> Join Class
                        </a>
                        <button onClick={copyLink} className="text-gray-400 hover:text-gray-600">
                            <Copy size={16} />
                        </button>
                    </div>

                    <button
                        className="mt-3 w-full flex items-center gap-2 bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
                        onClick={endClass}
                    >
                        <StopCircle size={20} /> End Class
                    </button>
                </motion.div>
            )}
        </motion.div>
    );
};

export default ChemistryLiveClass;
