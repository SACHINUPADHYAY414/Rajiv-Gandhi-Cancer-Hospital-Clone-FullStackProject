import React, { useState } from "react";
import { FaAnglesRight } from "react-icons/fa6";

const ClinicalService = () => {
  const [currentServiceId, setCurrentServiceId] = useState(1);

  const handleServiceClick = (id) => {
    setCurrentServiceId(id);
  };

  const clinicalService = [
    {
      id: 1,
      clinicalServiceImg:
        "https://www.rgcirc.org/wp-content/uploads/2023/10/sergical-onology.png",
      para: "Surgical Oncology Service"
    },
    {
      id: 2,
      clinicalServiceImg:
        "https://www.rgcirc.org/wp-content/uploads/2023/10/radiation-onology.png",
      para: "Radiation Oncology Service"
    },
    {
      id: 3,
      clinicalServiceImg:
        "https://www.rgcirc.org/wp-content/uploads/2023/10/medical-onology.png",
      para: "Medical Oncology Service"
    },
    {
      id: 4,
      clinicalServiceImg:
        "https://www.rgcirc.org/wp-content/uploads/2023/10/pediatric-onology.png",
      para: "Pediatric Hematology and Oncology Services"
    },
    {
      id: 5,
      clinicalServiceImg:
        "https://www.rgcirc.org/wp-content/uploads/2023/10/hematology-onology.png",
      para: "Hematology Oncology and Bone Marrow "
    }
  ];

  const mainImage = [
    {
      id: 1,
      imageSrc:
        "https://www.rgcirc.org/wp-content/uploads/2023/11/Sergical-oncology-Services1a.jpg",
      title: "Surgical Oncology Services",
      description:
        "The Best Surgical Oncologist in India can provide unique surgical expertise in surgical cases unfamiliar to general surgeons. The Surgical Oncology Department aims at the following:",
      icon: <FaAnglesRight/>,
        para1:
        " Cure or Palliate and improve quality of life emphasizing on multimodal treatment",
      para2: " Practice evidence based medicine. ",
      link: "https://www.rgcirc.org/about-rgcirc/"
    },
    {
      id: 2,
      imageSrc:
        "https://www.rgcirc.org/wp-content/uploads/2023/11/Radiation-Oncology-Services-a.jpg",
      title: "Radiation Oncology Service",
      description:
        "Rajiv Gandhi Cancer Institute & Research Centre, New Delhi, with its tradition of quality and excellence offers comprehensive Cancer treatment with the most advanced techniques of radiotherapy for all Cancer patients.",
      para1:
        "The department is equipped with Linear Accelerators, Simulators, Dedicated Treatment Planning Computers and Mould Rooms to fabricate immobilization devices and customized lead shields in house.. ",
      para2: " ",
      link: "https://www.rgcirc.org/clinical-services/radiation-oncology-services/"
    },
    {
      id: 3,
      imageSrc:
        "https://www.rgcirc.org/wp-content/uploads/2023/11/Medical-oncology-Services-a.jpg",
      title: "Madical Oncology Services",
      description:
        "A highly qualified, experienced and dedicated team of medical oncologists is available at Rajiv Gandhi Cancer Institute & Research Centre. The team is subgrouped according to the area of specialization as per disease of different organ systems. Evidence based, internationally approved Chemotherapy guidelines are followed for treatment of various solid and hematological malignancies.",
      para1: " ",
      para2: " ",
      link: "https://www.rgcirc.org/clinical-services/medical-oncology-services/"
    },
    {
      id: 4,
      imageSrc:
        "https://www.rgcirc.org/wp-content/uploads/2023/11/Hemotology-Oncology-and-Bone-Marrow-Services.jpg",
      title: "Pediatric Hematology and Oncology Services",
      description:
        "Cancer is more common in adults and older people. Around 5% of all cancers occur in children. Childhood cancers are entirely different from their adult counterparts. Childhood cancers are more often curable and children can become long term survivors growing up to be adults with normal life span.",
      para1: " ",
      para2: " ",
      link: "https://www.rgcirc.org/clinical-services/pediatric-hematology-and-oncology-services/"
    },
    {
      id: 5,
      imageSrc:
        "https://www.rgcirc.org/wp-content/uploads/2023/11/Medical-oncology-Services-a.jpg",
      title: "Hematology Oncology and Bone Marrow",
      description:
        "Hematopoietic Stem Cell (HSCT) / Bone Marrow Transplantation (BMT) is a lifesaving treatment for variety of diseases including Blood Cancers like Leukemia, Lymphoma, Myeloma etc, as well as benign disorders like Aplastic Anemia and Thalassaemia.",
      para1:
        "Bone Marrow Transplant Program started in RGCI&RC in 2001 and since then approximately 1000 transplants have been performed… ",
      para2: " ",
      link: "https://www.rgcirc.org/clinical-services/hematology-oncology-bone-marrow-services/"
    }
  ];

  return (
    <div className="h-full w-full bg-[#eef5fa]">
      <h2 className="text-gray-700 py-4 sm:px-6 lg:px-8 lg:py-4 text-center font-bold text-2xl sm:text-3xl">
        Clinical <span className="text-black">Services</span>
      </h2>
      <div className="flex justify-center items-center mb-8">
        <span className="linespan h-1 w-10 bg-blue-300 "></span>
        <span className="dotspan h-2 w-2 bg-red-700 rounded-full mx-2"></span>
        <span className="linespan h-1 w-10 bg-blue-300"></span>
      </div>

      <ul className="w-full space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10 flex flex-wrap justify-center items-center text-center">
        {clinicalService.map((service) => (
          <li
            key={service.id}
            className={`w-full sm:w-1/2 md:w-1/3 lg:w-[17%] px-2 py-2 flex flex-row rounded-lg border-2 border-blue-400 mb-4 mx-2 hover:bg-[#0074bc] hover:text-white ${
              currentServiceId === service.id ? "active" : ""
            }`}
            onClick={() => handleServiceClick(service.id)}
          >
            <img
              src={service.clinicalServiceImg}
              alt=""
              className="filter brightness-0 self-center ml-2 sm:w-12 sm:h-10 md:w-16 md:h-10"
            />
            <span className="px-2 py-2">{service.para}</span>
          </li>
        ))}
      </ul>

      {mainImage.map((service) => (
        <div
          key={service.id}
          className={`mx-auto ml-6 mr-6 flex px-5 py-10 md:flex-row flex-col items-center ${
            currentServiceId === service.id ? "visible" : "hidden"
          }`}
        >
          <div className="flex w-full md:w-1/2">
            <img
              src={service.imageSrc}
              alt="Logo"
              className="rounded-lg mx-auto md:mx-0"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-4 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {service.title}
            </h1>
            <p className="mb-8 text-black leading-relaxed">
              {service.description}
            </p>
            <div className="flex items-center mb-6">
              <span className="mr-2 text-blue-500">{service.icon}</span>
              <p>{service.para1}</p>
            </div>
            <div className="flex items-center mb-6">
              <span className="mr-2 text-blue-500">{service.icon}</span>
              <p>{service.para2}</p>
            </div>
            <button className="bg-red-700 hover:bg-transparent hover:text-red-600 border border-red-400 text-white py-2 px-4 rounded-lg mt-6 md:mt-0">
              <a href={service.link}> Read More</a>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClinicalService;
