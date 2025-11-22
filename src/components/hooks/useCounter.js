import { useState, useEffect } from 'react';

export const useCounter = (end, duration = 2000, isInView) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        
        let startTime;
        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = (currentTime - startTime) / duration;
            
            if (progress < 1) {
                setCount(Math.floor(end * progress));
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };
        
        requestAnimationFrame(animate);
    }, [end, duration, isInView]);

    return count;
};
