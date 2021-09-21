import Head from "next/head";
import Home from "../../components/dashboard/Home";
import SideBar from "../../components/dashboard/SideBar";

export default function Dashboard() {
  return (
    <div className="flex flex-row h-screen">
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="h-screen w-full flex">
        <SideBar />
        <Home />
      </div>
    </div>
  );
}
