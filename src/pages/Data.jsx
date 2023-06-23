import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

export const Data = () => {
  const { get, data } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    get();
  }, []);

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
              <button>Deletar</button>
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
