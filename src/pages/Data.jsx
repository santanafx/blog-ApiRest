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
    <section>
      {data !== undefined ? (
        <>
          {data.map((element) => (
            <div key={element.id}>
              <h1>{element.title}</h1>
              <div>
                <p>{element.text}</p>
              </div>
              <button onClick={() => handleDelete(element.id)}>Deletar</button>
              <button onClick={() => navigate(`/updateData/${element.id}`)}>Edit</button>
            </div>
          ))}
        </>
      ) : (
        "Loading..."
      )}
    </section>
  );
};
