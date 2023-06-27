import { AiOutlineMail, AiOutlineUser, AiFillPlusCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-black w-full ">
      <div className="text-white w-11/12 my-0 mx-auto flex p-3">
        <div className="w-2/4 flex justify-center items-center text-4xl">
          <a href="/#" className="select-none cursor-default">
            Infos
          </a>
        </div>
        <div className="w-2/4 flex flex-col justify-end gap-2 lg:flex-row">
          <div className="flex items-center text-xl border-1 border-white px-3 py-1 rounded-full mr-5 cursor-pointer hover:text-black hover:bg-white max-w-[160px]">
            <a href="/#" className="mr-2">
              Newsletter
            </a>
            <AiOutlineMail size="20" />
          </div>
          <div className="flex items-center mr-5">
            <span className="flex items-center ">
              <AiOutlineUser className="cursor-pointer mx-1 " size="30" />
              Bem vindo, Usuário
            </span>
          </div>
          <div
            className="flex items-center mr-5 cursor-pointer hover:opacity-70"
            onClick={() => navigate("/postar")}
          >
            <AiFillPlusCircle className="mx-1 text-indigo-600" size="30" />
            Postar
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center text-white w-11/12 my-0 mx-auto p-3">
        <Link
          to="/"
          className="mx-2 cursor-pointer flex items-center hover:opacity-70 text-indigo-600"
        >
          Blog
        </Link>
        <span className="mx-2 select-none text-xl">|</span>
        <Link to="/gestao" className="mx-2 flex items-center hover:opacity-70">
          Gestão por Processos
        </Link>
        <Link
          to="/inovacao"
          className="mx-2 flex items-center hover:opacity-70"
        >
          Inovação e Tecnologia
        </Link>
        <Link
          to="/transformacao"
          className="mx-2 flex items-center hover:opacity-70"
        >
          Transformação Digital
        </Link>
      </div>
    </header>
  );
};
