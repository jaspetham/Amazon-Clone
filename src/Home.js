import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />

        <div className="home_row">
          <Product
            id="1"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="Kenwood something somethingbaking , stylish kitchen mixer with k-beater"
            price={239}
            image="https://m.media-amazon.com/images/I/61aT8jl8THL._AC_UY218_.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="3"
            title="Samsung CFG73 27 inch 144Hz 1ms QLED Curved FreeSync Gaming Monitor (LC27FG73FQNXZA)"
            price={500}
            image="https://m.media-amazon.com/images/I/716Uu2LN9NL._AC_UY218_.jpg"
            rating={2}
          />
          <Product
            id="4"
            title="Echo Plus (2nd Generation) with Amazon Smart Plug - Sandstone"
            price={84.99}
            image="https://m.media-amazon.com/images/I/61rZzCkxT0L._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="5"
            title="Magic Keyboard for 12.9-inch iPad Pro (4th Generation) - US English"
            price={84.99}
            image="https://m.media-amazon.com/images/I/71vh06cKISL._AC_UY218_.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id="6"
            title="Projector Screen 150 inch 16:9 HD Foldable Anti-Crease Portable Projection Movies Screen for Home Theater Outdoor Indoor Support Double Sided Projection by P-JING"
            price={45.99}
            image="https://m.media-amazon.com/images/I/71qC7nQWn0L._AC_UY218_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
