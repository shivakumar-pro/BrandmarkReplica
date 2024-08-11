import React, { useState, useEffect } from 'react';

const content = [
    {
        name: 'Sarah Locatelli',
        description: `I'm not a designer, when I had to make a logo I found myself staring at a blank screen.Brandmark made the process actually enjoyable`,
        src: '/images/slide3.png',
        userpic: '/images/userpic1.png',
        occupation: 'CEO, Publaw Project'
    },
    {
        name: 'Vellyntina Kushmych',
        description: `I tried other logo makers and Brandmark is the best value. Quality is exceptional and includes a complete branding solution for my company`,
        src: '/images/slide2.png',
        userpic: '/images/userpic2.png',
        occupation: 'Founder, Nobble Tide LCC'
    },
    {
        name: 'Courtineo costrino',
        description: `I was afraid to pay thousands for a logo that didn't turn out right for my business. The Brandmark team helped me create a logo that I love!`,
        src: '/images/slide1.png',
        userpic: '/images/userpic3.png',
        occupation: 'Founder, Loctia'
    },
];


const ImageContentSwitcher = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % content.length);
        }, 3000);

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="flex flex-col lg:flex-row justify-start p-4 w-3/4 space-y-4 lg:ml-80">
            <img
                src={content[index].src}
                alt={`Image ${index + 1}`}
                className="lg:absolute lg:right-[100px] lg:top-[300px] w-full lg:w-[40%] h-[85%] lg:h-[85%] z-0 mb-4 lg:mb-0"
            />

            <div className="flex flex-col items-start">
                <p className="font-proxima mt-2 w-full lg:w-2/5 text-sm">
                    {content[index].description}
                </p>
                <div className="flex mt-10 justify-start w-full lg:w-2/5">
                    <img
                        src={content[index].userpic}
                        alt="User"
                        className="w-[50px] h-[50px]"
                    />
                    <div className="ml-5">
                        <h6 className="font-bold">{content[index].name}</h6>
                        <span>{content[index].occupation}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageContentSwitcher;


