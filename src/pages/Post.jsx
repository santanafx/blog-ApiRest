import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export const Post = () => {
  const params = useParams();
  const { getRequest } = useFetch();
  const [data, setData] = React.useState();

  React.useEffect(() => {
    getRequest().then((dataFromRequest) => {
      const selectData = dataFromRequest.find(
        (element) => parseInt(element.id) === parseInt(params.id)
      );
      setData(selectData);
    });
  }, []);

  return (
    <section>
      {data !== undefined ? (
        <div>
          <span>Exclusive Content</span>
          <h4>{data.category}</h4>
          <h1>{data.title}</h1>
          <span>Infographic | PDF</span>
          <p>{data.text}</p>
          <button>Download Content</button>
        </div>
      ) : (
        "Loading..."
      )}
    </section>
  );
};
