import React from 'react';
import LoginForm from './components/LoginForm';

export default function Login() {
    return (
        <div className='hero bg-base-200 min-h-screen'>
            <div className='hero-content flex-col lg:flex-row-reverse'>
                <div className='text-center lg:text-left'>
                    <h1 className='text-5xl font-bold'>Login now!</h1>
                    <p className='py-6'>
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}
