import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <Link href="/games" className="text-6xl">
          Click to go game page
        </Link>
      </div>
    </main>
  );
}
