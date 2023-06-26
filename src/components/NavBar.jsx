import React from "react";
import { AiOutlineMail, AiOutlineSearch } from "react-icons/ai";

export const NavBar = () => {
  return (
    <header className="bg-black w-full ">
      <div className="text-white w-11/12 my-0 mx-auto flex p-3">
        <div className="w-2/4 flex justify-center items-center text-4xl">
          <a href="/#" className="select-none cursor-default">
            Infos
          </a>
        </div>
        <div className="w-2/4 flex justify-end">
          <div className="flex items-center text-xl border-1 border-white px-3 py-1 rounded-full mr-10 cursor-pointer hover:text-black hover:bg-white">
            <a href="/#" className="mr-2">
              Newsletter
            </a>
            <AiOutlineMail size="20" />
          </div>
          <div className="flex items-center cursor-pointer">
            <AiOutlineSearch size="30" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center text-white w-11/12 my-0 mx-auto flex p-3">
        <h1 className="mx-2 cursor-pointer flex items-center hover:opacity-50">
          Blog
        </h1>
        <span className="mx-2 select-none text-xl">|</span>
        <a className="mx-2 flex items-center hover:opacity-70" href="/#">
          Gestão por Processos
        </a>
        <a className="mx-2 flex items-center hover:opacity-70" href="/#">
          Inovação e Tecnologia
        </a>
        <a className="mx-2 flex items-center hover:opacity-70" href="/#">
          Transformação Digital
        </a>
      </div>
    </header>
  );
};
