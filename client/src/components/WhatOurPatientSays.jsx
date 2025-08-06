import React from 'react'

const WhatOurPatientSays = () => {

    const patientSays=[
       
        {
            "comments": " My wife Amrit Kaur Sehgal & mother of Navneet Kaur was suffering from Cerebrovascular Accident – Right Hemiparesis since Nov 1999 and Carcinoma Duodenum with gastric outlet obstruction, GI Bleed since 2018. On the recommendation of Dr. P.N. Singh of Holy Family Hospital that we should now go for Palliative Care and Pain Management .... ",
            "image": "https://previews.123rf.com/images/metelsky/metelsky1904/metelsky190400020/121859822-male-avatar-icon-or-portrait-handsome-young-man-face-businessman-in-suit-and-necktie-vector.jpg",
            "userName": "Roshan"
        }
        // ,
    //     {
    //         "comments": " My wife Amrit Kaur Sehgal & mother of Navneet Kaur was suffering from Cerebrovascular Accident – Right Hemiparesis since Nov 1999 and Carcinoma Duodenum with gastric outlet obstruction, GI Bleed since 2018. On the recommendation of Dr. P.N. Singh of Holy Family Hospital that we should now go for Palliative Care and Pain Management .... ",
    //         "image": "../images/Avtar.png",
    //         "userName": "Roshan"
    //     },
    //     {
    //         "comments": " My wife Amrit Kaur Sehgal & mother of Navneet Kaur was suffering from Cerebrovascular Accident – Right Hemiparesis since Nov 1999 and Carcinoma Duodenum with gastric outlet obstruction, GI Bleed since 2018. On the recommendation of Dr. P.N. Singh of Holy Family Hospital that we should now go for Palliative Care and Pain Management .... ",
    //         "image": "../images/Avtar.png",
    //         "userName": "Roshan"
    //     },
    //     {
    //         "comments": " My wife Amrit Kaur Sehgal & mother of Navneet Kaur was suffering from Cerebrovascular Accident – Right Hemiparesis since Nov 1999 and Carcinoma Duodenum with gastric outlet obstruction, GI Bleed since 2018. On the recommendation of Dr. P.N. Singh of Holy Family Hospital that we should now go for Palliative Care and Pain Management .... ",
    //         "image": "../images/Avtar.png",
    //         "userName": "Roshan"
    //     },
    //     {
    //         "comments": " My wife Amrit Kaur Sehgal & mother of Navneet Kaur was suffering from Cerebrovascular Accident – Right Hemiparesis since Nov 1999 and Carcinoma Duodenum with gastric outlet obstruction, GI Bleed since 2018. On the recommendation of Dr. P.N. Singh of Holy Family Hospital that we should now go for Palliative Care and Pain Management .... ",
    //         "image": "../images/Avtar.png",
    //         "userName": "Roshan"
    //     }
    ]

 
  return (
    <div className="h-full w-full">
            <div className=" " style={{ backgroundImage: "url('https://www.rgcirc.org/wp-content/themes/rgcirc/assets/img/test-back-img.png')" }}>
                <h2 className="text-white py-4 sm:px-4 lg:px-6 lg:py-4 text-center text-2xl sm:text-3xl">
                    What Our Patient Says
                </h2>
                <div className="flex justify-center items-center">
                    <span className="linespan h-1 w-10 bg-blue-300 "></span>
                    <span className="dotspan h-2 w-2 bg-red-700 rounded-full mx-2"></span>
                    <span className="linespan h-1 w-10 bg-blue-300"></span>
                </div>
                <p className="text-white justify-end items-center text-right mr-10 font-semibold underline"><a href="https://www.rgcirc.org//find-a-doctor/" alt=""> View all</a></p>
                      <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="inline-block w-4 h-4 text-white mt-4"
                            viewBox="0 0 975.036 975.036"
                        >
                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                        </svg>
                        </div>
                   <div className="text-white body-font">
                        {patientSays.map((patient, index) => (
                            <div key={index} className="flex flex-col justify-center items-center">
                                <p className="leading-relaxed italic text-center text-lg w-[50%]">
                                    {patient.comments}
                                </p>
                                <div class="flex justify-center items-center mt-2">
                                    <img src={patient.image} alt="Avatar" class="h-32 w-32 rounded-full"></img>
                                </div>
                                <h2 className="text-white font-bold text-lg">{patient.userName}</h2>
                            </div>
                        ))}
                    </div>
            </div>
        </div>
  )
}

export default WhatOurPatientSays