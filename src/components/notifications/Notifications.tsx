"use client";
import React, { useState } from 'react';
import Image from "next/image";

const TABS = [
  { label: 'All', value: 'all' },
  { label: 'Orders', value: 'orders' },
  { label: 'Promotions', value: 'promotions' },
  { label: 'System', value: 'system' },
];

const mockNotifications = [
  {
    id: 1,
    type: 'orders',
    seen: false,
    avatar: '/images/user/user-01.jpg',
    message: (
      <>
        <b>Your order #1045</b> has been successfully shipped and is now on its way<br />to your delivery address.
      </>
    ),
    time: '2m',
  },
  {
    id: 2,
    type: 'promotions',
    seen: true,
    avatar: '/images/user/user-01.jpg',
    message: (
      <>
        Special Offer: <b>Enjoy 15% OFF</b> on all Handmade Products  this week! Discover<br />unique items before the sale ends.
      </>
    ),
    time: '8h',
  },
  {
    id: 3,
    type: 'orders',
    seen: true,
    avatar: '/images/user/user-01.jpg',
    message: (
      <>
        Payment failed for Order #1042. Please verify your payment method or try again<br />to avoid order cancellation.
      </>
    ),
    time: '8h',
  },
];

const Notifications: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [notifications, setNotifications] = useState(mockNotifications);

  const filteredNotifications =
    activeTab === 'all'
      ? notifications
      : notifications.filter((n) => n.type === activeTab);

  const markAsSeen = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, seen: true } : n))
    );
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8] p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-serif mb-8">NOTIFICATIONS</h1>
        <div className="flex justify-end mb-6 gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.value}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-150 ${
                activeTab === tab.value
                  ? 'bg-blue-900 text-white'
                  : 'bg-[#f2f2f2] text-gray-700'
              }`}
              onClick={() => setActiveTab(tab.value)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-6">
          {filteredNotifications.map((n) => (
            <div
              key={n.id}
              className={`rounded-xl shadow p-6 flex items-start gap-4 relative ${
                !n.seen ? 'bg-blue-100' : 'bg-white'
              }`}
            >
              <Image
                src={n.avatar}
                alt="avatar"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover mt-1"
              />
              <div className="flex-1 flex flex-row">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {!n.seen && (
                      <span className="w-2 h-2 bg-blue-700 rounded-full inline-block" />
                    )}
                    <span className={`text-xs text-gray-400 ml-auto`}>{n.time}</span>
                  </div>
                  <div className="text-gray-800 text-sm mb-3">{n.message}</div>
                  {!n.seen && (
                    <button
                      className="bg-blue-900 text-white px-4 py-1 rounded-full text-xs font-semibold"
                      onClick={() => markAsSeen(n.id)}
                    >
                      Mark As Seen
                    </button>
                  )}
                </div>
                <div className="flex flex-col items-end min-w-[32px] ml-2">
                  <div className="text-gray-400 cursor-pointer text-xl mb-2">•••</div>
                  <span className="text-xs text-gray-400">&nbsp;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications; 