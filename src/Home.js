import React from "react";
// import Home_img from "./Home.png";
import Product from "./Product";

import data from "./data/products.json";

import Poster from "./carousel_2.jpg";

const product_List1 = data.slice(0, 4);
const product_List2 = data.slice(4, 8);
const product_List3 = data.slice(8, 12);

const Home = () => {
  return (
    <section className="home">
      <div className="Home__container">
        {/* <img class="home__img" src={Home_img} /> */}
        <img class="home__img" alt="poster" src={Poster} />

        <div className="home__rows">
          {/* <Product  />
                <Product />
                <Product /> */}
          {/* <Product /> */}

          {product_List1.map((product) => {
            const { id, title, price, img } = product;
            return (
              <Product key={id} id={id} title={title} price={price} img={img} />
            );
          })}
        </div>
        <div className="home__rows">
          {/* <Product />
                <Product /> */}

          {product_List2.map((product) => {
            const { id, title, price, img } = product;
            return (
              <Product key={id} id={id} title={title} price={price} img={img} />
            );
          })}
        </div>
        <div className="home__rows">
          {/* <Product />  */}
          {product_List3.map((product) => {
            const { id, title, price, img } = product;
            return (
              <Product key={id} id={id} title={title} price={price} img={img} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Home;
