import React from "react";
import { Col, Row } from "react-bootstrap";
import aws_badge from "../../Assets/aws-badge.png";
import databricks_badge from "../../Assets/databricks_badge.png";

function Certifications() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {/* other components */}
            
            <Col md={4} className="certification">
                <img src={aws_badge} alt="AWS Certified Solutions Architect – Associate" style={{ width: '60%', height: 'auto' }}/>
                <h3 style={{ color: 'lightgrey' }}>AWS Certified Solutions Architect – Associate</h3>
                <h4 style={{ color: 'lightgrey' }}>12/2021</h4>
            </Col>

            <Col md={4} className="certification">
                <img src={databricks_badge} alt="Databricks Certified Data Engineer - Professional" style={{ width: '60%', height: 'auto' }}/>
                <h3 style={{ color: 'lightgrey' }}>Databricks Certified Data Engineer - Professional</h3>
                <h4 style={{ color: 'lightgrey' }}>07/2023</h4>
            </Col>

            {/* other components */}
        </Row>
    );
}

export default Certifications;
