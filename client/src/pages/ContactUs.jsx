import React, { useState } from 'react';

const ContuctUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    });
    const [file, setFile] = useState(null);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png"];
        const maxSizeMB = 8;
    
        // Check if a file is selected
        if (selectedFile) {
            // Check file type
            if (!allowedTypes.includes(selectedFile.type)) {
                alert("Invalid file type. Please select a PDF, Word document, JPEG, or PNG file.");
                e.target.value = null; // Clear the file input
                return;
            }
    
            // Check file size
            if (selectedFile.size > maxSizeMB * 1024 * 1024) {
                alert(`File size exceeds ${maxSizeMB}MB limit. Please select a smaller file.`);
                e.target.value = null; // Clear the file input
                return;
            }
    
            // File meets criteria, set the file state
            setFile(selectedFile);
        }
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Check if any of the required fields are empty
        if (!formData.name || !formData.email || !formData.mobile || !formData.message || !file) {
            alert("Please fill out all required fields and select a file.");
            return;
        }
    
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('mobile', formData.mobile);
        formDataToSend.append('message', formData.message);
        formDataToSend.append('file', file);
    
        fetch('http://192.168.25.187:8080/api/contact/submit', {
            method: 'POST',
            body: formDataToSend
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            // Handle success response from the server
        })
        .catch((error) => {
            console.error('There was an error!', error);
            // Handle error response from the server
        });
    };
    
    return (
        <div className=" mx-auto h-full w-full">
        {/* {Contact Us} */}
        <section className="bg-blue-100 dark:bg-slate-800" id="contact">
                    <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-4 lg:py-4">
                        <div className="mb-4">
                            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                                <h2
                                    className="mb-4 font-bold text-gray-900 dark:text-white text-3xl sm:text-3xl">
                                    Contact Us
                                </h2>
                            </div>
                        </div>
                        <div className="flex items-stretch justify-center">
                            <div className="grid md:grid-cols-2">
                                <div className="h-full pr-6">
                                    <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                                    <span className='text-black font-semibold'>RGCIRC</span> is always looking to make things easier for you. Our aim is to provide our customers with the best medical facilities, 
                                    constant care, and reliable support. If you would like to get in touch with a doctor from a specific department, 
                                    would like some specific information about the services we provide, or just have a question for us, 
                                    please fill up the Form given below and we will get back to you.
                                    </p>
                                    <ul className="mb-6 md:mb-0">
                                        <li className="flex">
                                            <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round" className="h-6 w-6">
                                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                                    <path
                                                        d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                                    </path>
                                                </svg>
                                            </div>
                                            <div className="ml-4 mb-4">
                                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Rohini
                                                </h3>
                                                <p className="text-gray-600 dark:text-slate-400">Sir Chotu Ram Marg, Sector – 5, Rohini Institutional Area, Rohini, </p>
                                                <p className="text-gray-600 dark:text-slate-400">New Delhi, Delhi – 110085</p>
                                            </div>
                                        </li>
                                        <li className="flex">
                                            <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round" className="h-6 w-6">
                                                    <path
                                                        d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                                    </path>
                                                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                                                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                                                </svg>
                                            </div>
                                            <div className="ml-4 mb-4">
                                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact
                                                </h3>
                                                <p className="text-gray-600 dark:text-slate-400">Mobile: <a href="tel:+91-11-47022222" className='text-blue-500'>+91-11-47022222</a></p>
                                                <p className="text-gray-600 dark:text-slate-400">Mail: <a href='mail:info@rgcirc.org ' className=' text-blue-500 '>info@rgcirc.org</a></p>
                                            </div>
                                        </li>
                                        <li className="flex">
                                            <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round" className="h-6 w-6">
                                                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                                    <path d="M12 7v5l3 3"></path>
                                                </svg>
                                            </div>
                                            <div className="ml-4 mb-4">
                                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">OPD Timings</h3>
                                                <p className="text-gray-600 dark:text-slate-400">09:00 am to 05:00 pm </p>
                                                <p className="text-gray-600 dark:text-slate-400">(All Weekdays except Sunday and Holiday)</p>
                                            </div>
                                        </li>
                                        <li className="flex">
                                            <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round" className="h-6 w-6">
                                                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                                    <path d="M12 7v5l3 3"></path>
                                                </svg>
                                            </div>
                                            <div className="ml-4 mb-4">
                                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Emergency Services</h3>
                                                <p className="text-gray-600 dark:text-slate-400"> 24x7 All Weekdays </p>
                                            </div>
                                        </li>
                                    </ul>

                                    
                                </div>
                                <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                                    <h2 className="mb-4 text-2xl font-bold dark:text-white">Ready to Get Started?</h2>
                                    <form id="contactForm" onSubmit={handleSubmit}>
                                        <div className="mb-6">
                                            <div className="mx-0 mb-1 sm:mb-4">
                                                <div className="mx-0 mb-1 sm:mb-4">
                                                    <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" autoComplete="given-name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="name"></input>
                                                </div>
                                                <div className="mx-0 mb-1 sm:mb-4">
                                                    <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email" autoComplete="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email"></input>
                                                </div>
                                                <div className="mx-0 mb-1 sm:mb-4">
                                                    <label htmlFor="mobile" className="pb-1 text-xs uppercase tracking-wider"></label><input type="mobile" id="mobile" autoComplete="mobile" placeholder="Your Mobile Number" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="mobile"></input>
                                                </div>
                                            </div>
                                            <div className="mx-0 mb-1 sm:mb-4">
                                                <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"></textarea>
                                            </div>

                                            <div className="mx-0 mb-1 sm:mb-4">
                                                <label className="block text-md mb-2 font-bold text-gray-700">Upload your Report</label>
                                                <input
                                                    type="file"
                                                    id="file"
                                                    accept=".pdf, .doc, .docx, .jpg, .jpeg, .png"
                                                    onChange={handleFileChange}
                                                    className=" w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                                                    name="file"
                                                />
                                                <p className="text-xs text-red-600 py-2 ml-3 font-semibold">The file size limit for document is 8MB. Accepted file types: .pdf |.doc | .docx | jpg | jpeg | png File Upload</p>
                                            </div>

                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className=" bg-blue-800 hover:bg-blue-600 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


        </div>
    );
}

export default ContuctUs;
