import Logo from "@/public/carrotLogo.png";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <div className="flex flex-row-reverse border-b border-[#C2A68C]">
      <Link href={"/"}>
        <Image
          alt="Logo of website carrot image"
          src={Logo}
          className="rotate-45 w-22 mt-2"
        />
      </Link>
      <input
        placeholder="جست و جو در تمام آگهی ها"
        type="search"
        className="bg-[#e6d8c360] rounded-xl p-4 h-10 w-72 border-[#C2A68C] border text-[10px] font-light text-right mt-6 ml-12 "  
      />
    </div>
  );
}
