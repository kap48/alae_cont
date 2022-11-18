import { useState } from "react";
import PhoneList from "./PhoneList";
import axiosHnadler from "../axiosHnadler";
import { postAdded } from "../features/postsSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    favorites: false,
  });
  const dispatch = useDispatch();
  const handelChange = e => {
    setContact(last => {
      return {
        ...last,
        [e.target.name]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };
  const handelSubmit = e => {
    e.preventDefault();
    dispatch(postAdded(contact));

    // axiosHnadler.create(contact);
    // setContact({});
  };
  return (
    <>
      <div className=" flex justify-center items-center  ">
        <div className="mx-10 my-20 bg-slate-400 p-10 rounded-lg shadow-xl ">
          <div className="">
            <form className=" flex flex-col gap-6 p-4 " onSubmit={handelSubmit}>
              <div className=" flex  justify-between items-center gap-x-6">
                <span class="material-symbols-outlined">account_circle</span>
                <input
                  className="py-1 focus:border-none rounded-md  "
                  type="text"
                  name="name"
                  value={contact.name}
                  onChange={handelChange}
                />
              </div>
              <div className="flex  justify-between items-center gap-x-6">
                <span class="material-symbols-outlined">call</span>
                <input
                  className="py-1 focus:border-none rounded-md  "
                  type="text"
                  name="phone"
                  value={contact.phone}
                  onChange={handelChange}
                />
              </div>
              <div>
                <label
                  htmlFor="checkbox"
                  className="py-4 px-3 font-semibold text-2xl text-sky-800   "
                >
                  Favourite ?
                </label>
                <input
                  name="favorites"
                  type="checkbox"
                  id="checkbox"
                  checked={contact.favorites}
                  onChange={handelChange}
                />
              </div>
              <button
                className="py-3 px-4 bg-indigo-500 rounded-md
             text-white hover:bg-white hover:border-indigo-500
              hover:text-indigo-500 font-bold"
              >
                ADD
              </button>
            </form>
          </div>
        </div>
        <h1 className="mt-4 pt-4 text-2xl">
          redux + update the phone list name or mobile
        </h1>
      </div>
      <PhoneList />
    </>
  );
};

export default Home;
