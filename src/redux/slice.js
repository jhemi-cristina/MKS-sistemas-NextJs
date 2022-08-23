import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "products",
  initialState: {
    data: [],
  },
  reducers: {
    async getProducts() {
      return await api
        .get("/products?page=1&rows=8&sortBy=id&orderBy=ASC")
        .then((response) => {
          console.log("products", response);
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
});

export async function getProducts() {
  return await api
    .get("/products?page=1&rows=8&sortBy=id&orderBy=ASC")
    .then((response) => {
      console.log("products", response);
    })
    .catch((error) => {
      console.log("error", error);
    });
}

// export const { getProducts } = slice.actions;

export default slice.reducer;
