"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

type Ad = {
  id: number;
  title: string;
  price: string;
  createdAt: string;
  description: string;
  images: string[];
};

const ads: Ad[] = [
  {
    id: 1,
    title: "گوشی آیفون ۱۳ پرو",
    price: "۴۲,۰۰۰,۰۰۰ تومان",
    createdAt: "۲ ساعت پیش",
    description: "کاملاً سالم، بدون خط و خش، با جعبه و لوازم کامل.",
    images: ["/ads/phone.jpg"],
  },
  {
    id: 2,
    title: "لپ‌تاپ گیمینگ ASUS",
    price: "۵۵,۰۰۰,۰۰۰ تومان",
    createdAt: "دیروز",
    description: "مناسب برنامه‌نویسی و بازی، رم ارتقا یافته.",
    images: ["/ads/laptop.jpg"],
  },
  {
    id: 3,
    title: "خودرو پژو ۲۰۷",
    price: "۶۸۰,۰۰۰,۰۰۰ تومان",
    createdAt: "۳ ساعت پیش",
    description: "بدون رنگ، سرویس کامل انجام شده.",
    images: ["/ads/car.jpg"],
  },
  {
    id: 4,
    title: "خانه ۹۰ متری",
    price: "۳,۲۰۰,۰۰۰,۰۰۰ تومان",
    createdAt: "امروز",
    description: "نورگیر عالی، سند آماده انتقال.",
    images: ["/ads/house.jpg"],
  },
  {
    id: 5,
    title: "دوربین حرفه‌ای کانن",
    price: "۳۵,۰۰۰,۰۰۰ تومان",
    createdAt: "۵ ساعت پیش",
    description: "مناسب عکاسی حرفه‌ای و تولید محتوا.",
    images: ["/ads/camera.jpg"],
  },
];

export default function AdsFeed() {
  const [selected, setSelected] = useState<Ad | null>(null);

  return (
    <div className="w-full p-3 space-y-3">

      {ads.map((ad) => (
        <div
          key={ad.id}
          className="bg-[#F5F5F0] border border-[#C2A68C] rounded-lg p-2 flex gap-3 shadow-sm"
        >
          {/* Image */}
          <div className="relative w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
            <Image
              src={ad.images[0]}
              alt={ad.title}
              fill
              className="object-cover cursor-pointer"
              onClick={() => setSelected(ad)}
            />
          </div>

          {/* Info */}
          <div className="flex-1 text-right space-y-1">
            <h2 className="text-sm font-medium">{ad.title}</h2>
            <p className="text-green-700 text-sm font-bold">
              {ad.price}
            </p>
            <p className="text-xs text-gray-500">
              {ad.createdAt}
            </p>
          </div>
        </div>
      ))}

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white w-[95%] max-w-md p-4 rounded-lg relative">

            <button
              className="absolute left-3 top-3"
              onClick={() => setSelected(null)}
            >
              <X />
            </button>

            <div className="relative w-full h-64 rounded-md overflow-hidden">
              <Image
                src={selected.images[0]}
                alt={selected.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="mt-3 text-right space-y-2">
              <h2 className="font-semibold">{selected.title}</h2>
              <p className="text-green-700 font-bold">
                {selected.price}
              </p>
              <p className="text-sm">
                {selected.description}
              </p>
              <p className="text-xs text-gray-500">
                زمان انتشار: {selected.createdAt}
              </p>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}