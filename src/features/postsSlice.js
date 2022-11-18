import { createSlice } from "@reduxjs/toolkit";

import { nanoid } from "@reduxjs/toolkit";
const initialState = [
  {
    name: "alae",
    phone: "06324120340",
    favorites: true,
    id: 1,
  },
  {
    name: "kadiri",
    phone: "0651799123",
    favorites: false,
    id: 2,
  },
];
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: contact => {
        const id = nanoid();
        const { name, phone, favorites } = contact;
        return {
          payload: {
            id,
            name,
            phone,
            favorites,
          },
        };
      },
    },
  },
});

export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
