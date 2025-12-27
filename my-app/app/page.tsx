import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>hello world</h1>
      <Link href="pages/post">Go to Posts</Link>
      <br />
      <Link href="/pages/service">Go to Service</Link>
    </>
  );
}
