import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Loading from './Loading';

const Slider = () => {
    const carouselItem = useSelector(state => state.items.items.products)
    const cutItem = carouselItem?.slice(0, 10)
    const [index, setIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true);
    const [touchStartX, setTouchStartX] = useState(null);
    const [touchEndX, setTouchEndX] = useState(null);

    const nextItem = () => {
        setIndex(index === cutItem.length - 1 ? 0 : index + 1);
    }
    const prevItem = () => {
        setIndex(index === 0 ? cutItem.length - 1 : index - 1);
    }

    const stopAutoPlay = () => {
        setIsPlaying(false);
    };

    const startAutoPlay = () => {
        setIsPlaying(true);
    };
    const handleDotClick = (dotIndex) => {
        setIndex(dotIndex);
    }

    const renderDots = () => {
        return cutItem.map((data, i) => (
            <div
                key={i}
                onClick={() => handleDotClick(i)}
                className={`dot ${i === index ? "active" : ""}`}
            />
        ))
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (isPlaying) {
                setIndex(index === cutItem.length - 1 ? 0 : index + 1);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [index, cutItem, isPlaying]);




    const handleTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEndX(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStartX && touchEndX) {
            if (touchStartX - touchEndX > 50) {
                nextItem();
            } else if (touchEndX - touchStartX > 50) {
                prevItem();
            }
            setTouchStartX(null);
            setTouchEndX(null);
        }
    };



    return (
        <div onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd} className='slider'>
            <i onMouseEnter={stopAutoPlay}
                onMouseLeave={startAutoPlay} onClick={prevItem} class="fa-solid fa-chevron-left"></i>
            {
              cutItem && cutItem.map((data, idx) => (
                    <div className={`slider-item ${idx === index ? "active" : ""}`}>
                        <img src={data.images[0]} alt="" />
                        <h5>{data.title}</h5>
                        <p >{data.description}</p>
                        <div className="dots">
                            {renderDots()}
                        </div>
                    </div>
                ))
            }

            <i onMouseEnter={stopAutoPlay}
                onMouseLeave={startAutoPlay} onClick={nextItem} class="fa-solid fa-chevron-right"></i>

        </div>
    )
}

export default Slider
