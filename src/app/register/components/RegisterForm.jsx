'use client';
import {registerUser} from '@/app/actions/auth/registerUser';
import React from 'react';

export default function RegisterForm() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        await registerUser({name, email, password});
    };
    return (
        <div>
            <form onSubmit={handleSubmit} className='card-body'>
                <div className='form-control'>
                    <label className='label'>
                        <span className='label-text'>Name</span>
                    </label>
                    <input
                        type='text'
                        placeholder='name'
                        className='input input-bordered'
                        required
                        name='name'
                    />
                </div>
                <div className='form-control'>
                    <label className='label'>
                        <span className='label-text'>Email</span>
                    </label>
                    <input
                        type='email'
                        placeholder='email'
                        className='input input-bordered'
                        required
                        name='email'
                    />
                </div>
                <div className='form-control'>
                    <label className='label'>
                        <span className='label-text'>Password</span>
                    </label>
                    <input
                        type='password'
                        placeholder='password'
                        className='input input-bordered'
                        required
                        name='password'
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
        </div>
    );
}
