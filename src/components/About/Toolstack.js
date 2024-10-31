import React from "react";
import { useNavigate } from "react-router-dom";

import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

import { MdOutlineScience } from "react-icons/md";
import { GiHealthNormal } from "react-icons/gi";
import { FaPersonCirclePlus } from "react-icons/fa6";
import { MdOutlineSick } from "react-icons/md";
import { ImEarth } from "react-icons/im";

function Toolstack() {
  const navigate = useNavigate();

  const handleCientificos = () => {
    navigate("/memorial/cientificos");
  };
  const handleMedicos = () => {
    navigate("/memorial/salud");
  };
  const handleVoluntarios = () => {
    navigate("/memorial/voluntarios");
  };
  const handlePacientes = () => {
    navigate("/memorial/pacientes");
  };
  const handlePlaneta = () => {
    navigate("/memorial/planeta");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", paddingBottom: "50px" }}>
      <div className="tech-icons" onClick={handleCientificos}>
        <MdOutlineScience className="icon-image" />
        <p className="icon-text">Científicos</p>
      </div>
      <div className="tech-icons" onClick={handleMedicos}>
        <GiHealthNormal className="icon-image" />
        <p className="icon-text">Médicos</p>
      </div>
      <div className="tech-icons" onClick={handleVoluntarios}>
        <FaPersonCirclePlus className="icon-image" />
        <p className="icon-text">Voluntarios</p>
      </div>
      <div className="tech-icons" onClick={handlePacientes}>
        <MdOutlineSick className="icon-image" />
        <p className="icon-text">Pacientes</p>
      </div>
      <div className="tech-icons" onClick={handlePlaneta}>
        <ImEarth className="icon-image" />
        <p className="icon-text">Planeta</p>
      </div>
    </div>
  );
}

export default Toolstack;
