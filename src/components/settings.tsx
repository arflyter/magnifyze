'use client';
import React, { useState } from 'react';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';

const AccountSettings: React.FC = () => {
    const [is2FAEnabled, setIs2FAEnabled] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [notifications, setNotifications] = useState({
        orderExecuted: true,
        orderClosed: true,
    });

    const handleToggle2FA = () => setIs2FAEnabled(!is2FAEnabled);
    const handleThemeToggle = () => setIsDarkTheme(!isDarkTheme);

    const handleNotificationChange = (notification: keyof typeof notifications) => {
        setNotifications({ ...notifications, [notification]: !notifications[notification] });
    };

    return (
        <Container className="py-8">
            <h1 className="text-2xl font-bold text-center mb-6">Account Settings</h1>

            <div className="space-y-8">
                {/* Subscription Plan */}
                <div className="bg-white shadow rounded-lg p-6 flex justify-between items-center">
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Subscription Plan</h2>
                        <p>Current Plan: <strong>Demo</strong></p>
                    </div>
                    <div className="text-right">
                        <h3 className="text-lg font-medium">Pro Plan</h3>
                        <p className="text-gray-500">$15</p>
                        <Button className="mt-2">Upgrade to Pro</Button>
                    </div>
                </div>

                {/* Change Password */}
                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Change Password</h2>
                    <Button>Change Password</Button>
                </div>

                {/* Connect Telegram Bot */}
                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Connect Telegram Bot</h2>
                    <Button>Connect Telegram</Button>
                </div>

                {/* Affiliate Program */}
                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Affiliate Program</h2>
                    <Button>Join Affiliate Program</Button>
                </div>

                {/* Enable/Disable 2FA */}
                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Two-Factor Authentication (2FA)</h2>
                    <div className="flex items-center">
                        <span className="mr-4">{is2FAEnabled ? 'Disable' : 'Enable'} 2FA</span>
                        <button
                            onClick={handleToggle2FA}
                            className={`relative inline-flex items-center h-6 rounded-full w-11 ${is2FAEnabled ? 'bg-blue-600' : 'bg-gray-200'}`}
                        >
                            <span
                                className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${is2FAEnabled ? 'translate-x-6' : 'translate-x-1'}`}
                            />
                        </button>
                    </div>
                </div>

                {/* Light/Dark Theme */}
                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Interface Theme</h2>
                    <div className="flex items-center">
                        <span className="mr-4">{isDarkTheme ? 'Dark' : 'Light'} Theme</span>
                        <button
                            onClick={handleThemeToggle}
                            className={`relative inline-flex items-center h-6 rounded-full w-11 ${isDarkTheme ? 'bg-blue-600' : 'bg-gray-200'}`}
                        >
                            <span
                                className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${isDarkTheme ? 'translate-x-6' : 'translate-x-1'}`}
                            />
                        </button>
                    </div>
                </div>

                {/* Notifications */}
                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Notifications</h2>
                    <table className="min-w-full divide-y divide-gray-200 text-sm">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notification</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Enabled</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">Order Executed</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <input
                                        type="checkbox"
                                        checked={notifications.orderExecuted}
                                        onChange={() => handleNotificationChange('orderExecuted')}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">Order Closed by TP/SL</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <input
                                        type="checkbox"
                                        checked={notifications.orderClosed}
                                        onChange={() => handleNotificationChange('orderClosed')}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Manage Exchange */}
                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Manage Exchange</h2>
                    <div className="flex space-x-4">
                        <Button>Delete Current Exchange</Button>
                        <Button>Modify Exchange</Button>
                        <Button>Add Exchange</Button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default AccountSettings;
