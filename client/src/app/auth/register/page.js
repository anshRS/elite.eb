import RegisterForm from '@/components/auth/RegisterForm';
import React from 'react';

const Register = () => {
    return (
        <div className="w-full lg:w-[500px] p-10 m-8 md:w-1/2 font-raleway" >
            <h2 className="text-4xl text-white font-semibold mb-4">Create New Account</h2>

            <RegisterForm />
        </div>

    );
};

export default Register;
