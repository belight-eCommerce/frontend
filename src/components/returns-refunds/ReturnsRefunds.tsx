
"use client";
import React, { useState } from 'react';
import Image from "next/image";

const mockProduct = {
  image: '/images/product/image1.png',
  name: 'Sterling Silver Pearl Drop Earrings',
  purchasedOn: '2025-06-01',
  eligibleUntil: '2025-07-15',
  status: 'Pending',
  orderId: '#10231',
};

const reasons = [
  'Defective Product',
  'Wrong Item Delivered',
  'Not as Described',
  'Other',
];

const ReturnsRefunds: React.FC = () => {
 
  const [selectedReason, setSelectedReason] = useState(reasons[0]);
  const [message, setMessage] = useState('');
  const [files, setFiles] = useState<File[]>([]);
 
  const [reasonsOpen, setReasonsOpen] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileList = Array.from(e.target.files).slice(0, 2);
      setFiles(fileList);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8] p-8 flex flex-col md:flex-row gap-8">
      {/* Left Section */}
      <div className="flex-1">
        <h1 className="text-2xl font-serif mb-8">RETURNS & REFUNDS</h1>
        {/* Product Card */}
        <div className="bg-white rounded-xl shadow p-6 flex items-center mb-8 max-w-xl">
          <Image
            src={mockProduct.image}
            alt={mockProduct.name}
            width={96}
            height={96}
            className="w-24 h-24 rounded-lg object-cover mr-6 border"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-lg font-semibold">{mockProduct.name}</h2>
              <span className="border border-red-400 text-red-500 bg-white px-3 py-1 rounded-full text-xs font-semibold">{mockProduct.status}</span>
            </div>
            <div className="text-gray-500 text-sm mb-1">
              Purchased on: {mockProduct.purchasedOn}
            </div>
            <div className="text-gray-500 text-sm mb-1">
              Eligible Until: {mockProduct.eligibleUntil}
            </div>
            <div className="text-gray-400 text-xs">{mockProduct.orderId}</div>
          </div>
        </div>
        {/* Message Box */}
        <div className="max-w-xl">
          <h3 className="text-lg font-semibold mb-2">Message</h3>
          <div className="bg-white rounded-xl shadow p-6">
            <textarea
              className="w-full h-24 p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-200 mb-4"
              placeholder="Type Here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="bg-blue-900 text-white px-6 py-2 rounded-full font-semibold" type="button">
              SUBMIT REVIEW
            </button>
          </div>
        </div>
      </div>
      
      <div className="w-full md:w-96 flex flex-col gap-6">
       
        <div className="bg-white rounded-xl shadow p-4">
          <div
            className="flex items-center justify-between cursor-pointer mb-2"
            onClick={() => setReasonsOpen((open) => !open)}
          >
            <span className="font-semibold">Return Reason</span>
            <span
              className={`text-blue-900 font-bold transition-transform duration-200 ${reasonsOpen ? '' : 'rotate-180'}`}
            >
              ▼
            </span>
          </div>
          {reasonsOpen && (
            <div>
              {reasons.map((reason) => (
                <div
                  key={reason}
                  className={`py-2 px-2 rounded cursor-pointer text-sm font-medium ${
                    selectedReason === reason
                      ? 'text-blue-900 font-bold bg-[#f2f2f2]'
                      : 'text-gray-700'
                  }`}
                  onClick={() => setSelectedReason(reason)}
                >
                  {reason}
                </div>
              ))}
            </div>
          )}
        </div>
        {/* File Upload */}
        <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center justify-center border-2 border-dashed border-blue-200 min-h-[120px]">
          <label htmlFor="file-upload" className="flex flex-col items-center cursor-pointer w-full h-full">
            <div className="flex flex-col items-center">
              <span className="bg-blue-900 text-white rounded-full p-2 mb-2">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="4" y="16" width="16" height="4" rx="2" fill="#fff" stroke="#e5e7eb" strokeWidth="2"/></svg>
              </span>
              <span className="text-blue-900 font-semibold">Click To Upload Or Drag & Drop File</span>
              <span className="text-gray-400 text-xs mt-1">Upload Upto 02 Files At Once</span>
            </div>
            <input
              id="file-upload"
              type="file"
              className="hidden"
              multiple
              accept="image/*,application/pdf"
              onChange={handleFileChange}
            />
          </label>
          {files.length > 0 && (
            <div className="mt-2 w-full text-xs text-gray-600">
              {files.map((file, idx) => (
                <div key={idx}>{file.name}</div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReturnsRefunds; 