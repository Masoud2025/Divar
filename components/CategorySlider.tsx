"use client";
import localFont from "next/font/local";

import {
  Smartphone,
  Laptop,
  Car,
  Home,
  Shirt,
  Gamepad2,
  Camera,
} from "lucide-react";

const categories = [
  { id: 1, title: "موبایل", icon: Smartphone },
  { id: 2, title: "لپ تاپ", icon: Laptop },
  { id: 3, title: "خودرو", icon: Car },
  { id: 4, title: "املاک", icon: Home },
  { id: 5, title: "پوشاک", icon: Shirt },
  { id: 6, title: "گیم", icon: Gamepad2 },
  { id: 7, title: "دوربین", icon: Camera },
];
const FarhangFont = localFont({
  src: "../app/fonts/Farhang/Farhang-ExtraBold.ttf",
  display: "swap",
});
export default function CategoryBar() {
  return (
    <div className={`w-full border-b border-[#C2A68C] ${FarhangFont.className}`}>
      <div
        className="
          flex gap-4 px-4 py-3
          overflow-x-auto
          scroll-smooth
          no-scrollbar
        "
      >
        {categories.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="
                flex items-center gap-2
                bg-[#e6d8c360]
                px-3 py-2
                rounded-full
                whitespace-nowrap
                shrink-0
                cursor-pointer
              "
            >
              <Icon size={16} />
              <span className="text-xs">
                {item.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}