import { SiNextdotjs, SiSolidity } from "react-icons/si";
import { FaRust } from "react-icons/fa";

import Go from "../Assets/TechIcons/go.svg";
import C from "../Assets/TechIcons/C++.svg";
import Javascript from "../Assets/TechIcons/Javascript.svg";
import Node from "../Assets/TechIcons/Node.svg";
import ReactIcon from "../Assets/TechIcons/React.svg";
import HaskellIcon from "../Assets/TechIcons/Haskell.svg";
import Java from "../Assets/TechIcons/Java.svg";
import Python from "../Assets/TechIcons/Python.svg";
import Typescript from "../Assets/TechIcons/Typescript.svg";
import Git from "../Assets/TechIcons/Git.svg";
import Firebase from "../Assets/TechIcons/Firebase.svg";
import Redis from "../Assets/TechIcons/Redis.svg";
import Docker from "../Assets/TechIcons/Docker.svg";
import Mongo from "../Assets/TechIcons/Mongo.svg";
import SQL from "../Assets/TechIcons/SQL.svg";
import Kubernates from "../Assets/TechIcons/Kubernates.svg";
import Redux from "../Assets/TechIcons/Redux.svg";
import Tailwind from "../Assets/TechIcons/Tailwind.svg";
import MUI from "../Assets/TechIcons/MUI.svg";
import Postman from "../Assets/TechIcons/Postman.svg";
import AWS from "../Assets/TechIcons/AWS.svg";
import Kafka from "../Assets/TechIcons/Kafka.svg";


import macOs from "../Assets/TechIcons/Apple MacOSX.svg";
import chrome from "../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../Assets/TechIcons/vscode.svg";
import intelliJ from "../Assets/TechIcons/intellij-idea.svg";


import leaf from "../Assets/Projects/leaf.png";
import emotion from "../Assets/Projects/emotion.png";
import editor from "../Assets/Projects/codeEditor.png";
import chatify from "../Assets/Projects/chatify.png";
import suicide from "../Assets/Projects/suicide.png";
import bitsOfCode from "../Assets/Projects/blog.png";
import { isBlob } from "react-pdf/dist/umd/shared/utils";

export const projectStack = [
    {
      // Save the image in path "../Assets/Projects/example_name.png" and import then image here and use it as "icon: ____"
      icon: chatify,
      title: "Chatify",
      description:
        "Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.",
      repoLink: "https://github.com/soumyajit4419/Chatify",
      liveLink: "https://chatify-49.web.app/",
      isBlog: false,
    },
    {
      icon: bitsOfCode,
      title: "Bits-0f-C0de",
      description:
        "My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown.",
      repoLink: "https://github.com/soumyajit4419/Bits-0f-C0de",
      liveLink: "https://blogs.soumya-jit.tech/",
      isBlog: false,
    },
    {
      icon: editor,
      title: "Editor.io",
      description:
        "Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview. Both the editor supports auto save of work using Local Storage.",
      repoLink: "https://github.com/soumyajit4419/Editor.io",
      liveLink: "https://editor.soumya-jit.tech/",
      isBlog: false,
    },
    {
      icon: leaf,
      title: "Plant AI",
      description:
        "Used the plant disease dataset from Kaggle and trained a image classifer model using PyTorch framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model.",
      repoLink: "https://github.com/soumyajit4419/Plant_AI",
      liveLink: "https://plant49-ai.herokuapp.com/",
      isBlog: false,
    },
    {
      icon: suicide,
      title: "AI For Social Good",
      description:
        "Using Natural Language Processing for the detection of suicide-related posts and user's suicide ideation in cyberspace and thus helping in suicide prevention.",
      repoLink: "https://github.com/soumyajit4419/AI_For_Social_Good",
      isBlog: false,
    },
    {
      icon: emotion,
      title: "Face Recognition and Emotion Detection",
      description:
        "Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%. Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person.",
      repoLink: "https://github.com/soumyajit4419/Face_And_Emotion_Detection",
      isBlog: false,
    },
  ];




