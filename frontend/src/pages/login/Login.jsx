import React, { useState } from 'react'
import useLogin from '../../hooks/useLogin';

const Login = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const {loading, login} = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username,password);
    }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-pink-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-white'>
                Login
            </h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-white'>Username</span>
                    </label>
                    <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10 bg-pink-300 text-white placeholder:text-white'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label className='label'>
                        <span className='text-base label-text text-white'>Password</span>
                    </label>
                    <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10 bg-pink-300 text-white placeholder:text-white' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <a href="/signup" className='text-sm hover:underline hover:text-pink-400 mt-2 inline-block text-white'>
                    Create an account
                </a>
                <div>
                    <button className='btn btn-block btn-sm mt-2 bg-pink-600 text-white border-pink-600'>
                        Login
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login
