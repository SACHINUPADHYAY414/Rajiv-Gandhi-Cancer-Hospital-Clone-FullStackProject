import React from "react";
import { useState } from "react";
import{ AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from '../images/logo.png';
import background from '../images/background.jpg'
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({username, handleLogin}) => {

    const[formData,setFormData] = useState({
        username:"",password:""
    })
    const[showPassword,setShowPassword] = useState(false);
    // const[patients,setPatients] = useState("")
    const[isValid,setIsValid] = useState(true)
    const navigate = useNavigate ();

//     useEffect(() => {
//         fetchPatients();
//     },[]) 

//     const fetchPatients = async () => {
// try {
//     const response = await axios.get("http://192.168.25.187:8080/getpatients");
//     setPatients(response.data);
// } catch (error) {
//     console.error('Error fetching titles:', error);
// }
// };


    function changeHandler(e) {
        const { name, value } = e.target;
        
        if (name === "username") {
            // Only allow numeric characters for the username field
            if (!/^\d*$/.test(value)) {
                // If non-numeric characters are entered, do not update the state
                toast.error("Please enter a valid mobile number.");
                return;
            }
            
            setFormData((prev) => ({
                ...prev,
                [name]: value
            }));
    
            setIsValid(/^\d{10}$/.test(value));
        } else {
            // For other fields (like password), update the state directly
            setFormData((prev) => ({
                ...prev,
                [name]: value
            }));
        }
    }
    
    

async function submitHandler(e) {
    e.preventDefault();

    const username = formData.username;
    const password = formData.password;

    let data = { username, password };

    try {
        const response = await axios.post("http://localhost:8080/login", data);
        const token = response.data.jwtToken;
        console.log(response);
        console.log("JWT Token:", token); 
        handleLogin(token);
        // setPatients(response.data);
        e.target.reset();

        if (!isValid) {
            toast.error("Enter Correct mobile no.");
            return;
        } else {
            toast.success("Logged In");
            navigate("/patients");
            console.log("form submitted", formData);
        }
    } catch (err) {
        toast.error("smothing went wrong...");
        console.log("error due to ", err);
    }
}

    return (
        <div className="flex relative  h-screen bg-no-repeat bg-cover  " style={{ backgroundImage: `url(${background})`}}>
        <div className=" flex flex-col mx-auto my-auto items-center border rounded-lg p-8 bg-white" >
                {/* heading hai bhai ye */}
                <div className="relative flex flex-col  items-center">
                    <img src={logo} alt="Logo" className="aspect-square w-20 h-20 pt-2"/>
                    <h2 className="text-sm md:text-xl lg:text-3xl font-bold">
                        Welcome to RGCIRC
                    </h2>
                    <p className="text-stone-500">Please Enter Your Details</p>
                </div>
                <form 
                // action="http://192.168.25.187:8080/login"
                // method="post"
                onSubmit={submitHandler}
                className="flex flex-col w-full gap-y-4">
                    {/* mobile no and password */}
                    <div className="relative flex flex-col  pt-4">
                        <label className="w-full mb-2">
                            <p className="text-[0.875rem] m-1 leading-[1.376rem] text-base">Mobile No<sup className="text-rose-700 text-sm">*</sup></p>

                            <input
                                type="tel"
                                pattern="[0-9]{10}" 
                                inputMode="numeric"
                                required
                                maxLength="10"
                                name="username"
                                placeholder="Enter Mobile Number"
                                value={formData.username}
                                onChange={changeHandler}
                                className="border rounded-[0.5rem] w-full p-[12px]"
                            />


                        </label>
                        
                        <label className="w-full mb-2">
                            <p className="text-[0.875rem] m-1 leading-[1.376rem] text-base">Password<sup className="text-rose-700 text-sm">*</sup></p>
                            <input
                            type={showPassword?("text"):("password")}
                            required
                            name="password"
                            placeholder="Enter Password"
                            value={formData.password}
                            onChange={changeHandler}
                            className="border  rounded-[0.5rem]  w-full p-[12px]"
                            />
                            <span
                            className="md:hidden block absolute right-3 top-[148px] cursor-pointer "
                            onClick={() => setShowPassword((prev)=>!prev)}>
                                {showPassword?(<AiOutlineEyeInvisible fontSize={20}/>):(<AiOutlineEye fontSize={20} />)}                            
                            </span>
                            <span
                            className=" hidden md:block absolute right-3 top-[151px] cursor-pointer "
                            onClick={() => setShowPassword((prev)=>!prev)}>
                                {showPassword?(<AiOutlineEyeInvisible fontSize={20}/>):(<AiOutlineEye fontSize={20} />)}                            
                            </span>
                            {/* <span
                            className=" hidden lg:block absolute right-3 top-[151px] cursor-pointer "
                            onClick={() => setShowPassword((prev)=>!prev)}>
                                {showPassword?(<AiOutlineEyeInvisible fontSize={20}/>):(<AiOutlineEye fontSize={20} />)}                            
                            </span> */}
                        </label>

                            {/* <label  >
                            <p className="text-[0.875rem] m-1 leading-[1.376rem] text-base">Patient<sup className="text-rose-700 text-sm">*</sup></p>
                            <select
                            type="dropdown"
                            onChange={changeHandler}
                            name="patient"
                            value={formData.patient}
                            className="border rounded-[0.5rem]  w-full p-2.5">
                            {Array.isArray(patients) && patients.map(patient => (
                            <option key={patient.patientId} value={patient.patientId}>{patient.name}</option>
                            ))}                           
                            </select>
                            </label>  */}

                    </div>
                        <Link to="/ForgetPassword"
                        className="flex justify-end text-sm  text-blue-800 hover:font-bold"
                        >Forgot Password?</Link>

                    <button 
                    // type="submit" 
                    // onClick={ () => {
                    //     if(!isValid){
                    //         toast.error("enter Correct mobile no.");
                    //         return;
                    //     }else{
                    //         toast.success("Logged In");
                    //         console.log("form submitted",formData);
                    //     }
                    // }} 
                    className="w-full bg-[#03DAC5] hover:bg-teal-500  border rounded-md p-3  text-lg font-bold"
                    >
                        Log In
                    </button>

                    <div className="flex justify-end pb-2 mb-2">
                        <p>
                        Don't have an account?
                        <Link to="/signup" className=" text-blue-800 hover:font-bold mx-1">Sign Up</Link>
                        </p>
                    </div>
                </form>
                
            </div>
        </div>
    )
}

export default Login;