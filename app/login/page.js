'use client'
import {useState} from 'react';
import {useRouter} from "next/navigation";


export default function LoginPage() {
    const [isLogin, setIsLogin] = useState(true);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [email, setEmail] = useState('');
// eslint-disable-next-line react-hooks/rules-of-hooks
    const [password, setPassword] = useState('');

// eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert('Email and password are required.');
            return;
        }
        if (!isLogin) {
            try {
                const res = await fetch('https://app1-milleba.vercel.app/login', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({email, password}),
                });

                if (res.ok) {
                    router.refresh();
                    router.push('/profile');
                } else {
                    throw new Error('Failed to create the user');
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    function switchAuthHandler() {
        setIsLogin((prevState) => !prevState);
    }

    return (
        <div className="flex items-center justify-center h-screen bg-center bg-cover login-img">
            <div className="bg-teal-50 p-8 rounded-2xl shadow-md w-96">
                <h2 className="text-2xl mb-6 font-bold text-center">{isLogin ? 'Login' : 'Sign Up'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 border rounded-md"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full px-3 py-2 border rounded-md"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
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