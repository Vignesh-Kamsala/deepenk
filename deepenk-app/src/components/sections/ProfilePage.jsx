import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoChevronForward, IoChevronDown } from 'react-icons/io5';
import { BsPerson, BsGeoAlt, BsGift, BsGear, BsQuestionCircle, BsInfoCircle } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';
import profileImg from '../../assets/profile-dog.png';

const ProfilePage = () => {
    const navigate = useNavigate();
    const [expandedSection, setExpandedSection] = useState(null);
    const [selectedPriority, setSelectedPriority] = useState('price');

    const menuItems = [
        { icon: BsPerson, label: 'Personal Information', path: '/profile/personal' },
        { icon: BsGeoAlt, label: 'Saved Addresses', path: '/profile/addresses' },
        { icon: BsGift, label: 'Rewards & Offers', path: '/profile/rewards' },
        { icon: BsGear, label: 'Settings', path: '/profile/settings' },
        { icon: BsQuestionCircle, label: 'Help', path: '/profile/help' },
        { icon: BsInfoCircle, label: 'About', path: '/profile/about' },
    ];

    const priorities = [
        { id: 'price', label: 'Price' },
        { id: 'speed', label: 'Speed' },
        { id: 'reliability', label: 'Reliability' }
    ];

    const handleMenuClick = (path) => {
        console.log('Navigate to:', path);
    };

    const handleLogout = () => {
        navigate('/');
    };

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    return (
        <div className="min-h-screen bg-white pt-16 lg:pt-0">
            <div className="lg:flex">
                {/* Left Sidebar - Profile Menu (Desktop) */}
                <div className="lg:w-64 lg:border-r lg:border-gray-200 lg:min-h-screen lg:p-6 px-4 pt-6">
                    {/* Profile Info */}
                    <div className="flex items-center gap-3 mb-6">
                        <img
                            src={profileImg}
                            alt="Profile"
                            className="w-12 h-12 lg:w-14 lg:h-14 rounded-full object-cover border-2 border-gray-200"
                        />
                        <div>
                            <h2 className="font-bold text-gray-900">Vivek kiit</h2>
                            <p className="text-xs text-gray-500">@ivekkishore7206</p>
                        </div>
                    </div>

                    {/* Menu Items */}
                    <div className="space-y-1">
                        {menuItems.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <button
                                    key={index}
                                    onClick={() => handleMenuClick(item.path)}
                                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-gray-100 transition-colors"
                                >
                                    <div className="flex items-center gap-3">
                                        <Icon className="text-lg text-gray-600" />
                                        <span className="text-sm text-gray-700">{item.label}</span>
                                    </div>
                                    <IoChevronForward className="text-gray-400 text-sm" />
                                </button>
                            );
                        })}
                    </div>

                    {/* Logout */}
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-3 py-2.5 mt-4 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    >
                        <BiLogOut className="text-lg rotate-180" />
                        <span className="text-sm font-medium">Logout</span>
                    </button>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-4 lg:p-8">
                    <div className="max-w-3xl mx-auto">
                        {/* Main Settings Area */}
                        <div className="lg:flex gap-8">
                            {/* Left Column - Expandable Sections */}
                            <div className="flex-1 space-y-4 mb-6 lg:mb-0">
                                {/* Domain Priorities */}
                                <div className="border border-gray-200 rounded-xl overflow-hidden">
                                    <button
                                        onClick={() => toggleSection('domain')}
                                        className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-gray-50 transition-colors"
                                    >
                                        <span className="font-medium text-gray-900">Domain priorities</span>
                                        {expandedSection === 'domain' ? (
                                            <IoChevronDown className="text-gray-500" />
                                        ) : (
                                            <IoChevronForward className="text-gray-500" />
                                        )}
                                    </button>
                                    {expandedSection === 'domain' && (
                                        <div className="px-5 py-4 border-t border-gray-100 bg-gray-50">
                                            <p className="text-sm text-gray-600 mb-3">Select what matters most to you:</p>
                                            <div className="space-y-2">
                                                {priorities.map((p) => (
                                                    <label key={p.id} className="flex items-center gap-3 cursor-pointer">
                                                        <input
                                                            type="radio"
                                                            name="priority"
                                                            checked={selectedPriority === p.id}
                                                            onChange={() => setSelectedPriority(p.id)}
                                                            className="w-4 h-4 text-orange-500"
                                                        />
                                                        <span className="text-sm text-gray-700">{p.label}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Saved Address Name */}
                                <div className="border border-gray-200 rounded-xl overflow-hidden">
                                    <button
                                        onClick={() => toggleSection('address')}
                                        className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-gray-50 transition-colors"
                                    >
                                        <span className="font-medium text-gray-900">Saved Address Name</span>
                                        {expandedSection === 'address' ? (
                                            <IoChevronDown className="text-gray-500" />
                                        ) : (
                                            <IoChevronForward className="text-gray-500" />
                                        )}
                                    </button>
                                    {expandedSection === 'address' && (
                                        <div className="px-5 py-4 border-t border-gray-100 bg-gray-50">
                                            <div className="space-y-3">
                                                <div className="p-3 bg-white rounded-lg border border-gray-200">
                                                    <p className="text-sm font-medium text-gray-900">Home</p>
                                                    <p className="text-xs text-gray-500">123 Main Street, City</p>
                                                </div>
                                                <div className="p-3 bg-white rounded-lg border border-gray-200">
                                                    <p className="text-sm font-medium text-gray-900">Work</p>
                                                    <p className="text-xs text-gray-500">456 Office Park, Business District</p>
                                                </div>
                                                <button className="text-sm text-orange-500 font-medium">+ Add New Address</button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Right Column - Frame Selector (Desktop only) */}
                            <div className="hidden lg:block w-48">
                                <div className="border border-gray-200 rounded-xl p-4">
                                    <p className="text-sm text-gray-500 mb-3">Frame...</p>
                                    <div className="space-y-2">
                                        {priorities.map((p) => (
                                            <button
                                                key={p.id}
                                                onClick={() => setSelectedPriority(p.id)}
                                                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${selectedPriority === p.id
                                                        ? 'bg-orange-50 text-orange-600 font-medium'
                                                        : 'text-gray-600 hover:bg-gray-50'
                                                    }`}
                                            >
                                                {p.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Settings - Desktop */}
            <div className="hidden lg:block border-t border-gray-200 bg-gray-50 mt-8">
                <div className="max-w-5xl mx-auto px-8 py-6">
                    <div className="grid grid-cols-4 gap-8 text-sm">
                        {/* Help Section */}
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Help</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Feedback</li>
                                <li>• Support</li>
                                <li>• About / Version</li>
                            </ul>
                        </div>

                        {/* Profile Settings */}
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Profile (name, email)</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li>Language</li>
                                <li>Timezone</li>
                                <li className="font-medium text-gray-900">SETTINGS</li>
                            </ul>
                        </div>

                        {/* Saved Address */}
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Saved Address Name</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Home / Work / Other</li>
                            </ul>
                        </div>

                        {/* Full Address */}
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Full Address</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Street / Area</li>
                                <li>• City</li>
                                <li>• State</li>
                                <li>• PIN code</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
