import React from "react";
import Typewriter from "typewriter-effect";
import useReducedMotion from "../../hooks/useReducedMotion";
//https://www.npmjs.com/package/typewriter-effect for customizations and features

const STRINGS = [
  "Systems Thinker",
  "Accessibility Advocate",
  "AI Ethics Researcher",
  "Trauma-Informed Technologist",
  "Proudly Neurodivergent",
  "QA Engineer",
  "Chaos Witch",
  "Octopus Enthusiast",
  "Bug Finder. Question Asker. Trouble Maker.",
  "Human-Centered by Default",
];

function Type() {
  const reduced = useReducedMotion();

  // no infinite loop if they've asked for less motion — show the whole
  // list at rest instead. same words, just not racing across the screen.
  if (reduced) {
    return (
      <span>
        {STRINGS.map((s, i) => (
          <React.Fragment key={s}>
            {s}
            {i < STRINGS.length - 1 && <br />}
          </React.Fragment>
        ))}
      </span>
    );
  }

  return (
    <Typewriter
      options={{
        strings: STRINGS,
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
      }}
    />
  );
}

export default Type;
