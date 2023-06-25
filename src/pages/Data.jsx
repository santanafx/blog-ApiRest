import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

export const Data = () => {
  const { getRequest, deleteRequest } = useFetch();
  const [data, setData] = React.useState([]);
  const [updatePage, setUpdatePage] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    getRequest().then((dataFromRequest) => {
      setData(dataFromRequest);
    });
  }, [updatePage]);

  const handleDelete = (id) => {
    deleteRequest(id);
    setUpdatePage(!updatePage);
  };

  return (
    <section className="mt-5 max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
      {data !== undefined ? (
        <section>
            <h1 className="text-4xl">Banco de dados:</h1>
            <hr className="mt-2"/>
          {data.map((element) => (
            <div key={element.id} className="mt-2 mb-5 max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
              <h1>{element.title}</h1>
              <div>
              <textarea className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" defaultValue={element.text}></textarea>
              </div>
              <button className="mt-3 mr-3 px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150" onClick={() => handleDelete(element.id)}>Deletar</button>
              <button className="mt-3 mr-3 px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150" onClick={() => navigate(`/updateData/${element.id}`)}>Edit</button>
            </div>
          ))}
        </section>
      ) : (
        "Loading..."
      )}
    </section>
  );
};
