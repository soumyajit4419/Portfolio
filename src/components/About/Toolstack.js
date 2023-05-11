import React from "react";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  return (
    <div className="justify-center text-center tech_stack">
      <div className="rounded-md border-2 border-purple-900 w-full p-4 flex justify-center items-center">
        <SiLinux size={90} />
      </div>
      <div className="rounded-md border-2 border-purple-900 w-full p-4 flex justify-center items-center">
        <SiVisualstudiocode size={90} />
      </div>
      <div className="rounded-md border-2 border-purple-900 w-full p-4 flex justify-center items-center">
        <SiPostman size={90} />
      </div>
      <div className="rounded-md border-2 border-purple-900 w-full p-4 flex justify-center items-center">
        <SiVercel size={90} />
      </div>
      <div className="rounded-md border-2 border-purple-900 w-full p-4 flex justify-center items-center">
        <SiHeroku size={90} />
      </div>
    </div>
  );
}

export default Toolstack;
