'use client'
import { useState } from 'react';

export default function ProfilePage() {
    const [newPassword, setNewPassword] = useState('');
    const [oldPassword, setOldPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // TODO: Implement your profile logic here
        console.log('New Password:', newPassword);
        console.log('Old Password:', oldPassword);
    };

    return (
        <div className="flex items-center justify-center h-screen bg-center bg-cover profile-img">
            <div className="bg-teal-50 p-8 rounded-2xl shadow-md w-96">
                <h2 className="text-2xl mb-6 font-bold text-center">Your User Profile</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="newPassword">New Password</label>
                        <input
                            type="password"
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md"
                            autoComplete="newPassword"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="oldPassword"> Old Password</label>
                        <input
                            type="password"
                            id="oldPassword"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md"
                            autoComplete="oldPassword"
                            required
                        />
                    </div>
                    <div className="mb-4 flex flex-col items-center justify-center">
                        <button type="submit" className="w-[full-2rem] bg-teal-500 text-white font-mono py-2 px-6 rounded hover:bg-teal-800 duration-500">Change Password</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
