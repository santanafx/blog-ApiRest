import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export const UpdateData = () => {
  const { data, get } = useFetch();
  const [selectData, setSelectData] = React.useState(null);
  const params = useParams();

  React.useEffect(() => {
    get();
  }, []);

  React.useEffect(() => {
    data.forEach((element) => {
      if (element.id === params.id) {
        setSelectData(element);
      }
    });
  }, [data]);

  return (
    <section>
      {console.log(selectData)}
      {selectData !== null ? (
        <div>
          <h1>{selectData.title}</h1>
          <div>
            <p>{selectData.text}</p>
          </div>
          <button>Atualizar</button>
        </div>
      ) : (
        "Loading..."
      )}
    </section>
  );
};
