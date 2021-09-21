import React from "react";
import Image from "next/image";

const SideBar = () => {
  return (
    <div
      className="flex flex-col w-2/12 p-5 rounded-r-lg"
      style={{ backgroundColor: "#FCFCFC" }}
    >
      {/* icon and name */}
      <div className="flex flex-row">
        <div className="flex justify-center items-center py-2 px-4 border-2 border-purple-200 rounded-md">
          <Image
            className="object-contain"
            src="/w2w.png"
            alt="icon"
            width="66px"
            height="41px"
          />
        </div>
        <div className="ml-2 flex flex-col justify-center ">
          <p
            className=" text-purple-500 font-Khula leading-none"
            style={{ fontSize: 32, fontWeight: "bolder" }}
          >
            Win2Win
          </p>
          <p
            className="text-sm text-purple-500 font-Khula"
            style={{ fontWeight: "bold", fontSize: 14 }}
          >
            Dashboard
          </p>
        </div>
      </div>
      {/* pages */}
      <div>
        <div
          className="flex flex-row py-4 px-5 mt-10 mb-5 rounded-md"
          style={{ backgroundColor: "rgba(178, 178, 178, 0.06)" }}
        >
          <Image
            className="object-contain"
            src="/icons/home.png"
            alt="home"
            height={16}
            width={16}
          />
          <p className="ml-8">Home</p>
        </div>
        <div className="flex flex-row py-4 px-5 mt-5 mb-5 rounded-md">
          <Image
            className="object-contain"
            src="/icons/wallet.png"
            alt="home"
            height={16}
            width={16}
          />
          <p className="ml-8" style={{ color: "rgba(26, 26, 26, 0.4)" }}>
            Home
          </p>
        </div>
      </div>
      {/* events */}
      <div className="mt-20">
        <p
          style={{
            color: "rgba(26, 26, 26, 0.4)",
            fontSize: 14,
            marginBottom: 20,
          }}
        >
          Events
        </p>
        <div
          className="flex flex-row items-center  py-4 px-5 mb-5 border rounded-lg"
          style={{ borderColor: "#EAEAEA" }}
        >
          <Image
            src="/icons/random.png"
            alt="random"
            className="object-contain"
            width={18}
            height={18}
          />
          <p
            className="font-Khula ml-5 leading-none"
            style={{ color: "rgba(26, 26, 26, 0.76)" }}
          >
            Random Event
          </p>
        </div>
        <div
          className="flex flex-row items-center  py-4 px-5 mb-5 border rounded-lg"
          style={{ borderColor: "#EAEAEA" }}
        >
          <Image
            src="/icons/special.png"
            alt="special"
            className="object-contain"
            width={18}
            height={18}
          />
          <p
            className="font-Khula ml-5 leading-none"
            style={{ color: "rgba(26, 26, 26, 0.76)" }}
          >
            Special Event
          </p>
        </div>
        <div
          className="flex flex-row items-center  py-4 px-5 border rounded-lg"
          style={{ borderColor: "#EAEAEA" }}
        >
          <Image
            src="/icons/competition.png"
            alt="competition"
            className="object-contain"
            width={18}
            height={18}
          />
          <p
            className="font-Khula ml-5 leading-none"
            style={{ color: "rgba(26, 26, 26, 0.76)" }}
          >
            Competition Event
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
