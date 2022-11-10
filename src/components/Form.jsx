import React from "react";
import { useState, useContext } from "react";
import Loader from "./Loader";
import { AppContext, AppProvider, useGlobal } from "../contexts/context";

export default function Form() {
  const values = useGlobal();
  const { setSearchTerm } = values;

  const [userSearch, setUserSearch] = useState("");
  const handleChange = e => {
    setUserSearch(e.target.value);
    setSearchTerm(e.target.value);
  };
  return (
    <form className="form" style={{ display: "grid" }}>
      <label htmlFor="search">browse the cocktails</label>
      <input
        type="text"
        id="search"
        onChange={e => handleChange(e)}
        value={userSearch}
      />
    </form>
  );
}
