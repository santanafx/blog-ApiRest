import React from "react";
import axios from "axios";

export const useFetch = () => {
  const [data, setData] = React.useState([]);
  const [countId, setCountId] = React.useState();
  //   const [error, setError] = React.useState();

  //   const request = async (url, options) => {
  //     try {
  //       const response = await fetch(url, options);
  //       const json = await response.json();
  //       setData(json);
  //     } catch (erro) {
  //       setError("Error");
  //       console.log(error);
  //     }
  //   };

  const request = async () => {
    await axios.get("http://localhost:5000/posts").then((response) => setData(response.data));
    setCountId(data.length);
  };

  const post = async (newObj) => {
    await axios.post("http://localhost:5000/posts", newObj);
  };

  return { data, countId, request, post };
};
