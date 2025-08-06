import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import background from "../images/home-banner-img2.webp"
import toast from "react-hot-toast";

const ForgotPassword = () => {

    const [formData,setFormData] = useState({
        mobile:""
    })
    const navigate = useNavigate()
    const[isValid,setIsValid] = useState(true)

    function handleMobileNumberChange(e){
        const{name,value}=e.target
        setFormData((prev) => {
            return{
                ...prev,
                [name]:value
            }
        })
        if(name === "mobileNumber"){
            setIsValid(/^\d{10}$/.test(value))
        }
    }

    function submitHandler(e){
        e.preventDefault();

        if(!isValid){
            toast.error("please enter the correct the mobile no.");
            return;
        }else{
            toast.success("OTP is send successfully")
            console.log("submitted form :",formData);
            navigate("/otp")
        }
        
    }

    return(
        <div className="flex relative  h-screen bg-no-repeat bg-cover  " style={{ backgroundImage: `url(${background})`}}>
            <div className=" flex flex-col mx-auto my-auto items-center border rounded-lg p-8 bg-white" >
                <svg className="mx-auto mb-3 " xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                <path d="M 25 3 C 18.363281 3 13 8.363281 13 15 L 13 20 L 9 20 C 7.355469 20 6 21.355469 6 23 L 6 47 C 6 48.644531 7.355469 50 9 50 L 41 50 C 42.644531 50 44 48.644531 44 47 L 44 23 C 44 21.355469 42.644531 20 41 20 L 37 20 L 37 15 C 37 8.363281 31.636719 3 25 3 Z M 25 5 C 30.566406 5 35 9.433594 35 15 L 35 20 L 15 20 L 15 15 C 15 9.433594 19.433594 5 25 5 Z M 9 22 L 41 22 C 41.554688 22 42 22.445313 42 23 L 42 47 C 42 47.554688 41.554688 48 41 48 L 9 48 C 8.445313 48 8 47.554688 8 47 L 8 23 C 8 22.445313 8.445313 22 9 22 Z M 25 30 C 23.300781 30 22 31.300781 22 33 C 22 33.898438 22.398438 34.6875 23 35.1875 L 23 38 C 23 39.101563 23.898438 40 25 40 C 26.101563 40 27 39.101563 27 38 L 27 35.1875 C 27.601563 34.6875 28 33.898438 28 33 C 28 31.300781 26.699219 30 25 30 Z"></path>
                </svg>
                    <h3 className="flex flex-col mx-auto mt-8 mb-1 text-2xl"> Forgot Password?</h3>
                <p className="text-stone-500 italic text-sm">Enter your email below to reset your password</p>

                <form onSubmit={submitHandler} >
            <div className=" relative flex flex-col mx-auto mt-6 p-4 pt-4">
                        <label className="w-full mb-2">
                            <p className="text-[0.875rem] m-1 leading-[1.376rem] text-base">Mobile No.<sup className="text-rose-700 text-sm">*</sup></p>
                            <input
                            type="text"
                            required
                            name="mobileNumber"
                            placeholder="Enter your Mobile No."
                            value={formData.mobileNumber}
                            onChange={handleMobileNumberChange}
                            className="border  rounded-[0.5rem]  w-full p-3"
                            />
                        </label>
                        <Link to="/Login"
                        className=" text-sm flex  text-blue-800 hover:font-bold justify-end"
                        >Back to Login</Link>
                        </div>
                        
                        <button 
                    className="w-full bg-[#03DAC5] hover:bg-teal-500 text-[#005457] border rounded-md p-3 hover:bg-sky-600 text-lg font-bold mt-4"
                    >
                        Submit
                    </button>
                </form>

            </div>
        </div>
    )
}

export default ForgotPassword