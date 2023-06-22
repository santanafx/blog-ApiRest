import React from "react";
import { useFetch } from "../hooks/useFetch";

export const Data = () => {
  const { request, data } = useFetch();

  React.useEffect(() => {
    request();
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
            </div>
          ))}
        </>
      ) : (
        "Loading..."
      )}
    </section>
  );
};
