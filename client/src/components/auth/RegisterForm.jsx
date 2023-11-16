"use client"

import React from 'react'
import Link from 'next/link'
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from 'next/navigation';

const RegisterForm = () => {   
    
    const SignUpSchema = Yup.object().shape({
        fullName: Yup.string().required('Full name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required'),        
        confirmPassword: Yup.string().required('Confirm Password is required'),        
    });

    const defaultValues = {
        fullName: "",        
        email: "",
        password: "",
        confirmPassword: "",
    };

    const methods = useForm({
        resolver: yupResolver(SignUpSchema),
        defaultValues
    });

    const {
        register,
        reset,
        setError,
        handleSubmit,
        formState: { errors },
    } = methods;

    const router = useRouter();

    const onSubmit = async (data) => {
        try {
            console.log(data)

            router.push("/auth/login")
        } catch (error) {  
            reset();
            setError("afterSubmit", {
                ...error,
                message: error.message,
            });
        }
    };

    

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="">
                <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-slate-300">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        {...register("fullName")}                        
                        className="w-full px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500"
                        autoComplete="name"
                        placeholder='Enter your name'
                    />      
                    <p className='text-red-500'>{errors.fullName?.message}</p>             
                </div>
                
                <div className='mt-4'>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"  
                        {...register("email")}                      
                        className="w-full px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500"
                        autoComplete="email"
                        placeholder='Enter your email'
                    />                
                    <p className='text-red-500'>{errors.email?.message}</p>    
                </div>
                <div className='mt-4'>
                    <label htmlFor="password" className="block text-sm font-medium text-slate-300">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        {...register("password")}
                        placeholder='Enter your password'                        
                        className="w-full px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500"
                        autoComplete="off"
                    />
                    <p className='text-red-500'>{errors.password?.message}</p>
                    
                </div>
                <div className='mt-4'>
                    <label htmlFor="confirm-password" className="block text-sm font-medium text-slate-300">
                        Confirm Password
                    </label>
                    <input
                        type="text"
                        id="confirm-password" 
                        {...register("confirmPassword")}                       
                        className="w-full px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500"
                        autoComplete="off"
                        placeholder='Confirm password'
                    />
                    <p className='text-red-500'>{errors.confirmPassword?.message}</p>
                    
                </div>                
                
            </div>
            <p className="mx-auto mt-2 text-slate-300">
                Already have an account?
                <Link href="/auth/login" className="text-blue-500 hover:text-blue-800 ml-1">
                    Login
                </Link>
            </p>
            <div className="mt-4">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none"
                >
                    Sign Up
                </button>
            </div>
        </form>
    )
}

export default RegisterForm
