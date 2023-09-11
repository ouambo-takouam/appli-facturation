import Link from "next/link";

export default function Home() {
  return (
    <main>
      <p>Main page</p>
      <Link href="/get-things-done">Get things done</Link>
    </main>
  );
}
