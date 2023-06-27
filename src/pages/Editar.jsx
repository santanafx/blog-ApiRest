import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export const Editar = () => {
  const navigate = useNavigate();
  const { getRequest, putRequest } = useFetch();
  const [newTitle, setNewTitle] = React.useState("");
  const [newText, setNewText] = React.useState("");
  const [select, setSelect] = React.useState("");
  const params = useParams();

  React.useEffect(() => {
    getRequest().then((dataFromRequest) => {
      const selectData = dataFromRequest.find(
        (element) => parseInt(element.id) === parseInt(params.id)
      );
      setNewTitle(selectData.title);
      setNewText(selectData.text);
    });
  }, []);

  const handleUpdate = () => {
    let image = "";
    let editPost = "";
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

    editPost = {
      id: params.id,
      image: image,
      category: select,
      title: newTitle,
      text: newText,
    };

    putRequest(editPost, params.id);
    navigate("/atualizar");
  };

  return (
    <section className="mt-5 max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8  flex flex-col min-h-[60vh]">
      {newTitle !== undefined ? (
        <>
          <label htmlFor="title" className="text-xl font-bold">
            Título:
          </label>
          <input
            className="w-[300px] mt-2 mb-3 px-3 py-2 text-gray-500 outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            type="text"
            id="title"
            value={newTitle}
            onChange={(event) => setNewTitle(event.target.value)}
          />
          <label htmlFor="select" className="text-xl font-bold">
            Categoria:
          </label>
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
          <label htmlFor="post" className="text-xl font-bold">
            Texto:
          </label>
          <textarea
            className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            id="post"
            cols="30"
            rows="10"
            value={newText}
            onChange={(event) => setNewText(event.target.value)}
          ></textarea>
          <div className="flex justify-center">
            <button
              className="mt-3 mr-3 px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150 w-[200px]"
              onClick={() => handleUpdate()}
            >
              Atualizar
            </button>
          </div>
        </>
      ) : (
        "Loading..."
      )}
    </section>
  );
};
