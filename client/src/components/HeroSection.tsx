import React from 'react';

const HeroSection: React.FC = () => {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            const headerHeight = document.querySelector('header')?.offsetHeight || 0;
            const aboutPosition = aboutSection.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: aboutPosition - headerHeight,
                behavior: 'smooth',
            });
        }
    };
    const isMobile = window.innerWidth < 768;
    return (
        <section
            className="relative h-screen overflow-hidden flex flex-col justify-center items-center text-white text-center"
            style={{
                // backgroundImage: `url('${import.meta.env.BASE_URL}images/${isMobile ? "baletki-mobile.jpeg" : "baletki.jpeg"}')`,
                backgroundImage: `url('${import.meta.env.BASE_URL}images/${isMobile ? "image6.jpeg" : "image6.jpeg"}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className="absolute inset-0 bg-black/40 z-0" />
            <div className="relative z-10 px-7">
                <p className="text-lg md:text-xl font-light mb-8"></p>
                <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4">
                    Houston professional ballet instructor
                </h1>
                <p className="text-lg md:text-xl font-light mb-8">20+ years of experience</p>
                <p className="text-lg md:text-xl font-light mb-8">
                    Private and group classes for children, adults & professionals
                </p>
                <button
                    className="bg-white text-[#8B7355] px-6 py-3 rounded-full text-lg font-semibold shadow hover:bg-[#8B7355] hover:text-white transition"
                    onClick={scrollToAbout}
                >
                    Learn More
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
