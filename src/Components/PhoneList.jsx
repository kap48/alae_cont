import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axiosHnadler from "../axiosHnadler";

const PhoneList = () => {
  const infos = useSelector(state => state.posts);
  console.log(infos);
  const [data, setData] = useState(infos);

  const handelDelete = id => {
    setData(prevState => prevState.filter(n => n.id !== id));

    // axiosHnadler.remove(id);
  };

  const handelToggel = id => {
    const note = data.find(n => n.id === id);
    const changedNote = { ...note, favorites: !note.favorites };
    setData(prevState => {
      return prevState.map(t => (t.id !== id ? t : changedNote));
    });
    // axiosHnadler.update(id, changedNote);
  };

  // const url = "http://localhost:8084/notes";
  // useEffect(() => {
  //   axiosHnadler.getAll().then(res => setData(res));
  // }, []);
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 ">
      {data &&
        data.map(info => (
          <div
            className={`relative  mx-10 my-10 p-8  flex flex-col ${
              info.favorites ? "bg-rose-200" : "bg-slate-200"
            }    rounded-lg shadow-md  `}
          >
            <h1 className="font-semibold">
              <span class="material-symbols-outlined">account_circle</span>{" "}
              {info.name}
            </h1>
            <h1 className="font-semibold">
              <span class="material-symbols-outlined">call</span>
              {info.phone}
            </h1>
            <div className="flex gap-4 absolute right-10 bottom-20 ">
              <button
                className="text-red-600   "
                onClick={() => handelDelete(info.id)}
              >
                <span class="material-symbols-outlined">delete</span>
              </button>

              <button
                className="text-yellow-500 "
                onClick={() => handelToggel(info.id)}
              >
                <span class="material-symbols-outlined">star</span>
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PhoneList;
