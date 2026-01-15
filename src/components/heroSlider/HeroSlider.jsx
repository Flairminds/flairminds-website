import { useState, useEffect } from 'react';
import styles from './HeroSlider.module.css';
import slide1 from '../../assets/hero_slide_1.png';

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Array of slides - more can be added here later
    const slides = [
        {
            id: 1,
            image: slide1,
            alt: 'Digital Transformation Partner - AI and Innovation'
        }
        // Add more slides here in the future:
        // {
        //   id: 2,
        //   image: slide2,
        //   alt: 'Description'
        // }
    ];

    // Auto-advance slides every 5 seconds
    useEffect(() => {
        if (slides.length > 1) {
            const timer = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % slides.length);
            }, 5000);

            return () => clearInterval(timer);
        }
    }, [slides.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className={styles.sliderSection}>
            <div className={styles.sliderContainer}>
                {/* Slides */}
                <div className={styles.slidesWrapper}>
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`${styles.slide} ${index === currentSlide ? styles.active : ''
                                }`}
                        >
                            <img
                                src={slide.image}
                                alt={slide.alt}
                                className={styles.slideImage}
                            />
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows - Only show if more than 1 slide */}
                {slides.length > 1 && (
                    <>
                        <button
                            className={`${styles.navButton} ${styles.prevButton}`}
                            onClick={prevSlide}
                            aria-label="Previous slide"
                        >
                            ‹
                        </button>
                        <button
                            className={`${styles.navButton} ${styles.nextButton}`}
                            onClick={nextSlide}
                            aria-label="Next slide"
                        >
                            ›
                        </button>
                    </>
                )}

                {/* Dots Navigation - Only show if more than 1 slide */}
                {slides.length > 1 && (
                    <div className={styles.dotsContainer}>
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''
                                    }`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default HeroSlider;
