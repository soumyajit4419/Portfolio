import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { HashLink } from "react-router-hash-link";
import DownArrow from "../Assets/down-arrow.svg"

const SubDown = (props) => {
    const nav = useNavigate();
    const [first, update] = useState(true);
    const style = {
        width: "75%",
        animation: "rotation linear",
        animationTimeline: "scroll()"
       }
    useEffect(()=> {
        window.addEventListener('scroll', () => 
        console.log(window.scrollY, window.innerHeight)
        )
    }, [])
    return (
        <HashLink
            scroll={(el) => el.scrollIntoView({ behavior: "auto" })}
            to={props.id}
            onClick={
                () =>{
                    if (!first) {
                        nav(-1);
                    }
                    update(!first)
                }
            }
            className="btn btn-primary btn-xl d-flex align-items-center justify-content-center"
            style={{position: "fixed", aspectRatio: 1, borderRadius: "50%", height: "4rem", width: "4rem", right:25, bottom:85, zIndex:200000}}
        ><img src={DownArrow} style={style} alt="img"/></HashLink>
    )
}

export default SubDown;