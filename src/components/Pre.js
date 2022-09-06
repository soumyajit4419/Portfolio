/**
 * If the load prop is true, then return the div with the id of preloader, otherwise return the div
 * with the id of preloader-none.
 * @param props - This is the object that contains all the properties that are passed to the component.
 * @returns A function that returns a div with an id of preloader or preloader-none
 */
import React from "react";
function Pre(props) {
  return (
    <div
      id={props.load && props.load !== "done" ? "preloader" : "preloader-none"}
    ></div>
  );
}

export default Pre;
