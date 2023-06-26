import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

export const Postar = () => {
  const { getRequest, postRequest } = useFetch();
  const [data, setData] = React.useState([]);
  const [count, setCount] = React.useState();
  const [text, setText] = React.useState();
  const [title, setTitle] = React.useState();
  const [updatePage, setUpdatePage] = React.useState(false);
  const [select, setSelect] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    getRequest().then((dataFromRequest) => {
      setData(dataFromRequest);
    });
  }, [updatePage]);

  const handleCreatePost = () => {
    setCount(data.length);
    setCount(() => count + 1);
    let image = "";
    let createPost = "";
    if (select == "Gestão por Processos") {
      image = "/images/gestao.jpg";
    }
    if (select == "Inovação e Tecnologia") {
      image = "/images/inovacao.png";
    }
    if (select == "Transformação Digital") {
      image = "/images/transformacao.jpg";
    }
    if (select === "") {
      return;
    }
    createPost = {
      id: count,
      image: image,
      category: select,
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
          <section className="mt-5 max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8 flex flex-col">
            <label htmlFor="title">Título:</label>
            <input
              type="text"
              id="title"
              placeholder="Digite o título..."
              required
              className="w-[300px] mt-2 mb-3 px-3 py-2 text-gray-500  outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              onChange={(event) => setTitle(event.target.value)}
            />
            <label htmlFor="select">Categoria:</label>
            <select
              onChange={(event) => {
                setSelect(event.target.value);
              }}
              required
              value={select}
              id="select"
              className=" w-[300px] mt-2 mb-3 px-3 py-2 text-gray-500  outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            >
              <option>Selecione uma opção</option>
              <option>Gestão por Processos</option>
              <option>Inovação e Tecnologia</option>
              <option>Transformação Digital</option>
            </select>
            <label htmlFor="post">Texto:</label>
            <textarea
              className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none  outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              onChange={(event) => setText(event.target.value)}
            ></textarea>
            <div className="flex justify-center items-center mt-10">
              <button
                className="w-[300px] mr-3 px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                onClick={() => handleCreatePost()}
              >
                Postar
              </button>
              <button
                className="w-[300px] mr-3 px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                onClick={() => navigate("/data")}
              >
                Visualizar Posts
              </button>
            </div>
          </section>
        </>
      ) : (
        "Loading..."
      )}
    </main>
  );
};
