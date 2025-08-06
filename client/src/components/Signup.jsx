import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import background from "../images/pr-4.jpg";
import toast from "react-hot-toast";
import axios from "axios";

const Signup = ({ setMobileNumber, setUserExists }) => {
    const navigate = useNavigate();
    const[titles,setTitles] = useState([])
    const[isValid,setIsValid] = useState(true)
    const[genders,setGenders] = useState([])
    const[countries,setCountries] = useState([])
    const [states,setStates] = useState([])
    const [cities,setCities] = useState([])


    const[formData,setFormData] = useState ({
        // "titleId": 101,
        "titleId": " ",
        "firstName": "",
        "lastName": "",
        // "genderId": "1001",
        "genderId": "",
        "dob": "",
        "mobileNumber": "",
        "email": "",
        "address": "",
        "cityId": "",
        "districtId": "",
        "stateId": "",
        "countryId": "",
        "pincode":""
        
    })

    useEffect(() => {
    fetchTitles();
    fetchGenders();
    fetchCities();
    fetchStates();
    fetchCountries();
    },
    []);
    

const fetchTitles = async () => {
try {
    const response = await axios.get("http://localhost:8080/getTitles");
    setTitles(response.data);
} catch (error) {
    console.error('Error fetching titles:', error);
}
};

const fetchGenders = async () => {
try {
    const response = await axios.get("http://localhost:8080/getgenders");
    setGenders(response.data);
} catch (error) {
    console.error('Error fetching genders:', error);
}
};


const fetchCountries = async () => {
try {
    const response = await axios.get("http://localhost:8080/getlistcountries");
    setCountries(response.data);
} catch (error) {
    console.error('Error fetching countries:', error);
}
};

const fetchStates = async (selectedcountryId) => {
try {
    const response = await axios.get(`http://localhost:8080/getliststates?countryId=${selectedcountryId}`);
    setStates(response.data);
} catch (error) {
    console.error('Error fetching states:', error);
}
};

const fetchCities = async (selectedstateId) => {
try {
    const response = await axios.get(`http://localhost:8080/getlistcities?stateId=${selectedstateId}`);
    setCities(response.data);
} catch (error) {
    console.error('Error fetching cities:', error);
}
};

    function changeHandler(e){
    const{name,value} = e.target
    setFormData((prev)=>{
        return{
            ...prev,
            [name]:value
        }
    })
    if(name === "mobileNumber"){
            setIsValid(/^\d{10}$/.test(value));
        }

        if (name === 'countryId') {
        fetchStates(value); 
        }

        if(name === 'stateId') {
            fetchCities(value);
        }

    let updatedValue = value;

    // Capitalize the first letter of each word in "First Name" and "Last Name" ,Address State,CountryId
    if (name === "firstName" || name === "lastName" || name === "address") {
        updatedValue = value
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    // Update the form data
    setFormData(prev => ({
        ...prev,
        [name]: updatedValue
    }));

    // Validation
    if ((name === "firstName" || name === "lastName") && value.trim() === '') {
        toast.error(`${name === "firstName" ? "First" : "Last"} Name cannot be empty`);
    }

    // Other handlers...
}

// const handleMobileNumberChange = (e) => {
//     const { value } = e.target;
//     setFormData((prev) => ({
//     ...prev,
//     mobileNumber: value,
//     }));
// // Pass mobileNumber to the parent component (App)
//     setMobileNumber(value);
// };

const handleMobileNumberChange = (e) => {
    let value = e.target.value;
    // Remove any non-numeric characters
    value = value.replace(/\D/g, '');
    // Update the state
    setFormData((prev) => ({
        ...prev,
        mobileNumber: value,
    }));
    // Pass mobileNumber to the parent component (App)
    setMobileNumber(value);
};

  

function submitHandler(e) {
    e.preventDefault();

    const titleId = formData.titleId;
    const firstName = formData.firstName;
    const lastName = formData.lastName;
    const genderId = formData.genderId;
    const dob = formData.dob;
    const mobileNumber = formData.mobileNumber;
    const email = formData.email;
    const address = formData.address;
    const cityId = formData.cityId;
    const districtId = formData.districtId;
    const stateId = formData.stateId;
    const countryId = formData.countryId;
    const pincode = formData.pincode;

    let data = { titleId, firstName, lastName, genderId, dob, mobileNumber, email, address, cityId, districtId, stateId, countryId,pincode};

    axios.post("http://localhost:8080/register", data)
        .then(response => {
            // const token = response.data.token;
            // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            // console.log(response);
            // e.target.reset();
           const { userExists } = response.data; // Extract userExists from response.data
            console.log("UserExists:", userExists); // Log the userExists value
            setUserExists(userExists); // Set userExists state
            console.log(response);
            if (!isValid) {
                toast.error("Enter Correct mobile no.");
                return;
            } else {
                toast.success("Signed Up Successfully");
                navigate("/otp");
                console.log("form submitted", formData);
            }
        })
        .catch(err => {
            console.log("error due to ", err);
            toast.error("Error Occured");
        });
}



    return (
        <div className="h-full lg:h-full w-full bg-cover bg-no-repeat  flex justify-end bg-fixed " style={{ backgroundImage: `url(${background})`}}>
            <div className=" w-full md:w-3/6 lg:w-2/6 relative flex flex-col  bg-white rounded-md py-3 px-6 m-2">
                <h2 className="text-xl md:text-2xl lg:text-3xl mx-auto font-bold ">Create an Account</h2>

                <form 
                onSubmit={submitHandler}
                className="overscroll-y-contain">
                <div className="">
                    <div className="my-[10px]">
                        <label>
                            <p className="text-[0.875rem] m-1 leading-[1.376rem] text-base">Title</p>
                            <select
                                onChange={changeHandler}
                                name="titleId"
                                value={formData.titleId}
                                className="border rounded-[0.5rem]  w-full p-2.5" 
                                >
                                    <option>Select Title</option>
                                    {titles.map(title => (
                                    <option key={title.titleId} value={title.titleId}>{title.title}</option>
                                    ))}
                            </select>
                        </label>
                    </div>


                    <div className="my-[10px]">
                    <label className="">
                        <p className="text-[0.875rem] m-1 leading-[1.376rem] text-base">First Name<sup className="text-rose-700 text-sm">*</sup></p>
                        <input
                        required
                        type="text"
                        name="firstName"
                        onChange={changeHandler}
                        placeholder="Enter First Name"
                        value={formData.firstName}
                        className="border rounded-[0.5rem]  w-full p-2.5" 
                        />
                    </label>
                    </div>

                    <div className="my-[10px]">
                        <label className="">
                            <p className="text-[0.875rem] m-1 leading-[1.376rem] text-base">Last Name<sup className="text-rose-700 text-sm">*</sup></p>
                            <input
                            required
                            type="text"
                            name="lastName"
                            onChange={changeHandler}
                            placeholder="Enter Last Name"
                            value={formData.lastName}
                            className="border rounded-[0.5rem]  w-full p-2.5" 
                            />
                        </label>
                    </div>
                    
                    <div className="my-[10px]">
                        <label>
                            <p className="text-[0.875rem] m-1 leading-[1.376rem] text-base">Gender<sup className="text-rose-700 text-sm">*</sup></p>
                            <select
                            onChange={changeHandler}
                            name="genderId"
                            value={formData.genderId}
                            className="border rounded-[0.5rem]  w-full p-2.5" 
                            >
                                <option>Select Gender</option>
                                {genders.map(gender => (
                                <option key={gender.genderId} value={gender.genderId}>{gender.gender}</option>
                                ))}
                            </select>
                        </label>
                        </div>

                    <div className="my-[10px]">
                        <label>
                            <p className="text-[0.875rem] m-1 leading-[1.376rem] text-base">Date of Birth<sup className="text-rose-700 text-sm">*</sup></p>
                            <input
                            required
                            type="date"
                            name="dob"
                            onChange={changeHandler}
                            value={formData.dob}
                            className="border rounded-[0.5rem]  w-full p-2.5" 
                            />
                        </label>
                    </div>

                    <div className="my-[10px]">
                        <label>
                            <p  className="text-[0.875rem] m-1 leading-[1.376rem] text-base">Mobile No.<sup className="text-rose-700 text-sm">*</sup></p>
                            <input
                            required
                            // type="tel"
                            // name="mobileNumber"
                            // onChange={changeHandler}
                            // placeholder="Enter Mobile No."
                            // value={formData.mobileNumber}
                            type="tel"
                            inputMode="numeric"
                            maxLength={10}
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleMobileNumberChange}
                            placeholder="Enter Mobile Number"
                            className="border rounded-[0.5rem]  w-full p-2.5" 
                            />
                        </label>
                    </div>
                        
                    <div className="my-[10px]">
                        <label>
                            <p className="text-[0.875rem] m-1 leading-[1.376rem] text-base">Email<sup className="text-rose-700 text-sm">*</sup></p>
                            <input
                            required
                            type="email"
                            name="email"
                            onChange={changeHandler}
                            placeholder="Enter Email Id"
                            value={formData.email}
                            className="border rounded-[0.5rem]  w-full p-2.5" 
                            />
                        </label>
                    </div>

                    <div className="my-[10px]">
                        <label>
                            <p  className="text-[0.875rem] m-1 leading-[1.376rem] text-base">Address<sup className="text-rose-700 text-sm">*</sup></p>
                            <input
                            required
                            type="text"
                            name="address"
                            onChange={changeHandler}
                            placeholder="Enter Address"
                            value={formData.address}
                            className="border rounded-[0.5rem]  w-full p-2.5" 
                            />
                        </label>
                    </div>

                    <div className="my-[10px]">
                        <label>
                            <p className="text-[0.875rem] m-1 leading-[1.376rem] text-base">Country<sup className="text-rose-700 text-sm">*</sup></p>
                            <select
                            type="dropdown"
                            onChange={changeHandler}
                            name="countryId"
                            value={formData.countryId}
                            className="border rounded-[0.5rem]  w-full p-2.5" 
                            ><option>Select Country</option>
                                {
                                    countries.map(country => (
                                    <option key={country.countryId} value={country.countryId}>{country.name}</option>
                                    ))}
                            </select>
                        </label>
                    </div>

                    <div className="my-[10px]">
                        <label>
                            <p className="text-[0.875rem] m-1 leading-[1.376rem] text-base">State<sup className="text-rose-700 text-sm">*</sup></p>
                            <select
                            type="dropdown"
                            onChange={changeHandler}
                            name="stateId"
                            value={formData.stateId}
                            className="border rounded-[0.5rem] w-full p-2.5"
                        >
                        <option>Select State</option>
                            {states.map(state => (
                                <option key={state.stateId} value={state.stateId}>{state.name}</option>
                            ))}
                            </select>
                        </label>
                    </div>
                        


                    {/* <div className="my-[10px]">
                        <label>
                            <p className="text-[0.875rem] m-1 leading-[1.376rem] text-base">District</p>
                            <select
                            type="dropdown"
                            onChange={changeHandler}
                            name="districtId"
                            value={formData.districtId}
                            className="border rounded-[0.5rem]  w-full p-2.5" 
                            >
                                <option value="district1">district1</option>
                                <option value="district2">district2</option>
                                <option value="district3">district3</option>
                            </select>
                        </label>
                    </div> */}


                    <div className="my-[10px]">
                        <label>
                            <p className="text-[0.875rem] m-1 leading-[1.376rem] text-base">City<sup className="text-rose-700 text-sm">*</sup></p>
                            <select
                            type="dropdown"
                            onChange={changeHandler}
                            name="cityId"
                            value={formData.cityId}
                            className="border rounded-[0.5rem]  w-full p-2.5"
                            >
                                <option>Select City</option>
                            {cities.map(city => (
                                <option key={city.cityId} value={city.cityId}>{city.name}</option>
                            ))}
                            </select>
                        </label>
                    </div>

                    <div className="my-[10px]">
                        <label>
                            <p  className="text-[0.875rem] m-1 leading-[1.376rem] text-base">Pincode<sup className="text-rose-700 text-sm">*</sup></p>
                            <input
                            required
                            type="number"
                            maxLength={6}
                            name="pincode"
                            onChange={changeHandler}
                            placeholder="Enter Pincode"
                            value={formData.pincode}
                            className="border rounded-[0.5rem]  w-full p-2.5" 
                            />
                        </label>
                    </div>

                    </div>
                    
                    <div>
                    <button className="mt-2 w-full bg-[#03DAC5] hover:bg-teal-500 text-[#005457] border rounded-md p-2.5  text-lg font-bold  ">
                    Sign Up
                </button>

                </div>

                <div className=" flex " >
                    <p className="mx-auto">
                        Already have and account?
                        <Link className=" text-blue-800 hover:font-bold mx-1 py-2 " to="/login">Sign In here!</Link>
                    </p>
                </div>
                
                </form>

                
            </div>
        </div>
    )
}

export default Signup;