import React, { useState } from 'react';
import GenderCheckbox from './GenderCheckbox';
import useSignup from '../../hooks/useSignup.js';

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '', // ConfirmPassword-t kell használni
        gender: ''
    });

    const { loading, signup } = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs({
            ...inputs, gender
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(inputs); // Ellenőrizzük az inputok értékeit
        await signup(inputs); // Megfelelő változónév
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-white'>
                    SignUp
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-white'>Full name</span>
                        </label>
                        <input type="text" placeholder='Enter full name' className='w-full input input-bordered h-10 bg-pink-300 text-white placeholder:text-white'
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-white'>Username</span>
                        </label>
                        <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10 bg-pink-300 text-white placeholder:text-white'
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
                    </div>
                    <div>
                        <label className='label'>
                            <span className='text-base label-text text-white'>Password</span>
                        </label>
                        <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10 bg-pink-300 text-white placeholder:text-white'
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
                    </div>
                    <div>
                        <label className='label'>
                            <span className='text-base label-text text-white'>Password again</span>
                        </label>
                        <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10 bg-pink-300 text-white placeholder:text-white'
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} />
                    </div>

                    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} className="border-pink-300" />

                    <a href="/login" className='text-sm hover:underline hover:text-pink-400 mt-2 inline-block text-white'>
                        Already have an account?
                    </a>
                    <div>
                        <button className='btn btn-block btn-sm mt-2 bg-pink-600 text-white border-pink-600' type="submit">
                            {loading ? 'Signing up...' : 'SignUp'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;
