import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import background from "../images/home-banner-img2.webp"
import toast from "react-hot-toast";

const Otp = ({userExists}) => {

// console.log(userExists)

    
    const [formData,setFormData] = useState({
        otp:""
    })
    const navigate = useNavigate ();
    const [isValid,setIsValid] = useState(true)


function changeHandler(e) {
    const{name,value}=e.target
        setFormData((prev) => {
            return{
                ...prev,
                [name]:value
            }
        })

    if(name === "otp"){
            setIsValid(/^\d{6}$/.test(value));
        }
}



function submitHandler(e){
    e.preventDefault();
    // if(formData.value!==""){
    //     toast.success("verification compeleted")
    //     navigate("/password");
    // }
    if (!isValid) {
            toast.error("Enter Correct OTP");
            return;
        } else {
            toast.success("verification compeleted");
            if (userExists) {
                navigate("/");
            } else {
                navigate("/Password");
            }
            console.log("form submitted", formData);
        }
}

const clickHandler = () => {
    navigate(-1); 
};


    return(
        <div className="flex relative h-screen w-screen bg-cover overscroll-y-contain justify-center bg-center" style={{ backgroundImage: `url(${background})`}}>
            <div className="md:w-4/6 lg:w-1/4 flex bg-white my-auto flex-col justify-center items-center border m-2 rounded-md p-2">
                <div className="flex flex-col mb-4 pb-6">
                {/* image or bakwas */}
                <div onClick={clickHandler} className="bg-gray-100 rounded-full w-1/2 p-3 flex justify-center mx-auto my-5">
                    <img
                    width="78"
                    height="78"
                    src="https://img.icons8.com/external-beshi-color-kerismaker/48/external-Verification-office-beshi-color-kerismaker.png"
                    alt="external-Verification-office-beshi-color-kerismaker"
                    />
                </div>
                

                <h2 className=" mx-auto text-2xl p-3">Verification</h2>
                <p className="text-stone-500 italic text-sm">You will get a OTP via SMS</p>
                </div>

                {/* input field and button */}
                <div className="flex flex-col mx-auto justify-center w-1/2 mt-4 pt-2">
                    <form onSubmit={submitHandler} className="flex flex-col mx-auto justify-center">
                        <input
                        type="text" // Set type to "text"
                        inputMode="numeric" // Set input mode to "numeric"
                        pattern="[0-9]*" // Set pattern to allow only numeric input
                        required
                        name="otp"
                        placeholder="Enter OTP"
                        value={formData.otp}
                        onChange={changeHandler}
                        onKeyDown={(e) => {
                        const isValidKey = /^\d+$/.test(e.key) || e.key === 'Backspace';
                        if (!isValidKey) {
                        e.preventDefault();
                            }
                        }}
                        className="border  rounded-[0.5rem]  w-full p-[12px] mb-2"
                        />

                        <button className="w-full bg-[#03DAC5] hover:bg-teal-500 text-[#005457] border rounded-md p-3  text-lg font-bold my-4">
                        Verify
                        </button>

                        
                    </form>
                </div>
                <p>Didn't receive the verification OTP?
                    <Link className=" text-blue-800 hover:font-bold mx-1">Resend again</Link>
                </p>
            </div>
        </div>
    )
}

export default Otp;