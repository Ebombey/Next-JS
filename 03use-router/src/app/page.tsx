"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const navigate = (page: string) => {
    router.push(`${page}`);
  };

  return (
    <main className="space-x-7">
      <button onClick={() => navigate("/page1")}>Page 1</button>
    </main>
  );
}
