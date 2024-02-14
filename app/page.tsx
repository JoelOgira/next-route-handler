import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <Link href={'/feedback'}><h1 className="text-3xl">Give your Feedback</h1></Link>
    </main>
  );
}
