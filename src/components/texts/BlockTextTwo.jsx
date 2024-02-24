import React from "react";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";

const BlockTextTwo = ({ title, paragraph, isService }) => {
  return (
    <div>
      <div className="container_all">
        <div className="group md:w-[100%]">
          {isService ? <h2 className="text-center text-gold">SERVICIO</h2> : ""}
          <div className="text-center">
            <h1 className="pt-5 md:w-[70%] m-auto">{title}</h1>
          </div>
          <div className="text-center">
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              remarkPlugins={[remarkGfm]}
              className="md:w-[40%] m-auto mt-5 mb-10 md:mt-5 "
            >
              {paragraph}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockTextTwo;
