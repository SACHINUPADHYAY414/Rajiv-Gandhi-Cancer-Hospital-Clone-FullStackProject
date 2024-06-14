import React, { useState } from "react";
import{ AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import background from "../images/home-banner-img2.webp"
import toast from "react-hot-toast";
import axios from "axios";

const Password = ({username}) => {
    const[formData,setFormData] = useState({
        newPassword:"",
        password:"",
    })

const navigate = useNavigate();
const [showPassword,setShowPassword] = useState(false)
const[showConfirmPassword,setShowConfirmPassword] = useState(false)
const[matchPassword,setMatchPassword] = useState(true)

function changeHandler(e){
    const{name,value}=e.target;
    setFormData((prev) =>{
        return {
            ...prev,
            [name]:value
        }
    })
}

function submitHandler(e) {
    e.preventDefault();

    const password = formData.password;
    
    let data = {password, username}

     axios.post("http://localhost:8080/updateUserPassword", data)
        .then(response => {
            // const token = response.data.token;
            // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            console.log(response);
            e.target.reset();
            })
            .catch(err => {
            console.log("error due to ", err);
            toast.error("Error Occured");
        });

    // Password validation regex
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,30}$/;

    // Check if the password matches the validation rules
    if (!passwordRegex.test(formData.newPassword)) {
        toast.error("Password must contain at least 8 characters, including one capital letter, one small letter, one special character, and one digit.");
        return;
    }

    // Check if the passwords match
    if (formData.newPassword !== formData.password) {
        setMatchPassword(false);
        toast.error("Passwords don't match.");
        return;
    }

    // If all validations pass, show success message and navigate
    toast.success("Password Updated successfully");
    console.log(username)
    console.log(matchPassword)
    console.log(formData.password)
    navigate("/");
}

    return(
        <div className="flex relative  h-screen bg-no-repeat bg-cover  " style={{ backgroundImage: `url(${background})`}}>

            <div className="flex  my-auto bg-white border rounded-lg p-2 mx-auto ">
                 {/* left secttion */}
            <div className=" hidden md:block  lg:block flex flex-col border-r-2  my-auto">
                <svg className="m-8 mx-auto"  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                    <path fill="#c48c00" d="M44,37H4v5c0,1.105,0.895,2,2,2h36c1.105,0,2-0.895,2-2V37z"></path><linearGradient id="8JlNN7~DhIfxTGryz9eG6a_KrsKks5Gg6Uz_gr1" x1="24" x2="24" y1="15.647" y2="-.296" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#92a3b0"></stop><stop offset=".015" stop-color="#a3b5c4"></stop><stop offset=".032" stop-color="#aec2d1"></stop><stop offset=".046" stop-color="#b2c6d6"></stop></linearGradient><path fill="url(#8JlNN7~DhIfxTGryz9eG6a_KrsKks5Gg6Uz_gr1)" d="M11,13v3h4v-3c0-4.971,4.029-9,9-9h0c4.971,0,9,4.029,9,9v3h4v-3c0-7.18-5.82-13-13-13h0	C16.82,0,11,5.82,11,13z"></path><path fill="#fad500" d="M44,23H4v-5c0-1.105,0.895-2,2-2h36c1.105,0,2,0.895,2,2V23z"></path><rect width="40" height="7" x="4" y="23" fill="#edbe00"></rect><rect width="40" height="7" x="4" y="30" fill="#e3a600"></rect><circle cx="36" cy="30" r="2" fill="#3b3b3b"></circle><circle cx="28" cy="30" r="2" fill="#3b3b3b"></circle><circle cx="20" cy="30" r="2" fill="#3b3b3b"></circle><circle cx="12" cy="30" r="2" fill="#3b3b3b"></circle>
                    </svg>

                    <p className="text-stone-500 italic mb-4 text-xl px-3">
                        create a strong password
                    </p>
            </div>

            {/* right section */}
            <div className="relative flex  flex-col mx-auto p-4">
                <h2 className="flex flex-col mx-auto mt-8 mb-1 text-2xl font-bold">Create Password</h2>
                <form onSubmit={submitHandler}>
                    <div className="relative m-3 p-3">
                        <label className="">
                            <p className="text-[0.875rem] m-1 leading-[1.376rem] text-base">New Password<sup className="text-rose-700 text-sm">*</sup></p>
                            <input
                            type={showPassword?("text"):("password")}
                            required
                            name="newPassword"
                            placeholder="New Password"
                            value={formData.newPassword}
                            onChange={changeHandler}
                            className="border  rounded-[0.5rem]  w-full p-3 mb-3"
                            />
                            <span
                                className="absolute  right-5 top-14"
                                onClick={() => setShowPassword((prev) => !prev)}>
                                { showPassword ? (<AiOutlineEyeInvisible fontSize={20} fill=""/>):
                                (<AiOutlineEye fontSize={20} fill=""/>)}
                            </span>
                        </label>

                        <label >
                            <p className="text-[0.875rem] m-1 leading-[1.376rem] text-base">Confirm Password<sup className="text-rose-700 text-sm">*</sup></p>
                            <input
                            type={showConfirmPassword?("text"):("password")}
                            required
                            name="password"
                            placeholder="password"
                            value={formData.password}
                            onChange={changeHandler}
                            className="border  rounded-[0.5rem]  w-full p-3"

                            />
                            <span 
                            className=" absolute right-5 bottom-7"
                            onClick={() => setShowConfirmPassword((prev) => !prev)}>
                            { showConfirmPassword?(<AiOutlineEyeInvisible fontSize={20} fill=""/>):(<AiOutlineEye fontSize={20} fill=""/>)}
                            </span>
                            </label>

                            
                            
                    </div>
                    <button
                    className="w-full bg-[#03DAC5] hover:bg-teal-500 text-[#005457] border rounded-md p-3 hover:bg-sky-600 text-lg font-bold mt-4"
                    >
                        Update my password
                    </button>
                </form>

            </div>
            </div>
           
        </div>
    )
}

export default Password;