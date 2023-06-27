import { useNavigate } from "react-router-dom";

export const Card = ({ title, image, category, date, id }) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-[350px] h-[400px] bg-white rounded-3xl drop-shadow-2xl overflow-hidden relative transition duration-500 hover:scale-105">
      <img
        className="cursor-pointer"
        src={image}
        alt=""
        onClick={() => navigate(`/post/${id}`)}
      />
      <span className="text-indigo-600 p-3">{category}</span>
      <h4
        className="break-words font-bold p-3 cursor-pointer text-ellipsis"
        onClick={() => navigate(`/post/${id}`)}
      >
        {title}
      </h4>
      <span className="absolute bottom-4 right-4">{date}</span>
    </div>
  );
};
