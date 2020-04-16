import React from "react";

const Recipe = ({ title, image, ingredients, page }) => {
  return (
    <>
      <div className="recipe-wrap">
        <h2 className="rec-desc">{title}</h2>
        <ul className="list-rec">
          {ingredients.map((ingredient) => (
            <li>{ingredient.text}</li>
          ))}
        </ul>

        <img className="img-rec" src={image} alt="" />
        <a className="link-rec" href={page}>
          See whole recipe!
        </a>
      </div>
    </>
  );
};

export default Recipe;
