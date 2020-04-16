import React, { useEffect, useState } from "react";
import Recipe from "./components/Recipe";
import Header from "./components/Header";

const App = () => {
  const APP_ID = "f80937d1";
  const APP_KEY = "644d9f4124bef3bdf4197f87abb35a1c";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <Header />
      <h1 className="header-rec">Wanna see results?</h1>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          onChange={updateSearch}
          type="text"
          placeholder="e.g. egg, ham, bread"
          value={search}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          image={recipe.recipe.image}
          page={recipe.recipe.url}
          ingredients={recipe.recipe.ingredients}
          className="wrap-rec"
        />
      ))}
    </div>
  );
};

export default App;
