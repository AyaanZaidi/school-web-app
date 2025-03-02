import React, { useState, useEffect } from "react";
import "../style/ImageSlider.css";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";

const images = [
    { src: img1, title: "MAGIC SLIDER", type: "FLOWER" },
    { src: img2, title: "MAGIC SLIDER", type: "NATURE" },
    { src: img3, title: "MAGIC SLIDER", type: "PLANT" },
    { src: img4, title: "MAGIC SLIDER", type: "NATURE" }
];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isAnimating) nextSlide();
        }, 3000);
    
        return () => clearInterval(interval);
    }, [currentIndex, isAnimating]);
    

    const nextSlide = () => {
        console.log("Next Slide");
        if (isAnimating) return; // Agar animation already chal rahi hai toh kuch mat karo
    
        setIsAnimating(true); // Animation start hone wali hai
    
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            setIsAnimating(false); // Animation complete hone ke baad isAnimating false karna
        }, 500); // Animation delay
    };
    

    // Function for Prev Slide
    const prevSlide = () => {
        if (isAnimating) return;
    
        setIsAnimating(true);
    
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
            setIsAnimating(false);
        }, 500);
    };
    

    //   const moveSlider = (direction) => {
    //     if (isAnimating) return;
    //     setIsAnimating(true);

    //     setTimeout(() => {
    //       setCurrentIndex((prevIndex) => {
    //         if (direction === "next") {
    //           return (prevIndex + 1) % images.length;
    //         } else {
    //           return (prevIndex - 1 + images.length) % images.length;
    //         }
    //       });
    //     }, 500); // Animation delay
    //     setIsAnimating(false);
    //   };

    return (
        <div className="slider-container">
            <div className="slider">
                <div className="list">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`item ${index === currentIndex ? "active" : ""}`}
                        >
                            <img src={image.src} alt={image.type} />
                            <div className="content">
                                <div className="title">{image.title}</div>
                                <div className="type">{image.type}</div>
                                <div className="description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </div>
                                <div className="button">
                                    <button>SEE MORE</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="thumbnail">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`item ${index === currentIndex ? "active" : ""}`}
                            onClick={() => setCurrentIndex(index)}
                        >
                            <img src={image.src} alt={`Thumbnail ${index}`} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="nextPrevArrows">
                <button className="prev" onClick={prevSlide}>&lt;</button>
                <button className="next" onClick={nextSlide}>&gt;</button>
            </div>
        </div>
    );
};

export default ImageSlider;
