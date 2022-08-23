import CardProduct from "components/CardProduct";
// import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { getProducts } from "redux/store";
import { api } from "../services/api";
import { Container } from "./../styles/HomeStyle";
// const Home: NextPage = () => {
const Home = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  async function getProducts() {
    return await api
      .get("/products?page=1&rows=8&sortBy=id&orderBy=ASC")
      .then((response) => {
        console.log("response", response?.data?.products);
        setProducts(response?.data?.products);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  useEffect(() => {
    getProducts();
  }, []);
  // dispatch();

  return (
    <Container>
      {products.map((item) => (
        <CardProduct
          key={item?.id}
          title={item?.name}
          price={item?.price}
          description={item?.description}
          // width={100}
          // height={100}
          // layout="fill"
          // imageUrl={
          //   "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp"
          // }
        />
        // console.log({ item });
      ))}
    </Container>
  );
};

export default Home;
