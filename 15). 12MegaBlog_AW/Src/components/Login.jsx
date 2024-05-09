import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {login as authLogin} from '../store/authSlice'
import {Button,Input,Logo} from "./index"
import { useDispatch } from "react-redux"
import authService from "../appwrite/auth"
import {useForm} from "react-hook-form"


function Login() {

    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {register,handleSubmit}=useForm()
    const [error,setError]=useState("")

    //method banaye h login name se
    //login form bana rahe hai.. jitna bhi login form banaoge isitarah se banana h
    const login=async(data)=>{
        setError("")
        //set karke dekhte hai sara data kiactually me wo data jata bhi hai ya nahi islia try catch session use karke dekhte hai
        try{
            const session = await authService.login(data)
             //session h user logeedin h agar session nahi h user loggedin nahi hai to check karna padega
             if(session){
                //userdata nikalte hai
                const userData=await authService.getCurrentUser()
                //agar hamare pass userdata aya h to dispatch karna padega
                if(userData) dispatch(authLogin(userData)) //authLogin kyuki dispatch jo store se leke aye h
                //yha user aa chuka hai usko yaha rakhna kyu h kahi or bhejte hai to iske lia navigate kardo usko
                navigate("/")
             }

        } catch(error){
            setError(error.message)
        }
    }
  return (
    <div
    className='flex items-center justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
        >
            <div className="mb-2 flex justify-center">
                <span className="inline-block w-full max-w-[100px]">
                    <Logo width="100%"/>
                </span>
            </div>
            <h2 className="text-center text-2xl font-bold loading-tight">Sign in to your account</h2>
            <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        //want to display error
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        //form bnate h
        <form onSubmit={handleSubmit(login)} className='mt-8'> //handleSubmit is event
            <div className='space-y-5'>
                //input bnte h input component wala jo hmne lia wo h
                <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                {...register("email", { //agar ... nhi likhoge toh kisi or input me bhi agr ap register use karte ho to uski value overwrite ho jyegihar bar spread krna pdega isko y compulsory h 100% h
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||   //y h regexp, comuty pattern pe jke search kare jiska cchahiye yha hmne email ka lia h kyyuki email ka chhiye tha
                        "Email address must be a valid address",
                    }
                })}
                />
                <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                    required: true,
                })}
                />
                <Button
                type="submit"
                className="w-full"
                >Sign in</Button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login
