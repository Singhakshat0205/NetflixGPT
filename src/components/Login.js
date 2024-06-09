import { useState } from "react";
import Header from "./Header";

const Login=()=>{


  const [isSignInForm, setisSignInForm]= useState(true);

    const toggleSigninForm=()=>{
          
      setisSignInForm(!isSignInForm);
    }


    return <div>
     <Header/>
      <div className="absolute ">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
        alt="logo"
      />
      </div>

      <form className="absolute p-12 bg-black bg-opacity-80 w-[500px] h-[600px] mt-40 ml-[550px]  text-white">
        <h1 className="text-white font-bold text-3xl">{
          isSignInForm ? "Sign In" : "Sign Up"
        }</h1>
        {
          !isSignInForm
           && <input type="text" placeholder="Full Name" className="p-2  mt-[55px] w-full bg-gray-800"/>
        }
        <input type="text" placeholder="Email Address" className="p-2  mt-8 w-full  bg-gray-800"/>
       
        <input type="password" placeholder="Password" className="p-2 my-[30px] w-full   bg-gray-800"/>
        <button className="p-2 mt-8 w-full  bg-red-600 rounded-xl">{
          isSignInForm ? "Sign In" : "Sign Up"
        }</button>

        <p className="m-2 mt-12 cursor-pointer" onClick={toggleSigninForm}>{
          isSignInForm ? "New To Netflix? Sign Up Now" : "Already Registered? Sign Im Now"  
        }</p>
      </form>
    </div>
}

export default Login;