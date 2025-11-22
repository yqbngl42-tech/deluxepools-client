import { memo } from 'react';
import { useInView } from './hooks/useInView';
import { useCounter } from './hooks/useCounter';

export const StatCounter = memo(({ icon: Icon, end, suffix, label }) => {
    const [ref, isInView] = useInView();
    const count = useCounter(end, 2000, isInView);

    return (
        <div ref={ref} className="text-center">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-14 h-14 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg transform hover:scale-110 transition-all duration-300" aria-hidden="true">
                <Icon className="w-7 h-7 sm:w-10 sm:h-10 text-white" />
            </div>
            <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-2">
                {count}{suffix}
            </div>
            <div className="text-sm sm:text-lg text-gray-600">{label}</div>
        </div>
    );
});

StatCounter.displayName = 'StatCounter';
