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
          <section className="mt-5 max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
            <label htmlFor="title">Título:</label>
            <input type="text" id="title" placeholder="Digite o título..." required className="w-full mt-2 mb-3 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" onChange={(event) => setTitle(event.target.value)} />
            <label htmlFor="post">Texto:</label>
            <textarea className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" onChange={(event) => setText(event.target.value)}></textarea>
            <button className="mt-3 mr-3 px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150" onClick={() => handleCreatePost()}>Postar</button>
            <button className="mt-3 mr-3 px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150" onClick={() => navigate("/data")}>Visualizar Posts</button>
          </section>
          <section className="mt-5 max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
            <h1 className="text-4xl">Banco de dados:</h1>
            <hr className="mt-2"/>
            {data.map((element) => (
              <div key={element.id} className="mt-2 mb-5 max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <h1>{element.title}</h1>
                <div>
                <textarea className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" defaultValue={element.text}></textarea>
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
