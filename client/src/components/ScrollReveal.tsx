import React, { useEffect, useRef } from 'react';

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, className = '', ...props }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const reveal = () => {
            node.classList.add('opacity-100', 'translate-y-0');
            node.classList.remove('opacity-0', 'translate-y-4');
        };

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                reveal();
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1 });

        observer.observe(node);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out opacity-0 translate-y-4 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
