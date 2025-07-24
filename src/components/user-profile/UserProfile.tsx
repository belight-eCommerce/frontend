"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";

const genders = ["Male", "Female", "Other"];

const UserProfile: React.FC = () => {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: '',
    dob: '',
    avatar: '/images/user/user-01.jpg',
  });
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: '',
  });
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setProfile({ ...profile, avatar: url });
    }
  };

  return (
    <div className="bg-[#f7f7f7] dark:bg-gray-900 min-h-screen p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-serif mb-8 text-gray-900 dark:text-white">MY PROFILE</h1>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Avatar */}
          <div className="flex flex-col items-center">
            <div className="relative w-32 h-32 mb-4">
              <Image
                src={profile.avatar}
                alt="avatar"
                width={128}
                height={128}
                className="w-32 h-32 rounded-full object-cover border-4 border-[#e5e7eb] dark:border-gray-700"
              />
              <label htmlFor="avatar-upload" className="absolute bottom-2 right-2 bg-blue-900 text-white rounded-full p-2 cursor-pointer shadow">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="4" y="16" width="16" height="4" rx="2" fill="#fff" stroke="#e5e7eb" strokeWidth="2"/></svg>
                <input id="avatar-upload" type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
              </label>
            </div>
          </div>
          {/* Profile Form */}
          <form className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-1 text-gray-900 dark:text-gray-100">First Name</label>
              <input name="firstName" value={profile.firstName} onChange={handleProfileChange} placeholder="Enter Name" className="w-full border border-gray-200 dark:border-gray-700 bg-white text-gray-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
            </div>
            <div>
              <label className="block text-sm mb-1 text-gray-900 dark:text-gray-100">Last Name</label>
              <input name="lastName" value={profile.lastName} onChange={handleProfileChange} placeholder="Enter Name" className="w-full border border-gray-200 dark:border-gray-700 bg-white text-gray-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
            </div>
            <div>
              <label className="block text-sm mb-1 text-gray-900 dark:text-gray-100">Email</label>
              <input name="email" value={profile.email} onChange={handleProfileChange} placeholder="Enter Email" className="w-full border border-gray-200 dark:border-gray-700 bg-white text-gray-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
            </div>
            <div>
              <label className="block text-sm mb-1 text-gray-900 dark:text-gray-100">Phone</label>
              <input name="phone" value={profile.phone} onChange={handleProfileChange} placeholder="Enter Phone" className="w-full border border-gray-200 dark:border-gray-700 bg-white text-gray-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
            </div>
            <div>
              <label className="block text-sm mb-1 text-gray-900 dark:text-gray-100">Gender</label>
              <select name="gender" value={profile.gender} onChange={handleProfileChange} className="w-full border border-gray-200 dark:border-gray-700 bg-white text-gray-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200">
                <option value="">Select</option>
                {genders.map((g) => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1 text-gray-900 dark:text-gray-100">DOB</label>
              <input name="dob" value={profile.dob} onChange={handleProfileChange} placeholder="Enter Phone" className="w-full border border-gray-200 dark:border-gray-700 bg-white text-gray-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
            </div>
            <div className="md:col-span-2 flex justify-end mt-2">
              <button type="button" className="bg-blue-900 text-white px-8 py-2 rounded-full font-semibold">SAVE CHANGES</button>
            </div>
          </form>
        </div>
        <hr className="my-8 border-gray-300 dark:border-gray-700" />
      </div>
      {/* Change Password & Preferences */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Change Password */}
        <div className="flex-1 mb-8 md:mb-0">
          <h2 className="text-xl font-serif mb-4 text-gray-900 dark:text-white">Change Password</h2>
          <form className="flex flex-col gap-4">
            <input name="current" value={passwords.current} onChange={handlePasswordChange} placeholder="Current Password" className="border border-gray-200 dark:border-gray-700 bg-white text-gray-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" type="password" />
            <input name="new" value={passwords.new} onChange={handlePasswordChange} placeholder="New Password" className="border border-gray-200 dark:border-gray-700 bg-white text-gray-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" type="password" />
            <input name="confirm" value={passwords.confirm} onChange={handlePasswordChange} placeholder="Confirm Password" className="border border-gray-200 dark:border-gray-700 bg-white text-gray-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" type="password" />
            <button type="button" className="bg-blue-900 text-white px-8 py-2 rounded-full font-semibold mt-2">Update Password</button>
          </form>
        </div>
        {/* Preferences */}
        <div className="flex-1">
          <h2 className="text-xl font-serif mb-4 text-gray-900 dark:text-white">Preferences</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 rounded-lg px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="text-gray-900 dark:text-white">
                  {/* Moon icon */}
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 0111.21 3a7 7 0 100 18A9 9 0 0021 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span className="text-gray-900 dark:text-white">Dark Mode</span>
              </div>
              <button
                type="button"
                aria-pressed={darkMode}
                onClick={() => setDarkMode((v) => !v)}
                className={`relative w-12 h-7 rounded-full transition-colors duration-200 focus:outline-none ${darkMode ? 'bg-blue-900' : 'bg-gray-300'} ${!darkMode ? 'bg-blue-900' : ''}`}
                style={{ backgroundColor: !darkMode ? '#1e3a8a' : undefined }}
              >
                <span
                  className={`absolute left-1 top-1 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${darkMode ? 'translate-x-5' : ''}`}
                />
              </button>
            </div>
            <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 rounded-lg px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="bg-blue-100 dark:bg-blue-900 text-gray-900 dark:text-white rounded-full p-2">
                  {/* Email icon */}
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M4 4h16v16H4V4zm2 4l6 4 6-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2"/></svg>
                </span>
                <span className="text-gray-900 dark:text-white">Subscribe to Newsletter</span>
              </div>
              <button type="button" className={`font-semibold underline text-sm rounded px-2 py-1 text-blue-900`}>
                Manage
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile; 