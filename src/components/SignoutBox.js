import { useState } from "react";

export default function SignoutBox() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Profile Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 bg-transparent"
      >
        <div className="w-8 h-8 rounded-md bg-red-600 flex items-center justify-center">
          <span className="text-white text-lg font-bold">😃</span> {/* Profile Emoji */}
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-black text-white shadow-lg rounded-md">
          {/* Triangle Arrow */}
          <div className="absolute right-3 -top-2 w-4 h-4 bg-black rotate-45"></div>

          {/* Profile Section */}
          <div className="p-3 flex items-center space-x-3 hover:bg-gray-700 cursor-pointer rounded-md">
            <div className="w-8 h-8 rounded-md bg-blue-500 flex items-center justify-center">
              <span className="text-white text-lg font-bold">😀</span>
            </div>
            <span className="text-sm">adityageeky</span>
          </div>

          {/* Children Profile */}
          <div className="p-3 flex items-center space-x-3 hover:bg-gray-700 cursor-pointer rounded-md">
            <div className="w-8 h-8 rounded-md bg-pink-500 flex items-center justify-center">
              <span className="text-white text-lg font-bold">🎨</span>
            </div>
            <span className="text-sm">Children</span>
          </div>

          <hr className="border-gray-600 my-2" />

          {/* Menu Items */}
          <MenuItem text="Manage Profiles" />
          <MenuItem text="Transfer Profile" />
          <MenuItem text="Account" />
          <MenuItem text="Help Centre" />

          <hr className="border-gray-600 my-2" />

          {/* Sign Out */}
          <div className="p-3 hover:bg-gray-700 cursor-pointer rounded-md text-center">
            <span className="text-sm">Sign out of Netflix</span>
          </div>
        </div>
      )}
    </div>
  );
}

// Reusable Menu Item Component
function MenuItem({ text }) {
  return (
    <div className="p-3 hover:bg-gray-700 cursor-pointer rounded-md">
      <span className="text-sm">{text}</span>
    </div>
  );
}
