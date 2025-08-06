import React, { useRef, useEffect } from 'react';


const OtherService = () => {
    const otherServices = [
        {
            image: "https://www.rgcirc.org/wp-content/uploads/2023/10/laboratory-transfusion-1.png", 
            name: "Interventional Gestroentrology services",
            para: "Department of Gastroenterology as a super-speciality involves management of patients suffering",
            href: "https://www.rgcirc.org/clinical-services/interventional-gestroentrology-services/",
        },
        {
            image: "https://www.rgcirc.org/wp-content/uploads/2023/10/neuclear-medicine.png", 
            name: "Nuclear Medicine Services",
            para: "The department of Nuclear Medicine provides state-of-the-art diagnostic and radionuclides therapeutic",
            href: "https://www.rgcirc.org/clinical-services/nuclear-medicine-services/",
        },
        {
            image: "https://www.rgcirc.org/wp-content/uploads/2023/10/laboratory-transfusion-1.png", 
            name: "Laboratory Transfusion Services",
            para: "The Rajiv Gandhi Cancer Institute &amp; Research Centre (RGCIRC) is North India’s premier comprehensive",
            href: "https://www.rgcirc.org/clinical-services/laboratory-and-transfusion-services/",
        },
        {
            image: "https://www.rgcirc.org/wp-content/uploads/2023/11/SUPPORT-SERVICES.png", 
            name: "Clinical Support Services",
            para: "Several other clinical services are required to treat co-morbidity and non-cancer related elements The Rajiv Gandhi Cancer Institute &amp; Research Centre",
            href: "https://www.rgcirc.org/clinical-services/clinical-support-services/",
        },
        {
            image: "https://www.rgcirc.org/wp-content/uploads/2023/11/INTERNAL-MEDICINE-ENDOCRINOLOGY-RHEUMATOLOGY-AND-INFECTIOUS-DISEASES-SERVICES.png", 
            name: "Internal Medicine, Endocrinology",
            para: "Internal medicine is the foundation on which all the medical super specialties are built",
            href: "https://www.rgcirc.org/clinical-services/internal-medicine-endocrinology-rheumatology-and-infectious-diseases-services/",
        },
        {
            image: "https://www.rgcirc.org/wp-content/uploads/2023/10/pallative-home-care-service.png", 
            name: "Supportive Care",
            para: "At RGCI, a robust “Pain and Palliative Care services” are integrated with oncology care ever since its inception It is estimated.",
            href: "https://www.rgcirc.org/clinical-services/supportive-care/",
        },
        {
            image: "https://www.rgcirc.org/wp-content/uploads/2023/10/preventive-onology.png", 
            name: "Preventive Oncology Services",
            para: "Cancer is one of the Leading causes of death in India. It is estimated that there are nearly 2.72 million",
            href: "https://www.rgcirc.org/clinical-services/preventive-oncology-services/",
        }
        ,
        {
            image: "https://www.rgcirc.org/wp-content/uploads/2023/11/RESPIRATORY-MEDICINE.png", 
            name: "Respiratory Medicine Interventional",
            para: "The Department of Respiratory Medicine and Interventional Pulmonology caters to the entire diagnostic",
            href: "https://www.rgcirc.org/clinical-services/respiratory-medicine-and-interventional-pulmonology-services/",
        },
        {
            image: "https://www.rgcirc.org/wp-content/uploads/2023/10/interventional-radiology-2.png", 
            name: "Radiology Interventional Oncology",
            para: "Radiology Department is a well equipped department with state-of-the-art technology which compares",
            href: "https://www.rgcirc.org/clinical-services/radiology-and-interventional-oncology-services/",
        },
        {
            image: "https://www.rgcirc.org/wp-content/uploads/2023/11/INTERVENTIONAL-GASTROENTEROLOGY-SERVICES.png", 
            name: "Interventional Gestroentrology services",
            para: "Department of Gastroenterology as a super-speciality involves management of patients suffering",
            href: "www.rgcirc.org/clinical-services/interventional-gestroentrology-services/",
        }
        ,
        {
            image: "https://www.rgcirc.org/wp-content/uploads/2023/10/neuclear-medicine.png", 
            name: "Nuclear Medicine Services",
            para: "The department of Nuclear Medicine provides The Rajiv Gandhi Cancer Institute &amp; Research Centre (RGCIRC)",
            href: "https://www.rgcirc.org/clinical-services/nuclear-medicine-services/",
        },
        {
            image: "https://www.rgcirc.org/wp-content/uploads/2023/10/laboratory-transfusion-1.png", 
            name: "Laboratory Transfusion Services",
            para: "The Rajiv Gandhi Cancer Institute &amp; Research Centre (RGCIRC) is North India’s premier comprehensive",
            href: "https://www.rgcirc.org/clinical-services/laboratory-and-transfusion-services/",
        },
        {
            image: "https://www.rgcirc.org/wp-content/uploads/2023/11/SUPPORT-SERVICES.png", 
            name: "Clinical Support Services",
            para: "Several other clinical services are required to treat co-morbidity and non-cancer related elements The Rajiv Gandhi Cancer Institute esearch Centre (RGCIRC).",
            href: "https://www.rgcirc.org/clinical-services/clinical-support-services/",
        },
        {
            image: "https://www.rgcirc.org/wp-content/uploads/2023/10/laboratory-transfusion-1.png", 
            name: "Laboratory Transfusion Services",
            para: "The Rajiv Gandhi Cancer Institute &amp; Research Centre (RGCIRC) is North India’s premier comprehensive",
            href: "https://www.rgcirc.org/clinical-services/laboratory-and-transfusion-services/",
        },
        {
            image: "https://www.rgcirc.org/wp-content/uploads/2023/10/laboratory-transfusion-1.png", 
            name: "Laboratory Transfusion Services",
            para: "The Rajiv Gandhi Cancer Institute &amp; Research Centre (RGCIRC) is North India’s premier comprehensive",
            href: "https://www.rgcirc.org/clinical-services/laboratory-and-transfusion-services/",
        },
        
        {
            image: "https://www.rgcirc.org/wp-content/uploads/2023/10/laboratory-transfusion-1.png", 
            name: "Laboratory Transfusion Services",
            para: "The Rajiv Gandhi Cancer Institute &amp; Research Centre (RGCIRC) is North India’s premier comprehensive",
            href: "https://www.rgcirc.org/clinical-services/laboratory-and-transfusion-services/",
        },
        
    ];
    

    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;

        const intervalDuration = 4000; 

        const scroll = () => {
            slider.scrollLeft += 2; 
        };

        let sliderInterval = setInterval(scroll, 50);

        slider.onmouseover = () => clearInterval(sliderInterval);
        slider.onmouseout = () => sliderInterval = setInterval(scroll, 50);

        // Restart slider on component mount
        setTimeout(() => {
            clearInterval(sliderInterval);
            slider.scrollLeft = 0;
            sliderInterval = setInterval(scroll, 50);
        }, intervalDuration);

        return () => clearInterval(sliderInterval);
    }, []);

    return (
        <div className="h-full w-full bg-white overflow-hidden relative">
            <h2 className="text-gray-700 py-4 text-center font-bold text-2xl sm:text-3xl">
                Other <span className="text-black">Services</span>
            </h2>
            <div className="flex justify-center items-center">
                <span className="linespan h-1 w-10 bg-blue-300"></span>
                <span className="dotspan h-2 w-2 bg-red-700 rounded-full mx-2"></span>
                <span className="linespan h-1 w-10 bg-blue-300"></span>
            </div>
            <div className="flex p-4" ref={sliderRef}>
                {otherServices.map((service, index) => (
                    <div key={index} className="flex-shrink-0 w-64 mx-4 border-2 border-blue-200 rounded-lg p-2 flex flex-col items-center">
                        <img src={service.image} alt='imageService' className='h-16 w-16 mb-4'></img>
                        <h6 className="text-xl font-semibold mb-2 text-center">{service.name}</h6>
                        <p className="text-gray-700 mb-4 text-center">{service.para}</p>
                        <button className="justify-center px-4 py-2 bg-red-700 hover:bg-transparent hover:text-red-600 border border-red-400 text-white rounded">
                            <a href={service.href}>Read More</a>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OtherService;