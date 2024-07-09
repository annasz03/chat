import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-white'>
                SignUp
                <span className='text-black'>Chat</span>
            </h1>

            <form>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-white'>Full name</span>
                    </label>
                    <input type="text" placeholder='Enter full name' className='w-full input input-bordered h-10' />
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-white'>Username</span>
                    </label>
                    <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10' />
                </div>
                <div>
                    <label className='label'>
                        <span className='text-base label-text text-white'>Password</span>
                    </label>
                    <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10' />
                </div>
                <div>
                    <label className='label'>
                        <span className='text-base label-text text-white'>Password again</span>
                    </label>
                    <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10' />
                </div>

                <GenderCheckbox />

                <a href="#" className='text-sm hover:underline hover:text-black mt-2 inline-block text-white'>
                    Already have an account?
                </a>
                <div>
                    <button className='btn btn-block btn-sm mt-2 text-white'>
                        SignUp
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp