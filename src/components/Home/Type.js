import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [

                    "Data Engineer",
                    "Ph.D.",
                    "Cloud Architect",
                    
                    //"Engineer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 20,

            }}
        />
    );
}

export default Type;
