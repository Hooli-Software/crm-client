import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>
        Hello, Hooli Software!
      </h1>
      <ul>
        <li><Link href='/sessions'>Session feed page</Link></li>
      </ul>
    </main>
  );
}
