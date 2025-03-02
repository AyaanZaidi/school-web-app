import React, { useRef, useState } from "react";
import "../style/RecordLectures.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { ServiceData } from "../constants";
import { Video } from "lucide-react";

function RecordLectures() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const videoRefs = useRef([]);

    const openModal = (videoSrc) => {
        setSelectedVideo(videoSrc);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedVideo(null);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {/* Heading & Description */}
            <div className="text-center text-white mt-20">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Recorded Lecture</h2>
                <p className="text-gray-300 text-sm">Watch this recorded lecture to revise important concepts.</p>
            </div>
            <Swiper
                breakpoints={{
                    340: { slidesPerView: 2, spaceBetween: 15 },
                    700: { slidesPerView: 3, spaceBetween: 15 },
                }}
                freeMode={true}
                pagination={{ clickable: true }}
                modules={[FreeMode, Pagination]}
                className="max-w-[90%] lg:max-w-[80%] mt-12"
            >
                {ServiceData.map((item, idx) => (
                    <SwiperSlide key={item.title}>
                        <div className="video-card flex flex-col gap-3 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
                            <div className="w-full h-full flex items-center justify-center">
                                <video
                                    ref={(el) => (videoRefs.current[idx] = el)}
                                    src={item.video}
                                    className="relative w-80 h-64 object-cover transition-all duration-300"
                                    controlsList="nodownload"
                                    disablePictureInPicture={false}
                                />
                            </div>
                            <div className="absolute top-40 left-32 flex flex-col gap-2">
                                <button
                                    onClick={() => openModal(item.video)}
                                    className="flex items-center justify-center gap-2 w-16 h-16 bg-blue-600 text-white font-semibold text-lg rounded-full shadow-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105 active:scale-95"
                                >
                                    <Video className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Modal with 90% Width & Height */}
            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                    {/* Modal Box */}
                    <div className="relative w-[90%] h-[90%] bg-black rounded-lg overflow-hidden flex items-center justify-center">

                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-5 right-5 text-white text-3xl font-bold hover:text-gray-500 z-10"
                        >
                            ✖
                        </button>

                        {/* Video */}
                        <video
                            src={selectedVideo}
                            className="w-full h-full object-fill"
                            controls
                            autoPlay
                        />
                    </div>
                </div>
            )}

        </div>
    );
}

export default RecordLectures;
