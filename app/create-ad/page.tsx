"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateAdPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // در نسخه واقعی باید اینجا به بک‌اند ارسال شود
    console.log({ title, price, description });

    router.push("/");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-[#F5F5F0] border border-[#C2A68C] rounded-lg p-4 space-y-3"
      >
        <h2 className="text-right font-semibold">ثبت آگهی جدید</h2>

        <input
          type="text"
          placeholder="عنوان"
          className="w-full p-2 border border-[#C2A68C] rounded text-right"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="قیمت"
          className="w-full p-2 border border-[#C2A68C] rounded text-right"
          value={price || ""}
          onChange={(e) => setPrice(Number(e.target.value))}
        />

        <textarea
          placeholder="توضیحات"
          className="w-full p-2 border border-[#C2A68C] rounded text-right"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-[#C2A68C] text-white py-2 rounded"
        >
          ثبت آگهی
        </button>
      </form>
    </div>
  );
}