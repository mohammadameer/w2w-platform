import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Head>
        <title>Landing Page</title>
      </Head>
      <div className="w-1/4">
        <p className="text-3xl mb-10">Pages</p>
        <Link href="/login" passHref>
          <Button title="Login" />
        </Link>
        <Link href="/register" passHref>
          <Button title="Register" />
        </Link>
        <Link href="/home" passHref>
          <Button title="Home" />
        </Link>
      </div>
    </div>
  );
}
