import React from 'react';

const doctors = [
  {
    name: 'Dr. (Prof) Sudhir Kumar Rawal',
    imageUrl: 'https://www.rgcirc.org/wp-content/uploads/2017/08/Dr-Sudhir-Rawal-7-150x150.jpg',
    specialty: 'Uro Oncology',
    profileLink: 'https://www.rgcirc.org/doctor/dr-sudhir-kumar-rawal/',
    specialistsLink: 'https://www.rgcirc.org/find-a-doctor/?service=21298'
  },
  {
    name: 'Dr. A.K. Dewan',
    imageUrl: 'https://www.rgcirc.org/wp-content/uploads/2023/07/ak-deewan.png',
    specialty: 'Head & Neck Surgical Oncology',
    profileLink: 'https://www.rgcirc.org/doctor/dr-a-k-dewan/',
    specialistsLink: 'https://www.rgcirc.org/find-a-doctor/?service=2262'
  },
  {
    name: 'Dr. D.C Doval',
    imageUrl: 'https://www.rgcirc.org/wp-content/uploads/2017/08/dr-d-c-doval-1-150x150.jpg',
    specialty: 'Medical Oncology',
    profileLink: 'https://www.rgcirc.org/doctor/Dr-D-C-Doval/',
    specialistsLink: 'https://www.rgcirc.org/find-a-doctor/?service=21298'
  },
  {
    name: 'Dr. Arvind K Chaturvedi',
    imageUrl: 'https://www.rgcirc.org/wp-content/uploads/2023/10/Dr-Chaturvedi.jpg',
    specialty: 'Radiology And Imaging',
    profileLink: 'https://www.rgcirc.org/doctor/dr-arvind-k-chaturvedi/',
    specialistsLink: 'https://www.rgcirc.org/find-a-doctor/?service=21298'
  },
  {
    name: 'Dr. Gauri Kapoor',
    imageUrl: 'https://www.rgcirc.org/wp-content/uploads/2017/08/Dr.-Gauri-Kapoor-3-150x150.jpg',
    specialty: 'Pediatric Hematology & Oncology',
    profileLink: 'https://www.rgcirc.org/doctor/dr-gauri-kapoor/',
    specialistsLink: 'https://www.rgcirc.org/find-a-doctor/?service=21298'
  },
  {
    name: 'Dr. Col. (Retired) Anurag Mehta',
    imageUrl: 'https://www.rgcirc.org/wp-content/uploads/2017/08/Dr-Anurag-1.jpg',
    specialty: 'Laboratory & Transfusion Services',
    profileLink: 'https://www.rgcirc.org/doctor/dr-col-retired-anurag-mehta/',
    specialistsLink: 'https://www.rgcirc.org/find-a-doctor/?service=21298'
  },
  {
    name: 'Dr. Partha S Choudhury',
    imageUrl: 'https://www.rgcirc.org/wp-content/uploads/2017/08/Dr-P.S.-Chaudhary3-1-150x150.jpg',
    specialty: 'Nuclear Medicine',
    profileLink: 'https://www.rgcirc.org/doctor/dr-partha-s-choudhury/',
    specialistsLink: 'https://www.rgcirc.org/find-a-doctor/?service=21298'
  },
  {
    name: 'Dr. Vineet Talwar',
    imageUrl: 'https://www.rgcirc.org/wp-content/uploads/2023/07/Dr.-Vineet-Talwar-2021.jpeg',
    specialty: 'Medical Oncology',
    profileLink: 'https://www.rgcirc.org/doctor/dr-vineet-talwar/',
    specialistsLink: 'https://www.rgcirc.org/find-a-doctor/?service=21298'
  },
  {
    name:"Dr. Dinesh Bhurani",
    imageUrl:'https://www.rgcirc.org/wp-content/uploads/2017/08/Dr-Bhurani-150x150.jpg ',
    specialty:'Hemato-Oncology & Bone Marrow ',
    profileLink:'https://www.rgcirc.org/doctor/dr-dinesh-bhurani/',
    specialistsLink:''
  },
  {
    name:"Dr. Munish Gairola",
    imageUrl:'https://www.rgcirc.org/wp-content/uploads/2017/08/Dr-Munish-Gairola-e1705046792769.jpg',
    specialty:'Radiation Oncology',
    profileLink:'https://www.rgcirc.org/doctor/dr-munish-gairola/ ',
    specialistsLink:''
  }

];

const DoctorProfiles = () => {
  return (
    <div className="h-full w-full bg-[#eef5fa]">
    <h2 className="text-gray-700 py-4 text-center font-bold text-2xl sm:text-3xl">
      Our <span className="text-black">Specialists</span>
    </h2>
    <p className="text-red-700 justify-end items-center text-right mr-10 font-semibold underline"><a href="https://www.rgcirc.org//find-a-doctor/" alt=""> View all</a></p>
        <div className="flex justify-center items-center">
          <span className="linespan h-1 w-10 bg-blue-300 "></span>
          <span className="dotspan h-2 w-2 bg-red-700 rounded-full mx-2"></span>
          <span className="linespan h-1 w-10 bg-blue-300"></span>
        </div>
    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-5 mt-12 px-8 py-8 mx-auto">
      {doctors.map((doctor, index) => (
        <div key={index} className="h-[34vh] w-[36vh] justify-center items-center mb-20 bg-white rounded-lg shadow-md">
          <div className="text-center ">
            <img
              src={doctor.imageUrl}
              className="rounded-full mx-auto h-[120px] w-[120px] -mt-12 aspect-w-1 aspect-h-1"
              alt={doctor.name}
            />
            <img
              src="https://www.rgcirc.org/wp-content/themes/rgcirc/assets/img/plus-icon.png"
              alt="Plus Icon"
              className="mx-auto"
            />
            <h6 className="font-semibold mt-2">{doctor.name}</h6>
            <p className="text-gray-600 mb-6">{doctor.specialty}</p>
            <div className="justify-center gap-2 flex flex-row">
              <a href={doctor.profileLink} className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                View Profile
              </a>
              <a href={doctor.specialistsLink} className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                View Specialists
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default DoctorProfiles;
