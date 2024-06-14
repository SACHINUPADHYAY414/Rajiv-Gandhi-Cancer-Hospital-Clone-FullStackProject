import React, { useState } from "react";
import axios from 'axios';

const MyDocumentsUpload = () => {
  const [file, setFile] = useState(null);
  const [documentType, setDocumentType] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const allowedExtensions = ["pdf", "jpg", "jpeg"];
    const maxSize = 2 * 1024 * 1024; // 2MB

    if (!selectedFile) {
      setErrorMessage("Please select a file.");
      return;
    }
    
    // Check if file extension is allowed
    const fileExtension = selectedFile.name.split(".").pop().toLowerCase();
    if (!allowedExtensions.includes(fileExtension)) {
      setErrorMessage("Only PDF, JPG, and JPEG files are allowed.");
      return;
    }

    // Check if file size exceeds the maximum limit
    if (selectedFile.size > maxSize) {
      setErrorMessage("Maximum file size allowed is 2MB.");
      return;
    }

    // Check for double extensions
    if (selectedFile.name.includes(".")) {
      const parts = selectedFile.name.split(".");
      if (parts.length > 2) {
        setErrorMessage("Double extensions are not allowed.");
        return;
      }
    }

  
    setFile(selectedFile);
   
  };

  const handleDocumentTypeChange = (event) => {
    setDocumentType(event.target.value);
  };

  const handleSubmit = async () => {
    if (!file) {
      setErrorMessage("Please select a file.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("documentType", documentType);
      const response = await axios.post("/api/upload-document", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      console.log("File uploaded successfully:", response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
      setErrorMessage("An error occurred while uploading the file.");
    }
  };

  return (
    <div className="max-w-md justify-center text-[#005457] w-full items-center mx-auto p-5 mt-4 border rounded-lg shadow-lg">
      <h1 className="text-2xl text-center font-bold">My Documents Upload</h1>
      <p className="mt-2 ml-0 text-red-500">
        Only PDF, JPG, and JPEG files are allowed. <br />
        Double extensions are not allowed.<br/> Maximum limit of file size is 2MB.
      </p>
      <div className="upload-section mx-auto mt-4">
        <div className="file-info mb-4">
          <label className=" flex mb-2 font-bold">Upload Document Type:</label>
          <select id="document-type " className="w-40 rounded-sm" value={documentType} onChange={handleDocumentTypeChange}>
            <option value="">Select Document Type</option>
            <option value="Signature & Scanned Consent Form">Signature & Scanned Consent Form</option>
            <option value="Insurance Letter">Insurance Letter</option>
            <option value="Referral Letter">Referral Letter</option>
            <option value="Lab Report">Lab Report</option>
            <option value="Radiology Report">Radiology Report</option>
            <option value="Health Education">Health Education</option>
            <option value="Counselling">Counselling</option>
          </select>
        </div>
        
        <div className="file-upload mb-4">
          <label className="block mb-2 font-bold">Upload Document:</label>
          <input
            id="file-upload"
            type="file"
            accept=".pdf,.jpg,.jpeg"
            onChange={handleFileChange}
            className=" w-full rounded-sm"
          />
        </div>
        <div className="submit-button text-center mt-3">
          <button onClick={handleSubmit} disabled={!file || !documentType} className="py-2 px-2 rounded-lg w-full font-bold text-[#005457] bg-[#03DAC5] hover:bg-teal-500">Submit</button>
        </div>
      </div>
      {errorMessage && <p className="error-message mt-3">{errorMessage}</p>}
    </div>
  );
};

export default MyDocumentsUpload;
