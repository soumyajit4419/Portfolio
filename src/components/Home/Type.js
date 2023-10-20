import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
		<Typewriter
			options={{
				strings: [
					"Software Engineer",
					"Prompt Engineer",
					"AI Engineer",
					"SDET",
					"Father",
					"Husband",
					"Son",
					"Responsible Citizen"
				],
				autoStart: true,
				loop: true,
				deleteSpeed: 50
			}}
		/>
	);
}

export default Type;
