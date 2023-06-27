import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import {
  AiOutlineDownload,
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiFillTwitterCircle,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";

export const Post = () => {
  const params = useParams();
  const { getRequest } = useFetch();
  const [data, setData] = React.useState();

  React.useEffect(() => {
    getRequest().then((dataFromRequest) => {
      const selectData = dataFromRequest.find(
        (element) => parseInt(element.id) === parseInt(params.id)
      );
      setData(selectData);
    });
  }, []);

  return (
    <section className="w-[95%] my-0 mx-auto">
      {data !== undefined ? (
        <div className="flex gap-5 max-[1100px]:flex-col max-[1100px]:items-center">
          <div className="w-[50%] mt-10 max-[1100px]:w-[100%]">
            <span className="bg-[#dce2e9] text-[#5d6268] font-semibold px-3 rounded-xl">
              Exclusive Content
            </span>
            <h4 className="mt-2 text-indigo-600 text-lg">{data.category}</h4>
            <h1 className="mt-4 mb-6 font-bold text-[3.5rem]">{data.title}</h1>
            <span>Infographic | PDF</span>
            <p className="mt-3 text-[#767e85] text-[1.1rem] text-justify">
              {data.text}
            </p>
            <button className="mt-4 bg-[#1f6bbf] text-white px-3 py-1 flex items-center justify-center rounded-2xl hover:opacity-80">
              Download Content
              <AiOutlineDownload />
            </button>
          </div>
          <div className="w-[50%] max-[1100px]:w-[100%]">
            <img src={data.image} alt="" />
          </div>
        </div>
      ) : (
        "Loading..."
      )}
      <div className="w-[45%] mx-auto my-20 max-[1100px]:w-[80%]">
        <p className="text-justify">
          Unlike traditional solutions that make customer contact a costly task,
          CRM is{" "}
          <strong>
            one of the most powerful tools to manage and integrate the entire
            relationship
          </strong>{" "}
          with internal and external audiences: employees, customers, partners,
          and suppliers.
        </p>
        <p className="text-justify my-2">
          Learn in this infographic the advantages of using the solution and
          understand its essential integrations. Furthermore, you will be able
          to see some data with impressive results achieved by companies that
          have adopted this system.
        </p>
        <hr className="my-4" />
        <div className="flex flex-col items-center bg-[#e3e3e3] drop-shadow-lg p-4 rounded-xl">
          <h2 className="text-2xl text-black">Sign up for our newsletter!</h2>
          <button className="mt-4 bg-[#1f6bbf] text-white px-3 py-1 flex items-center justify-center rounded-2xl hover:opacity-80">
            Subscribe to our newsletter
            <AiOutlineMail />
          </button>
        </div>
        <div className="flex justify-between mt-5">
          <div>
            <span className="text-2xl">Share</span>
          </div>
          <div className="flex">
            <AiOutlineWhatsApp
              className="mx-2 hover:cursor-pointer"
              size="50"
            />
            <AiFillTwitterCircle
              className="mx-2 hover:cursor-pointer"
              size="50"
            />
            <AiOutlineFacebook
              className="mx-2 hover:cursor-pointer"
              size="50"
            />
            <AiOutlineLinkedin
              className="mx-2 hover:cursor-pointer"
              size="50"
            />
          </div>
        </div>
        <hr className="my-4" />
        <h1 className="text-4xl drop-shadow-lg">Infos</h1>
      </div>
    </section>
  );
};
