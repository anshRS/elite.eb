import React from 'react'

const AuthLayout = ({children}) => {
    return (
        <div className="h-screen w-full flex items-center bg-auth-img font-raleway" style={{backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition:'center'}}>
            {children}
        </div>
    )
}

export default AuthLayout
