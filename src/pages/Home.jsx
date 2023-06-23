import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { getRequest, postRequest } = useFetch();
  const [data, setData] = React.useState([]);
  const [count, setCount] = React.useState();
  const [text, setText] = React.useState();
  const [title, setTitle] = React.useState();
  const [updatePage, setUpdatePage] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    getRequest().then((dataFromRequest) => {
      setData(dataFromRequest);
      setCount(data.length);
    });
  }, [updatePage]);

  const handleCreatePost = () => {
    setCount(() => count + 1);
    let createPost = {
      id: count,
      title: title,
      text: text,
    };
    postRequest(createPost);
    setUpdatePage(!updatePage);
  };

  return (
    <main>
      {data !== undefined ? (
        <>
          <section style={{ display: "flex", flexDirection: "column", maxWidth: "600px" }}>
            <label htmlFor="title">Título</label>
            <input type="text" id="title" placeholder="Digite o título..." onChange={(event) => setTitle(event.target.value)} />
            <label htmlFor="post">Texto</label>
            <textarea name="" id="post" cols="30" rows="10" placeholder="Digite o texto..." onChange={(event) => setText(event.target.value)}></textarea>
            <button onClick={() => handleCreatePost()}>Postar</button>
            <button onClick={() => navigate("/data")}>Visualizar Posts</button>
          </section>
          <section>
            {data.map((element) => (
              <div key={element.id}>
                <h1>{element.title}</h1>
                <div>
                  <p>{element.text}</p>
                </div>
              </div>
            ))}
          </section>
        </>
      ) : (
        "Loading..."
      )}
    </main>
  );
};
