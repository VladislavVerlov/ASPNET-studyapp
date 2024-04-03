import React from 'react'
import './page.scss'
import Link from 'next/link'
const page = () => {
    return (
        <div className="login-container">
            <input type="text" className="login-input" placeholder="login" />
            <input
                type="password"
                className="login-input"
                placeholder="password"
            />
            <input
                type="password"
                className="login-input"
                placeholder="repeat password"
            />
             <button className='login-btn'>register</button>
            <Link href={'/login'}>
                <div>Go to login</div>
            </Link>
        </div>
    )
}

export default page