export const skillStack = [
  { icon: C, name: "C++", isReactIcon: false },
  { icon: Javascript, name: "Javascript", isReactIcon: false },
  { icon: Typescript, name: "Typescript", isReactIcon: false },
  { icon: Go, name: "Go", isReactIcon: false },
  { icon: Node, name: "Node.js", isReactIcon: false },
  { icon: ReactIcon, name: "React.js", isReactIcon: false },
  { icon: SiSolidity, name: "Solidity", isReactIcon: true },
  { icon: Mongo, name: "Mongo DB", isReactIcon: false },
  { icon: Redux, name: "Redux", isReactIcon: false },
  { icon: SiNextdotjs, name: "Next.js", isReactIcon: true },
  { icon: Git, name: "Git", isReactIcon: false },
  { icon: Firebase, name: "Firebase", isReactIcon: false },
  { icon: Redis, name: "Redis", isReactIcon: false },
  { icon: Docker, name: "Docker", isReactIcon: false },
  { icon: Kubernates, name: "Kubernetes", isReactIcon: false },
  { icon: SQL, name: "Postgresql", isReactIcon: false },
  { icon: Python, name: "Python", isReactIcon: false },
  { icon: Java, name: "Java", isReactIcon: false },
  { icon: HaskellIcon, name: "Haskell", isReactIcon: false },
  { icon: Tailwind, name: "Tailwind CSS", isReactIcon: false },
  { icon: MUI, name: "Material UI", isReactIcon: false },
  { icon: Postman, name: "Postman", isReactIcon: false },
  { icon: FaRust, name: "Rust", isReactIcon: true },
  { icon: AWS, name: "AWS", isReactIcon: false },
  { icon: Kafka, name: "Kafka", isReactIcon: false },
];

export const toolStack = [
    { icon: macOs, name: "MAC OS", isReactIcon: false },
    { icon: chrome, name: "Chrome", isReactIcon: false },
    { icon: vsCode, name: "VS Code", isReactIcon: false },
    { icon: intelliJ, name: "Intelli J", isReactIcon: false }
];

export const githubUserName = "soumyajit4419";
export const name = "Soumyajit Behera"; // Full name
export const shortName = "Soumyajit";   // Short name

// Description in HTML format along with styling (below as example)
export const intro = [
    `I’m a Software Engineer who loves transforming ideas into reliable, scalable products. Over time, I’ve explored several technologies and found my passion in building high-performance systems and intuitive user experiences.<br/>`,
    `I’m proficient in <i><b class="purple"> JavaScript, C++, Rust, Node.js, and Java </b> </i> - and I enjoy working across both backend and frontend stacks. <br/><br/>`,
    `My key areas of interest include developing<i> <b class="purple"> Web Applications, Blockchain Solutions, </b> </i>and exploring new ways to bridge on-chain and off-chain systems.`,
    `Whenever possible, I love building projects with <b class="purple">Node.js</b> and modern frameworks like <b class="purple">React.js</b> and <b class="purple">Next.js</b>.`
];

export const about = [
    `Hi everyone! I’m <span class="purple"> Soumyajit Behera</span> from <span class="purple">Bhubaneswar, India</span>.`,
    `I’m currently working as a <span class="purple">Software Developer</span> at <span class="purple">Juspay</span>.`,
    `I hold an Integrated M.Sc. (IMSc) in <span class="purple">Mathematics and Computing</span> from <span class="purple">BIT Mesra</span>.<br />`
]
export const habits = [
    `Playing Games 🎮`,
    `Writing Tech Blogs ✍️ `,
    `Traveling and Exploring New Places 🌍`
]
export const tags = [
    "Software Developer",
    "Freelancer",
    "MERN Stack Developer",
    "Open Source Contributor",
];

export const githubLink = "https://github.com/soumyajit4419";
export const xLink = "https://twitter.com/Soumyajit4419";
export const linkedInLink = "https://www.linkedin.com/in/soumyajit4419/";
export const instagramLink = "https://www.instagram.com/soumyajit4419";
export const blogsLink = "https://soumyajitblogs.vercel.app/";