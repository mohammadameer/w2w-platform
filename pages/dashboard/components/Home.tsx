import React, { useMemo } from "react";
import Image from "next/image";
import ActiveEvent from "./ActiveEvent";
import { Bar } from "react-chartjs-2";

const subscribersData = {
  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  datasets: [
    {
      label: "# of Subcribers",
      data: [300, 100, 100, 300, 200, 350, 400],
      backgroundColor: "#6C6DFF",
    },
  ],
};

const eventData = {
  labels: ["Special Event", "Competetion Event", "Random Event"],
  datasets: [
    {
      label: "# of event",
      data: [20, 30, 40],
      backgroundColor: "#6C6DFF",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    xAxes: [{ barThickness: 0.3 }],
  },
};

const Home = () => {
  return (
    <div className="w-10/12 h-screen flex flex-row">
      {/* Statics and Active Events */}
      <div className=" w-8/12 p-5">
        <h1
          style={{
            fontFamily: "Poppins",
            fontSize: 64,
            fontWeight: "bolder",
          }}
        >
          Welcom ,Apple
        </h1>
        {/* Statics */}
        <div className="flex flex-row">
          {/* Subscribers and Coins */}
          <div className="w-1/2 mr-5 ">
            {/* Subscribers */}
            <div className="flex flex-row p-2 py-5 mb-5 items-center bg-white rounded-md shadow-lg">
              <div
                style={{
                  width: 74,
                  height: 72,
                  backgroundColor: "#E0E0FF",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 4,
                  borderColor: "#7E7FFF",
                  marginRight: 35,
                }}
              >
                <Image
                  className="object-contain"
                  src="/icons/user.png"
                  alt="user"
                  width={19}
                  height={24}
                />
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "Khula",
                    fontSize: 45,
                    fontWeight: "bolder",
                  }}
                >
                  5000
                </p>
                <p style={{ fontSize: 16, fontFamily: "Khula" }}>
                  Subscribers Engaged with your Events
                </p>
              </div>
            </div>
            {/* Coins */}
            <div className="flex flex-row p-2 py-5 items-center bg-white rounded-md shadow-lg">
              <div
                style={{
                  width: 74,
                  height: 72,
                  backgroundColor: "#FFFBF2",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 4,
                  borderColor: "#FFC52C",
                  marginRight: 35,
                }}
              >
                <Image
                  className="object-contain"
                  src="/icons/dollar.png"
                  alt="dollar"
                  width={19}
                  height={24}
                />
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "Khula",
                    fontSize: 37,
                    fontWeight: "bolder",
                    color: "#6C6DFF",
                  }}
                >
                  %50
                </p>
                <p style={{ fontSize: 16 }}>
                  OF <b style={{ fontWeight: "bolder" }}>4000</b> Used Coins
                </p>
              </div>
            </div>
          </div>
          {/* Subscribers Charts */}
          <div className="w-1/2 bg-white p-3 shadow-md rounded-md">
            <div className="flex flex-row justify-between items-center">
              <p>Subscribers</p>
              <Image
                className="object-cover"
                src="/icons/dots.png"
                alt="users"
                width={16}
                height={5}
              />
            </div>
            <Bar data={subscribersData} options={options} />
          </div>
        </div>
        {/* Active Events */}
        <div className="mt-10">
          <p style={{ fontSize: 23, fontFamily: "Poppins" }}>Active Events</p>
          <ActiveEvent
            image="event1"
            title="Ios 14 Release"
            description="Special Event"
            users={300}
            dollar={500}
            location="jeddah"
            days={2}
          />
          <ActiveEvent
            image="event2"
            title="The AirPods Max"
            description="Special Event"
            users={900}
            dollar={500}
            location="jeddah"
            days={4}
          />
          <ActiveEvent
            image="event3"
            title="Iphone 12 Pro"
            description="Special Event"
            users={80}
            dollar={500}
            location="jeddah"
            days={5}
          />
          <ActiveEvent
            image="event4"
            title="Iphone 12 pro"
            description="Competetion"
            users={2000}
            dollar={500}
            location="jeddah"
            days={10}
          />
          <ActiveEvent
            image="event5"
            title="Apple M1 Chip"
            description="Random"
            users={4000}
            dollar={500}
            location="jeddah"
            days={10}
          />
        </div>
      </div>
      {/* Notification & account & Events & Leaderboard */}
      <div className=" w-4/12 p-5" style={{ backgroundColor: "#FCFCFC" }}>
        {/* Notification & account */}
        <div className="flex flex-row items-center justify-between ">
          <div className="bg-white h-12 w-12 flex justify-center items-center rounded-full shadow-md">
            <Image
              className="object-contain"
              src="/icons/alarm.png"
              alt="users"
              width={18}
              height={21}
            />
          </div>
          <div className="flex flex-row items-center">
            <div className="mr-2">
              <Image
                className="object-contain"
                src="/icons/bottom.png"
                alt="users"
                width={12}
                height={6}
              />
            </div>
            <Image
              className="object-contain "
              src="/images/apple.png"
              alt="users"
              width={50}
              height={50}
            />
          </div>
        </div>
        {/* Event Activities */}
        <div className="mt-5">
          <p>Events Activities</p>
          <Bar data={eventData} options={options} />
        </div>
        {/* Leaderboard */}
        <div className="p-5 bg-white shadow-md rounded-md">
          <p className="mb-5">Leaderboard</p>
          <div>
            <p className="mb-2">Ios 14 Releas</p>
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row">
                <div className="h-12 w-12 bg-gray-400 mr-5 rounded-md" />
                <div className="flex flex-col">
                  <p>John Doe</p>
                  <p style={{ fontSize: 12 }}>500 Coin</p>
                </div>
              </div>
              <p style={{ fontWeight: "lighter" }}>Top Ranked</p>
            </div>
          </div>
          <div className="my-5">
            <p className="mb-2">The new Airbod Max</p>
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row">
                <div className="h-12 w-12 bg-gray-400 mr-5 rounded-md" />
                <div className="flex flex-col">
                  <p>John Doe</p>
                  <p style={{ fontSize: 12 }}>900 Coin</p>
                </div>
              </div>
              <p style={{ fontWeight: "lighter" }}>Top Ranked</p>
            </div>
          </div>
          <div>
            <p className="mb-2">Ios 14 Releas</p>
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row">
                <div className="h-12 w-12 bg-gray-400 mr-5 rounded-md" />
                <div className="flex flex-col">
                  <p>John Doe</p>
                  <p style={{ fontSize: 12 }}>500 Coin</p>
                </div>
              </div>
              <p style={{ fontWeight: "lighter" }}>Top Ranked</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
