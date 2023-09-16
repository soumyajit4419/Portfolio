import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
    DiJava,
} from "react-icons/di";
import {
    SiRedis,
    SiFirebase,
    SiNextdotjs,
    SiSolidity,
    SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import {
    SiVisualstudiocode,
    SiPostman,
    SiSlack,
    SiVercel,
    SiMacos,
} from "react-icons/si";


import leaf from "./Assets/Projects/leaf.png";
import emotion from "./Assets/Projects/emotion.png";
import editor from "./Assets/Projects/codeEditor.png";
import chatify from "./Assets/Projects/chatify.png";
import suicide from "./Assets/Projects/suicide.png";
import bitsOfCode from "./Assets/Projects/blog.png";
import logo from "./Assets/logo.png";

import pdf from "./Assets/../Assets/Soumyajit_Behera-BIT_MESRA.pdf";

export const data = {
    'name': "SOUMYAJIT BEHERA",
    'githubUsername': 'soumyajit4419',
    'logo': logo,
    'roles': [
        "Software Developer",
        "Freelancer",
        "MERN Stack Developer",
        "Open Source Contributor"
    ],
    'bio': <>
        I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
        <br />
        <br />I am fluent in classics like
        <i>
            <b className="purple"> C++, Javascript and Go.</b>
        </i>
        <br />
        <br />
        My field of Interest's are building new &nbsp;
        <i>
            <b className="purple">Web Technologies and Products </b> and
            also in areas related to{" "}
            <b className="purple">
                Blockchain.
            </b>
        </i>
        <br />
        <br />
        Whenever possible, I also apply my passion for developing products
        with <b className="purple">Node.js</b> and
        <i>
            <b className="purple">
                {" "}
                Modern Javascript Library and Frameworks
            </b>
        </i>
        &nbsp; like
        <i>
            <b className="purple"> React.js and Next.js</b>
        </i>
    </>,
    'socialMedia': [
        {
            'url': "https://github.com/soumyajit4419",
            'icon': <AiFillGithub />
        },
        {
            'url': "https://twitter.com/Soumyajit4419",
            'icon': <AiOutlineTwitter />
        },
        {
            'url': "https://www.linkedin.com/in/soumyajit4419/",
            'icon': <FaLinkedinIn />
        },
        {
            'url': "https://www.instagram.com/soumyajit4419",
            'icon': <AiFillInstagram />
        }
    ],
    'about': <>
        Hi Everyone, I am <span className="purple">Soumyajit Behera </span>
        from <span className="purple"> Bhubaneswar, India.</span>
        <br /> I am a final year student pursuing an Integrated MSc (IMSc)
        in Maths and Computing at BIT Mesra.
        <br />
        Additionally, I am currently employed as a software developer at
        Juspay.
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
    </>,
    'activities': [
        "Playing Games",
        "Writing Tech Blogs",
        "Travelling"
    ],
    'quote': "\"Strive to build things that make a difference!\"",
    'techStack': [
        <CgCPlusPlus />,
        <DiJavascript1 />,
        <TbBrandGolang />,
        <DiNodejs />,
        <DiReact />,
        <SiSolidity />,
        <DiMongodb />,
        <SiNextdotjs />,
        <DiGit />,
        <SiFirebase />,
        <SiRedis />,
        <SiPostgresql />,
        <DiPython />,
        <DiJava />
    ],
    'toolStack': [
        <SiMacos />,
        <SiVisualstudiocode />,
        <SiPostman />,
        <SiSlack />,
        <SiVercel />
    ],
    'projects': [
        {
            'imagePath': chatify,
            'title': "Chatify",
            'description': "Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.",
            'ghLink': "https://github.com/soumyajit4419/Chatify",
            'demoLink': "https://chatify-49.web.app/",
            'blog': false
        },
        {
            'imagePath': bitsOfCode,
            'title': "Bits-0f-C0de",
            'description': "My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown.",
            'ghLink': "https://github.com/soumyajit4419/Bits-0f-C0de",
            'demoLink': "https://blogs.soumya-jit.tech/",
            'blog': false
        },
        {
            'imagePath': editor,
            'title': "Editor.io",
            'description': "Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage.",
            'ghLink': "https://github.com/soumyajit4419/Editor.io",
            'demoLink': "https://editor.soumya-jit.tech/",
            'blog': false
        },
        {
            'imagePath': leaf,
            'title': "Plant AI",
            'description': "Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model.",
            'ghLink': "https://github.com/soumyajit4419/Plant_AI",
            'demoLink': "https://plant49-ai.herokuapp.com/",
            'blog': false
        },
        {
            'imagePath': suicide,
            'title': "Ai For Social Good",
            'description': "Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention.",
            'ghLink': "https://github.com/soumyajit4419/AI_For_Social_Good",
            'demoLink': "", // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            'blog': false
        },
        {
            'imagePath': emotion,
            'title': "Face Recognition and Emotion Detection",
            'description': "Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%. Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person.",
            'ghLink': "https://github.com/soumyajit4419/Face_And_Emotion_Detection",
            'demoLink': "", // demoLink="https://blogs.soumya-jit.tech/"
            'blog': false
        }
    ],
    'pdf': pdf
}