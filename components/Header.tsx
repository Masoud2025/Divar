import Logo from "@/public/carrotLogo.png";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-row-reverse items-center justify-between px-6 py-3 border-b border-[#C2A68C]">
      {/* Logo */}
      <Link href="/">
        <Image
          alt="Carrot website logo"
          src={Logo}
          className="rotate-45 w-16"
          priority
        />
      </Link>

      {/* Search Box */}
      <div className="relative w-72">
        <input
          type="search"
          placeholder="جست و جو در تمام آگهی ها"
          className="bg-[#e6d8c360] rounded-xl pl-12 pr-4 h-10 w-full
                     border border-[#C2A68C]
                     text-[12px] font-light text-right
                     outline-none transition-all duration-200
                     focus:bg-[#e6d8c380]
                     focus:border-[#a88463]
                     focus:shadow-[0_0_0_2px_rgba(194,166,140,0.25)]"
        />

        <button
          type="submit"
          className="absolute left-1 top-1/2 -translate-y-1/2
                     bg-[#C2A68C] h-8 w-8 rounded-lg
                     flex items-center justify-center
                     hover:opacity-90 active:scale-95 transition"
        >
          <Search size={16} className="text-white" />
        </button>
      </div>
    </header>
  );
}
