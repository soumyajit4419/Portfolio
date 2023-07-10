import React from "react";
import { Col, Row } from "react-bootstrap";
import matlabLogo from "../../Assets/matlab.png";
import {
    DiPython,
    DiGit,
    DiSpark
} from "react-icons/di";
import {
    SiCsharp,
    SiDatabricks,
    SiDbt,
    SiTerraform,
    SiCircleci
} from "react-icons/si";

import {TbSql} from "react-icons/tb";

import { FaUnity, FaAws } from "react-icons/fa";


function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiDatabricks />
                <p style={{fontSize: '12px'}}>Databricks</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiSpark />
                <p style={{fontSize: '12px'}}>Spark</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaAws />
                <p style={{fontSize: '12px'}}>AWS</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiDbt />
                <p style={{fontSize: '12px'}}>Dbt</p>
            </Col>  
            <Col xs={4} md={2} className="tech-icons">
                <SiTerraform />
                <p style={{fontSize: '12px'}}>Terraform</p>
            </Col>             
            <Col xs={4} md={2} className="tech-icons">
                <SiCircleci />
                <p style={{fontSize: '12px'}}>CI/CD (CircleCI)</p>
            </Col>           
 
            <Col xs={4} md={2} className="tech-icons">
                <DiPython />
                <p style={{fontSize: '12px'}}>Python</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <TbSql />
                <p style={{fontSize: '12px'}}>SQL</p>
            </Col>            

            {/* <Col xs={4} md={2} className="tech-icons">
                <DiGit />
                <p style={{fontSize: '12px'}}>Git</p>
            </Col> */}

        </Row>
    );
}

export default Techstack;
