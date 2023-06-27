import React from "react";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";

export const Home = () => {
  const [data, setData] = React.useState();
  const { getRequest } = useFetch();

  React.useEffect(() => {
    getRequest().then((dataFromRequest) => {
      setData(dataFromRequest);
    });
  }, []);

  return (
    <main className=" flex justify-center mt-10 min-h-[85vh] mb-10">
      {data !== undefined ? (
        <section className="flex justify-center flex-wrap gap-10 max-w-7xl">
          {data.map((element) => (
            <Card
              key={element.id}
              title={element.title}
              text={element.text}
              image={element.image}
              category={element.category}
              date={element.date}
            />
          ))}
        </section>
      ) : (
        "Loading..."
      )}
    </main>
  );
};
