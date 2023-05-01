import React from "react";
import Avatar from "../../assets/avatar.jpg";
import Input from "../../components/Input";

const Dashboard = () => {
  const contacts = [
    {
      name: "Ahsan",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Habib",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Sowmik",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Volga",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Mango",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Fan",
      status: "Available",
      img: Avatar,
    },
  ];
  return (
    <div className="w-screen flex">
      <div className="w-1/4 h-screen bg-secondary">
        <div className="flex items-center my-5 mx-6">
          <div>
            <img
              src={Avatar}
              alt=""
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          <div className="ml-2">
            <h3 className="text-2xl">Tutorials Dev</h3>
            <p className="text-lg font-light">My Account</p>
          </div>
        </div>
        <hr />
        <div className="mx-5 mt-3">
          <div className="text-primary text-lg mb-10">Messages</div>
          <div>
            {contacts.map(({ name, status, img }) => {
              return (
                <div className="flex items-center py-5 border-b border-b-gray-500">
                  <div className="cursor-pointer flex items-center">
                    <div>
                      <img
                        src={img}
                        alt=""
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                    </div>
                    <div className="ml-2">
                      <h3 className="text-lg font-semibold">{name}</h3>
                      <p className="text-sm font-light text-gray-600">
                        {status}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-1/2 h-screen bg-white flex flex-col items-center">
        <div className="w-[75%] bg-secondary h-[80px] my-6 rounded-full flex items-center px-6">
          <div className="cursor-pointer">
            <img
              src={Avatar}
              alt=""
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          <div className="ml-2 mr-auto">
            <h3 className="text-lg">Sowmik</h3>
            <p className="text-sm font-light text-gray-600">Online</p>
          </div>
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-phone-outgoing"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="black"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              <line x1="15" y1="9" x2="20" y2="4" />
              <polyline points="16 4 20 4 20 8" />
            </svg>
          </div>
        </div>
        <div className="h-[75%] w-full overflow-y-scroll shadow-sm">
          <div className="p-14">
            <div className="max-w-[45%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              sint?
            </div>
            <div className="p-4 max-w-[45%] bg-primary rounded-b-xl rounded-tl-xl ml-auto text-white mb-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid,
              voluptates!
            </div>
            <div className="max-w-[45%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              sint?
            </div>
            <div className="p-4 max-w-[45%] bg-primary rounded-b-xl rounded-tl-xl ml-auto text-white mb-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid,
              voluptates!
            </div>
            <div className="max-w-[45%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              sint?
            </div>
            <div className="p-4 max-w-[45%] bg-primary rounded-b-xl rounded-tl-xl ml-auto text-white mb-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid,
              voluptates!
            </div>
            <div className="max-w-[45%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              sint?
            </div>
            <div className="p-4 max-w-[45%] bg-primary rounded-b-xl rounded-tl-xl ml-auto text-white mb-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid,
              voluptates!
            </div>
            <div className="max-w-[45%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              sint?
            </div>
            <div className="p-4 max-w-[45%] bg-primary rounded-b-xl rounded-tl-xl ml-auto text-white mb-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid,
              voluptates!
            </div>
            <div className="max-w-[45%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              sint?
            </div>
            <div className="p-4 max-w-[45%] bg-primary rounded-b-xl rounded-tl-xl ml-auto text-white mb-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid,
              voluptates!
            </div>
          </div>
        </div>
        <div className="p-6 w-full flex items-center">
          <Input
            placeholder="Type a message..."
            className="w-[75%]"
            inputClassName="py-2 px-4 border-0 shadow-md rounded-full bg-light focus:ring-0 focus:border-0 outline-none"
          />
          <div className="ml-3 cursor-pointer p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-send"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="10" y1="14" x2="21" y2="3" />
              <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
            </svg>
          </div>
          <div className="ml-3 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-circle-plus"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="12" r="9" />
              <line x1="9" y1="12" x2="15" y2="12" />
              <line x1="12" y1="9" x2="12" y2="15" />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-1/4 h-screen bg-light"></div>
    </div>
  );
};

export default Dashboard;
