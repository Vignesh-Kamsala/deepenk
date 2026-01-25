import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack, IoChevronForward } from 'react-icons/io5';
import { BsPerson, BsGeoAlt, BsClock, BsGift, BsGear, BsInfoCircle } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';
import profileImg from '../../assets/profile-dog.png';

const ProfilePage = () => {
    const navigate = useNavigate();

    const menuItems = [
        { icon: BsPerson, label: 'Personal Information', path: '/profile/personal' },
        { icon: BsGeoAlt, label: 'Saved Addresses', path: '/profile/addresses' },
        { icon: BsClock, label: 'Booking History', path: '/profile/history' },
        { icon: BsGift, label: 'Rewards & Offers', path: '/profile/rewards' },
        { icon: BsGear, label: 'Settings', path: '/profile/settings' },
        { icon: BsInfoCircle, label: 'About', path: '/profile/about' },
    ];

    const handleMenuClick = (path) => {
        console.log('Navigate to:', path);
        // TODO: Implement navigation when pages are ready
    };

    const handleLogout = () => {
        console.log('Logout clicked');
        // TODO: Implement logout functionality
        navigate('/');
    };

    return (
        <div className="w-full flex flex-col items-center justify-start px-4 pt-6 pb-8 min-h-[calc(100vh-4rem)]">
            {/* Header */}
            <div className="w-full max-w-md flex items-center justify-center mb-6 relative">
                <button
                    onClick={() => navigate(-1)}
                    className="absolute left-0 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                    <IoArrowBack className="text-xl" />
                </button>
                <h1 className="text-2xl font-semibold">Profile</h1>
            </div>

            {/* Profile Image */}
            <div className="mb-4">
                <img
                    src={profileImg}
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                />
            </div>

            {/* User Info */}
            <div className="text-center mb-2">
                <h2 className="text-2xl font-bold mb-1">Gnana iit</h2>
                <p className="text-gray-600 text-sm">Gnanaiit123@gmail.com</p>
            </div>

            {/* Edit Profile Button */}
            <button className="px-6 py-2 bg-gray-200 text-black rounded-full hover:bg-gray-300 transition-colors text-sm font-medium mb-6">
                Edit profile
            </button>

            {/* My Deepenk Section */}
            <div className="w-full max-w-md">
                <h3 className="text-lg font-semibold mb-3">My Deepenk</h3>

                {/* Menu Items */}
                <div className="space-y-3 mb-6">
                    {menuItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <button
                                key={index}
                                onClick={() => handleMenuClick(item.path)}
                                className="w-full flex items-center justify-between px-5 py-4 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <Icon className="text-xl text-gray-700" />
                                    <span className="text-sm font-medium">{item.label}</span>
                                </div>
                                <IoChevronForward className="text-gray-400" />
                            </button>
                        );
                    })}
                </div>

                {/* Logout Button */}
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-2 px-5 py-4 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors font-medium"
                >
                    <BiLogOut className="text-xl rotate-180" />
                    <span>Logout</span>
                </button>
            </div>
        </div>
    );
};

export default ProfilePage;
