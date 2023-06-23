import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { get, data, countId, post } = useFetch();
  const [text, setText] = React.useState();
  const [title, setTitle] = React.useState();
  const [updatePage, setUpdatePage] = React.useState(false);
  const [addId, setAddId] = React.useState(countId);
  const navigate = useNavigate();

  React.useEffect(() => {
    get();
  }, [updatePage]);

  const handleCreatePost = () => {
    setAddId(addId + 1);
    let createPost = {
      id: addId,
      title: title,
      text: text,
    };
    post(createPost);
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
