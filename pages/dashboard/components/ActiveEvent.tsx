import React from "react";
import Image from "next/image";

const ActiveEvent = ({
  image,
  title,
  description,
  users,
  dollar,
  location,
  days,
}) => {
  return (
    <div className="w-full flex flex-row pl-0 pr-4 mb-2 items-center justify-between bg-white shadow-lg rounded-md">
      <div className="flex flex-row items-center">
        <Image
          className="object-cover"
          src={`/images/${image}.png`}
          alt="event1"
          width={73}
          height={75}
        />
        <div>
          <p style={{ fontSize: 16, fontFamily: "Khula" }}>{title}</p>
          <p style={{ fontSize: 12, fontWeight: "lighter" }}>{description}</p>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <Image
          className="object-contain"
          src="/icons/users.png"
          alt="users"
          width={19}
          height={16}
        />
        <p
          style={{
            fontSize: 16,
            fontFamily: "Khula",
            fontWeight: "lighter",
          }}
        >
          {users}
        </p>
      </div>

      <div className="flex flex-row items-center">
        <Image
          className="object-contain"
          src="/icons/dollarcircle.png"
          alt="users"
          width={19}
          height={16}
        />
        <p
          style={{
            fontSize: 16,
            fontFamily: "Khula",
            fontWeight: "lighter",
          }}
        >
          {dollar}k
        </p>
      </div>

      <div className="flex flex-row items-center">
        <Image
          className="object-contain"
          src="/icons/location.png"
          alt="users"
          width={19}
          height={16}
        />
        <p
          style={{
            fontSize: 16,
            fontFamily: "Khula",
            fontWeight: "lighter",
          }}
        >
          {location}
        </p>
      </div>

      <div className="flex flex-row items-center">
        <Image
          className="object-contain"
          src="/icons/time.png"
          alt="users"
          width={19}
          height={16}
        />
        <p
          style={{
            fontSize: 16,
            fontFamily: "Khula",
            fontWeight: "lighter",
          }}
        >
          {days} Days Left
        </p>
      </div>

      <div className="flex flex-row items-center">
        <Image
          className="object-contain"
          src="/icons/right.png"
          alt="users"
          width={19}
          height={16}
        />
      </div>
    </div>
  );
};

export default ActiveEvent;
