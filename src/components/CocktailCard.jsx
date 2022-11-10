import React from "react";
import "./CocktailCard.css";
import { Link } from "react-router-dom";

export default function CocktailCard(props) {
  const {
    idDrink: ID,
    strAlcoholic: isAlcoholic,
    strDrink: name,
    strDrinkThumb: image,
  } = props;
  return (
    <Link to={`/cocktail/${ID}`}>
      <article className="cocktail-card">
        <h2>{name}</h2>
        <h3>{isAlcoholic}</h3>
        <img src={image} alt={name} />
      </article>
    </Link>
  );
}
