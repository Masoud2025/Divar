"use client";

type SortOption = "newest" | "expensive" | "cheap";

interface Props {
  selected: SortOption;
  onChange: (value: SortOption) => void;
}

export default function FilterBar({ selected, onChange }: Props) {
  const baseStyle =
    "px-4 py-1 rounded-full text-sm border transition-all";

  const activeStyle =
    "bg-[#C2A68C] text-white border-[#C2A68C]";

  const inactiveStyle =
    "bg-[#F5F5F0] text-black border-[#C2A68C]";

  return (
    <div className="w-full flex justify-center gap-3 py-3 bg-white sticky top-0 z-40">
      <button
        onClick={() => onChange("newest")}
        className={`${baseStyle} ${
          selected === "newest" ? activeStyle : inactiveStyle
        }`}
      >
        جدیدترین
      </button>

      <button
        onClick={() => onChange("expensive")}
        className={`${baseStyle} ${
          selected === "expensive" ? activeStyle : inactiveStyle
        }`}
      >
        گران‌ترین
      </button>

      <button
        onClick={() => onChange("cheap")}
        className={`${baseStyle} ${
          selected === "cheap" ? activeStyle : inactiveStyle
        }`}
      >
        ارزان‌ترین
      </button>
    </div>
  );
}