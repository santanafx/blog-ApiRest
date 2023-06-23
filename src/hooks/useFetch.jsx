import axios from "axios";

export const useFetch = () => {
  // const [data, setData] = React.useState([]);
  // const [countId, setCountId] = React.useState();
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

  const getRequest = async () => {
    const response = await axios.get("https://json-server-formulario-api-rest.vercel.app/posts");
    return response.data;
  };

  const postRequest = async (newObj) => {
    await axios.post("https://json-server-formulario-api-rest.vercel.app/posts", newObj).catch((err) => console.log(err));
  };

  const putRequest = async (newObj, id) => {
    await axios.put(`https://json-server-formulario-api-rest.vercel.app/posts/${id}`, newObj).catch((err) => console.log(err));
  };

  const deleteRequest = async (id) => {
    await axios.delete(`https://json-server-formulario-api-rest.vercel.app/posts/${id}`).catch((err) => console.log(err));
  };

  return { postRequest, putRequest, getRequest, deleteRequest };
};
