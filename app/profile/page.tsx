"use client";

import Image from "next/image";
import { Settings, Edit, LogOut } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#F5F5F0]" dir="rtl">

      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-white border-b border-[#C2A68C]">
        <h1 className="font-semibold">پروفایل</h1>
        <Settings size={20} />
      </div>

      {/* Profile Section */}
      <div className="p-6 flex flex-col items-center text-center space-y-4">

        {/* Avatar */}
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#C2A68C]">
          <Image
            src="/profileSamplepng.png"
            alt="profile"
            fill
            className="object-cover"
          />
        </div>

        {/* Name */}
        <div>
          <h2 className="text-lg font-semibold">مسعود جعفری</h2>
          <p className="text-sm text-gray-500">
            برنامه‌نویس و توسعه‌دهنده
          </p>
        </div>

        {/* Stats */}
        <div className="w-full bg-white border border-[#C2A68C] rounded-xl p-4 grid grid-cols-3 text-center">

          <div>
            <div className="font-bold text-[#C2A68C]">12</div>
            <div className="text-xs text-gray-500">آگهی</div>
          </div>

          <div>
            <div className="font-bold text-[#C2A68C]">48</div>
            <div className="text-xs text-gray-500">دنبال‌کننده</div>
          </div>

          <div>
            <div className="font-bold text-[#C2A68C]">4.8</div>
            <div className="text-xs text-gray-500">امتیاز</div>
          </div>

        </div>

        {/* Buttons */}
        <div className="w-full space-y-3">

          <button className="w-full flex justify-center items-center gap-2 bg-[#C2A68C] text-white py-2 rounded-lg">
            <Edit size={16} />
            ویرایش پروفایل
          </button>

          <button className="w-full flex justify-center items-center gap-2 bg-white border border-red-400 text-red-500 py-2 rounded-lg">
            <LogOut size={16} />
            خروج از حساب
          </button>

        </div>

      </div>
    </div>
  );
}