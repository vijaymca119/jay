import React from "react";
import Typewriter from "typewriter-effect";

const Type: React.FC = () => {
    return (
        <Typewriter
            options={{
                strings: [
                    "Full Stack Developer",
                    "Senior Software Developer",
                    "Freelancer",
                    "MERN Stack Developer",
                    "Open Source Contributor",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
};

export default Type;
