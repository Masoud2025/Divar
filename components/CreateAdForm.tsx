"use client";

import { useState } from "react";

type AdInput = {
  title: string;
  price: number;
  description: string;
  image: string;
};

interface Props {
  onCreate: (ad: AdInput) => void;
}

export default function CreateAdForm({ onCreate }: Props) {
  const [form, setForm] = useState<AdInput>({
    title: "",
    price: 0,
    description: "",
    image: "/ads/phone.jpg",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.title || !form.price) return;

    onCreate(form);

    setForm({
      title: "",
      price: 0,
      description: "",
      image: "/ads/phone.jpg",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#F5F5F0] border border-[#C2A68C] rounded-lg p-4 space-y-3"
    >
      <h3 className="text-right font-semibold">ثبت آگهی جدید</h3>

      <input
        type="text"
        placeholder="عنوان آگهی"
        value={form.title}
        onChange={(e) =>
          setForm({ ...form, title: e.target.value })
        }
        className="w-full p-2 rounded-md border border-[#C2A68C] text-right"
      />

      <input
        type="number"
        placeholder="قیمت (تومان)"
        value={form.price || ""}
        onChange={(e) =>
          setForm({ ...form, price: Number(e.target.value) })
        }
        className="w-full p-2 rounded-md border border-[#C2A68C] text-right"
      />

      <textarea
        placeholder="توضیحات"
        value={form.description}
        onChange={(e) =>
          setForm({ ...form, description: e.target.value })
        }
        className="w-full p-2 rounded-md border border-[#C2A68C] text-right"
      />

      <button
        type="submit"
        className="w-full bg-[#C2A68C] text-white py-2 rounded-md"
      >
        ثبت آگهی
      </button>
    </form>
  );
}