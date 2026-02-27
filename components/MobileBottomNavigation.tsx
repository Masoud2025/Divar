"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import localFont from "next/font/local";
const navItems = [
  { href: "/", label: "خانه" },
  { href: "/saved", label: "ذخیره شده ها" },
  { href: "/create-ad", label: "ثبت آگهی" },
  { href: "/chat", label: "چت" },
  { href: "/profile", label: "پروفایل" },
];

const MorabaFont = localFont({
  src: "../app/fonts/Morabba/ttf/Morabba-Black.ttf",
  display: "swap",
});
export default function BottomNavigation({
  mobile = false,
}: {
  mobile?: boolean;
}) {
  const pathname = usePathname();

  return (
    <nav
      className={
        mobile
          ? "fixed bottom-0 left-0 right-0 border-t bg-white z-50"
          : "w-full border-t border-[#C2A68C]  bg-white"
      }
    >
      <div className={`flex justify-around items-center h-14 ${MorabaFont.className}`}>
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                isActive
                  ? "text-[#5D866C]"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
