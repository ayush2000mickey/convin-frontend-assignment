import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser, getUsersList } from "./features/users/usersSlice";

import UserCard from "./components/UserCard";

const App = () => {
  const dispatch = useDispatch();
  const { totalUsers } = useSelector((store) => store.users);

  useEffect(() => {
    dispatch(getUsersList());
  }, [dispatch]);

  return (
    <div className="h-[100vh] w-[100vw] bg-gradient-to-r from-sky-800 to-indigo-800 flex flex-col align-middle justify-center">
      <UserCard />
      <footer className="mx-auto mt-[5rem] space-x-6 text-white font-extrabold  ">
        {[...Array(totalUsers)].map((el, idx) => (
          <button
            className="text-xl rounded-xl  p-4 px-6 drop-shadow-lg bg-violet-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
            key={idx}
            onClick={() => {
              dispatch(getSingleUser(idx + 1));
            }}
          >
            {idx + 1}
          </button>
        ))}
      </footer>
    </div>
  );
};

export default App;
