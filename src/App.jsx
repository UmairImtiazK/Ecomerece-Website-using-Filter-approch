import { useState } from "react";
import "./App.css";
import MainBar from "./assets/components/MainBar/MainBar";
import NavBar from "./assets/components/NavBar/NavBar";
import SideBar from "./assets/components/SideBar/SideBar";
import data from "./assets/All__Data/data";
import GridProduct from './assets/components/Product/GridProduct';
import Product from "./assets/components/Product/Product";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };


  const filteredItems = data.filter((pro) =>  pro.title.toLowerCase().indexOf(query.toLowerCase()) !== -1 );

  function filteredData(data, selected, query) {
    let filteredProducts = data;


    if (query) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Product
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(data, selectedCategory, query);
  return (
    <div>
      <NavBar query={query} handleInputChange={handleInputChange} />
      <SideBar handleChange={handleChange} />
      <MainBar handleClick={handleClick} />
      <GridProduct result={result} />
    </div>
  );
}

export default App;
