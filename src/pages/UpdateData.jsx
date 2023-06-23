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
    <section>
      {newTitle !== undefined ? (
        <div>
          <label htmlFor="title">Título</label>
          <input type="text" id="title" value={newTitle} onChange={(event) => setNewTitle(event.target.value)} />
          <label htmlFor="post">Texto</label>
          <textarea name="" id="post" cols="30" rows="10" value={newText} onChange={(event) => setNewText(event.target.value)}></textarea>
          <button onClick={() => handleUpdate()}>Atualizar</button>
        </div>
      ) : (
        "Loading..."
      )}
    </section>
  );
};
