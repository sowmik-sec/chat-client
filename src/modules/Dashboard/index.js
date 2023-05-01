import React from "react";
import Avatar from "../../assets/avatar.jpg";

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
      <div className="w-1/2 h-screen "></div>
      <div className="w-1/4 h-screen "></div>
    </div>
  );
};

export default Dashboard;
