"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import { X } from "lucide-react";
import FilterBar from "./FilterBar";

type SortOption = "newest" | "expensive" | "cheap";

type Ad = {
  id: number;
  title: string;
  price: number;
  createdAt: number; // timestamp
  description: string;
  image: string;
};

const ads: Ad[] = [
  {
    id: 1,
    title: "گوشی آیفون ۱۳",
    price: 42000000,
    createdAt: 3,
    description: "کاملاً سالم و تمیز.",
    image: "/ads/phone.jpg",
  },
  {
    id: 2,
    title: "لپ‌تاپ ایسوس",
    price: 55000000,
    createdAt: 1,
    description: "مناسب برنامه‌نویسی.",
    image: "/ads/laptop.jpg",
  },
  {
    id: 3,
    title: "پژو ۲۰۷",
    price: 680000000,
    createdAt: 5,
    description: "بدون رنگ.",
    image: "/ads/car.jpg",
  },
  {
    id: 4,
    title: "دوربین کانن",
    price: 35000000,
    createdAt: 2,
    description: "مناسب تولید محتوا.",
    image: "/ads/camera.jpg",
  },
];

export default function AdsFeed() {
  const [selected, setSelected] = useState<Ad | null>(null);
  const [sort, setSort] = useState<SortOption>("newest");

  const sortedAds = useMemo(() => {
    const sorted = [...ads];

    if (sort === "expensive") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sort === "cheap") {
      sorted.sort((a, b) => a.price - b.price);
    } else {
      sorted.sort((a, b) => a.createdAt - b.createdAt);
    }

    return sorted;
  }, [sort]);

  return (
    <div className="w-full">

      {/* Filter */}
      <FilterBar selected={sort} onChange={setSort} />

      <div className="p-3 space-y-3">
        {sortedAds.map((ad) => (
          <div
            key={ad.id}
            className="bg-[#F5F5F0] border border-[#C2A68C] rounded-lg p-2 flex gap-3 shadow-sm"
          >
            <div className="relative w-24 h-24 rounded-md overflow-hidden">
              <Image
                src={ad.image}
                alt={ad.title}
                fill
                className="object-cover cursor-pointer"
                onClick={() => setSelected(ad)}
              />
            </div>

            <div className="flex-1 text-right space-y-1">
              <h2 className="text-sm font-medium">{ad.title}</h2>
              <p className="text-green-700 text-sm font-bold">
                {ad.price.toLocaleString()} تومان
              </p>
            </div>
          </div>
        ))}
      </div>

      {selected && (
  <div
    className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
    onClick={() => setSelected(null)} // بستن با کلیک بیرون
  >
    <div
      className="bg-white w-[95%] h-[90vh] max-w-2xl rounded-xl p-5 relative overflow-y-auto"
      onClick={(e) => e.stopPropagation()} // جلوگیری از بستن وقتی داخل کلیک میشه
    >
      {/* دکمه بستن */}
      <button
        className="absolute left-4 top-4 bg-[#F5F5F0] border border-[#C2A68C] rounded-full p-2"
        onClick={() => setSelected(null)}
      >
        <X size={20} />
      </button>

      {/* تصویر بزرگ */}
      <div className="relative w-full h-80 rounded-lg overflow-hidden">
        <Image
          src={selected.image}
          alt={selected.title}
          fill
          className="object-cover"
        />
      </div>

      {/* اطلاعات */}
      <div className="mt-6 text-right space-y-3">
        <h2 className="text-lg font-semibold">
          {selected.title}
        </h2>

        <p className="text-green-700 text-lg font-bold">
          {selected.price.toLocaleString()} تومان
        </p>

        <p className="text-sm leading-7">
          {selected.description}
        </p>
      </div>
    </div>
  </div>
)}
    </div>
  );
}