import React, { useEffect, useRef, useState } from "react";
import { Video, ChevronLeft, ChevronRight } from "lucide-react";
import "../style/RecordLectures.css";
import sampleVideo from "../video/video.mp4";

const RecordedLectures = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(3);
    const videoRefs = useRef([]);

    const lectures = [
        { id: 1, video: sampleVideo },
        { id: 2, video: sampleVideo },
        { id: 3, video: sampleVideo },
        { id: 4, video: sampleVideo },
        { id: 5, video: sampleVideo },
        { id: 6, video: sampleVideo },
    ];

    // Automatically adjust slides per view based on screen size
    useEffect(() => {
        const updateSlidesPerView = () => {
            if (window.innerWidth <= 600) {
                setSlidesPerView(1);
            } else if (window.innerWidth <= 900) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(3);
            }
        };
        updateSlidesPerView();
        window.addEventListener("resize", updateSlidesPerView);
        return () => window.removeEventListener("resize", updateSlidesPerView);
    }, []);

    // Slide Navigation
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + slidesPerView) % lectures.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - slidesPerView + lectures.length) % lectures.length);
    };

    // Play/Pause Video
    const toggleVideo = (index) => {
        const video = videoRefs.current[index];
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    };

    return (
        <div className="slider-container">
            <button className="prev-btn" onClick={prevSlide}>
                <ChevronLeft size={32} />
            </button>

            <div className="slider-wrapper">
                <div className="slider" style={{ transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)` }}>
                    {lectures.map((lecture, index) => (
                        <div key={lecture.id} className="slide">
                            <video
                                ref={(el) => (videoRefs.current[index] = el)}
                                src={lecture.video}
                                className="w-[40vw] h-[50vh] object-cover p-5 rounded-[40px]"
                                onClick={() => toggleVideo(index)}
                                controls
                            />
                            <div className="content">
                                <button className="watch" onClick={() => toggleVideo(index)}>
                                    <Video className="btn-icon" /> Watch Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button className="next-btn" onClick={nextSlide}>
                <ChevronRight size={32} />
            </button>
        </div>
    );
};

export default RecordedLectures;
