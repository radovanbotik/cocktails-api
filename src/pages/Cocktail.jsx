import React from "react";
import { useGlobal } from "../contexts/context";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Cocktail.css";

export default function Cocktail() {
  const { data } = useGlobal();
  const { id } = useParams();
  const currentDrink = data.find(entry => {
    return entry.idDrink == id;
  });
  const {
    strDrink: name,
    strDrinkThumb: image,
    strInstructions: instructions,
    strAlcoholic: isAlcoholic,
  } = currentDrink;
  return (
    <div>
      <article className="single-cocktail">
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <h4>{isAlcoholic}</h4>
        <p>{instructions}</p>
      </article>
      <Link to="/">back to search</Link>
    </div>
  );
}
