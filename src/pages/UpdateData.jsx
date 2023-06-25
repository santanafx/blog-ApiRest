import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export const UpdateData = () => {
  const navigate = useNavigate();
  const { getRequest, putRequest } = useFetch();
  const [newTitle, setNewTitle] = React.useState("");
  const [newText, setNewText] = React.useState("");
  const params = useParams();

  React.useEffect(() => {
    getRequest().then((dataFromRequest) => {
      const select = dataFromRequest.find((element) => parseInt(element.id) === parseInt(params.id));
      setNewTitle(select.title);
      setNewText(select.text);
    });
  }, []);

  const handleUpdate = () => {
    let updatePost = {
      id: params.id,
      title: newTitle,
      text: newText,
    };

    putRequest(updatePost, params.id);
    navigate("/data");
  };

  return (
    <section  className="mt-5 max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
      {newTitle !== undefined ? (
        <div>
          <label htmlFor="title">Título</label>
          <input className="w-full mt-2 mb-3 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" type="text" id="title" value={newTitle} onChange={(event) => setNewTitle(event.target.value)} />
          <label htmlFor="post">Texto</label>
          <textarea className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" name="" id="post" cols="30" rows="10" value={newText} onChange={(event) => setNewText(event.target.value)}></textarea>
          <button className="mt-3 mr-3 px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"  onClick={() => handleUpdate()}>Atualizar</button>
        </div>
      ) : (
        "Loading..."
      )}
    </section>
  );
};
