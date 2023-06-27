export const Footer = () => {
  return (
    <footer className="bg-black w-full sticky top-[100%]">
      <div className="w-[90%] h-[300px] mx-auto flex justify-center">
        <div className="mt-10 mx-5">
          <h1 className="text-4xl text-white select-none">Infos</h1>
        </div>
        <div className="flex flex-col mt-10 mx-5 [&>span]:cursor-pointer [&>span]:my-1">
          <p className="text-[1.2rem] mb-3 text-white select-none">SOLUÇÕES</p>
          <span className="hover:text-white hover:opacity-50">Analytics</span>
          <span className="hover:text-white hover:opacity-50">Billing</span>
          <span className="hover:text-white hover:opacity-50">BPM/ECM</span>
          <span className="hover:text-white hover:opacity-50">CRM</span>
        </div>
        <div className="flex flex-col mt-10 mx-5 [&>span]:cursor-pointer [&>span]:my-1">
          <p className="text-[1.2rem] mb-3 text-white select-none">SEGMENTOS</p>
          <span className="hover:text-white hover:opacity-50">Construção</span>
          <span className="hover:text-white hover:opacity-50">Educação</span>
          <span className="hover:text-white hover:opacity-50">Energia</span>
          <span className="hover:text-white hover:opacity-50">Financeiro</span>
        </div>
        <div className="flex flex-col mt-10 mx-5 [&>span]:cursor-pointer [&>span]:my-1">
          <p className="text-[1.2rem] mb-3 text-white select-none">INFO</p>
          <span className="hover:text-white hover:opacity-50">Marketplace</span>
          <span className="hover:text-white hover:opacity-50">
            Planos e preços
          </span>
          <span className="hover:text-white hover:opacity-50">Clientes</span>
          <span className="hover:text-white hover:opacity-50">Parceiros</span>
          <span className="hover:text-white hover:opacity-50">Carreiras</span>
          <span className="hover:text-white hover:opacity-50">Contato</span>
        </div>
        <div className="flex flex-col mt-10 mx-5 [&>span]:cursor-pointer [&>span]:my-1">
          <p className="text-[1.2rem] mb-3 text-white select-none">
            LINKS POPULARES
          </p>
          <span className="hover:text-white hover:opacity-50">Blog</span>
          <span className="hover:text-white hover:opacity-50">
            Portal do cliente e Parceiro
          </span>
          <span className="hover:text-white hover:opacity-50">
            Eventos e Treinamentos
          </span>
          <span className="hover:text-white hover:opacity-50">
            Parcerias Estratégicas
          </span>
        </div>
      </div>
      <div className="w-[90%] py-5 mx-auto flex justify-end">
        <div>
          <span className="mx-3 hover:text-white hover:opacity-50 cursor-pointer">
            Política de privacidade
          </span>
          <span className="mx-3 hover:text-white hover:opacity-50 cursor-pointer">
            Cookies
          </span>
          <span className="mx-3 text-white select-none cursor-default">
            © 2023 SYDLE. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
