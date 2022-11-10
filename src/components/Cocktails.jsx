import React from "react";
import "./Cocktails.css";
import Loader from "./Loader";
import { useState } from "react";
import { useGlobal } from "../contexts/context";
import CocktailCard from "./CocktailCard";

export default function Cocktails() {
  const { loading, data } = useGlobal();
  if (loading) {
    return <Loader />;
  }
  if (data.length < 1) {
    return <h2>no cocktails with such name</h2>;
  }
  const cocktailList = data.map(entry => {
    return <CocktailCard key={entry.idDrink} {...entry} />;
  });
  return (
    <div className="cocktail-list">
      {loading && <Loader />}
      {cocktailList}
    </div>
  );
}
