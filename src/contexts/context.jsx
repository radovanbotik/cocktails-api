import React from "react";
import { useState, useEffect, useContext } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async url => {
    try {
      setLoading(true);
      const resp = await fetch(`${url}${searchTerm}`);
      const answ = await resp.json();
      const { drinks } = answ;
      if (drinks) {
        setData(drinks);
        setLoading(false);
      } else {
        setData([]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url, searchTerm]);

  return (
    <AppContext.Provider
      value={{ loading, data, searchTerm, setLoading, setData, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobal = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobal };
