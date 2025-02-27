'use client';
import React from 'react';
import {signIn} from 'next-auth/react';
import {useRouter} from 'next/navigation';
function LoginForm() {
    const router = useRouter('/');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const response = await signIn('credentials', {
                email,
                password,
                callbackUrl: '/',
                redirect: false,
            });
            if (response.ok) {
                router.push('/');
                form.reset();
            }
        } catch (error) {
            alert('Invalid Authentication');
        }
    };
    return (
        <form onSubmit={handleSubmit} className='card-body'>
            <div className='form-control'>
                <label className='label'>
                    <span className='label-text'>Email</span>
                </label>
                <input
                    type='email'
                    placeholder='email'
                    name='email'
                    className='input input-bordered'
                    required
                />
            </div>
            <div className='form-control'>
                <label className='label'>
                    <span className='label-text'>Password</span>
                </label>
                <input
                    type='password'
                    placeholder='password'
                    name='password'
                    className='input input-bordered'
                    required
                />
                <label className='label'>
                    <a href='#' className='label-text-alt link link-hover'>
                        Forgot password?
                    </a>
                </label>
            </div>
            <div className='form-control mt-6'>
                <button className='btn btn-primary'>Login</button>
            </div>
        </form>
    );
}

export default LoginForm;
