'use client'
import {useRef, useState} from 'react';

async function createUser(email, password) {
    const response = await fetch('/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
    }

    return data;
}

export default function LoginPage() {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const [isLogin, setIsLogin] = useState(true);

    function switchAuthHandler() {
        setIsLogin((prevState) => !prevState);
    }

    async function submitHandler(event) {
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        // optional: Add validation

        if (isLogin) {
            // log user in
        } else {
            try {
                const result = await createUser(enteredEmail, enteredPassword);
                console.log(result);
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <div className="flex items-center justify-center h-screen bg-center bg-cover login-img">
            <div className="bg-teal-50 p-8 rounded-2xl shadow-md w-96">
                <h2 className="text-2xl mb-6 font-bold text-center">{isLogin ? 'Login' : 'Sign Up'}</h2>
                <form onSubmit={submitHandler}>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 border rounded-md"
                            required
                            ref={emailInputRef}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full px-3 py-2 border rounded-md"
                            required
                            ref={passwordInputRef}
                        />
                    </div>
                    <div className="mb-4 p-2 flex flex-col items-center justify-center">
                        <button type="button"
                                className="w-[full-2rem] bg-teal-500 text-white font-mono py-2 px-6 rounded hover:bg-teal-800 duration-500">{isLogin ? 'Login' : 'Create account'}
                        </button>
                        <button onClick={switchAuthHandler}
                                className='text-teal-500 w-full m-4 p-2 text-center hover:border hover:border-teal-500'>{isLogin ? 'Create new account' : 'Login with existing account'}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
