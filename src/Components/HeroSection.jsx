import React from 'react';
import CustomImage from './CustomImage';

const HeroSection = () => {

    const images = [
        "/img/gallery/img_1.jpg",
        "/img/gallery/img_2.jpg",
        "/img/gallery/img_3.jpg",
        "/img/gallery/img_4.jpg",
        "/img/gallery/img_5.jpg",
        "/img/gallery/img_6.jpg",
        "/img/gallery/img_7.jpg",
        "/img/gallery/img_8.jpg",
        "/img/gallery/img_9.jpg"
    ]

    return (
        <div className='section hero'>
            <div className="col typography">
                <h1 className="title">
                    What Are We About
                </h1>
                <p className="info">
                    Foodora is a smart recipe discovery app that helps users find meal ideas based on available ingredients.
                    Simply enter one or more ingredients, and explore a variety of recipes with names, images, and details.
                </p>
                <button className="btn">
                    Explore Now
                </button>
            </div>
            <div className="col gallery">
                {images.map((src, index) => (
                    <CustomImage key={index} imgSrc={src} pt={"100%"} />
                ))}
            </div>
        </div>
    );
}

export default HeroSection;
