import React from "react";
import { useSelector } from "react-redux";
const UserCard = () => {
  const { singleUser } = useSelector((store) => store.users);
  return (
    <section className="bg-slate-800 drop-shadow-lg rounded-xl mx-auto  p-8 text-white font-bold ">
      {!singleUser ? (
        <div className="p-10 text-xl ">Click any button below to see data</div>
      ) : (
        <figure className="flex justify-between">
          <img
            className="w-32 h-32 object-cover rounded-2xl "
            src={singleUser?.data.avatar}
            alt="user"
          />
          <div className="px-5 flex flex-col align-middle justify-center  ">
            <div className="text-4xl text-sky-500">
              {singleUser?.data.first_name} {singleUser?.data.last_name}
            </div>
            <div className="italic">{singleUser?.data.email}</div>
          </div>
        </figure>
      )}
    </section>
  );
};

export default UserCard;
