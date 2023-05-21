import "./Contact.css";
import { motion } from "framer-motion";
export default function Contact( ) {
    return <motion.div className="contact-container" animate={{
        opacity: 1,
        width: "50%",
    }}
    initial={{
        opacity: 0,
        backgroundColor: "red",
        width: "100%",
    }}>

    </motion.div> 
}