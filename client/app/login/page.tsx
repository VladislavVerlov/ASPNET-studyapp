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
            <button className='login-btn'>login</button>
            <Link href={'/register'}>
                <div>Go to register</div>
            </Link>
        </div>
    )
}

export default page
