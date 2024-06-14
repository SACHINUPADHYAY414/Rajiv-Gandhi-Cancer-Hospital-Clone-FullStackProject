import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import background from "../images/home-banner-img2.webp"


const Deactivate = ( ) => {
    const [formData,setFormData] = useState({
        deactive:""
    })
    const navigate = useNavigate()


    function changeHandler(e){
   const { value } = e.target;
    setFormData({deactive:value}); 
}
    function submitHandler(e){
        e.preventDefault()
        if( formData.deactive === "DEACTIVATE"){
            toast.success("Account Deactived Successfully")
            navigate("/")
        }else{
            toast.error("Please type DEACTIVATE")
        }
        
    }
    
    return(
        <div className="flex relative h-screen w-screen bg-cover overscroll-y-contain justify-center bg-center rounded-md" style={{ backgroundImage: `url(${background})`}}>
            <div className="md:w-4/6 lg:w-2/6 flex bg-white my-auto flex-col justify-center items-center border m-3 rounded-md p-4">
                <h3 className="flex flex-col mx-auto mt-2 mb-3 text-2xl">
                    Deactivate Account
                </h3>
                <p className="text-[0.875rem] my-4 mx-auto leading-[1.376rem] text-base">
                    Your account will be disabled and you will not be able to login again
                </p>
                <p className="text-[0.875rem] text-stone-500 mt-3 mb-1 leading-[1.376rem] text-base">
                    To confirm this, type "DEACTIVATE"
                </p> 
                <form onSubmit={submitHandler}>
                    <input
                        required
                        type="text"
                        name="deactive"
                        onChange={changeHandler}
                        placeholder="Confirm deactivation"
                        value={formData.deactive}
                        className="border rounded-[0.5rem]  w-full p-[12px] mb-3" 
                        />
                        <button className="w-full bg-[#03DAC5] hover:bg-teal-500 text-[#005457] border rounded-md p-3  text-lg font-bold my-4">
                            Confirm Deactivation
                        </button>
                </form>
            </div>
        </div>
    )
}

export default Deactivate;