import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Dashboard = ({ token, id }) => {
  const [formData, setFormData] = useState({
    userId: "",
    name: "",
    gender: "",
    email: "",
    mobile: "",
    address: ""
  });

  useEffect(() => {
    fetchPatientDetails();
  }, []);

  const fetchPatientDetails = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8080/patientDetails`,
        {
          userId: id
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      console.log(response.data);
      setFormData(response.data);
    } catch (error) {
      console.error("Error fetching patient details:", error);
    }
  };

  const cardData = [
    {
      imageSrc:
        "https://cdn4.iconfinder.com/data/icons/businessman-outline-3/48/businessman_man_avatar_user_people-512.png",
      path: "/Profile",
      name: "Profile"
    },
    {
      imageSrc:
        "https://png.pngtree.com/png-vector/20220802/ourmid/pngtree-making-an-appointment-with-a-doctor-on-smartphone-png-image_5635997.png",
      path: "/InpersonAppointment",
      name: "Inperson Appointment"
    },
    {
      imageSrc:
        "https://icon-library.com/images/appointment-icon-png/appointment-icon-png-27.jpg",
      path: "/Myappointments",
      name: "My appointments"
    },
    {
      imageSrc:
        "https://png.pngtree.com/png-clipart/20220515/original/pngtree-medical-test-report-with-blood-tube-vector-illustration-png-image_7717785.png",
      path: "/ViewLabReports",
      name: "View Lab Reports"
    },
    {
      imageSrc:
        "https://cdni.iconscout.com/illustration/premium/thumb/radiology-ct-scan-services-4872810-4056604.png",
      path: "/ViewRadiologyreports",
      name: "View Radiology Reports"
    },
    {
      imageSrc:
        "https://cdn1.iconfinder.com/data/icons/fillicons-medical-1/2000/Patient_Discharge-512.png",
      path: "/ViewDischargesummary",
      name: "View Discharge Summary"
    },
    {
      imageSrc:
        "https://cdn3d.iconscout.com/3d/premium/thumb/medical-folder-5274839-4404344.png",
      path: "/DownloadPrescription",
      name: "Download Prescription"
    },
    {
      imageSrc: "https://cdn-icons-png.flaticon.com/512/2270/2270665.png",
      path: "/UploadDocs",
      name: "Upload - Docs"
    },
    {
      imageSrc:
        "https://cdn.icon-icons.com/icons2/2324/PNG/512/call_doctor_coronavirus_smartphone_icon_142163.png",
      path: "/TeleconsultationReceipt",
      name: "Teleconsultation Receipt"
    },
    {
      imageSrc: "https://cdn-icons-png.flaticon.com/512/2270/2270636.png",
      path: "/ExternalDownload",
      name: "External Doc.Download"
    },
    {
      imageSrc:
        "https://cdn1.iconfinder.com/data/icons/ecommerce-144/64/Invoice_payment_invoice_sales_invoice_icon-512.png",
      path: "/FinalBill",
      name: "Final Bill"
    },
    {
      imageSrc:
        "https://icon-library.com/images/material-design-settings-icon/material-design-settings-icon-22.jpg",
      path: "/Setting",
      name: "Setting"
    }
  ];

  return (
    <div className="text-[#005457] mx-auto h-full w-full">
      <h2 className="justify-center items-center text-center text-[30px] font-bold">
        Dashboard
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cardData.map((cardData, index) => (
          <NavLink
            key={index}
            to={cardData.path}
            className="w-full bg-[#57d2be] bg-opacity-30 rounded-lg p-2 flex flex-col items-center justify-center hover:bg-[#0AD8B5]"
          >
            <img
              src={cardData.imageSrc}
              alt=""
              className="mb-2 rounded-md"
              style={{ maxHeight: "100px" }}
            />
            <h2 className="text-xl text-center font-bold text-black">
              {cardData.name}
            </h2>
          </NavLink>
        ))}
      </div>

      {/* <div className="grid md:grid-cols-2 gap-3 rounded-lg md:mt-4 md:ml-4 md:mr-4">
    
        <div className="border border-gray-300 p-3 rounded-lg flex">
          <label className="text-lg font-bold">UHID:</label>
          <p className="text-[0.875rem] m-1 leading-[1.376rem] text-base">
            {formData.userId}
          </p>
        </div>

    
        <div className="border border-gray-300 p-3 rounded-lg flex">
          <label className="text-lg font-bold">Name:</label>
          <p className="text-[0.875rem] m-1 leading-[1.376rem] text-base">
            {formData.name}
          </p>
        </div>

        <div className="border border-gray-300 p-3 rounded-lg flex">
          <label className="text-lg font-bold">Gender:</label>
          <p className="text-[0.875rem] m-1 leading-[1.376rem] text-base">
            {formData.gender}
          </p>
        </div>

     
        <div className="border border-gray-300 p-3 rounded-lg flex">
          <label className="text-lg font-bold">Email:</label>
          <p className="text-[0.875rem] m-1 leading-[1.376rem] text-base">
            {formData.email}
          </p>
        </div>

        <div className="border border-gray-300 p-3 rounded-lg flex">
          <label className="text-lg font-bold">Mobile Number:</label>
          <p className="text-[0.875rem] m-1 leading-[1.376rem] text-base">
            {formData.mobile}
          </p>
        </div>

       
        <div className="border border-gray-300 p-3 rounded-lg flex">
          <label className="text-lg font-bold">Address:</label>
          <p className="text-[0.875rem] m-1 leading-[1.376rem] text-base">
            {formData.address}
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
