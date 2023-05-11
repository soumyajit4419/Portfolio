import React from "react";
import { TbBrandCSharp } from "react-icons/tb";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import { SiDocker, SiAmazonaws, SiMysql, SiNextdotjs } from "react-icons/si";

function Techstack() {
  return (
    <div className="justify-center text-center tech_stack">
      <div className="rounded-md border-2 border-purple-900 w-full p-4 flex justify-center items-center hover:p-11">
        <DiReact size={90} />
      </div>

      <div className="rounded-md border-2 border-purple-900 w-full p-4 flex justify-center items-center">
        <DiJavascript1 size={90} />
      </div>
      <div className="rounded-md border-2 border-purple-900 w-full p-4 flex justify-center items-center">
        <DiNodejs size={90} />
      </div>

      <div className="rounded-md border-2 border-purple-900 w-full p-4 flex justify-center items-center">
        <SiNextdotjs size={90} />
      </div>
      <div className="rounded-md border-2 border-purple-900 w-full p-4 flex justify-center items-center">
        <SiAmazonaws size={90} />
      </div>
      <div className="rounded-md border-2 border-purple-900 w-full p-4 flex justify-center items-center">
        <SiDocker size={90} />
      </div>
      <div className="rounded-md border-2 border-purple-900 w-full p-4 flex justify-center items-center">
        <DiGit size={90} />
      </div>
      <div className="rounded-md border-2 border-purple-900 w-full p-4 flex justify-center items-center">
        <SiMysql size={90} />
      </div>

      <div className="rounded-md border-2 border-purple-900 w-full p-4 flex justify-center items-center">
        <DiMongodb size={90} />
      </div>
      <div className="rounded-md border-2 border-purple-900 w-full p-4 flex justify-center items-center">
        <TbBrandCSharp size={90} />
      </div>
    </div>
  );
}

export default Techstack;
