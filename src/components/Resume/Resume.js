import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Afolabi_Omotoso_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  /*const [spojRank, upadteSpojRank] = useState(0); */
  /*const [hackerrank, upadteHackerank] = useState(0); */
  /*const [sem, upadateSem] = useState(0);*/
  /*const [cgpa, upadteCgpa] = useState(0); */

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        /*upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem); */
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
        <h3 className="resume-title">Experience</h3>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
           
            <Resumecontent
              title="Senior DevOps Engineer [Arca Payments]"
              date="Jan 2021 - Present"
              content={[
                "Build and manage automation pipelines for operational workflows.",
                "Assist in integrating diverse technologies in multiple environments to provide monitoring, alerting, and reporting of performance and costs.",
                "Manage work in an agile operations framework, balancing sprint-based work with daily operational needs.",
                "Assist in troubleshooting and resolving system outages or performance impact, and communicate findings for ongoing improvement.",
                "Using build automation and continuous integration/delivery ecosystem: Git, Groovy, Maven/Gradle, Docker, Nexus, Artifactory, Selenium, Jenkins, Docker.",
                "Handle code deployments in all environments.",
                "Provide technical guidance and educate team members and co-workers on development and operations.",
                "Build, maintain, and monitor configuration standards.",
                "Maintain day-to-day management and administration of projects.",
                "Document and design various processes; update existing processes.",
                "Improve infrastructure development and application development.",
              ]}
            />
            <Resumecontent
              title="DevOps Engineer [Strive Consulting LLC (Remote)]"
              date="April 2020 - June 2020"
              content={[
                "Implementation of Unified Data Platform leveraging on Azure Data Factory for data Orchestration, Azure blob storage for ingestion and Snowflakes for Data storage.",
                "Planning and implementation of data and storage management solutions in Azure (SQL Azure, Azure files, Queue storage, Blob storage).",
                "Created frameworks and automation in the development process to maximize build efficiency and secure solid code.",
                "Performed code reviews, evaluate implementations, and provide feedback for tool improvements.",
                "Monitored and tracked deployments and pipeline failures using Azure Monitoring and application Insights.",
                "Created a reusable Infrastructure as a Code template for future use."
              ]}
            />
           <Resumecontent
              title="IT System Administrator [Vixa Group]"
              date="Sept. 2014 - March 2018"
              content={[
                "Provide high-quality, detailed technical support and troubleshooting with an emphasis on customer satisfaction.",
                "Assists employees with utilizing application software and creating and/or modifying various queries to meet business process needs.",
                "Design, maintain and support of the company's data network, servers, and security systems.",
                "Create new user's account profiles on Active Directory, managing user's password issues and assigns access rights to software applications Management of users in Microsoft Exchange, Skype for business and Microsoft Teams.",
                "Manage Application Loadbalancing and reverse proxy with NGINX.",
                "Management of the Company's intranet on SharePoint Installation of client/server applications and essential software patches, carrying out any required maintenance of applications and identify compatibility issues.",
                "Design and managed the company online structure, created and manage the company website and the online shop.",
                "Backup and Disaster recovery of the company data Managed and performed the installations, upgrades, migrations, backup, software distribution, virus protection, patch management and routine maintenance of workstations and servers."
              ]}
            />
            <Resumecontent
              title="IT Support Officer [Wema Bank]"
              date="May 2012 - August 2014"
              content={[
                "Assist in the overall operation of the information technology function of the company.",
                "Install and configure computers, phones, printers, and computer and telephone peripherals.",
                "Perform routine maintenance and repairs on desktop computers and computer and telephone peripherals.",
                "Recommend and implements solutions to ensure minimum delay and effective operation for system users.",
                "Provide high-quality, detailed technical support and troubleshooting with an emphasis on customer satisfaction.",
                "Assist employees with utilizing application software and creating and/or modifying various queries to meet business process needs.",
                "Explain complex information and procedures to employees and officials lacking technical knowledge.",
                "Provided 1st level support for incidents relating to desktop client applications (Office 365, Sophos antivirus, Palo Alto Networks Firewalls, VMware, Windows and Linux)."
              ]}
            />  
            <h3 className="resume-title">Publications</h3>
            <Resumecontent
              title=""
              content={[
                "Article entitled An Overlapping Sliding Window and Combined Feature based Emotion Recognition System for EEG Signals publised in Emerald Publication;10.1108/ACI-05-2021-0130",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">

            <Resumecontent
              title="DevOps Engineer [JLL (Remote)] "
              date="July 2020 - Dec. 2020"
              content={[
                "Developing infrastructure that is scalable, reliable, and monitored for all microservices.",
                "Inculcating 'infrastructure as code' mentality in the Platform team overall.",
                "Working with the application teams to prioritize new requests for functionality. Specifically, new user-facing functionality (e.g. the ability to ingest IoT data, subscription-based consumption, etc.).",
                "Manage backlog via effective sprint planning based on feedback from the application teams.",
                "Migration of OSS Jenkins (Open Source Jenkins) to CloudBees Jenkins.",
                "Setting up monitoring with performance metrics, OMS.",
                "Worked closely with the software engineering and product management teams to design. deliver and manage our services with high uptime."
              ]}
            />
          
          <Resumecontent
              title="Software Developer [Tavia Technologies] "
              date="Nov. 2019 - Dec. 2020"
              content={[
                "Analyzed current technology utilized within the company and develop steps and processes to improve and expand upon them.",
                "Plan, develop, implement and maintain the overall company's software security strategy.",
                "Leveraged Agile methodology to manage the design, coding, and development of applications to meet diverse customer needs.",
                "Improved the performance of a loan management solution (InfoPool) for a leading bank."
              ]}
            />
          
          <Resumecontent
              title="Technical Lead [Tek-Experts] "
              date="March 2019 - October. 2020"
              content={[
                "Provide support for the management of cloud infrastructure, Security Architect, Server optimization, and DevOps.",
                "Facilitate the timely resolution of customer issues and case escalations in critical situations.",
                "Deliver solution in high and complex environments.", 
                "Act as the Point of call for Critical issues."
              ]}
            />
          <Resumecontent
              title="Cloud Support Engineer [Tek-Experts] "
              date="April 2018 - MArch 2020"
              content={[
                "Support the configuration of server images, optimized the task performance in correspondence with the engineers.",
                "Strong understanding and background of working with a complex Active Directory infrastructure and the requirement of strictly following standards, procedures, and processes.",
                "Advanced detailed knowledge of DNS, Reverse proxy using NGINX, Kerberos and Windows Authentication, to include authentication with other technologies for Single Sign-On.",
                "Proven experience and support in AD management including architecting Group policy, ADFS, integration of multiple AD domains, AD-integrated DNS, AD operational level upgrades, AD migrations, AD object automation with scripting.",
                "Focus on determining technical support scenarios, supportability asks, support workflow adjustments for Azure Identity components.",
                "Experience in supporting customers in migrating on-premises objects to the cloud using AAD Connect and write back the password to the on Premises using the password write-back features.",
                "Develop PowerShell scripts and ARM templates to automate the provisioning and deployment process.",
                "Support of AAD Connect to identify and remediate conflict between various Directories.",
                "Finding an acceptable workaround in finding and solutions to customer issues that are by design limitations."
              ]}
            />
          <h3 className="resume-title">Education</h3>  
          <Resumecontent
              title="COMPUTER ENGINEERING [HND] "
              date="2003 - 2008"
              content={["Osun State Polytechnic"]}
            />
          <Resumecontent
              title="CERTIFICATIONS "
              content={[
                "Certified Kubernetes Administrator.",
                "AWS Cloud Practitioner.",
                "Microsoft Certified Trainer .",
                "Microsoft Azure Cloud Solution Architect.",
                "Microsoft Certified: Azure Administrator Associate.",
                "Certified Network Security Specialist -ICSI (International Cybersecurity Institute), UK.",
                "DevOps V2 by IBM.",
                "Google Digital Skills for Africa.",
                "ortinet Network Security Expert .",
                "Docker Essentials: A Developer Introduction by IBM.",
                "IBM Cloud Kubernetes Service.",
                "Windows Server 2016: Install and Configure Active Directory.",
                "Microsoft Cybersecurity Stack: Identity and Endpoint Protection Basics.",
                "Microsoft Cloud Services: Exchange Online and Security"
            ]}
            />
          </Col>

          
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
