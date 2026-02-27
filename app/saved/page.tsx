"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";

type Ad = {
  id: number;
  title: string;
  price: number;
  image: string;
};

const initialSaved: Ad[] = [
  {
    id: 1,
    title: "گوشی آیفون ۱۳",
    price: 42000000,
    image: "/ads/phone.jpg",
  },
  {
    id: 2,
    title: "لپ‌تاپ ایسوس",
    price: 55000000,
    image: "/ads/laptop.jpg",
  },
];

export default function SavedPage() {
  const [savedAds, setSavedAds] = useState<Ad[]>(initialSaved);

  const removeFromSaved = (id: number) => {
    setSavedAds((prev) => prev.filter((ad) => ad.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#F5F5F0]" dir="rtl">

      {/* Header */}
      <div className="p-4 bg-white border-b border-[#C2A68C] flex items-center gap-2">
        <Heart size={18} className="text-[#C2A68C]" />
        <h1 className="font-semibold">آگهی‌های ذخیره شده</h1>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">

        {savedAds.length === 0 && (
          <div className="text-center text-gray-500 mt-10">
            هنوز آگهی‌ای ذخیره نکرده‌اید.
          </div>
        )}

        {savedAds.map((ad) => (
          <div
            key={ad.id}
            className="bg-[#F5F5F0] border border-[#C2A68C] rounded-lg p-2 flex gap-3 shadow-sm"
          >

            <div className="relative w-24 h-24 rounded-md overflow-hidden">
              <Image
                src={ad.image}
                alt={ad.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1 text-right space-y-1">
              <h2 className="text-sm font-medium">{ad.title}</h2>
              <p className="text-green-700 text-sm font-bold">
                {ad.price.toLocaleString()} تومان
              </p>

              <button
                onClick={() => removeFromSaved(ad.id)}
                className="text-xs text-red-500 mt-1"
              >
                حذف از ذخیره‌ها
              </button>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}